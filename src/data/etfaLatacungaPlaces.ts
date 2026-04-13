// data/etfaLatacungaPlaces.ts
import { type Place360 } from './esforcePlaces';

export const ETFA_LATACUNGA_PLACES: Place360[] = [
  { 
    id: 'etfa_1', 
    name: 'Acceso Principal', 
    imageFileName: 'acceso_principal.JPG',
    category: 'Acceso y Circulación',
    description: 'Entrada principal a la Escuela Técnica de la Fuerza Aérea (ETFA) en Latacunga.',
    mapCoords: { x: 50, y: 75 },
    hotspots: [
      { id: 'hs_etfa1_etfa2', yaw: 0, pitch: 0, targetPlaceId: 'etfa_2', label: 'Ir al Patio de Formación' }
    ]
  },
  { 
    id: 'etfa_2', 
    name: 'Patio de Formación', 
    imageFileName: 'patio_de_formacion.JPG',
    category: 'Formación Militar',
    description: 'Gran patio central para formaciones y eventos ceremoniales de la ETFA.',
    mapCoords: { x: 50, y: 50 },
    hotspots: [
      { id: 'hs_etfa2_etfa1', yaw: 3.14, pitch: 0, targetPlaceId: 'etfa_1', label: 'Volver al Acceso' },
      { id: 'hs_etfa2_etfa3', yaw: 0, pitch: 0, targetPlaceId: 'etfa_3', label: 'Ver otra perspectiva del patio' }
    ]
  },
  { 
    id: 'etfa_3', 
    name: 'Patio de Formación 2', 
    imageFileName: 'patio_de_formacion_2.JPG',
    category: 'Formación Militar',
    description: 'Vista complementaria del patio de formación habitual.',
    mapCoords: { x: 50, y: 45 },
    hotspots: []
  },
  { 
    id: 'etfa_4', 
    name: 'Camino Aulas', 
    imageFileName: 'camino_aulas_de_formacion.JPG',
    category: 'Acceso y Circulación',
    description: 'Pasillo de conexión hacia los bloques de aulas académicas.',
    mapCoords: { x: 15, y: 40 },
    hotspots: [
      { id: 'hs_etfa4_etfa5', yaw: 0, pitch: 0, targetPlaceId: 'etfa_5', label: 'Entrar a las Aulas' }
    ]
  },
  { 
    id: 'etfa_5', 
    name: 'Bloque de Aulas', 
    imageFileName: 'aulas.JPG',
    category: 'Instrucción Técnica',
    description: 'Zona de aulas para la formación teórica de los alumnos técnicos.',
    mapCoords: { x: 15, y: 35 },
    hotspots: []
  },
  { 
    id: 'etfa_6', 
    name: 'Espacio de Instrucción 1', 
    imageFileName: 'espacio_de_instruccion.JPG',
    category: 'Instrucción Técnica',
    description: 'Área dedicada a la instrucción práctica y técnica aeronáutica.',
    mapCoords: { x: 80, y: 30 },
    hotspots: []
  },
  { 
    id: 'etfa_7', 
    name: 'Espacio de Instrucción 2', 
    imageFileName: 'espacio_de_instruccion_2.JPG',
    category: 'Instrucción Técnica',
    description: 'Laboratorio técnico avanzado para prácticas de mantenimiento.',
    mapCoords: { x: 82, y: 30 },
    hotspots: []
  },
  { 
    id: 'etfa_8', 
    name: 'Espacio de Instrucción 3', 
    imageFileName: 'espacio_de_instruccion2.JPG',
    category: 'Instrucción Técnica',
    description: 'Vista adicional de las áreas de entrenamiento técnico.',
    mapCoords: { x: 84, y: 30 },
    hotspots: []
  },
  { 
    id: 'etfa_9', 
    name: 'Vista Aérea 1', 
    imageFileName: '20260302094431_0047_d.JPG',
    category: 'Panorámicas',
    description: 'Vista panorámica aérea de las instalaciones de la ETFA.',
    mapCoords: { x: 20, y: 15 },
    hotspots: []
  },
  { 
    id: 'etfa_10', 
    name: 'Vista Aérea 2', 
    imageFileName: '20260302112553_0067_d.JPG',
    category: 'Panorámicas',
    description: 'Segunda perspectiva aérea del campus técnico.',
    mapCoords: { x: 70, y: 15 },
    hotspots: []
  }
];
