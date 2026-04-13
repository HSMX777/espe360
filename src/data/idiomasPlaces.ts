// data/idiomasPlaces.ts
import { type Place360 } from './esforcePlaces';

export const IDIOMAS_PLACES: Place360[] = [
  // --- ACCESO ---
  { 
    id: 'idiomas_1', 
    name: 'Acceso Principal 1', 
    imageFileName: 'acceso_principal_20260220103736_0231_d.JPG',
    category: 'Acceso',
    description: 'Ingreso al Instituto de Idiomas de la ESPE en Quito. Arquitectura moderna y urbana.',
    mapCoords: { x: 50, y: 78 },
    hotspots: [
      { id: 'hs_id1_id2', yaw: 0, pitch: 0, targetPlaceId: 'idiomas_2', label: 'Ver fachada' }
    ]
  },
  { 
    id: 'idiomas_2', 
    name: 'Acceso Principal 2', 
    imageFileName: 'acceso_principal_20260220115623_0243_d.JPG',
    category: 'Acceso',
    description: 'Vista exterior del edificio del Instituto de Idiomas.',
    mapCoords: { x: 50, y: 82 },
    hotspots: []
  },

  // --- ACADÉMICO ---
  { 
    id: 'idiomas_3', 
    name: 'Aulas de Idiomas', 
    imageFileName: 'aulas_de_idiomas_20260220104542_0234_d.JPG',
    category: 'Académico',
    description: 'Salones diseñados para el aprendizaje interactivo de lenguas extranjeras.',
    mapCoords: { x: 25, y: 30 },
    hotspots: []
  },
  { 
    id: 'idiomas_4', 
    name: 'Laboratorio de Idiomas', 
    imageFileName: 'laboratorio_de_idiomas_20260220105120_0236_d.JPG',
    category: 'Académico',
    description: 'Laboratorio de alta tecnología con equipos especializados para la práctica fonética.',
    mapCoords: { x: 75, y: 30 },
    hotspots: []
  },

  // --- ESPACIOS COMUNES ---
  { 
    id: 'idiomas_5', 
    name: 'Espacios Comunes 1', 
    imageFileName: 'espacios_comunes_20260220104103_0233_d.JPG',
    category: 'Comunes',
    description: 'Áreas de circulación y descanso para los estudiantes de idiomas.',
    mapCoords: { x: 50, y: 50 },
    hotspots: []
  },
  { 
    id: 'idiomas_6', 
    name: 'Espacios Comunes 2', 
    imageFileName: 'espacios_comunes_20260220104915_0235_d.JPG',
    category: 'Comunes',
    description: 'Zona de integración y estudio libre dentro del instituto.',
    mapCoords: { x: 52, y: 50 },
    hotspots: []
  },
  { 
    id: 'idiomas_7', 
    name: 'Espacios Comunes 3', 
    imageFileName: 'espacios_comunes_20260220105439_0238_d.JPG',
    category: 'Comunes',
    description: 'Vista panorámica de las zonas interiores del edificio.',
    mapCoords: { x: 54, y: 50 },
    hotspots: []
  }
];
