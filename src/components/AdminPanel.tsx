import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SEDE_CONFIGS } from '../config/sedeConfig';
import { findPlaceBySlug, slugify } from '../utils/slugify';
import HotspotEditor from './HotspotEditor';
import './Admin.css';

export default function AdminPanel() {
  const { sedeId, placeSlug } = useParams<{ sedeId: string; placeSlug: string }>();
  const navigate = useNavigate();

  const sedes = Object.values(SEDE_CONFIGS);
  const selectedSede = sedeId ? SEDE_CONFIGS[sedeId] : null;
  const selectedPlace = (selectedSede && placeSlug) ? findPlaceBySlug(selectedSede.places, placeSlug) : null;

  const handleSedeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    if (id) navigate(`/admin/${id}`);
    else navigate('/admin');
  };

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
        <h1>Panel de Administración – ESPE 360</h1>
        <p>Herramienta de configuración de Hotspots y Navegación</p>
      </header>

      <div className="admin-controls">
        <div className="control-group">
          <label>Seleccionar Sede:</label>
          <select onChange={handleSedeChange} value={sedeId || ''}>
            <option value="">-- Seleccionar Sede --</option>
            {sedes.map(s => (
              <option key={s.id} value={s.id}>{s.nombre}</option>
            ))}
          </select>
        </div>

        {selectedSede && (
          <div className="control-group">
            <label>Seleccionar Lugar (Nodo):</label>
            <select onChange={handlePlaceChange} value={selectedPlace?.id || ''}>
              <option value="">-- Seleccionar Lugar --</option>
              {selectedSede.places.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
        )}

        {selectedSede && !selectedPlace && (
           <p className="hint">Selecciona un lugar para empezar a editar sus marcadores.</p>
        )}
      </div>

      <div className="admin-instructions">
        <h3>Instrucciones:</h3>
        <ol>
          <li>Selecciona la sede y el lugar que deseas editar.</li>
          <li>Usa el visor para hacer clic en la posición exacta donde quieres poner un marcador.</li>
          <li>Configura el destino y el nombre del marcador.</li>
          <li>Los cambios se guardan automáticamente en Firebase.</li>
        </ol>
      </div>
    </div>
  );
}
