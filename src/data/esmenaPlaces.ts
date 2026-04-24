import { type Place360 } from './esforcePlaces';

export const ESMENA_PLACES: Place360[] = [
  {
    id: 'esmena-1',
    name: 'Acceso Principal - Vista 1',
    imageFileName: 'ACCESO_PRINICPAL_DJI_20260212104925_0148_D.JPG',
    category: 'Acceso y Bienvenida',
    description: 'Acceso principal a la Escuela Militar de Especialidades del Ejército (ESMENA) en Guayaquil. Entrada oficial del campus.',
    mapCoords: { x: 50, y: 88 },
    hotspots: [
      { id: 'esmena_1_2', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esmena-2', label: 'Acceso - Vista 2' },
      { id: 'esmena_1_5', yaw: 1.5, pitch: -0.05, targetPlaceId: 'esmena-5', label: 'Ir a Aulas' }
    ]
  },
  {
    id: 'esmena-2',
    name: 'Acceso Principal - Vista 2',
    imageFileName: 'ACCESO_PRINICPAL_DJI_20260212104929_0149_D.JPG',
    category: 'Acceso y Bienvenida',
    description: 'Segunda perspectiva del acceso principal de la ESMENA, mostrando el control de ingreso y la vía de acceso vehicular.',
    mapCoords: { x: 50, y: 85 },
    hotspots: [
      { id: 'esmena_2_1', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esmena-1', label: 'Volver a Acceso 1' },
      { id: 'esmena_2_3', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esmena-3', label: 'Acceso - Vista 3' }
    ]
  },
  {
    id: 'esmena-3',
    name: 'Acceso Principal - Vista 3',
    imageFileName: 'ACCESO_PRINICPAL_DJI_20260212104935_0150_D.JPG',
    category: 'Acceso y Bienvenida',
    description: 'Tercera perspectiva del área de acceso, revelando el entorno urbano de Guayaquil que rodea las instalaciones.',
    mapCoords: { x: 52, y: 82 },
    hotspots: [
      { id: 'esmena_3_2', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esmena-2', label: 'Volver a Acceso 2' },
      { id: 'esmena_3_4', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esmena-4', label: 'Acceso - Vista 4' }
    ]
  },
  {
    id: 'esmena-4',
    name: 'Acceso Principal - Vista 4',
    imageFileName: 'ACCESO_PRINICPAL_DJI_20260212105028_0151_D.JPG',
    category: 'Acceso y Bienvenida',
    description: 'Vista panorámica completa del acceso a la ESMENA, con vista del portón institucional y la infraestructura perimetral.',
    mapCoords: { x: 48, y: 86 },
    hotspots: [
      { id: 'esmena_4_3', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esmena-3', label: 'Volver a Acceso 3' },
      { id: 'esmena_4_5', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esmena-5', label: 'Ir a Aulas' }
    ]
  },
  {
    id: 'esmena-5',
    name: 'Aulas de Formación - Vista 1',
    imageFileName: 'AUALS_DE_FORMACION_DJI_20260212101140_0143_D.JPG',
    category: 'Zona Académica',
    description: 'Aulas de formación de la ESMENA. Instalaciones académicas donde los especialistas reciben capacitación técnica avanzada.',
    mapCoords: { x: 30, y: 50 },
    hotspots: [
      { id: 'esmena_5_6', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esmena-6', label: 'Aulas - Vista 2' },
      { id: 'esmena_5_1', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esmena-1', label: 'Volver a Acceso' }
    ]
  },
  {
    id: 'esmena-6',
    name: 'Aulas de Formación - Vista 2',
    imageFileName: 'AUALS_DE_FORMACION_DJI_20260212101248_0144_D.JPG',
    category: 'Zona Académica',
    description: 'Segunda perspectiva del bloque académico, mostrando la distribución de los salones de instrucción especializada.',
    mapCoords: { x: 33, y: 55 },
    hotspots: [
      { id: 'esmena_6_5', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esmena-5', label: 'Volver a Aulas 1' },
      { id: 'esmena_6_7', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esmena-7', label: 'Ir al Simulador' }
    ]
  },
  {
    id: 'esmena-7',
    name: 'Simulador - Vista 1',
    imageFileName: 'SIMULADOR_DJI_20260212102032_0145_D.JPG',
    category: 'Zonas Especiales',
    description: 'Simulador militar de la ESMENA. Sistema de entrenamiento avanzado que replica condiciones reales para preparar a los especialistas.',
    mapCoords: { x: 70, y: 50 },
    hotspots: [
      { id: 'esmena_7_8', yaw: 0.5, pitch: -0.05, targetPlaceId: 'esmena-8', label: 'Simulador - Vista 2' },
      { id: 'esmena_7_6', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esmena-6', label: 'Volver a Aulas' }
    ]
  },
  {
    id: 'esmena-8',
    name: 'Simulador - Vista 2',
    imageFileName: 'SIMULADOR_DJI_20260212102131_0147_D.JPG',
    category: 'Zonas Especiales',
    description: 'Vista complementaria del simulador, evidenciando la sofisticada tecnología disponible para el entrenamiento especializado.',
    mapCoords: { x: 72, y: 52 },
    hotspots: [
      { id: 'esmena_8_7', yaw: 3.1, pitch: -0.05, targetPlaceId: 'esmena-7', label: 'Volver a Simulador 1' },
      { id: 'esmena_8_1', yaw: 0.0, pitch: -0.05, targetPlaceId: 'esmena-1', label: 'Ir a Acceso' }
    ]
  }
];
