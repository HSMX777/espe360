import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/markers-plugin/index.css';
import './Viewer360.css';
import MiniMap from './MiniMap';
import NodeGallery from './NodeGallery';
import QuickMenu from './QuickMenu';
import { type Place360 } from '../data/esforcePlaces';
import { type Sede } from './SedesPage';
import { useState, useEffect } from 'react';
import { synthesizeSpeech } from '../services/geminiTtsService';
import { pcmPlayer } from '../services/pcmPlayer';

// Pin SVG crudo usando html para evitar problemas con data:image
const PIN_HTML = `
  <div style="width: 100%; height: 100%; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5)); cursor: pointer;">
    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="rgba(255,255,255,0.3)"/>
      <circle cx="12" cy="10" r="3" fill="white"/>
    </svg>
  </div>
`;

interface Props {
  place: Place360 | null;
  sede: Sede | null;
  onBack: () => void;
  onNavigate?: (placeId: string) => void;
}

export default function Viewer360({ place, sede, onBack, onNavigate }: Props) {
  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);

  // Audio Guide Logic
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
      // Resume audio context (required for browser security)
      await pcmPlayer.resume();
      
      const audioData = await synthesizeSpeech(place.description);
      
      if (audioData) {
        setLoadingAudio(false);
        setIsSpeaking(true);
        await pcmPlayer.playBase64(audioData);
        setIsSpeaking(false);
      } else {
        setLoadingAudio(false);
        console.error("No se pudo generar el audio.");
      }
    } catch (error) {
      console.error("Error en la guía de voz:", error);
      setLoadingAudio(false);
      setIsSpeaking(false);
    }
  };

  // Keyboard navigation cleanup
  useEffect(() => {
    return () => {
      pcmPlayer.stop(); // Silenciar al salir o cambiar
    };
  }, [place?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!onNavigate) return;
      
      const placesList = sede?.places || [];
      const currentIndex = placesList.findIndex(p => p.id === place?.id);
      if (currentIndex === -1) return;

      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % placesList.length;
        onNavigate(placesList[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + placesList.length) % placesList.length;
        onNavigate(placesList[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [place?.id, onNavigate]);

  if (!place) return null;
  
  const basePath = sede?.basePath || '360_ESFORCE';
  const imageUrl = `/${basePath}/${encodeURIComponent(place.imageFileName)}`;

  return (
    <div className="viewer-container">
      {/* Header flotante */}
      <div className="viewer-ui">
        <button className="viewer-back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Atrás
        </button>
        <div className="viewer-title-box">
          <span className="viewer-sede-name" style={{ color: sede?.acento }}>
            {sede?.nombreCorto || 'SEDE'}
          </span>
          <h2 className="viewer-place-name">{place.name}</h2>
        </div>
        <div style={{ width: '120px' }} /> {/* Espaciador balance */}
      </div>

      {loading && (
        <div className="viewer-loader">
          <div className="spinner"></div>
          <p>Cargando panorama...</p>
        </div>
      )}

      {/* Info Flotante para Descripciones */}
      {!loading && place.description && (
        <>
          <div className="description-controls">
            <button 
              className={`desc-toggle-btn ${showDescription ? 'active' : ''}`}
              onClick={() => setShowDescription(!showDescription)}
              title="Ver información"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </button>

            <button 
              className={`audio-guide-btn ${isSpeaking ? 'speaking' : ''} ${loadingAudio ? 'loading-audio' : ''}`}
              onClick={toggleSpeech}
              disabled={loadingAudio}
              title={isSpeaking ? "Detener Audio" : "Escuchar Narración"}
            >
              {loadingAudio ? (
                <div className="spinner-small"></div>
              ) : (
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

      {/* Visor 360 */}
      <div className="viewer-canvas">
        <ReactPhotoSphereViewer
          src={imageUrl}
          height={'100vh'}
          width={'100vw'}
          plugins={[
            [MarkersPlugin, {
              markers: place.hotspots?.map(hs => ({
                id: hs.id,
                position: { yaw: hs.yaw, pitch: hs.pitch },
                html: PIN_HTML,
                size: { width: 50, height: 50 },
                anchor: 'bottom center',
                tooltip: hs.label,
                data: { targetPlaceId: hs.targetPlaceId },
              })) || [],
            }],
          ]}
          onReady={(instance) => {
            setLoading(false);
            
            // Interceptar clic en cada marcador para viajar
            const markersPlugin = instance.getPlugin(MarkersPlugin) as any;
            if (markersPlugin) {
              markersPlugin.addEventListener('select-marker', ({ marker }: any) => {
                const targetId = marker.data?.targetPlaceId;
                if (targetId && onNavigate) {
                   onNavigate(targetId);
                }
              });
            }
          }}
          navbar={[
            'zoom',
            'move',
            'download',
            'caption',
            'fullscreen'
          ]}
        />
      </div>

      {/* Mini Mapa de Navegación */}
      {!loading && (
        <MiniMap 
          currentPlace={place} 
          allPlaces={sede?.places || []} 
          onNavigate={onNavigate || (() => {})} 
          mapImage={sede?.mapImage || '/map_esforce.png'}
        />
      )}

      {/* Galería de Nodos (Inferior) */}
      {!loading && (
        <NodeGallery 
          currentPlace={place} 
          allPlaces={sede?.places || []} 
          onNavigate={onNavigate || (() => {})} 
          currentSedeId={sede?.id}
        />
      )}

      {/* Menú Rápido (Categorías) */}
      <QuickMenu 
        currentPlaceId={place.id}
        allPlaces={sede?.places || []} 
        onNavigate={onNavigate || (() => {})}
        schoolName={sede?.nombre || 'ESPE'}
      />
    </div>
  );
}
