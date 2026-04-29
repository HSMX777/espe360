import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/markers-plugin/index.css';
import './Viewer360.css';
import MiniMap from './MiniMap';
import NodeGallery from './NodeGallery';
import QuickMenu from './QuickMenu';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { synthesizeSpeech } from '../services/geminiTtsService';
import { pcmPlayer } from '../services/pcmPlayer';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { SEDE_CONFIGS } from '../config/sedeConfig';
import { findPlaceBySlug, slugify } from '../utils/slugify';

// Pin SVG minimalista (Blanco y Transparente)
// Pin SVG minimalista (Blanco y Transparente) para navegación
const NAV_PIN_HTML = `
  <div style="width: 100%; height: 100%; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3)); cursor: pointer; animation: float 3s ease-in-out infinite;">
    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="rgba(255,255,255,0.3)"/>
      <circle cx="12" cy="10" r="3" fill="white"/>
    </svg>
  </div>
`;

// Pin SVG Rojo para Etiquetas
const LABEL_PIN_HTML = `
  <div style="width: 100%; height: 100%; filter: drop-shadow(0 4px 10px rgba(239,68,68,0.5)); cursor: default; animation: float 3s ease-in-out infinite;">
    <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="rgba(239,68,68,0.3)"/>
      <circle cx="12" cy="10" r="3" fill="#ef4444"/>
    </svg>
  </div>
`;

