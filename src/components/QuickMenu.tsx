import React, { useState } from 'react';
import './QuickMenu.css';
import { type Place360 } from '../data/esforcePlaces';

interface QuickMenuProps {
  currentPlaceId: string;
  allPlaces: Place360[];
  onNavigate: (placeId: string) => void;
  schoolName?: string;
}

const QuickMenu: React.FC<QuickMenuProps> = ({ currentPlaceId, allPlaces, onNavigate, schoolName = 'ESFORCE' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Group places by category
  const categories = allPlaces.reduce((acc, place) => {
    if (!acc[place.category]) {
      acc[place.category] = [];
    }
    acc[place.category].push(place);
    return acc;
  }, {} as Record<string, Place360[]>);

  return (
    <>
      {/* Menu Trigger Button */}
      <button 
        className={`quick-menu-trigger ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        title="Menú de Navegación"
      >
        <div className="trigger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Sidebar Overlay */}
      <div className={`quick-menu-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />

      {/* Sidebar Panel */}
      <aside className={`quick-menu-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3 className="sidebar-title">SECCIONES {schoolName}</h3>
          <button className="sidebar-close" onClick={() => setIsOpen(false)}>&times;</button>
        </div>

        <div className="sidebar-content">
          {Object.entries(categories).map(([category, places]) => (
            <div key={category} className="menu-category-group">
              <h4 className="category-label">{category}</h4>
              <ul className="places-list">
                {places.map((place) => (
                  <li 
                    key={place.id} 
                    className={`place-item ${currentPlaceId === place.id ? 'active' : ''}`}
                    onClick={() => {
                      onNavigate(place.id);
                      setIsOpen(false);
                    }}
                  >
                    <span className="place-name">{place.name}</span>
                    {currentPlaceId === place.id && <div className="active-indicator" />}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="sidebar-footer">
          <p>{schoolName === 'ESFORCE' ? 'ESCUELA DE FORMACIÓN DE SOLDADOS' : 'ESCUELA DE MISIONES ESPECIALES'}</p>
        </div>
      </aside>
    </>
  );
};

export default QuickMenu;
