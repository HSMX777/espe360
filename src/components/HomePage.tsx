import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container } from '@tsparticles/engine';
import logoO from '../assets/logo_o.png';
import './HomePage.css';

// ── Exact same config as totem_otavalo_ecuador ─────────────────────────────
const particlesConfig = {
  fullScreen: { enable: false, zIndex: 0 },
  background: {
    color: { value: 'transparent' },
  },
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
    color: { value: ['#A71680', '#FBBA00', '#ffffff'] },
    links: {
      color: '#FBBA00',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
      triangles: {
        enable: true,
        color: '#A71680',
        opacity: 0.05,
      },
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'out' },
      random: true,
      speed: 0.8,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 120,
    },
    opacity: {
      value: { min: 0.1, max: 0.6 },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
        sync: false,
      },
    },
    shape: {
      type: ['circle', 'polygon'],
      options: {
        polygon: { sides: 3 },
      },
    },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};
// ────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (_container?: Container) => {}, []);

  return (
    <div className="home-container">
      {/* Radial background glow — matches original */}
      <div className="bg-radial-glow" />

      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig as any}
          particlesLoaded={particlesLoaded}
          className="particles-canvas"
        />
      )}

      <div className="home-content">
        <div className="logo-wrapper">
          <img
            src={logoO}
            alt="Otavalo – Nuestro Mundo"
            className="logo-image"
          />
        </div>

        {/* Golden divider — same as original */}
        <div className="divider" />

        <p className="cta-text">Toca la pantalla para comenzar</p>
      </div>
    </div>
  );
}
