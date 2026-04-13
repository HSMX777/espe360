import React, { useState, useRef, useEffect } from 'react';
import { SEDE_CONFIGS } from '../config/sedeConfig';
import './NodeGallery.css';
import { type Place360 } from '../data/esforcePlaces';

interface NodeGalleryProps {
  currentPlace: Place360;
  allPlaces: Place360[];
  onNavigate: (placeId: string) => void;
  currentSedeId?: string;
}

const NodeGallery: React.FC<NodeGalleryProps> = ({ currentPlace, allPlaces, onNavigate, currentSedeId = 'esforce' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to current item when gallery is opened or place changes
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      const activeItem = scrollRef.current.querySelector('.gallery-item.active');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [isOpen, currentPlace.id]);

  return (
    <div className={`node-gallery-wrapper ${isOpen ? 'open' : 'closed'}`}>
      {/* Toggle Bar */}
      <div className="gallery-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="toggle-indicator"></div>
        <span className="toggle-text">
          {isOpen ? 'OCULTAR GALERÍA' : 'VER TODOS LOS LUGARES'}
        </span>
      </div>

      {/* Thumbnails Strip */}
      <div className="gallery-strip" ref={scrollRef}>
        {allPlaces.map((node) => {
          const basePath = SEDE_CONFIGS[currentSedeId]?.basePath || '360_ESFORCE';
          const thumbUrl = `/${basePath}/thumbnails/${encodeURIComponent(node.imageFileName)}`;
          const isActive = currentPlace.id === node.id;

          return (
            <button
              key={node.id}
              className={`gallery-item ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(node.id)}
              title={node.name}
            >
              <div className="item-thumb">
                <img 
                  src={thumbUrl} 
                  alt={node.name} 
                  loading="lazy" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/${basePath}/${encodeURIComponent(node.imageFileName)}`;
                  }}
                />
                <div className="item-overlay" />
              </div>
              <span className="item-label">{node.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NodeGallery;
