import { type Place360 } from './esforcePlaces';

export const ESMA_PLACES: Place360[] = [
  {
    id: 'esma-1',
    name: 'Entrada Principal',
    imageFileName: 'ENTRADA_DJI_20260211121636_0107_D.JPG',
    category: 'Acceso y Bienvenida',
    description: 'Acceso principal a la Escuela Militar de Aviación (ESMA) en Salinas. Punto de control e ingreso oficial a las instalaciones.',
    mapCoords: { x: 50, y: 90 },
    hotspots: [
      { id: 'esma_1_2', yaw: 0.1, pitch: -0.05, targetPlaceId: 'esma-2', label: 'Ir a las Aulas' },
      { id: 'esma_1_5', yaw: 1.5, pitch: -0.05, targetPlaceId: 'esma-5', label: 'Ir a Pista de Entrenamiento' }
    ]
  },
  {
    id: 'esma-2',
    name: 'Aulas - Vista 1',
    imageFileName: 'AULAS_DJI_20260211120541_0105_D.JPG',
    category: 'Zona Académica',
    description: 'Complejo académico de la ESMA. Instalaciones donde los cadetes reciben instrucción teórica y práctica especializada.',
    mapCoords: { x: 35, y: 40 },
    hotspots: [
      { id: 'esma_2_1', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esma-1', label: 'Volver a Entrada' },
      { id: 'esma_2_3', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esma-3', label: 'Aulas - Vista 2' }
    ]
  },
  {
    id: 'esma-3',
    name: 'Aulas - Vista 2',
    imageFileName: 'AULAS_DJI_20260211141544_0135_D.JPG',
    category: 'Zona Académica',
    description: 'Segunda perspectiva del complejo académico de la ESMA, mostrando la distribución de los bloques de instrucción.',
    mapCoords: { x: 40, y: 45 },
    hotspots: [
      { id: 'esma_3_2', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esma-2', label: 'Volver a Aulas 1' },
      { id: 'esma_3_4', yaw: 1.0, pitch: -0.05, targetPlaceId: 'esma-4', label: 'Ir al Cóndor' }
    ]
  },
  {
    id: 'esma-4',
    name: 'Área del Cóndor - Vista 1',
    imageFileName: 'CONDOR_DJI_20260211161230_0140_D.JPG',
    category: 'Zonas Especiales',
    description: 'Área del Cóndor de la ESMA Salinas. Zona emblemática de la institución con vistas panorámicas de las instalaciones.',
    mapCoords: { x: 75, y: 20 },
    hotspots: [
      { id: 'esma_4_5', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esma-5', label: 'Segunda Vista Cóndor' },
      { id: 'esma_4_3', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esma-3', label: 'Volver a Aulas' }
    ]
  },
  {
    id: 'esma-5',
    name: 'Área del Cóndor - Vista 2',
    imageFileName: 'CONDOR_DJI_20260211161551_0142_D.JPG',
    category: 'Zonas Especiales',
    description: 'Panorámica complementaria del área del Cóndor, mostrando el entorno estratégico y la distribución del campus.',
    mapCoords: { x: 78, y: 18 },
    hotspots: [
      { id: 'esma_5_4', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esma-4', label: 'Volver a Cóndor 1' },
      { id: 'esma_5_6', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esma-6', label: 'Ir a Pista 1' }
    ]
  },
  {
    id: 'esma-6',
    name: 'Pista de Entrenamiento - Vista 1',
    imageFileName: 'PISTA_DE_NETENAMIENTO_DJI_20260211160617_0138_D.JPG',
    category: 'Entrenamiento Físico',
    description: 'Pista de entrenamiento físico de la ESMA. Instalación destinada al desarrollo de las capacidades atléticas de los cadetes.',
    mapCoords: { x: 80, y: 60 },
    hotspots: [
      { id: 'esma_6_7', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esma-7', label: 'Pista - Vista 2' },
      { id: 'esma_6_1', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esma-1', label: 'Volver a Entrada' }
    ]
  },
  {
    id: 'esma-7',
    name: 'Pista de Entrenamiento - Vista 2',
    imageFileName: 'PISTA_DE_NETENAMIENTO_DJI_20260211160738_0139_D.JPG',
    category: 'Entrenamiento Físico',
    description: 'Segunda perspectiva de la pista de entrenamiento, evidenciando la amplitud de las instalaciones deportivas y militares.',
    mapCoords: { x: 82, y: 65 },
    hotspots: [
      { id: 'esma_7_6', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esma-6', label: 'Volver a Pista 1' },
      { id: 'esma_7_1', yaw: 0.0, pitch: -0.05, targetPlaceId: 'esma-1', label: 'Ir a Entrada' }
    ]
  }
];
