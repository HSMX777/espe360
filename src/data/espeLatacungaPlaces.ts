import { type Place360 } from './esforcePlaces';

export const ESPE_LATACUNGA_PLACES: Place360[] = [
  {
    id: 'espe-lat-1',
    name: 'Acceso Principal',
    imageFileName: 'acceso_principal.JPG',
    category: 'Acceso y Bienvenida',
    description: 'Entrada principal al campus de ESPE Latacunga.',
    mapCoords: { x: 50, y: 90 },
    hotspots: [
      { id: 'lat_1_2', yaw: 0.1, pitch: -0.05, targetPlaceId: 'espe-lat-2', label: 'Ir al Auditorio' },
      { id: 'lat_1_3', yaw: 1.5, pitch: -0.05, targetPlaceId: 'espe-lat-3', label: 'Ir a Pasillos' }
    ]
  },
  {
    id: 'espe-lat-2',
    name: 'Auditorio',
    imageFileName: 'auditorio.JPG',
    category: 'Espacios Culturales',
    description: 'Auditorio principal del campus para conferencias y eventos académicos.',
    mapCoords: { x: 20, y: 25 },
    hotspots: [
      { id: 'lat_2_1', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-1', label: 'Volver a Acceso' },
      { id: 'lat_2_4', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-4', label: 'Ir a Biblioteca' }
    ]
  },
  {
    id: 'espe-lat-3',
    name: 'Pasillos del Campus',
    imageFileName: 'pasillo.JPG',
    category: 'Espacios de Tránsito',
    description: 'Corredores principales del campus conectando bloques académicos.',
    mapCoords: { x: 50, y: 55 },
    hotspots: [
      { id: 'lat_3_1', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-1', label: 'Volver a Acceso' },
      { id: 'lat_3_3b', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-3b', label: 'Pasillo - Vista 2' }
    ]
  },
  {
    id: 'espe-lat-3b',
    name: 'Pasillos - Vista 2',
    imageFileName: 'pasillo_2.JPG',
    category: 'Espacios de Tránsito',
    description: 'Segunda perspectiva de los pasillos del campus.',
    mapCoords: { x: 52, y: 53 },
    hotspots: [
      { id: 'lat_3b_3', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-3', label: 'Pasillo 1' },
      { id: 'lat_3b_5', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-5', label: 'Ir a Bloque de Aulas' }
    ]
  },
  {
    id: 'espe-lat-4',
    name: 'Biblioteca',
    imageFileName: 'biblioteca.JPG',
    category: 'Servicios Académicos',
    description: 'Biblioteca universitaria con colecciones especializadas en ciencias y tecnología.',
    mapCoords: { x: 45, y: 40 },
    hotspots: [
      { id: 'lat_4_2', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-2', label: 'Volver al Auditorio' },
      { id: 'lat_4_6', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-6', label: 'Ir a Cafetería' }
    ]
  },
  {
    id: 'espe-lat-5',
    name: 'Bloque de Aulas',
    imageFileName: 'bloque_de_aulas.JPG',
    category: 'Zona Académica',
    description: 'Bloque principal de aulas equipadas para el proceso de enseñanza-aprendizaje.',
    mapCoords: { x: 35, y: 50 },
    hotspots: [
      { id: 'lat_5_3b', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-3b', label: 'Volver a Pasillos' },
      { id: 'lat_5_9', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-9', label: 'Ir a Dpto. Ciencias' }
    ]
  },
  {
    id: 'espe-lat-6',
    name: 'Cafetería',
    imageFileName: 'cafeteria.JPG',
    category: 'Servicios y Bienestar',
    description: 'Cafetería universitaria, punto de encuentro de la comunidad ESPE Latacunga.',
    mapCoords: { x: 60, y: 42 },
    hotspots: [
      { id: 'lat_6_4', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-4', label: 'Volver a Biblioteca' },
      { id: 'lat_6_7', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-7', label: 'Ir a Cancha de Fútbol' }
    ]
  },
  {
    id: 'espe-lat-7',
    name: 'Cancha de Fútbol',
    imageFileName: 'cancha_de_futbol.JPG',
    category: 'Deporte y Recreación',
    description: 'Cancha de fútbol para el desarrollo físico y recreativo de la comunidad universitaria.',
    mapCoords: { x: 80, y: 78 },
    hotspots: [
      { id: 'lat_7_6', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-6', label: 'Volver a Cafetería' },
      { id: 'lat_7_8', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-8', label: 'Ir al Centro de Salud' }
    ]
  },
  {
    id: 'espe-lat-8',
    name: 'Centro de Salud',
    imageFileName: 'centro_de_salud.JPG',
    category: 'Servicios y Bienestar',
    description: 'Unidad de atención médica básica para la comunidad universitaria.',
    mapCoords: { x: 58, y: 45 },
    hotspots: [
      { id: 'lat_8_7', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-7', label: 'Volver a Cancha' },
      { id: 'lat_8_11', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-11', label: 'Ir al Gimnasio' }
    ]
  },
  {
    id: 'espe-lat-9',
    name: 'Dpto. Ciencias Económicas',
    imageFileName: 'departamento_de_ciecias_economicas__administrativas_comercio.JPG',
    category: 'Zona Académica',
    description: 'Departamento de Ciencias Económicas, Administrativas y Comercio.',
    mapCoords: { x: 30, y: 35 },
    hotspots: [
      { id: 'lat_9_5', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-5', label: 'Volver a Aulas' },
      { id: 'lat_9_10', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-10', label: 'Dpto. Ciencias Humanas' }
    ]
  },
  {
    id: 'espe-lat-10',
    name: 'Dpto. Ciencias Humanas',
    imageFileName: 'departamento_de_ciencias_humanas_y_sociales.JPG',
    category: 'Zona Académica',
    description: 'Departamento de Ciencias Humanas y Sociales de ESPE Latacunga.',
    mapCoords: { x: 25, y: 40 },
    hotspots: [
      { id: 'lat_10_9', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-9', label: 'Dpto. Ciencias Económicas' },
      { id: 'lat_10_13', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-13', label: 'Dpto. Seguridad y Defensa' }
    ]
  },
  {
    id: 'espe-lat-11',
    name: 'Gimnasio',
    imageFileName: 'GYM.JPG',
    category: 'Deporte y Recreación',
    description: 'Gimnasio con equipamiento para el acondicionamiento físico integral.',
    mapCoords: { x: 65, y: 60 },
    hotspots: [
      { id: 'lat_11_8', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-8', label: 'Volver a Centro de Salud' },
      { id: 'lat_11_12', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-12', label: 'Ir a Laboratorio' }
    ]
  },
  {
    id: 'espe-lat-12',
    name: 'Laboratorio Mecánica Industrial',
    imageFileName: 'laboratorio_mecanica_industrial.JPG',
    category: 'Laboratorios',
    description: 'Laboratorio con maquinaria especializada para la formación de ingenieros.',
    mapCoords: { x: 70, y: 50 },
    hotspots: [
      { id: 'lat_12_11', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-11', label: 'Volver al Gimnasio' },
      { id: 'lat_12_1', yaw: 0.0, pitch: -0.05, targetPlaceId: 'espe-lat-1', label: 'Ir a Acceso' }
    ]
  },
  {
    id: 'espe-lat-13',
    name: 'Dpto. Seguridad y Defensa',
    imageFileName: 'departamento_de_seguridad_y_defensa.JPG',
    category: 'Zona Académica',
    description: 'Núcleo académico en ciencias de la seguridad y defensa nacional.',
    mapCoords: { x: 22, y: 48 },
    hotspots: [
      { id: 'lat_13_10', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-10', label: 'Dpto. Ciencias Humanas' },
      { id: 'lat_13_14', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-14', label: 'Educación Continua' }
    ]
  },
  {
    id: 'espe-lat-14',
    name: 'Educación Continua',
    imageFileName: 'educacion_continua.JPG',
    category: 'Servicios Académicos',
    description: 'Unidad de Educación Continua, certificaciones y programas de especialización.',
    mapCoords: { x: 55, y: 30 },
    hotspots: [
      { id: 'lat_14_13', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-13', label: 'Dpto. Seguridad y Defensa' },
      { id: 'lat_14_15', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-15', label: 'Galería de Directores' }
    ]
  },
  {
    id: 'espe-lat-15',
    name: 'Galería de Directores',
    imageFileName: 'galeria_de_directores.JPG',
    category: 'Historia Institucional',
    description: 'Galería histórica de los directores que han liderado ESPE Latacunga.',
    mapCoords: { x: 48, y: 32 },
    hotspots: [
      { id: 'lat_15_14', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-14', label: 'Educación Continua' },
      { id: 'lat_15_16', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-16', label: 'Salón de los Marqueses' }
    ]
  },
  {
    id: 'espe-lat-16',
    name: 'Salón de los Marqueses',
    imageFileName: 'salon_de_los_marqueses.JPG',
    category: 'Espacios Culturales',
    description: 'Espacio ceremonial para actos solemnes y reuniones de alto protocolo.',
    mapCoords: { x: 42, y: 28 },
    hotspots: [
      { id: 'lat_16_15', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-15', label: 'Galería de Directores' },
      { id: 'lat_16_17', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-17', label: 'Psicología' }
    ]
  },
  {
    id: 'espe-lat-17',
    name: 'Psicología',
    imageFileName: 'psicologia.JPG',
    category: 'Servicios y Bienestar',
    description: 'Departamento de Psicología y apoyo para el bienestar estudiantil.',
    mapCoords: { x: 60, y: 35 },
    hotspots: [
      { id: 'lat_17_16', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-16', label: 'Salón de Marqueses' },
      { id: 'lat_17_18', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-18', label: 'Vinculación y Posgrado' }
    ]
  },
  {
    id: 'espe-lat-18',
    name: 'Vinculación y Posgrado',
    imageFileName: 'vinculacion_y_posgrado.JPG',
    category: 'Servicios Académicos',
    description: 'Unidad de Vinculación con la Sociedad y programas de maestría.',
    mapCoords: { x: 65, y: 32 },
    hotspots: [
      { id: 'lat_18_17', yaw: 3.1, pitch: -0.05, targetPlaceId: 'espe-lat-17', label: 'Psicología' },
      { id: 'lat_18_19', yaw: 0.5, pitch: -0.05, targetPlaceId: 'espe-lat-19', label: 'Vista Aérea' }
    ]
  },
  {
    id: 'espe-lat-19',
    name: 'Vista Aérea',
    imageFileName: 'DJI_20260226090237_0349_D.JPG',
    category: 'Vistas Panorámicas',
    description: 'Panorámica aérea de ESPE Latacunga y su entorno en la provincia de Cotopaxi.',
    mapCoords: { x: 50, y: 50 },
    hotspots: [
      { id: 'lat_19_1', yaw: 0.0, pitch: -0.4, targetPlaceId: 'espe-lat-1', label: 'Bajar a Acceso' },
      { id: 'lat_19_18', yaw: 3.1, pitch: -0.4, targetPlaceId: 'espe-lat-18', label: 'Bajar a Vinculación' }
    ]
  }
];
