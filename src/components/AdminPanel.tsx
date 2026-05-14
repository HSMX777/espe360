import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SEDE_CONFIGS } from '../config/sedeConfig';
import { findPlaceBySlug, slugify } from '../utils/slugify';
import HotspotEditor from './HotspotEditor';
import MinimapEditor from './MinimapEditor';
import { db } from '../firebase';

import { collection, onSnapshot, doc, setDoc, deleteDoc, addDoc, query, where } from 'firebase/firestore';
import campusBg from '../assets/campus_bg.png';
import './Admin.css';

type AdminMode = 'selection' | 'nodes' | 'categories' | 'ordering' | 'minimap';

export default function AdminPanel() {
  const { sedeId, placeSlug } = useParams<{ sedeId: string; placeSlug: string }>();
  const navigate = useNavigate();
  const [globalPlaceNames, setGlobalPlaceNames] = useState<Record<string, string>>({});
  const [deletedNodes, setDeletedNodes] = useState<Set<string>>(new Set());
  const [nodeMetadata, setNodeMetadata] = useState<Record<string, any>>({});
  const [adminMode, setAdminMode] = useState<AdminMode>('selection');
  const [categories, setCategories] = useState<any[]>([]);
  const [newCategoryName, setNewCategoryName] = useState('');

  const sedes = Object.values(SEDE_CONFIGS);
  const selectedSedeRaw = sedeId ? SEDE_CONFIGS[sedeId] : null;

  const selectedSede = useMemo(() => {
    if (!selectedSedeRaw) return null;
    return {
      ...selectedSedeRaw,
      places: selectedSedeRaw.places.filter(p => !deletedNodes.has(p.id)).map(p => ({
        ...p,
        name: globalPlaceNames[p.id] || p.name
      }))
    };
  }, [selectedSedeRaw, globalPlaceNames, deletedNodes]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'hotspots'), (snapshot) => {
      const names: Record<string, string> = {};
      const deleted = new Set<string>();
      const metadata: Record<string, any> = {};
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.placeName) names[doc.id] = data.placeName;
        if (data.deleted === true) deleted.add(doc.id);
        metadata[doc.id] = data;
      });
      setGlobalPlaceNames(names);
      setDeletedNodes(deleted);
      setNodeMetadata(metadata);
    });
    return () => unsubscribe();
  }, []);

  // Fetch categories when sedeId changes
  useEffect(() => {
    if (!sedeId) {
      setCategories([]);
      return;
    }
    const q = query(collection(db, 'categories'), where('sedeId', '==', sedeId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const cats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(cats);
      
      // Auto-populate if empty and we have static places
      if (snapshot.empty && selectedSede?.places) {
        const staticCats = Array.from(new Set(selectedSede.places.map(p => p.category).filter(Boolean)));
        staticCats.forEach(catName => {
          addDoc(collection(db, 'categories'), {
            sedeId,
            name: catName
          });
        });
      }
    });
    return () => unsubscribe();
  }, [sedeId, selectedSede]);

  useEffect(() => {
    if (sedeId && !placeSlug) {
      setAdminMode('selection');
    } else if (sedeId && placeSlug) {
      setAdminMode('nodes');
    } else {
      setAdminMode('selection');
    }
  }, [sedeId, placeSlug]);

  const selectedPlace = (selectedSede && placeSlug) ? findPlaceBySlug(selectedSede.places, placeSlug) : null;

  const handlePlaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedSede) return;
    const placeId = e.target.value;
    const place = selectedSede.places.find(p => p.id === placeId);
    if (place) {
      navigate(`/admin/${sedeId}/${slugify(place.name)}`);
    } else {
      navigate(`/admin/${sedeId}`);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategoryName.trim() || !sedeId) return;
    await addDoc(collection(db, 'categories'), {
      sedeId,
      name: newCategoryName.trim()
    });
    setNewCategoryName('');
  };

  const handleUpdateCategory = async (id: string, name: string) => {
    await setDoc(doc(db, 'categories', id), { name }, { merge: true });
  };

  const handleDeleteCategory = async (id: string) => {
    if (window.confirm('¿Eliminar esta categoría?')) {
      await deleteDoc(doc(db, 'categories', id));
    }
  };

  if (selectedSede && selectedPlace) {
    return (
      <HotspotEditor 
        sede={selectedSede} 
        place={selectedPlace} 
        onClose={() => navigate(`/admin/${sedeId}`)} 
        onNavigate={(targetPlaceId) => {
          const nextPlace = selectedSede.places.find(p => p.id === targetPlaceId);
          if (nextPlace) navigate(`/admin/${sedeId}/${slugify(nextPlace.name)}`);
        }}
      />
    );
  }

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <h1 className="admin-title">Panel de Administración</h1>
        <p className="admin-subtitle">GESTIÓN DE RECORRIDOS 360°</p>
      </header>

      {!sedeId ? (
        <div className="admin-sede-selection">
          <h2 className="section-title">Seleccionar Sede para Editar</h2>
          <div className="admin-sedes-grid">
            {sedes.map((s, index) => (
              <button 
                key={s.id} 
                className="admin-sede-card"
                onClick={() => navigate(`/admin/${s.id}`)}
                style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <img src={campusBg} alt={s.nombre} className="admin-card-bg" />
                <div className="admin-card-overlay" />
                <div className="admin-card-content">
                  <span className="admin-card-name">{s.nombre}</span>
                  <span className="admin-card-city">{s.nombreCorto}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="admin-sede-dashboard">
          <div className="selection-header">
            <button className="admin-back-btn" onClick={() => navigate('/admin')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Cambiar Sede
            </button>
            <div className="current-sede-label">
              <span>Sede Actual:</span>
              <strong>{selectedSede?.nombre}</strong>
            </div>
          </div>

          {!placeSlug && adminMode === 'selection' && (
            <div className="admin-mode-selector">
              <button className="mode-option-card" onClick={() => setAdminMode('nodes')}>
                <div className="mode-icon">📍</div>
                <div className="mode-info">
                  <h3>Editar Nodos</h3>
                  <p>Configura hotspots, descripciones y navegación de cada lugar.</p>
                </div>
              </button>
              <button className="mode-option-card" onClick={() => setAdminMode('categories')}>
                <div className="mode-icon">🏷️</div>
                <div className="mode-info">
                  <h3>Editar Categorías</h3>
                  <p>Gestiona las categorías para organizar los lugares de esta sede.</p>
                </div>
              </button>
              <button className="mode-option-card" onClick={() => setAdminMode('ordering')}>
                <div className="mode-icon">🔢</div>
                <div className="mode-info">
                  <h3>Ordenar Categorías y Nodos</h3>
                  <p>Define el orden de aparición en el menú lateral del recorrido.</p>
                </div>
              </button>
              <button className="mode-option-card" onClick={() => setAdminMode('minimap')}>
                <div className="mode-icon">🗺️</div>
                <div className="mode-info">
                  <h3>Editar Minimapa</h3>
                  <p>Sube una imagen del mapa y ajusta la posición de cada lugar sobre él.</p>
                </div>
              </button>
            </div>
          )}

          {adminMode === 'nodes' && (
            <div className="admin-node-selection">
              <div className="admin-controls-card">
                <div className="control-group">
                  <label>Seleccionar Lugar (Nodo) para Editar:</label>
                  <select onChange={handlePlaceChange} value={selectedPlace?.id || ''} className="admin-select">
                    <option value="">-- Seleccionar un lugar --</option>
                    {selectedSede?.places.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                {!selectedPlace && (
                   <div className="admin-hint-box">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <circle cx="12" cy="12" r="10" />
                       <line x1="12" y1="16" x2="12" y2="12" />
                       <line x1="12" y1="8" x2="12.01" y2="8" />
                     </svg>
                     <p>Selecciona un lugar específico de la lista superior para comenzar a configurar sus marcadores e información.</p>
                   </div>
                )}
              </div>
              {!selectedPlace && (
                <button className="admin-btn-back-mode" onClick={() => setAdminMode('selection')}>
                  Volver a Opciones
                </button>
              )}
            </div>
          )}

          {adminMode === 'categories' && (
            <div className="admin-category-manager">
              <div className="admin-controls-card">
                <div className="manager-header">
                  <h3>Gestión de Categorías</h3>
                  <button className="admin-btn-back-mode" onClick={() => setAdminMode('selection')}>Volver</button>
                </div>
                
                <div className="add-category-box">
                  <input 
                    type="text" 
                    placeholder="Nombre de nueva categoría..." 
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    className="admin-input"
                  />
                  <button onClick={handleAddCategory} className="admin-btn-add">Agregar</button>
                </div>

                <div className="categories-list">
                  {categories.length === 0 ? (
                    <p className="empty-msg">No hay categorías creadas aún.</p>
                  ) : (
                    categories.sort((a, b) => (a.order || 0) - (b.order || 0)).map(cat => (
                      <div key={cat.id} className="category-item">
                        <input 
                          type="text" 
                          defaultValue={cat.name}
                          onBlur={(e) => handleUpdateCategory(cat.id, e.target.value)}
                          className="cat-edit-input"
                        />
                        <button onClick={() => handleDeleteCategory(cat.id)} className="cat-delete-btn">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {adminMode === 'ordering' && (
            <OrderingManager 
              sedeId={sedeId} 
              categories={categories} 
              places={selectedSede?.places || []}
              nodeMetadata={nodeMetadata}
              onBack={() => setAdminMode('selection')}
            />
          )}

          {adminMode === 'minimap' && sedeId && (
            <MinimapEditor
              sedeId={sedeId}
              sede={selectedSede}
              onBack={() => setAdminMode('selection')}
            />
          )}
        </div>
      )}

      <div className="admin-instructions-card">
        <h3>¿Cómo usar el panel?</h3>
        <ul>
          <li><strong>Paso 1:</strong> Selecciona la sede y el lugar que deseas configurar.</li>
          <li><strong>Paso 2:</strong> Usa el visor interactivo para navegar por la escena.</li>
          <li><strong>Paso 3:</strong> Haz clic en cualquier punto para añadir un nuevo marcador (Hotspot).</li>
          <li><strong>Paso 4:</strong> Define si es un marcador de navegación o de información.</li>
          <li><strong>Paso 5:</strong> Los cambios se sincronizan automáticamente con la base de datos.</li>
        </ul>
      </div>
    </div>
  );
}

// Sub-component for managing order
function OrderingManager({ categories, places, nodeMetadata, onBack }: { sedeId?: string, categories: any[], places: any[], nodeMetadata: Record<string, any>, onBack: () => void }) {
  const [localCats, setLocalCats] = React.useState<any[]>([]);

  // On mount or categories change: build a locally ordered list
  React.useEffect(() => {
    if (categories.length === 0) return;
    // Sort by existing order, then alphabetically for unordered ones
    const sorted = [...categories].sort((a, b) => {
      const aO = a.order ?? Infinity;
      const bO = b.order ?? Infinity;
      if (aO !== bO) return aO - bO;
      return a.name.localeCompare(b.name);
    });
    setLocalCats(sorted);
  }, [categories]);

  const moveCategory = async (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= localCats.length) return;

    // Swap in local state immediately for instant UI feedback
    const newCats = [...localCats];
    [newCats[index], newCats[targetIndex]] = [newCats[targetIndex], newCats[index]];
    setLocalCats(newCats);

    // Save ALL categories with their new sequential order to Firebase
    await Promise.all(
      newCats.map((cat, i) =>
        setDoc(doc(db, 'categories', cat.id), { order: i }, { merge: true })
      )
    );
  };

  const moveNode = async (_catId: string, nodeIndex: number, direction: 'up' | 'down', catNodes: any[]) => {
    const targetIndex = direction === 'up' ? nodeIndex - 1 : nodeIndex + 1;
    if (targetIndex < 0 || targetIndex >= catNodes.length) return;

    // Save new sequential order for all nodes in this category
    const newNodes = [...catNodes];
    [newNodes[nodeIndex], newNodes[targetIndex]] = [newNodes[targetIndex], newNodes[nodeIndex]];

    await Promise.all(
      newNodes.map((node: any, i: number) =>
        setDoc(doc(db, 'hotspots', node.id), { order: i }, { merge: true })
      )
    );
  };

  return (
    <div className="admin-ordering-manager">
      <div className="admin-controls-card">
        <div className="manager-header">
          <h3>Ordenar Menú Lateral</h3>
          <button className="admin-btn-back-mode" onClick={onBack}>Volver</button>
        </div>

        <div className="ordering-list">
          {localCats.map((cat, catIndex) => {
            const catNodes = places
              .filter(p => {
                const meta = nodeMetadata[p.id];
                if (meta?.categoryId) return meta.categoryId === cat.id;
                return p.category?.toLowerCase() === cat.name?.toLowerCase();
              })
              .map(p => ({ id: p.id, name: p.name, ...nodeMetadata[p.id] }))
              .sort((a: any, b: any) => (a.order ?? 9999) - (b.order ?? 9999));

            return (
              <div key={cat.id} className="order-category-group">
                <div className="category-order-item">
                  <div className="order-controls">
                    <button
                      onClick={() => moveCategory(catIndex, 'up')}
                      disabled={catIndex === 0}
                    >▲</button>
                    <button
                      onClick={() => moveCategory(catIndex, 'down')}
                      disabled={catIndex === localCats.length - 1}
                    >▼</button>
                  </div>
                  <span className="order-cat-name">{cat.name}</span>
                  <span className="order-badge">Categoría</span>
                </div>

                <div className="order-nodes-list">
                  {catNodes.length === 0 ? (
                    <p className="order-empty">No hay nodos en esta categoría.</p>
                  ) : (
                    catNodes.map((node: any, nodeIndex: number) => (
                      <div key={node.id} className="node-order-item">
                        <div className="order-controls small">
                          <button
                            onClick={() => moveNode(cat.id, nodeIndex, 'up', catNodes)}
                            disabled={nodeIndex === 0}
                          >▲</button>
                          <button
                            onClick={() => moveNode(cat.id, nodeIndex, 'down', catNodes)}
                            disabled={nodeIndex === catNodes.length - 1}
                          >▼</button>
                        </div>
                        <span className="order-node-name">{node.name}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}



