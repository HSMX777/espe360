import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SEDE_CONFIGS } from '../config/sedeConfig';
import { type Place360 } from '../data/esforcePlaces';
import { slugify } from '../utils/slugify';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import './PlacesPage.css';

export default function PlacesPage() {
  const { sedeId } = useParams<{ sedeId: string }>();
  const navigate = useNavigate();

  const [globalPlaceNames, setGlobalPlaceNames] = useState<Record<string, string>>({});
  const [deletedNodes, setDeletedNodes] = useState<Set<string>>(new Set());
  const [dynamicNodes, setDynamicNodes] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'hotspots'), (snapshot) => {
      const names: Record<string, string> = {};
      const deleted = new Set<string>();
      const dynamic: any[] = [];
      snapshot.docs.forEach(doc => {
        const data = doc.data();
        if (data.placeName) names[doc.id] = data.placeName;
        if (data.deleted === true) deleted.add(doc.id);
        if (data.isDynamic === true && data.sedeId === sedeId) {
          dynamic.push({
            id: doc.id,
            name: data.placeName || data.name,
            category: data.category || '',
            imageFileName: data.imageFileName || '',
            description: data.description || '',
            hotspots: data.markers || []
          });
        }
      });
      setGlobalPlaceNames(names);
      setDeletedNodes(deleted);
      setDynamicNodes(dynamic);
    });
    return () => unsubscribe();
  }, [sedeId]);

  const sedeRaw = sedeId ? SEDE_CONFIGS[sedeId] : null;

  const sede = useMemo(() => {
    if (!sedeRaw) return null;
    const staticPlaces = sedeRaw.places.filter(p => !deletedNodes.has(p.id)).map(p => ({
      ...p,
      name: globalPlaceNames[p.id] || p.name
    }));

    return {
      ...sedeRaw,
      places: [...staticPlaces, ...dynamicNodes]
    };
  }, [sedeRaw, globalPlaceNames, deletedNodes, dynamicNodes]);

  if (!sede) {
    return (
      <div className="places-container">
        <div className="places-empty">
          <h2>Sede no encontrada</h2>
          <button onClick={() => navigate('/sedes')}>Volver a Sedes</button>
        </div>
      </div>
    );
  }

  const places = sede.places || [];
  const isAvailable = places.length > 0;

  const handlePlaceSelect = (place: Place360) => {
    navigate(`/${sedeId}/${slugify(place.name)}`);
  };

  return (
    <div className="places-container">
      {/* Header */}
      <div className="places-header">
        <button className="back-button" onClick={() => navigate('/sedes')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Volver
        </button>
        <div className="places-title-container">
          <h1 className="places-title">{sede.nombre}</h1>
          <p className="places-subtitle">LUGARES EN 360°</p>
        </div>
        <div style={{ width: '100px' }} />
      </div>

      {/* Content */}
      {isAvailable ? (
        <div className="places-grid">
          {places.map((place, index) => {
            const basePath = sede.basePath;
            const thumbUrl = place.imageFileName.startsWith('http')
              ? place.imageFileName
              : `/${basePath}/thumbnails/${encodeURIComponent(place.imageFileName)}`;
            
            return (
              <button
                key={place.id}
                className="place-card"
                onClick={() => handlePlaceSelect(place)}
                style={{ 
                  '--acento': sede.acento,
                  animationDelay: `${index * 0.05}s`
                } as React.CSSProperties}
              >
                <div className="place-img-wrapper">
                  <img 
                    src={thumbUrl} 
                    alt={place.name} 
                    loading="lazy" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/${basePath}/${encodeURIComponent(place.imageFileName)}`;
                    }}
                  />

                </div>
                
                <div className="place-content">
                  <span className="place-name">{place.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="places-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" />
            <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" />
          </svg>
          <h2>Próximamente</h2>
          <p>Los recorridos 360° para la sede {sede.nombre} están en desarrollo.</p>
        </div>
      )}
    </div>
  );
}
