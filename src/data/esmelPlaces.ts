// data/esmelPlaces.ts
import { type Place360 } from './esforcePlaces';

export const ESMEL_PLACES: Place360[] = [
  // --- ACCESO PRINCIPAL ---
  { 
    id: 'esmel_a1', 
    name: 'Acceso Principal 1', 
    imageFileName: 'acceso_1.JPG',
    category: 'Administración y Bienvenida',
    description: 'Entrada principal a la Escuela de Misiones Especiales (ESMIL) en Quito. Punto de control y bienvenida.',
    mapCoords: { x: 50, y: 92 },
    hotspots: [
      { id: 'hs_a1_a2', yaw: 0, pitch: 0, targetPlaceId: 'esmel_a2', label: 'Avanzar al Patio' },
      { id: 'hs_a1_au1', yaw: 0.5, pitch: 0, targetPlaceId: 'esmel_au1', label: 'Ir a Aulas' }
    ]
  },
  { 
    id: 'esmel_a2', 
    name: 'Acceso Principal 2', 
    imageFileName: 'acceso_2.JPG',
    category: 'Administración y Bienvenida',
    description: 'Continuación del acceso principal, vista hacia el patio de armas y edificios administrativos.',
    mapCoords: { x: 50, y: 88 },
    hotspots: [
      { id: 'hs_a2_a1', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_a1', label: 'Volver a la Entrada' },
      { id: 'hs_a2_a3', yaw: 0, pitch: 0, targetPlaceId: 'esmel_a3', label: 'Avanzar al Centro' }
    ]
  },
  { 
    id: 'esmel_a3', 
    name: 'Acceso Principal 3', 
    imageFileName: 'acceso_3.JPG',
    category: 'Administración y Bienvenida',
    description: 'Intersección central entre el acceso y los bloques de formación.',
    mapCoords: { x: 50, y: 84 },
    hotspots: [
      { id: 'hs_a3_a2', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_a2', label: 'Volver al Patio' },
      { id: 'hs_a3_a4', yaw: 0, pitch: 0, targetPlaceId: 'esmel_a4', label: 'Ver fachada posterior' }
    ]
  },
  { 
    id: 'esmel_a4', 
    name: 'Acceso Principal 4', 
    imageFileName: 'acceso_4.JPG',
    category: 'Administración y Bienvenida',
    description: 'Vista detallada de la arquitectura institucional del bloque de misiones especiales.',
    mapCoords: { x: 50, y: 80 },
    hotspots: [
      { id: 'hs_a4_a3', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_a3', label: 'Volver al Centro' }
    ]
  },

  // --- AULAS ---
  { 
    id: 'esmel_au1', 
    name: 'Aulas de Formación 1', 
    imageFileName: 'aulas_1.JPG',
    category: 'Zona Académica',
    description: 'Pabellón de aulas de formación militar, donde se imparte doctrina y táctica.',
    mapCoords: { x: 22, y: 45 },
    hotspots: [
      { id: 'hs_au1_a1', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_a1', label: 'Volver al Acceso' },
      { id: 'hs_au1_au2', yaw: 0, pitch: 0, targetPlaceId: 'esmel_au2', label: 'Siguiente Bloque de Aulas' }
    ]
  },
  { 
    id: 'esmel_au2', 
    name: 'Aulas de Formación 2', 
    imageFileName: 'aulas_2.JPG',
    category: 'Zona Académica',
    description: 'Vista interna de los pasillos y áreas de estudio de los comandos.',
    mapCoords: { x: 22, y: 40 },
    hotspots: [
      { id: 'hs_au2_au1', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_au1', label: 'Volver al Bloque 1' }
    ]
  },

  // --- LABORATORIOS ---
  { 
    id: 'esmel_l1', 
    name: 'Laboratorios 1', 
    imageFileName: 'lab_1.JPG',
    category: 'Zona Académica',
    description: 'Espacios de instrucción técnica para misiones especiales.',
    mapCoords: { x: 78, y: 45 },
    hotspots: [
      { id: 'hs_l1_a1', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_a1', label: 'Volver al Acceso' },
      { id: 'hs_l1_l2', yaw: 0, pitch: 0, targetPlaceId: 'esmel_l2', label: 'Avanzar en el Laboratorio' }
    ]
  },
  { 
    id: 'esmel_l2', 
    name: 'Laboratorios 2', 
    imageFileName: 'lab_2.JPG',
    category: 'Zona Académica',
    description: 'Área de equipos y simuladores de alta tecnología.',
    mapCoords: { x: 78, y: 40 },
    hotspots: [
      { id: 'hs_l2_l1', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_l1', label: 'Volver al Inicio' },
      { id: 'hs_l2_l3', yaw: 0, pitch: 0, targetPlaceId: 'esmel_l3', label: 'Siguiente Sala' }
    ]
  },
  { 
    id: 'esmel_l3', 
    name: 'Laboratorios 3', 
    imageFileName: 'lab_3.JPG',
    category: 'Zona Académica',
    description: 'Centro de control operativo y planificación táctica.',
    mapCoords: { x: 78, y: 35 },
    hotspots: [
      { id: 'hs_l3_l2', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_l2', label: 'Regresar Sala 2' },
      { id: 'hs_l3_l4', yaw: 0, pitch: 0, targetPlaceId: 'esmel_l4', label: 'Ver Final del Pasillo' }
    ]
  },
  { 
    id: 'esmel_l4', 
    name: 'Laboratorios 4', 
    imageFileName: 'lab_4.JPG',
    category: 'Zona Académica',
    description: 'Vista complementaria de las instalaciones de investigación militar.',
    mapCoords: { x: 78, y: 30 },
    hotspots: [
      { id: 'hs_l4_l3', yaw: 3.14, pitch: 0, targetPlaceId: 'esmel_l3', label: 'Regresar Sala 3' }
    ]
  }
];
