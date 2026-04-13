// data/espeSdPlaces.ts
import { type Place360 } from './esforcePlaces';

export const ESPE_SD_PLACES: Place360[] = [
  // --- ACCESO ---
  { 
    id: 'espe_sd1', 
    name: 'Acceso Principal 1', 
    imageFileName: 'acceso_principal_20260218110729_0157_d.JPG',
    category: 'Acceso Principal',
    description: 'Entrada principal a la sede ESPE Santo Domingo. Entorno tropical y moderno.',
    mapCoords: { x: 50, y: 92 },
    hotspots: [
      { id: 'hs_sd1_sd2', yaw: 0, pitch: 0, targetPlaceId: 'espe_sd2', label: 'Avanzar al Pórtico' }
    ]
  },
  { 
    id: 'espe_sd2', 
    name: 'Acceso Principal 2', 
    imageFileName: 'acceso_principal_20260218111032_0159_d.JPG',
    category: 'Acceso Principal',
    description: 'Pórtico de ingreso y control de seguridad de la sede.',
    mapCoords: { x: 50, y: 88 },
    hotspots: [
      { id: 'hs_sd2_sd1', yaw: 3.14, pitch: 0, targetPlaceId: 'espe_sd1', label: 'Volver a la Entrada' },
      { id: 'hs_sd2_sd3', yaw: 0, pitch: 0, targetPlaceId: 'espe_sd3', label: 'Ver fachada interna' }
    ]
  },
  { 
    id: 'espe_sd3', 
    name: 'Acceso Principal 3', 
    imageFileName: 'acceso_principal_20260218141038_0180_d.JPG',
    category: 'Acceso Principal',
    description: 'Vista interna desde el acceso hacia los bloques de aulas.',
    mapCoords: { x: 50, y: 84 },
    hotspots: []
  },

  // --- ACADÉMICO ---
  { 
    id: 'espe_sd4', 
    name: 'Aulas de Grado 1', 
    imageFileName: 'aulas_representativas_20260218112555_0161_d.JPG',
    category: 'Académico',
    description: 'Pabellón de aulas modernas, diseñadas para un clima tropical.',
    mapCoords: { x: 25, y: 45 },
    hotspots: [
      { id: 'hs_sd4_sd5', yaw: 0, pitch: 0, targetPlaceId: 'espe_sd5', label: 'Siguiente Bloque' }
    ]
  },
  { 
    id: 'espe_sd5', 
    name: 'Aulas de Grado 2', 
    imageFileName: 'aulas_representativas_20260218112852_0162_d.JPG',
    category: 'Académico',
    description: 'Áreas de circulación externa y acceso a laboratorios.',
    mapCoords: { x: 28, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_sd6', 
    name: 'Aulas de Grado 3', 
    imageFileName: 'aulas_representativas_20260218113521_0164_d.JPG',
    category: 'Académico',
    description: 'Vista complementaria de los bloques académicos.',
    mapCoords: { x: 31, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_sd7', 
    name: 'Aulas de Grado 4', 
    imageFileName: 'aulas_representativas_20260218121707_0167_d.JPG',
    category: 'Académico',
    description: 'Interior de una de las aulas representativas de la sede.',
    mapCoords: { x: 34, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_sd8', 
    name: 'Aulas de Grado 5', 
    imageFileName: 'aulas_representativas_20260218123002_0173_d.JPG',
    category: 'Académico',
    description: 'Salones equipados con tecnología audiovisual avanzada.',
    mapCoords: { x: 37, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_sd9', 
    name: 'Aulas de Grado 6', 
    imageFileName: 'aulas_representativas_20260218150744_0185_d.JPG',
    category: 'Académico',
    description: 'Zonas comunes de estudio entre pabellones académicos.',
    mapCoords: { x: 40, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_sd10', 
    name: 'Aulas de Grado 7', 
    imageFileName: 'aulas_representativas_20260219084323_0189_d.JPG',
    category: 'Académico',
    description: 'Vista panorámica de las áreas de formación.',
    mapCoords: { x: 43, y: 45 },
    hotspots: []
  },

  // --- LABORATORIOS ---
  { 
    id: 'espe_sd11', 
    name: 'Laboratorio de Especialidad 1', 
    imageFileName: 'laboratorios_20260218122435_0168_d.JPG',
    category: 'Laboratorios',
    description: 'Laboratorios técnicos para ingeniería y experimentación.',
    mapCoords: { x: 75, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_sd12', 
    name: 'Laboratorio de Especialidad 2', 
    imageFileName: 'laboratorios_20260218141345_0182_d.JPG',
    category: 'Laboratorios',
    description: 'Equipamiento especializado de última generación.',
    mapCoords: { x: 78, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_sd13', 
    name: 'Laboratorio de Especialidad 3', 
    imageFileName: 'laboratorios_20260219103334_0210_d.JPG',
    category: 'Laboratorios',
    description: 'Investigación aplicada al desarrollo regional.',
    mapCoords: { x: 81, y: 45 },
    hotspots: []
  },

  // --- BIENESTAR Y OTROS ---
  { 
    id: 'espe_sd14', 
    name: 'Registro Académico', 
    imageFileName: 'registro_academico_20260218112015_0160_d.JPG',
    category: 'Bienestar y Servicios',
    description: 'Unidad de Registro y atención al estudiante.',
    mapCoords: { x: 70, y: 75 },
    hotspots: []
  },
  { 
    id: 'espe_sd15', 
    name: 'Bienestar Universitario', 
    imageFileName: 'unidad_de_bienestar_universitario_20260218112015_0160_d.JPG',
    category: 'Bienestar y Servicios',
    description: 'Atención integral para el estudiante de la sede Santo Domingo.',
    mapCoords: { x: 73, y: 75 },
    hotspots: []
  }
];
