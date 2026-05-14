import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container } from '@tsparticles/engine';
import logoEspe from './assets/logo_espe_black.webp';
import SedesPage from './components/SedesPage';
import PlacesPage from './components/PlacesPage';
import Viewer360 from './components/Viewer360';
import AdminPanel from './components/AdminPanel';
import './index.css';
import './components/HomePage.css';

// ── Particles config ──────────────────────────────────────────────────────────
const particlesConfig = (isDark: boolean) => ({
  fullScreen: { enable: false, zIndex: 0 },
  background: { color: { value: 'transparent' } },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: true, mode: 'push' },
      onHover: { enable: true, mode: 'repulse' },
      resize: { enable: true },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: isDark ? ['#ffffff'] : ['#4D4D4D', '#666666', '#808080'] },
    links: {
      color: isDark ? '#ffffff' : '#4D4D4D',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
      triangles: { enable: true, color: isDark ? '#ffffff' : '#4D4D4D', opacity: 0.1 },
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'out' },
      random: true,
      speed: 2.5,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: isDark ? 80 : 200 },
    opacity: {
      value: { min: 0.1, max: 0.6 },
      animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false },
    },
    shape: {
      type: ['circle', 'polygon'],
      options: { polygon: { sides: 3 } },
    },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
});

function ParticlesBackground({ isDark = false }: { isDark?: boolean }) {
  const [particlesInit, setParticlesInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesInit(true));
  }, []);

  const particlesLoaded = useCallback(async (_container?: Container) => {}, []);

  if (!particlesInit) return null;

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig(isDark) as any}
      particlesLoaded={particlesLoaded}
      className="particles-canvas"
    />
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container" onClick={() => navigate('/sedes')}>
      <div className="bg-radial-glow" />
      <ParticlesBackground isDark={true} />
      <div className="screen-wrapper" style={{ cursor: 'pointer' }}>
        <div className="home-content">
          <div className="logo-wrapper">
            <img 
              src={logoEspe} 
              alt="ESPE – Nuestro Mundo" 
              className="logo-image" 
            />
          </div>
          <div className="divider" />
          <p className="cta-text">Toca la pantalla para comenzar</p>
        </div>
      </div>
    </div>
  );
}

function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="home-container" style={{ cursor: 'default' }}>
      <div className="bg-radial-glow" />
      <ParticlesBackground isDark={true} />
      <div className="screen-wrapper" style={{ alignItems: 'stretch', justifyContent: 'stretch' }}>
        {children}
      </div>
    </div>
  );
}

// Wrappers to force remount on place change, preventing state bleed between views
function Viewer360Wrapper() {
  const { placeSlug } = useParams<{ placeSlug: string }>();
  return <Viewer360 key={placeSlug || 'default'} />;
}

function AdminPanelWrapper() {
  const { placeSlug } = useParams<{ placeSlug: string }>();
  return <AdminPanel key={placeSlug || 'admin'} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sedes" element={<AppShell><SedesPage /></AppShell>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AppShell><AdminPanelWrapper /></AppShell>} />
        <Route path="/admin/:sedeId" element={<AppShell><AdminPanelWrapper /></AppShell>} />
        <Route path="/admin/:sedeId/:placeSlug" element={<AppShell><AdminPanelWrapper /></AppShell>} />

        {/* Public Routes */}
        <Route path="/:sedeId" element={<AppShell><PlacesPage /></AppShell>} />
        <Route path="/:sedeId/:placeSlug" element={<Viewer360Wrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
