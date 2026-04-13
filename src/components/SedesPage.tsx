import campusBg from '../assets/campus_bg.png';
import { SEDE_CONFIGS, type SedeConfig } from '../config/sedeConfig';
import './SedesPage.css';

export type Sede = SedeConfig;

export const SEDES: Sede[] = Object.values(SEDE_CONFIGS);

// Íconos SVG path para cada tipo de sede
const getIcon = (id: string) => {
  switch (id) {
    case 'matriz':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M3 7l9-4 9 4v3H3V7zm4 3v9m4-9v9m4-9v9m4-9v9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'idiomas':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 8l6 6m-2-8s-2 4-2 8m6-12s2 4 2 8M2 12h20M12 2a10 10 0 110 20A10 10 0 0112 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'iwias':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s-8-6.75-8-13.5a8 8 0 1116 0C20 15.25 12 22 12 22z" strokeLinecap="round"/>
          <circle cx="12" cy="8.5" r="2.5" strokeLinecap="round"/>
        </svg>
      );
    case 'iasa':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="10" width="18" height="11" rx="1" strokeLinecap="round"/>
          <path d="M3 10l9-7 9 7" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="9" y="14" width="6" height="7" rx="0.5"/>
        </svg>
      );
  }
};

interface Props {
  onSedeSelect: (sede: Sede) => void;
}

export default function SedesPage({ onSedeSelect }: Props) {
  return (
    <div className="sedes-container">
      {/* Header */}
      <div className="sedes-header">
        <h1 className="sedes-title">Bienvenido</h1>
        <p className="sedes-subtitle">SELECCIONA TU SEDE</p>
      </div>

      {/* Grid de sedes */}
      <div className="sedes-grid">
        {SEDES.map((sede) => (
          <button
            key={sede.id}
            className="sede-card"
            style={{ '--acento': sede.acento, '--color': sede.color } as React.CSSProperties}
            onClick={() => onSedeSelect(sede)}
          >
            {/* Imagen de fondo */}
            <img src={campusBg} alt="" className="sede-card-bg" />

            {/* Gradiente inferior para legibilidad */}
            <div className="sede-card-gradient" />

            {/* Contenido */}
            <div className="sede-card-content">
              <div className="sede-icon">
                {getIcon(sede.id)}
              </div>
              <div className="sede-info">
                <span className="sede-nombre">{sede.nombreCorto}</span>
                <span className="sede-ciudad">{sede.ciudad}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
