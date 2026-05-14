import { useState, useRef, useEffect, useCallback } from 'react';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import '@photo-sphere-viewer/markers-plugin/index.css';
import { type Place360 } from '../data/esforcePlaces';
import { type Sede } from './SedesPage';
import { db } from '../firebase';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';

interface Props {
  sede: Sede;
  place: Place360;
  onClose: () => void;
  onNavigate: (placeId: string) => void;
}

export default function HotspotEditor({ sede, place, onClose, onNavigate }: Props) {
  const [markers, setMarkers] = useState<any[]>([]);
  const [defaultView, setDefaultView] = useState<{ yaw: number; pitch: number } | null>(null);
  const [nodeName, setNodeName] = useState(place.name);
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [markersPlugin, setMarkersPlugin] = useState<any>(null);
  const [viewerInstance, setViewerInstance] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const intervalRef = useRef<any>(null);
  const initialViewApplied = useRef<string | null>(null);

  // Load from Firestore
  useEffect(() => {
    const loadData = async () => {
      console.log(`[DEBUG-VIEW] Cargando datos de Firebase para: ${place.id}`);
      try {
        const docRef = doc(db, "hotspots", place.id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("[DEBUG-VIEW] Datos recibidos de Firebase:", data);
          setMarkers(data.markers || []);
          setDefaultView(data.defaultView || null);
          setNodeName(data.placeName || place.name);
          
          if (data.categoryId) {
            setSelectedCategoryId(data.categoryId);
          } 
        } else {
          console.log("[DEBUG-VIEW] No hay datos en Firebase, usando locales.");
          setMarkers(place.hotspots || []);
          setDefaultView(null);
          setNodeName(place.name);
        }
      } catch (error) {
        console.error("[DEBUG-VIEW] Error cargando datos:", error);
        setMarkers(place.hotspots || []);
        setNodeName(place.name);
      }
      setSelectedMarkerId(null);
      // Reset apply flag on place change
      if (initialViewApplied.current !== place.id) {
          initialViewApplied.current = null;
      }
    };

    loadData();

    // Load categories
    const loadCategories = async () => {
      const q = query(collection(db, 'categories'), where('sedeId', '==', sede.id));
      const snap = await getDocs(q);
      const cats = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setCategories(cats);
    };
    loadCategories();
  }, [place.id, place.name, place.hotspots, sede.id]);

  // Separate effect for category auto-assignment when categories load
  useEffect(() => {
    if (!selectedCategoryId && place.category && categories.length > 0) {
      const foundCat = categories.find(c => c.name.toLowerCase() === place.category.toLowerCase());
      if (foundCat) {
        console.log(`[DEBUG] Auto-asignando categoría: ${foundCat.name} (${foundCat.id})`);
        setSelectedCategoryId(foundCat.id);
        // Save the link in background
        setDoc(doc(db, "hotspots", place.id), { categoryId: foundCat.id }, { merge: true });
      }
    }
  }, [categories, place, selectedCategoryId]);

  // Handle Initial View Positioning
  useEffect(() => {
    if (defaultView && viewerInstance && initialViewApplied.current !== place.id) {
        console.log(`[DEBUG-VIEW] Intentando mover cámara a Yaw:${defaultView.yaw} Pitch:${defaultView.pitch}`);
        
        const applyView = () => {
            viewerInstance.animate({
                yaw: defaultView.yaw,
                pitch: defaultView.pitch,
                zoom: 50,
                speed: '4rpm'
            }).then(() => {
                console.log("[DEBUG-VIEW] Movimiento de cámara completado con éxito.");
                initialViewApplied.current = place.id;
            }).catch(() => {
                console.warn("[DEBUG-VIEW] Re-intentando movimiento de cámara...");
                setTimeout(applyView, 500);
            });
        };

        // Delay to ensure texture is ready
        setTimeout(applyView, 800);
    }
  }, [defaultView, viewerInstance, place.id]);

  const imageUrl = `/${sede.basePath}/${encodeURIComponent(place.imageFileName)}`;

  const syncMarkersToPlugin = useCallback(() => {
    if (!markersPlugin) return;
    const formattedMarkers = markers.map(m => ({
      id: m.id,
      targetPlaceId: m.targetPlaceId,
      position: { yaw: m.yaw, pitch: m.pitch },
      html: `<div class="admin-marker ${m.type === 'label' ? 'label-type' : ''} ${selectedMarkerId === m.id ? 'selected' : ''} ${isPreview ? 'preview-mode' : ''}">
                ${m.type === 'label' ? '<span style="font-weight: bold; font-family: serif; font-size: 14px; position: relative; z-index: 2;">i</span>' : ''}
                <div class="marker-pulse"></div>
             </div>`,
      anchor: 'center',
      tooltip: m.label,
      draggable: !isPreview
    }));
    markersPlugin.setMarkers(formattedMarkers);
  }, [markers, selectedMarkerId, isPreview, markersPlugin]);

  useEffect(() => {
    syncMarkersToPlugin();
  }, [syncMarkersToPlugin]);

  const saveToFirebase = async (currentMarkers: any[], currentView?: any, customName?: string) => {
    setIsSaving(true);
    try {
      const docRef = doc(db, "hotspots", place.id);
      const payload = { 
        markers: currentMarkers,
        defaultView: currentView || defaultView,
        lastUpdated: new Date().toISOString(),
        placeName: customName !== undefined ? customName : nodeName,
        categoryId: selectedCategoryId
      };
      console.log("[DEBUG-VIEW] Guardando en Firebase:", payload);
      await setDoc(docRef, payload, { merge: true });
    } catch (error) {
      console.error("Error saving:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSetDefaultView = () => {
      if (!viewerInstance) return;
      const pos = viewerInstance.getPosition();
      const newView = {
          yaw: parseFloat(pos.yaw.toFixed(4)),
          pitch: parseFloat(pos.pitch.toFixed(4))
      };
      console.log("[DEBUG-VIEW] Estableciendo nueva vista inicial:", newView);
      setDefaultView(newView);
      saveToFirebase(markers, newView);
  };

  const addMarker = (type: 'nav' | 'label' = 'nav') => {
    if (!viewerInstance || isPreview) return;
    const position = viewerInstance.getPosition();
    const id = `hs_${Date.now()}`;
    const newMarker = {
        id,
        type,
        yaw: parseFloat(position.yaw.toFixed(4)),
        pitch: parseFloat(position.pitch.toFixed(4)),
        targetPlaceId: '',
        label: type === 'label' ? 'Nueva Etiqueta' : 'Nuevo Marcador'
    };
    const updated = [...markers, newMarker];
    setMarkers(updated);
    setSelectedMarkerId(id);
    saveToFirebase(updated); 
  };

  const updateMarker = (id: string, updates: Partial<any>) => {
    const updated = markers.map(m => m.id === id ? { ...m, ...updates } : m);
    setMarkers(updated);
  };

  const adjustCoord = (id: string, field: 'yaw' | 'pitch', amount: number) => {
    setMarkers(prev => {
        const updated = prev.map(m => {
            if (m.id === id) {
                return { ...m, [field]: parseFloat((m[field] + amount).toFixed(4)) };
            }
            return m;
        });
        return updated;
    });
  };

  const startAdjusting = (id: string, field: 'yaw' | 'pitch', amount: number) => {
    adjustCoord(id, field, amount);
    intervalRef.current = setInterval(() => {
        adjustCoord(id, field, amount);
    }, 100);
  };

  const stopAdjusting = () => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        saveToFirebase(markers); 
    }
  };

  const removeMarker = (id: string) => {
    const updated = markers.filter(m => m.id !== id);
    setMarkers(updated);
    if (selectedMarkerId === id) setSelectedMarkerId(null);
    saveToFirebase(updated);
  };

  const handleMarkerDrag = (e: any) => {
    const { marker } = e;
    const updated = markers.map(m => m.id === marker.id ? {
        ...m,
        yaw: parseFloat(marker.config.position.yaw.toFixed(4)),
        pitch: parseFloat(marker.config.position.pitch.toFixed(4))
    } : m);
    setMarkers(updated);
    saveToFirebase(updated);
  };

  const clearAll = () => {
    if (window.confirm("¿Borrar todos los marcadores?")) {
        setMarkers([]);
        setSelectedMarkerId(null);
        saveToFirebase([], null);
    }
  };

  const focusMarker = (m: any) => {
      setSelectedMarkerId(m.id);
      if (viewerInstance) {
          viewerInstance.animate({
              yaw: m.yaw,
              pitch: m.pitch,
              zoom: 50,
              speed: '4rpm'
          });
      }
  };

  const deleteNode = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este nodo? Esta acción lo ocultará de toda la aplicación.")) {
      setIsSaving(true);
      try {
        const docRef = doc(db, "hotspots", place.id);
        await setDoc(docRef, { deleted: true }, { merge: true });
        onClose(); // Go back to panel
      } catch (error) {
        console.error("Error deleting node:", error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const selectedMarker = markers.find(m => m.id === selectedMarkerId);

  return (
    <div className={`hotspot-editor ${isPreview ? 'in-preview' : ''}`} key={place.id}>
      <div className="editor-sidebar">
        {isPreview ? (
            <div className="preview-info">
                <h3>Vista Previa</h3>
                <p>Navegación real activada.</p>
                <button className="admin-btn primary full" onClick={() => setIsPreview(false)}>Salir de Vista Previa</button>
            </div>
        ) : (
            <>
                <div className="editor-header-actions">
                    <button className="editor-btn-back" onClick={onClose}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      Volver
                    </button>
                    <button className="editor-btn-delete-node" onClick={deleteNode} title="Eliminar este lugar del recorrido">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                      Eliminar
                    </button>
                </div>
                
                <div className="current-info">
                    <div className="edit-name-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nombre del Nodo</label>
                        <input 
                            type="text" 
                            value={nodeName} 
                            onChange={(e) => setNodeName(e.target.value)} 
                            onBlur={(e) => saveToFirebase(markers, undefined, e.target.value)}
                            style={{ 
                                width: '100%', 
                                padding: '0.5rem', 
                                background: '#1e293b', 
                                border: '1px solid #334155', 
                                color: 'white', 
                                borderRadius: '4px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem'
                            }}
                        />

                        <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Categoría</label>
                        <select 
                            value={selectedCategoryId} 
                            onChange={(e) => {
                                setSelectedCategoryId(e.target.value);
                                // Save immediately
                                const docRef = doc(db, "hotspots", place.id);
                                setDoc(docRef, { categoryId: e.target.value }, { merge: true });
                            }}
                            style={{ 
                                width: '100%', 
                                padding: '0.5rem', 
                                background: '#1e293b', 
                                border: '1px solid #334155', 
                                color: 'white', 
                                borderRadius: '4px',
                                fontSize: '0.9rem'
                            }}
                        >
                            <option value="">-- Sin Categoría --</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="sidebar-actions">
                        <button className="admin-btn success full" onClick={() => addMarker('nav')}>+ Agregar Marcador</button>
                        <button className="admin-btn danger full" onClick={() => addMarker('label')}>+ Agregar Etiqueta (Roja)</button>
                        <button className="admin-btn primary full" onClick={() => setIsPreview(true)}>👁️ Vista Previa</button>
                        {isSaving && <span className="saving-indicator">Salvando cambios...</span>}
                    </div>
                </div>

                <div className="default-view-panel">
                    <h4>Vista Inicial</h4>
                    <div className="view-coords">
                        <span>Yaw: <strong>{defaultView?.yaw || 0}</strong></span>
                        <span>Pitch: <strong>{defaultView?.pitch || 0}</strong></span>
                    </div>
                    <button className="admin-btn primary small full" onClick={handleSetDefaultView}>
                        Establecer Vista Actual
                    </button>
                </div>

                {selectedMarker ? (
                <div className="edit-marker-panel">
                    <h4>Editar {selectedMarker.type === 'label' ? 'Etiqueta' : 'Marcador'}</h4>
                    <div className="field">
                    <label>Yaw (X):</label>
                    <div className="input-with-controls">
                        <button onMouseDown={() => startAdjusting(selectedMarker.id, 'yaw', -0.01)} onMouseUp={stopAdjusting} onMouseLeave={stopAdjusting}>-</button>
                        <input type="number" step="0.001" value={selectedMarker.yaw} onChange={(e) => updateMarker(selectedMarker.id, { yaw: parseFloat(e.target.value) || 0 })} onBlur={() => saveToFirebase(markers)} />
                        <button onMouseDown={() => startAdjusting(selectedMarker.id, 'yaw', 0.01)} onMouseUp={stopAdjusting} onMouseLeave={stopAdjusting}>+</button>
                    </div>
                    </div>
                    <div className="field">
                    <label>Pitch (Y):</label>
                    <div className="input-with-controls">
                        <button onMouseDown={() => startAdjusting(selectedMarker.id, 'pitch', -0.01)} onMouseUp={stopAdjusting} onMouseLeave={stopAdjusting}>-</button>
                        <input type="number" step="0.001" value={selectedMarker.pitch} onChange={(e) => updateMarker(selectedMarker.id, { pitch: parseFloat(e.target.value) || 0 })} onBlur={() => saveToFirebase(markers)} />
                        <button onMouseDown={() => startAdjusting(selectedMarker.id, 'pitch', 0.01)} onMouseUp={stopAdjusting} onMouseLeave={stopAdjusting}>+</button>
                    </div>
                    </div>
                    
                    {selectedMarker.type === 'label' ? (
                        <div className="field">
                            <label>Texto de Etiqueta:</label>
                            <input type="text" value={selectedMarker.label || ''} onChange={(e) => updateMarker(selectedMarker.id, { label: e.target.value })} onBlur={() => saveToFirebase(markers)} placeholder="Ej: Baños, Salida..." />
                        </div>
                    ) : (
                        <div className="field">
                            <label>Destino:</label>
                            <select value={selectedMarker.targetPlaceId} onChange={(e) => {
                                    const targetId = e.target.value;
                                    const targetName = sede.places.find(p => p.id === targetId)?.name || 'Nuevo Marcador';
                                    const updated = markers.map(m => m.id === selectedMarker.id ? { ...m, targetPlaceId: targetId, label: targetName } : m);
                                    setMarkers(updated);
                                    saveToFirebase(updated);
                                }}>
                                <option value="">-- Seleccionar Destino --</option>
                                {sede.places.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}
                            </select>
                        </div>
                    )}
                    <div className="panel-actions">
                    <button className="admin-btn danger" onClick={() => removeMarker(selectedMarker.id)}>Eliminar</button>
                    <button className="admin-btn success" onClick={() => { saveToFirebase(markers); setSelectedMarkerId(null); }}>Cerrar</button>
                    </div>
                </div>
                ) : (
                <div className="markers-list">
                    <h4>Marcadores ({markers.length})</h4>
                    <div className="list-container">
                    {markers.length === 0 && <p className="hint">No hay marcadores.</p>}
                    {markers.map(m => (
                        <div key={m.id} className={`marker-item ${selectedMarkerId === m.id ? 'active' : ''}`} onClick={() => focusMarker(m)}>
                        <div className="m-info">
                            <strong>{m.label}</strong>
                            <span>&rarr; {sede.places.find(p => p.id === m.targetPlaceId)?.name || 'Sin destino'}</span>
                        </div>
                        </div>
                    ))}
                    </div>
                    <button className="admin-btn danger small" style={{marginTop: '1rem', width: '100%'}} onClick={clearAll}>Borrar Todo</button>
                </div>
                )}
            </>
        )}
      </div>

      <div className="editor-viewer">
        <ReactPhotoSphereViewer
          src={imageUrl}
          height={'100vh'} width={'100%'}
          plugins={[[MarkersPlugin, { markers: [] }]]}
          onReady={(instance) => {
            console.log("[DEBUG-VIEW] Visor listo (onReady)");
            setViewerInstance(instance);
            const plugin = instance.getPlugin(MarkersPlugin);
            if (plugin) {
              setMarkersPlugin(plugin);
              plugin.addEventListener('marker-drop', handleMarkerDrag);
              plugin.addEventListener('select-marker', ({ marker }: any) => {
                if (isPreview) {
                    const targetId = marker.config.targetPlaceId;
                    if (targetId) onNavigate(targetId);
                } else {
                    setSelectedMarkerId(marker.id);
                }
              });
            }
          }}
        />
      </div>
    </div>
  );
}
