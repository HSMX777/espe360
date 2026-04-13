// data/iasaPlaces.ts
import { type Place360 } from './esforcePlaces';

export const IASA_PLACES: Place360[] = [
  { 
    id: 'iasa_1', 
    name: 'Acceso Principal 1', 
    imageFileName: 'acceso_principal_1.JPG',
    category: 'Acceso',
    description: 'Entrada a la Hacienda IASA en Sangolquí, sede de la Facultad de Ciencias Agropecuarias.',
    mapCoords: { x: 50, y: 85 },
    hotspots: [
      { id: 'hs_iasa1_iasa2', yaw: 0, pitch: 0, targetPlaceId: 'iasa_2', label: 'Ver otra vista del Acceso' }
    ]
  },
  { 
    id: 'iasa_2', 
    name: 'Acceso Principal 2', 
    imageFileName: 'acceso_principal_2.JPG',
    category: 'Acceso',
    description: 'Vista interna del ingreso a las áreas de cultivo y administración.',
    mapCoords: { x: 52, y: 82 },
    hotspots: [
      { id: 'hs_iasa2_iasa1', yaw: 3.14, pitch: 0, targetPlaceId: 'iasa_1', label: 'Volver a la Entrada' },
      { id: 'hs_iasa2_iasa3', yaw: 0, pitch: 0, targetPlaceId: 'iasa_3', label: 'Ir al Invernadero' }
    ]
  },
  { 
    id: 'iasa_3', 
    name: 'Invernadero Agropecuario', 
    imageFileName: 'invernadero_agropecuario.JPG',
    category: 'Invernaderos',
    description: 'Instalaciones para el cultivo controlado e investigación botánica de la ESPE.',
    mapCoords: { x: 45, y: 30 },
    hotspots: [
      { id: 'hs_iasa3_iasa2', yaw: 3.14, pitch: 0, targetPlaceId: 'iasa_2', label: 'Volver al Acceso' }
    ]
  }
];
