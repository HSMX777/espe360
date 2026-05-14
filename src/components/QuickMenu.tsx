import React, { useState, useEffect } from 'react';
import './QuickMenu.css';
import { type Place360 } from '../data/esforcePlaces';
import { db } from '../firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

interface QuickMenuProps {
  currentPlaceId: string;
  allPlaces: Place360[];
  onNavigate: (placeId: string) => void;
  schoolName?: string;
  sedeId: string;
}

const QuickMenu: React.FC<QuickMenuProps> = ({ currentPlaceId, allPlaces, onNavigate, schoolName = 'ESFORCE', sedeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dbCategories, setDbCategories] = useState<any[]>([]);
  const [nodeData, setNodeData] = useState<Record<string, any>>({});

  // Fetch categories from Firestore
  useEffect(() => {
    if (!sedeId) return;
    const sedeQuery = query(collection(db, 'categories'), where('sedeId', '==', sedeId));
    const unsubscribe = onSnapshot(sedeQuery, (snapshot) => {
      const cats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDbCategories(cats);
    });
    return () => unsubscribe();
  }, [sedeId]);

  // Fetch individual node metadata (categoryId) from hotspots collection
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'hotspots'), (snapshot) => {
      const data: Record<string, any> = {};
      snapshot.docs.forEach(doc => {
        data[doc.id] = doc.data();
      });
      setNodeData(data);
    });
    return () => unsubscribe();
  }, []);

  // Build an ORDERED array of { category, places } respecting Firestore order field
  const groupedCategories = React.useMemo(() => {
    // Map of categoryId -> category object (sorted by order)
    const sortedCats = [...dbCategories].sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
      return a.name.localeCompare(b.name);
    });

    // Build groups as an ordered array
    const groups: { catName: string; catId: string | null; places: Place360[] }[] = [];
    const catMap: Record<string, number> = {}; // catName -> index in groups

    sortedCats.forEach(cat => {
      catMap[cat.name] = groups.length;
      groups.push({ catName: cat.name, catId: cat.id, places: [] });
    });

    // Place nodes into their groups
    allPlaces.forEach(place => {
      const dynamicData = nodeData[place.id];
      const categoryId = dynamicData?.categoryId;
      const dbCat = dbCategories.find(c => c.id === categoryId);

      // Resolve category name
      const catName = dbCat?.name || place.category || 'SIN CATEGORÍA';
      
      const enrichedPlace = {
        ...place,
        name: dynamicData?.placeName || place.name,
        _order: dynamicData?.order ?? 9999,
      };

      if (catMap[catName] !== undefined) {
        groups[catMap[catName]].places.push(enrichedPlace as any);
      } else {
        // Category not in Firestore yet — append at end
        groups.push({ catName, catId: null, places: [enrichedPlace as any] });
        catMap[catName] = groups.length - 1;
      }
    });

    // Sort places within each category by their order field
    groups.forEach(g => {
      g.places.sort((a, b) => ((a as any)._order ?? 9999) - ((b as any)._order ?? 9999));
    });

    return groups;
  }, [allPlaces, dbCategories, nodeData]);


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
          {groupedCategories.map(({ catName, places }) => (
            <div key={catName} className="menu-category-group">
              <h4 className="category-label">{catName}</h4>
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
