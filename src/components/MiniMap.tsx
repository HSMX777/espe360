import React, { useState, useEffect } from 'react';
import './MiniMap.css';
import { type Place360 } from '../data/esforcePlaces';
import { db } from '../firebase';
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';

interface MiniMapProps {
  currentPlace: Place360;
  allPlaces: Place360[];
  onNavigate: (placeId: string) => void;
  mapImage?: string;
  sedeId?: string;
}

const MiniMap: React.FC<MiniMapProps> = ({ currentPlace, allPlaces, onNavigate, mapImage = '/map_esforce.png', sedeId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [nodeCoords, setNodeCoords] = useState<Record<string, { x: number; y: number }>>({});
  const [dynamicMapImage, setDynamicMapImage] = useState<string>('');

  // Load custom mapImage from Firestore if available
  useEffect(() => {
    if (!sedeId) return;
    getDoc(doc(db, 'minimapConfigs', sedeId)).then(snap => {
      if (snap.exists() && snap.data().imageUrl) {
        setDynamicMapImage(snap.data().imageUrl);
      }
    });
  }, [sedeId]);

  // Listen for dynamic mapCoords from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'hotspots'), (snapshot) => {
      const coords: Record<string, { x: number; y: number }> = {};
      snapshot.docs.forEach(d => {
        const data = d.data();
        if (data.mapCoords) {
          coords[d.id] = data.mapCoords;
        }
      });
      setNodeCoords(coords);
    });
    return () => unsubscribe();
  }, []);

  // Use Firestore coords if available, otherwise fall back to static
  const mapPoints = allPlaces.filter(p => {
    const dynCoords = nodeCoords[p.id];
    return dynCoords || p.mapCoords;
  });

  const activeMapImage = dynamicMapImage || mapImage;

  return (
    <div className={`minimap-wrapper ${isExpanded ? 'expanded' : ''}`}>
      <div 
        className="minimap-container" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Background Map Image */}
        <img src={activeMapImage} alt="Campus Map" className="minimap-image" />

        {/* Navigation Points (Always visible) */}
        {mapPoints.map(point => {
          const dynCoords = nodeCoords[point.id];
          const coords = dynCoords || point.mapCoords;
          const isActive = currentPlace.id === point.id;
          return (
            <div
              key={point.id}
              className={`minimap-point ${isActive ? 'active' : ''} ${!isExpanded ? 'collapsed-point' : ''}`}
              style={{
                left: `${coords?.x}%`,
                top: `${coords?.y}%`
              }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(point.id);
              }}
              title={point.name}
            >
              <div className="point-dot" />
              {isActive && <div className="point-pulse" />}
            </div>
          );
        })}
      </div>

      <button 
        className="minimap-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'CERRAR MAPA' : 'VER MAPA'}
      </button>
    </div>
  );
};

export default MiniMap;
