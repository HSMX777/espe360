import React, { useState, useEffect, useRef, useCallback } from 'react';
import { db, storage } from '../firebase';
import { collection, onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import type { SedeConfig } from '../config/sedeConfig';

interface MinimapEditorProps {
  sedeId: string;
  sede: SedeConfig | null;
  onBack: () => void;
}

interface MapPoint {
  placeId: string;
  placeName: string;
  x: number;
  y: number;
}

export default function MinimapEditor({ sedeId, sede, onBack }: MinimapEditorProps) {
  const [mapImageUrl, setMapImageUrl] = useState<string>('');
  const staticMapImage = sede?.mapImage || '';
  const [points, setPoints] = useState<MapPoint[]>([]);
  const [dragging, setDragging] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');
  const mapRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved minimap config from Firestore
  useEffect(() => {
    const loadConfig = async () => {
      const configDoc = await getDoc(doc(db, 'minimapConfigs', sedeId));
      if (configDoc.exists()) {
        const data = configDoc.data();
        if (data.imageUrl) setMapImageUrl(data.imageUrl);
      }
    };
    loadConfig();
  }, [sedeId]);

  // Load all places and their saved mapCoords from hotspots collection
  useEffect(() => {
    if (!sede) return;

    const unsubscribe = onSnapshot(collection(db, 'hotspots'), (snapshot) => {
      const firestoreData: Record<string, any> = {};
      snapshot.docs.forEach(d => { firestoreData[d.id] = d.data(); });

      const pts: MapPoint[] = sede.places.map(p => {
        const saved = firestoreData[p.id];
        const coords = saved?.mapCoords || p.mapCoords || { x: 50, y: 50 };
        return {
          placeId: p.id,
          placeName: saved?.placeName || p.name,
          x: coords.x,
          y: coords.y,
        };
      });
      setPoints(pts);
    });

    return () => unsubscribe();
  }, [sede, sedeId]);

  // Handle image file upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `minimaps/${sedeId}/map.${file.name.split('.').pop()}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setMapImageUrl(url);
      // Save to Firestore
      await setDoc(doc(db, 'minimapConfigs', sedeId), { imageUrl: url }, { merge: true });
      setSavedMsg('Imagen subida exitosamente');
      setTimeout(() => setSavedMsg(''), 3000);
    } catch (err) {
      console.error('Error uploading image:', err);
    } finally {
      setUploading(false);
    }
  };

  // Save all point positions to Firestore
  const saveAllPoints = async () => {
    setSaving(true);
    try {
      await Promise.all(
        points.map(pt =>
          setDoc(doc(db, 'hotspots', pt.placeId), {
            mapCoords: { x: pt.x, y: pt.y }
          }, { merge: true })
        )
      );
      setSavedMsg('¡Posiciones guardadas!');
      setTimeout(() => setSavedMsg(''), 3000);
    } finally {
      setSaving(false);
    }
  };

  // Drag logic
  const handleMouseDown = (placeId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(placeId);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging || !mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    setPoints(prev => prev.map(pt =>
      pt.placeId === dragging ? { ...pt, x: +x.toFixed(1), y: +y.toFixed(1) } : pt
    ));
  }, [dragging]);

  const handleMouseUp = useCallback(() => setDragging(null), []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  // Touch support
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!dragging || !mapRef.current) return;
    const touch = e.touches[0];
    const rect = mapRef.current.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((touch.clientY - rect.top) / rect.height) * 100));
    setPoints(prev => prev.map(pt =>
      pt.placeId === dragging ? { ...pt, x: +x.toFixed(1), y: +y.toFixed(1) } : pt
    ));
  }, [dragging]);

  useEffect(() => {
    if (dragging) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [dragging, handleTouchMove, handleMouseUp]);

  const activeImage = mapImageUrl || staticMapImage;

  return (
    <div className="minimap-editor-container">
      <div className="admin-controls-card">
        <div className="manager-header">
          <h3>Editor de Minimapa</h3>
          <button className="admin-btn-back-mode" onClick={onBack}>Volver</button>
        </div>

        {/* Upload Section */}
        <div className="minimap-upload-section">
          <p className="minimap-upload-hint">
            Sube una imagen del mapa del campus. Luego arrastra los puntos para ajustar la posición de cada lugar.
          </p>
          <div className="minimap-upload-row">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <button
              className="minimap-upload-btn"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              {uploading ? (
                <><span className="spinner" /> Subiendo...</>
              ) : (
                <><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg> Subir nueva imagen del mapa</>
              )}
            </button>
            {savedMsg && <span className="minimap-saved-msg">{savedMsg}</span>}
          </div>
        </div>

        {/* Map Editor Canvas */}
        {activeImage ? (
          <div className="minimap-editor-area">
            <p className="minimap-drag-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              Arrastra los puntos para reposicionarlos sobre el mapa
            </p>

            <div
              ref={mapRef}
              className="minimap-canvas"
              style={{ cursor: dragging ? 'grabbing' : 'default' }}
            >
              <img src={activeImage} alt="Mapa del campus" className="minimap-canvas-img" />

              {points.map(pt => (
                <div
                  key={pt.placeId}
                  className={`minimap-edit-point ${dragging === pt.placeId ? 'dragging' : ''}`}
                  style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  onMouseDown={(e) => handleMouseDown(pt.placeId, e)}
                  onTouchStart={(e) => { e.preventDefault(); setDragging(pt.placeId); }}
                  title={pt.placeName}
                >
                  <div className="edit-point-dot" />
                  <span className="edit-point-label">{pt.placeName}</span>
                </div>
              ))}
            </div>

            <button
              className="minimap-save-btn"
              onClick={saveAllPoints}
              disabled={saving}
            >
              {saving ? 'Guardando...' : '💾 Guardar Posiciones'}
            </button>
          </div>
        ) : (
          <div className="minimap-no-image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48">
              <path d="M3 7h18M3 7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
              <circle cx="8.5" cy="13.5" r="1.5" />
              <path d="m21 15-5-5L5 20" />
            </svg>
            <p>No hay imagen de mapa subida aún.</p>
            <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>Sube una imagen con el botón de arriba para empezar.</p>
          </div>
        )}
      </div>
    </div>
  );
}
