// data/iwiasPlaces.ts
import { type Place360 } from './esforcePlaces';

export const IWIAS_PLACES: Place360[] = [
  { 
    id: 'iwias_1', 
    name: 'Acceso Principal', 
    imageFileName: 'acceso_principal.JPG',
    category: 'Acceso y Base',
    description: 'Entrada principal a la Escuela de Selva IWIAS en Puyo, Amazonía ecuatoriana.',
    mapCoords: { x: 50, y: 85 },
    hotspots: [
      { id: 'hs_iw1_iw2', yaw: 0, pitch: 0, targetPlaceId: 'iwias_2', label: 'Ir al Patio de Formación' }
    ]
  },
  { 
    id: 'iwias_2', 
    name: 'Patio de Formación', 
    imageFileName: 'patio_formacion.JPG',
    category: 'Acceso y Base',
    description: 'Área central para la formación de los guerreros de selva IWIAS.',
    mapCoords: { x: 50, y: 50 },
    hotspots: [
      { id: 'hs_iw2_iw1', yaw: 3.14, pitch: 0, targetPlaceId: 'iwias_1', label: 'Volver al Acceso' },
      { id: 'hs_iw2_iw3', yaw: 0, pitch: 0, targetPlaceId: 'iwias_3', label: 'Ir a las Aulas' },
      { id: 'hs_iw2_iw5', yaw: 1.57, pitch: 0, targetPlaceId: 'iwias_5', label: 'Ir a Pistas de Entrenamiento' }
    ]
  },
  { 
    id: 'iwias_3', 
    name: 'Aula de Selva 1', 
    imageFileName: 'aula1.JPG',
    category: 'Académico',
    description: 'Primer bloque de aulas diseñadas para la formación en tácticas de selva.',
    mapCoords: { x: 15, y: 40 },
    hotspots: [
      { id: 'hs_iw3_iw4', yaw: 0, pitch: 0, targetPlaceId: 'iwias_4', label: 'Ver Aula 2' }
    ]
  },
  { 
    id: 'iwias_4', 
    name: 'Aula de Selva 2', 
    imageFileName: 'aulas_2.JPG',
    category: 'Académico',
    description: 'Segunda sala de instrucción para el personal militar de élite.',
    mapCoords: { x: 15, y: 35 },
    hotspots: []
  },
  { 
    id: 'iwias_5', 
    name: 'Entrada Pistas', 
    imageFileName: 'entrada_pista_de_entrenamiento.JPG',
    category: 'Entrenamiento',
    description: 'Punto de inicio para el entrenamiento físico y táctico en ambiente selvático.',
    mapCoords: { x: 80, y: 60 },
    hotspots: [
      { id: 'hs_iw5_iw6', yaw: 0, pitch: 0, targetPlaceId: 'iwias_6', label: 'Ir a Pista 1' }
    ]
  },
  { 
    id: 'iwias_6', 
    name: 'Pista de Entrenamiento 1', 
    imageFileName: 'pista_de_entrenamiento_1.JPG',
    category: 'Entrenamiento',
    description: 'Carrusel de obstáculos y entrenamiento especializado de los IWIAS.',
    mapCoords: { x: 82, y: 60 },
    hotspots: [
      { id: 'hs_iw6_iw7', yaw: 0, pitch: 0, targetPlaceId: 'iwias_7', label: 'Ir a Pista 2' }
    ]
  },
  { 
    id: 'iwias_7', 
    name: 'Pista de Entrenamiento 2', 
    imageFileName: 'pista_de_entrenamiento_2.JPG',
    category: 'Entrenamiento',
    description: 'Zona avanzada de entrenamiento físico para guerreros de selva.',
    mapCoords: { x: 84, y: 60 },
    hotspots: []
  }
];