export default function Viewer360() {
  const { sedeId, placeSlug } = useParams<{ sedeId: string; placeSlug: string }>();
  const navigate = useNavigate();

  const sede = sedeId ? SEDE_CONFIGS[sedeId] : null;
  const place = useMemo(() => {
    if (!sede || !placeSlug) return null;
    return findPlaceBySlug(sede.places, placeSlug);
  }, [sede, placeSlug]);

  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [dynamicHotspots, setDynamicHotspots] = useState<any[]>([]);
  const [defaultView, setDefaultView] = useState<{ yaw: number; pitch: number } | null>(null);
  const markersPluginRef = useRef<any>(null);
  const [viewerInstance, setViewerInstance] = useState<any>(null);
  const initialViewApplied = useRef<string | null>(null);

  // 1. Sync data from Firestore
  useEffect(() => {
    if (!place?.id) return;

    const docRef = doc(db, 'hotspots', place.id);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log(`[DEBUG-PUBLIC] Firestore entregó ${data.markers?.length || 0} marcadores.`);
        setDynamicHotspots(data.markers || []);
        setDefaultView(data.defaultView || null);
      } else {
        setDynamicHotspots([]);
        setDefaultView(null);
      }
    }, (error) => {
      console.error('[Firestore] Error:', error);
    });

    return () => unsubscribe();
  }, [place?.id]);

  const allHotspots = useMemo(() => {
    if (dynamicHotspots.length > 0) return dynamicHotspots;
    return place?.hotspots || [];
  }, [place?.hotspots, dynamicHotspots]);

  // 2. Logic to actually draw markers
  const syncMarkersToPlugin = useCallback(() => {
    if (markersPluginRef.current) {
      const formattedMarkers = allHotspots.map(hs => ({
        id: hs.id,
        position: { yaw: hs.yaw, pitch: hs.pitch },
        html: hs.type === 'label' ? LABEL_PIN_HTML : NAV_PIN_HTML,
        size: { width: 60, height: 60 },
        anchor: 'bottom center',
        tooltip: hs.label,
        data: { targetPlaceId: hs.type === 'label' ? null : hs.targetPlaceId, type: hs.type },
      }));
      console.log(`[DEBUG-PUBLIC] Dibujando ${formattedMarkers.length} marcadores en el visor.`);
      markersPluginRef.current.setMarkers(formattedMarkers);
    }
  }, [allHotspots]);

  // Trigger sync whenever data or viewer changes
  useEffect(() => {
    syncMarkersToPlugin();
  }, [syncMarkersToPlugin, viewerInstance]);

  // 3. Handle camera positioning
  useEffect(() => {
    if (defaultView && viewerInstance && initialViewApplied.current !== place?.id) {
        
        const applyView = () => {
            console.log(`[DEBUG-PUBLIC] Iniciando giro de cámara...`);
            viewerInstance.animate({
                yaw: defaultView.yaw,
                pitch: defaultView.pitch,
                zoom: 50,
                speed: '4rpm'
            }).then(() => {
                console.log("[DEBUG-PUBLIC] Giro completado. Re-sincronizando marcadores por seguridad.");
                syncMarkersToPlugin(); // Final safety sync
                initialViewApplied.current = place?.id || null;
            }).catch(() => {
                setTimeout(applyView, 500);
            });
        };

        // Delay to let markers show up first
        setTimeout(applyView, 1200);
    }
  }, [defaultView, viewerInstance, place?.id, syncMarkersToPlugin]);

  const handleHotspotNavigate = (targetPlaceId: string) => {
    if (!sede) return;
    const targetPlace = sede.places.find(p => p.id === targetPlaceId);
    if (targetPlace) {
      navigate(`/${sedeId}/${slugify(targetPlace.name)}`);
    }
  };

  const toggleSpeech = async () => {
    if (isSpeaking || loadingAudio) {
      pcmPlayer.stop();
      setIsSpeaking(false);
      setLoadingAudio(false);
      return;
    }
    if (!place?.description) return;
    setLoadingAudio(true);
    try {
      await pcmPlayer.resume();
      const audioData = await synthesizeSpeech(place.description);
      if (audioData) {
        setLoadingAudio(false);
        setIsSpeaking(true);
        await pcmPlayer.playBase64(audioData);
        setIsSpeaking(false);
      } else {
        setLoadingAudio(false);
      }
    } catch {
      setLoadingAudio(false);
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    return () => { pcmPlayer.stop(); };
  }, [place?.id]);

  if (!sede || !place) {
    return (
      <div className="viewer-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ color: 'white' }}>Lugar no encontrado</h2>
        <button onClick={() => navigate(`/${sedeId}`)} style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Volver a la sede
        </button>
      </div>
    );
  }

  const basePath = sede.basePath;
  const imageUrl = `/${basePath}/${encodeURIComponent(place.imageFileName)}`;

  return (
    <div className="viewer-container">
      <div className="viewer-ui">
        <button className="viewer-back-btn" onClick={() => navigate(`/${sedeId}`)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Atrás
        </button>
        <div className="viewer-title-box">
          <span className="viewer-sede-name" style={{ color: sede.acento }}>
            {sede.nombre}
          </span>
          <h2 className="viewer-place-name">{place.name}</h2>
        </div>
        <div style={{ width: '120px' }} />
      </div>

      {loading && (
        <div className="viewer-loader">
          <div className="spinner"></div>
          <p>Cargando panorama...</p>
        </div>
      )}

      {!loading && place.description && (
        <>
          <div className="description-controls">
            <button className={`desc-toggle-btn ${showDescription ? 'active' : ''}`} onClick={() => setShowDescription(!showDescription)} title="Ver información">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </button>
            <button className={`audio-guide-btn ${isSpeaking ? 'speaking' : ''} ${loadingAudio ? 'loading-audio' : ''}`} onClick={toggleSpeech} disabled={loadingAudio}>
              {loadingAudio ? (<div className="spinner-small"></div>) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
              {isSpeaking && <div className="audio-wave"><span></span><span></span><span></span></div>}
            </button>
          </div>
          <div className={`viewer-description-panel ${showDescription ? 'show' : ''}`}>
            <div className="desc-header">
              <span>INFORMACIÓN</span>
              <button className="desc-close-mobile" onClick={() => setShowDescription(false)}>&times;</button>
            </div>
            <p className="desc-text">{place.description}</p>
          </div>
        </>
      )}

      <div className="viewer-canvas">
        <ReactPhotoSphereViewer
          src={imageUrl}
          height={'100vh'} width={'100vw'}
          plugins={[[MarkersPlugin, { markers: [] }]]}
          onReady={(instance) => {
            setLoading(false);
            setViewerInstance(instance);
            const markersPlugin = instance.getPlugin(MarkersPlugin) as any;
            if (markersPlugin) {
              markersPluginRef.current = markersPlugin;
              syncMarkersToPlugin();
              markersPlugin.addEventListener('select-marker', ({ marker }: any) => {
                const type = marker.data?.type;
                if (type === 'label') return; // Do nothing for labels
                const targetId = marker.data?.targetPlaceId;
                if (targetId) handleHotspotNavigate(targetId);
              });
            }
          }}
          navbar={['zoom', 'move', 'download', 'caption', 'fullscreen']}
        />
      </div>

      {!loading && (<MiniMap currentPlace={place} allPlaces={sede.places} onNavigate={handleHotspotNavigate} mapImage={sede.mapImage || '/map_esforce.png'} />)}
      {!loading && (<NodeGallery currentPlace={place} allPlaces={sede.places} onNavigate={handleHotspotNavigate} currentSedeId={sede.id} />)}
      <QuickMenu currentPlaceId={place.id} allPlaces={sede.places} onNavigate={handleHotspotNavigate} schoolName={sede.nombre} />
    </div>
  );
}
