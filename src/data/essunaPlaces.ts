import { type Place360 } from './esforcePlaces';

export const ESSUNA_PLACES: Place360[] = [
  {
    id: 'essuna-1',
    name: 'Acceso Principal - Vista 1',
    imageFileName: 'ACCESO_PRINCIPAL_DJI_20260211110825_0097_D.JPG',
    category: 'Acceso y Bienvenida',
    description: 'Acceso principal a la Escuela Superior de la Marina (ESSUNA) en Salinas.',
    mapCoords: { x: 50, y: 88 },
    hotspots: [
      { id: 'essuna_1_2', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-2', label: 'Acceso - Vista 2' },
      { id: 'essuna_1_3', yaw: 1.5, pitch: -0.05, targetPlaceId: 'essuna-3', label: 'Ir a Aulas' }
    ]
  },
  {
    id: 'essuna-2',
    name: 'Acceso Principal - Vista 2',
    imageFileName: 'ACCESO_PRINCIPAL_DJI_20260211110938_0098_D.JPG',
    category: 'Acceso y Bienvenida',
    description: 'Segunda perspectiva del acceso principal de la ESSUNA.',
    mapCoords: { x: 50, y: 85 },
    hotspots: [
      { id: 'essuna_2_1', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-1', label: 'Volver a Acceso 1' },
      { id: 'essuna_2_3', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-3', label: 'Ir a Aulas' }
    ]
  },
  {
    id: 'essuna-3',
    name: 'Aulas - Vista 1',
    imageFileName: 'ESPACIOS_COMUNES_AUALS_DJI_20260211083450_0065_D.JPG',
    category: 'Zona Académica',
    description: 'Aulas de la ESSUNA, instalaciones académicas para la formación naval.',
    mapCoords: { x: 40, y: 50 },
    hotspots: [
      { id: 'essuna_3_4', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-4', label: 'Aulas - Vista 2' },
      { id: 'essuna_3_1', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-1', label: 'Volver a Acceso' }
    ]
  },
  {
    id: 'essuna-4',
    name: 'Aulas - Vista 2',
    imageFileName: 'ESPACIOS_COMUNES_AUALS_DJI_20260211083737_0066_D.JPG',
    category: 'Zona Académica',
    description: 'Segunda perspectiva de las aulas de instrucción naval.',
    mapCoords: { x: 40, y: 48 },
    hotspots: [
      { id: 'essuna_4_3', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-3', label: 'Aulas - Vista 1' },
      { id: 'essuna_4_5', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-5', label: 'Aulas - Vista 3' }
    ]
  },
  {
    id: 'essuna-5',
    name: 'Aulas - Vista 3',
    imageFileName: 'ESPACIOS_COMUNES_AUALS_DJI_20260211084212_0067_D.JPG',
    category: 'Zona Académica',
    description: 'Tercera perspectiva del complejo académico de la ESSUNA.',
    mapCoords: { x: 42, y: 46 },
    hotspots: [
      { id: 'essuna_5_4', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-4', label: 'Aulas - Vista 2' },
      { id: 'essuna_5_6', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-6', label: 'Espacios Comunes 1' }
    ]
  },
  {
    id: 'essuna-6',
    name: 'Espacios Comunes - Vista 1',
    imageFileName: 'ESPACIOS_COMUNES_DJI_20260211085129_0068_D.JPG',
    category: 'Espacios de Tránsito',
    description: 'Espacios comunes de la ESSUNA, zonas de descanso y tránsito entre instalaciones.',
    mapCoords: { x: 48, y: 52 },
    hotspots: [
      { id: 'essuna_6_5', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-5', label: 'Volver a Aulas' },
      { id: 'essuna_6_7', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-7', label: 'Espacios Comunes 2' }
    ]
  },
  {
    id: 'essuna-7',
    name: 'Espacios Comunes - Vista 2',
    imageFileName: 'ESPACIOS_COMUNES_DJI_20260211085304_0069_D.JPG',
    category: 'Espacios de Tránsito',
    description: 'Segunda perspectiva de los espacios comunes del campus naval.',
    mapCoords: { x: 50, y: 50 },
    hotspots: [
      { id: 'essuna_7_6', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-6', label: 'Espacios Comunes 1' },
      { id: 'essuna_7_8', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-8', label: 'Ir a Biblioteca' }
    ]
  },
  {
    id: 'essuna-8',
    name: 'Biblioteca',
    imageFileName: 'ESPACIOS_COMUNES_BIBLIOTECA_DJI_20260211101124_0077_D.JPG',
    category: 'Servicios Académicos',
    description: 'Biblioteca de la ESSUNA con recursos especializados en ciencias navales.',
    mapCoords: { x: 55, y: 48 },
    hotspots: [
      { id: 'essuna_8_7', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-7', label: 'Espacios Comunes' },
      { id: 'essuna_8_9', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-9', label: 'Ir a Helipuerto' }
    ]
  },
  {
    id: 'essuna-9',
    name: 'Helipuerto',
    imageFileName: 'ESPACIOS_COMUNES_HELIPUERTO_DJI_20260211105444_0080_D.JPG',
    category: 'Instalaciones Especiales',
    description: 'Helipuerto de la ESSUNA Salinas, plataforma de operaciones aéreas navales.',
    mapCoords: { x: 72, y: 20 },
    hotspots: [
      { id: 'essuna_9_8', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-8', label: 'Volver a Biblioteca' },
      { id: 'essuna_9_10', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-10', label: 'Ir a Plachanda 1' }
    ]
  },
  {
    id: 'essuna-10',
    name: 'Plachanda - Vista 1',
    imageFileName: 'ESPACIOS_COMUNES_PLACHANDA_DJI_20260211082111_0058_D.JPG',
    category: 'Instalaciones Navales',
    description: 'Plachanda de la ESSUNA, muelle de operaciones marítimas y entrenamiento naval.',
    mapCoords: { x: 18, y: 75 },
    hotspots: [
      { id: 'essuna_10_9', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-9', label: 'Volver a Helipuerto' },
      { id: 'essuna_10_11', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-11', label: 'Plachanda - Vista 2' }
    ]
  },
  {
    id: 'essuna-11',
    name: 'Plachanda - Vista 2',
    imageFileName: 'ESPACIOS_COMUNES_PLACHANDA_DJI_20260211082230_0059_D.JPG',
    category: 'Instalaciones Navales',
    description: 'Segunda perspectiva de la plachanda y zona de embarque.',
    mapCoords: { x: 16, y: 72 },
    hotspots: [
      { id: 'essuna_11_10', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-10', label: 'Plachanda 1' },
      { id: 'essuna_11_12', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-12', label: 'Plachanda - Vista 3' }
    ]
  },
  {
    id: 'essuna-12',
    name: 'Plachanda - Vista 3',
    imageFileName: 'ESPACIOS_COMUNES_PLACHANDA_DJI_20260211082911_0060_D.JPG',
    category: 'Instalaciones Navales',
    description: 'Tercera perspectiva de la plachanda, mostrando las operaciones marítimas.',
    mapCoords: { x: 15, y: 70 },
    hotspots: [
      { id: 'essuna_12_11', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-11', label: 'Plachanda 2' },
      { id: 'essuna_12_13', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-13', label: 'Plachanda - Vista 4' }
    ]
  },
  {
    id: 'essuna-13',
    name: 'Plachanda - Vista 4',
    imageFileName: 'ESPACIOS_COMUNES_PLACHANDA_DJI_20260211083040_0061_D.JPG',
    category: 'Instalaciones Navales',
    description: 'Última perspectiva de la zona de plachanda y las instalaciones costeras.',
    mapCoords: { x: 14, y: 68 },
    hotspots: [
      { id: 'essuna_13_12', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-12', label: 'Plachanda 3' },
      { id: 'essuna_13_14', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-14', label: 'Ir a Pistas' }
    ]
  },
  {
    id: 'essuna-14',
    name: 'Pistas de Entrenamiento - Vista 1',
    imageFileName: 'PISTAS_DE_NTRENAMIENTO_DJI_20260211085804_0070_D.JPG',
    category: 'Entrenamiento Físico',
    description: 'Pistas de entrenamiento físico de la ESSUNA para el acondicionamiento militar.',
    mapCoords: { x: 75, y: 50 },
    hotspots: [
      { id: 'essuna_14_13', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-13', label: 'Volver a Plachanda' },
      { id: 'essuna_14_15', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-15', label: 'Pistas - Vista 2' }
    ]
  },
  {
    id: 'essuna-15',
    name: 'Pistas de Entrenamiento - Vista 2',
    imageFileName: 'PISTAS_DE_NTRENAMIENTO_DJI_20260211085805_0071_D.JPG',
    category: 'Entrenamiento Físico',
    description: 'Segunda perspectiva de las pistas de entrenamiento naval.',
    mapCoords: { x: 77, y: 52 },
    hotspots: [
      { id: 'essuna_15_14', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-14', label: 'Pistas 1' },
      { id: 'essuna_15_16', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-16', label: 'Pistas - Vista 3' }
    ]
  },
  {
    id: 'essuna-16',
    name: 'Pistas de Entrenamiento - Vista 3',
    imageFileName: 'PISTAS_DE_NTRENAMIENTO_DJI_20260211085809_0072_D.JPG',
    category: 'Entrenamiento Físico',
    description: 'Tercera perspectiva de las instalaciones de entrenamiento físico militar.',
    mapCoords: { x: 79, y: 55 },
    hotspots: [
      { id: 'essuna_16_15', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-15', label: 'Pistas 2' },
      { id: 'essuna_16_17', yaw: 0.5, pitch: -0.05, targetPlaceId: 'essuna-17', label: 'Simulador Náutico' }
    ]
  },
  {
    id: 'essuna-17',
    name: 'Simulador Náutico',
    imageFileName: 'SIMULADOR_NAUTICO_DJI_20260211101558_0078_D.JPG',
    category: 'Instalaciones Especiales',
    description: 'Simulador náutico de la ESSUNA, tecnología avanzada para entrenamiento de maniobras marítimas y navegación.',
    mapCoords: { x: 52, y: 68 },
    hotspots: [
      { id: 'essuna_17_16', yaw: 3.1, pitch: -0.05, targetPlaceId: 'essuna-16', label: 'Volver a Pistas' },
      { id: 'essuna_17_1', yaw: 0.0, pitch: -0.05, targetPlaceId: 'essuna-1', label: 'Ir a Acceso' }
    ]
  }
];
