import { useNavigate } from 'react-router-dom';
import campusBg from '../assets/campus_bg.png';
import { SEDE_CONFIGS, type SedeConfig } from '../config/sedeConfig';
import './SedesPage.css';

export type Sede = SedeConfig;

// Get the campuses in the order defined in SEDE_CONFIGS
const SEDES_LIST: Sede[] = Object.values(SEDE_CONFIGS);

// Ícono SVG profesional de edificio/arquitectura
const CAMPUS_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 1 1 8 0v4" />
    <path d="M12 15v3" />
    <path d="M9 15v3" />
    <path d="M15 15v3" />
  </svg>
);

export default function SedesPage() {
  const navigate = useNavigate();

  return (
    <div className="sedes-container">
      {/* Header */}
      <div className="sedes-header">
        <h1 className="sedes-title">Bienvenido</h1>
        <p className="sedes-subtitle">SELECCIONA TU SEDE</p>
      </div>

      {/* Grid de sedes */}
      <div className="sedes-grid">
        {SEDES_LIST.map((sede) => (
          <button
            key={sede.id}
            className="sede-card"
            style={{ '--acento': sede.acento, '--color': sede.color } as React.CSSProperties}
            onClick={() => navigate(`/${sede.id}`)}
          >
            {/* Imagen de fondo */}
            <img src={campusBg} alt="" className="sede-card-bg" />

            {/* Gradiente inferior para legibilidad */}
            <div className="sede-card-gradient" />

            {/* Contenido */}
            <div className="sede-card-content">
              <div className="sede-icon">
                {CAMPUS_ICON}
              </div>
              <div className="sede-info">
                <span className="sede-nombre">{sede.nombre}</span>
                <span className="sede-ciudad">{sede.nombreCorto}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
