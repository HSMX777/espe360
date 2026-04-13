import { type Sede } from './SedesPage';
import { type Place360 } from '../data/esforcePlaces';
import './PlacesPage.css';

interface Props {
  sede: Sede;
  onBack: () => void;
  onPlaceSelect: (place: Place360) => void;
}

export default function PlacesPage({ sede, onBack, onPlaceSelect }: Props) {
  const places = sede.places || [];
  const isAvailable = places.length > 0;

  return (
    <div className="places-container">
      {/* Header */}
      <div className="places-header">
        <button className="back-button" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Volver
        </button>
        <div className="places-title-container">
          <h1 className="places-title" style={{ color: sede.acento }}>{sede.nombreCorto}</h1>
          <p className="places-subtitle">LUGARES EN 360°</p>
        </div>
        <div style={{ width: '100px' }} /> {/* Espacio para equilibrar flex */}
      </div>

      {/* Content */}
      {isAvailable ? (
        <div className="places-grid">
          {places.map((place) => {
            const basePath = sede.basePath;
            const thumbUrl = `/${basePath}/thumbnails/${encodeURIComponent(place.imageFileName)}`;
            
            return (
              <button
                key={place.id}
                className="place-card"
                onClick={() => onPlaceSelect(place)}
                style={{ '--acento': sede.acento } as React.CSSProperties}
              >
                {/* Fallback to full image if thumbnails don't exist yet */}
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
                  <div className="place-img-overlay" />
                </div>
                
                <div className="place-content">
                  <svg className="place-icon360" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" />
                    <path d="M12 2v20" />
                  </svg>
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
          <p>Los recorridos 360° para la sede {sede.nombreCorto} están en desarrollo.</p>
        </div>
      )}
    </div>
  );
}
