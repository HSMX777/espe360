import { useState, useEffect, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container } from '@tsparticles/engine';
import logoEspe from './assets/logo_espe.png';
import SedesPage, { type Sede } from './components/SedesPage';
import PlacesPage from './components/PlacesPage';
import Viewer360 from './components/Viewer360';
import { SEDE_CONFIGS } from './config/sedeConfig';
import { type Place360 } from './data/esforcePlaces';
import './index.css';
import './components/HomePage.css';

// ── Exact same particles config as totem_otavalo_ecuador ──────────────────────
const particlesConfig = {
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
    color: { value: ['#3f6212', '#1e293b', '#b45309'] },
    links: {
      color: '#4d7c0f',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
      triangles: { enable: true, color: '#1e293b', opacity: 0.1 },
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'out' },
      random: true,
      speed: 0.8,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 120 },
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
};
// ─────────────────────────────────────────────────────────────────────────────

type Screen = 'home' | 'sedes' | 'places_list' | 'viewer360';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [particlesInit, setParticlesInit] = useState(false);
  
  // App Selection State
  const [selectedSede, setSelectedSede] = useState<Sede | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place360 | null>(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesInit(true));
  }, []);

  const particlesLoaded = useCallback(async (_container?: Container) => {}, []);

  const navigateTo = (next: Screen) => {
    setFadeState('out');
    setTimeout(() => {
      setScreen(next);
      setFadeState('in');
    }, 320);
  };

  const handleSedeSelect = (sede: Sede) => {
    setSelectedSede(sede);
    navigateTo('places_list');
  };

  const handlePlaceSelect = (place: Place360) => {
    setSelectedPlace(place);
    navigateTo('viewer360');
  };

  const getPlacesForSede = (sedeId: string) => {
    return SEDE_CONFIGS[sedeId]?.places || [];
  };

  const handleHotspotNavigate = (targetPlaceId: string) => {
    if (!selectedSede) return;
    const currentPlaces = getPlacesForSede(selectedSede.id);
    const nextPlace = currentPlaces.find(p => p.id === targetPlaceId);
    if (nextPlace) {
      setFadeState('out');
      setTimeout(() => {
        setSelectedPlace(nextPlace);
        setFadeState('in');
      }, 320);
    }
  };

  return (
    <div className="home-container">
      {/* Radial background glow */}
      <div className="bg-radial-glow" />

      {/* Global particles — always visible */}
      {particlesInit && (
        <Particles
          id="tsparticles"
          options={particlesConfig as any}
          particlesLoaded={particlesLoaded}
          className="particles-canvas"
        />
      )}

      {/* Screen content with fade transition */}
      <div
        className="screen-wrapper"
        style={{
          opacity: fadeState === 'in' ? 1 : 0,
          transition: 'opacity 0.32s ease',
        }}
      >
        {screen === 'home' && (
          <div
            className="home-content"
            style={{ cursor: 'pointer' }}
            onClick={() => navigateTo('sedes')}
          >
            <div className="logo-wrapper">
              <img src={logoEspe} alt="ESPE – Nuestro Mundo" className="logo-image" />
            </div>
            <div className="divider" />
            <p className="cta-text">Toca la pantalla para comenzar</p>
          </div>
        )}

        {screen === 'sedes' && (
          <SedesPage onSedeSelect={handleSedeSelect} />
        )}

        {screen === 'places_list' && selectedSede && (
          <PlacesPage 
            sede={selectedSede} 
            onPlaceSelect={handlePlaceSelect} 
            onBack={() => navigateTo('sedes')} 
          />
        )}

        {screen === 'viewer360' && selectedPlace && (
          <Viewer360 
            key={selectedPlace.id}
            place={selectedPlace} 
            sede={selectedSede}
            onBack={() => navigateTo('places_list')} 
            onNavigate={handleHotspotNavigate}
          />
        )}
      </div>
    </div>
  );
}
