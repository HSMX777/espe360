import React, { useState } from 'react';
import './MiniMap.css';
import { type Place360 } from '../data/esforcePlaces';

interface MiniMapProps {
  currentPlace: Place360;
  allPlaces: Place360[];
  onNavigate: (placeId: string) => void;
  mapImage?: string;
}

const MiniMap: React.FC<MiniMapProps> = ({ currentPlace, allPlaces, onNavigate, mapImage = '/map_esforce.png' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter places that have map coordinates defined
  const mapPoints = allPlaces.filter(p => p.mapCoords);

  return (
    <div className={`minimap-wrapper ${isExpanded ? 'expanded' : ''}`}>
      <div 
        className="minimap-container" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Background Map Image */}
        <img src={mapImage} alt="Campus Map" className="minimap-image" />

        {/* Navigation Points (Always visible) */}
        {mapPoints.map(point => {
          const isActive = currentPlace.id === point.id;
          return (
            <div
              key={point.id}
              className={`minimap-point ${isActive ? 'active' : ''} ${!isExpanded ? 'collapsed-point' : ''}`}
              style={{
                left: `${point.mapCoords?.x}%`,
                top: `${point.mapCoords?.y}%`
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
