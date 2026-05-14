import { useNavigate } from 'react-router-dom';
import campusBg from '../assets/campus_bg.png';
import { SEDE_CONFIGS, type SedeConfig } from '../config/sedeConfig';
import './SedesPage.css';

export type Sede = SedeConfig;

// Get the campuses in the order defined in SEDE_CONFIGS
const SEDES_LIST: Sede[] = Object.values(SEDE_CONFIGS);

export default function SedesPage() {
  const navigate = useNavigate();

  return (
    <div className="sedes-container">
      {/* Header */}
      <div className="sedes-header">
        <h1 className="sedes-title">SEDES</h1>
        <p className="sedes-subtitle">SELECCIONA TU SEDE</p>
      </div>

      {/* Grid de sedes */}
      <div className="sedes-grid">
        {SEDES_LIST.map((sede, index) => (
          <button
            key={sede.id}
            className="sede-card"
            style={{ 
              '--acento': sede.acento, 
              '--color': sede.color,
              animationDelay: `${index * 0.1}s`
            } as React.CSSProperties}
            onClick={() => navigate(`/${sede.id}`)}
          >
            {/* Imagen de fondo */}
            <img src={campusBg} alt="" className="sede-card-bg" />

            {/* Gradiente inferior para legibilidad */}
            <div className="sede-card-gradient" />

            {/* Contenido */}
            <div className="sede-card-content">

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
