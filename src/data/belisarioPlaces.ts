// data/belisarioPlaces.ts
import { type Place360 } from './esforcePlaces';

export const BELISARIO_PLACES: Place360[] = [
  // --- ACCESO Y PRINCIPAL ---
  { 
    id: 'bel_1', 
    name: 'Acceso Principal', 
    imageFileName: 'acceso_principal.JPG',
    category: 'Acceso y Bloque Principal',
    description: 'Entrada principal al Campus Belisario Quevedo en Latacunga.',
    mapCoords: { x: 50, y: 85 },
    hotspots: [
      { id: 'hs_bel1_bel7', yaw: 0, pitch: 0, targetPlaceId: 'bel_7', label: 'Ir al Bloque Principal' }
    ]
  },
  { 
    id: 'bel_7', 
    name: 'Bloque Principal', 
    imageFileName: 'bloque_principal.JPG',
    category: 'Acceso y Bloque Principal',
    description: 'Edificio central administrativo y de servicios estudiantiles.',
    mapCoords: { x: 50, y: 70 },
    hotspots: []
  },

  // --- ACADÉMICO ---
  { 
    id: 'bel_2', 
    name: 'Biblioteca', 
    imageFileName: 'biblioteca.JPG',
    category: 'Académico',
    description: 'Centro de recursos para el aprendizaje y la investigación.',
    mapCoords: { x: 25, y: 60 },
    hotspots: []
  },
  { 
    id: 'bel_5', 
    name: 'Bloque de Aulas 1', 
    imageFileName: 'bloque_de_aulas.JPG',
    category: 'Académico',
    description: 'Pabellón principal de aulas del campus.',
    mapCoords: { x: 15, y: 45 },
    hotspots: []
  },
  { 
    id: 'bel_12', 
    name: 'Bloque de Aulas 2', 
    imageFileName: 'bloque_de_aulas_2.JPG',
    category: 'Académico',
    description: 'Segundo bloque de aulas modernas.',
    mapCoords: { x: 18, y: 45 },
    hotspots: []
  },
  { 
    id: 'bel_18', 
    name: 'Bloque de Aulas 3', 
    imageFileName: 'bloque_de_aulas2.JPG',
    category: 'Académico',
    description: 'Vista complementaria de los bloques académicos.',
    mapCoords: { x: 21, y: 45 },
    hotspots: []
  },

  // --- DEPARTAMENTOS ---
  { 
    id: 'bel_13', 
    name: 'Dep. Ciencias Computación', 
    imageFileName: 'departamento_ciencias_de_la_computacion_.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Computación.',
    mapCoords: { x: 80, y: 60 },
    hotspots: []
  },
  { 
    id: 'bel_14', 
    name: 'Dep. Ciencias Exactas', 
    imageFileName: 'departamento_de_ciencias_exactas.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias Exactas del campus.',
    mapCoords: { x: 82, y: 60 },
    hotspots: []
  },
  { 
    id: 'bel_10', 
    name: 'Dep. Eléctrica y Mecánica', 
    imageFileName: 'departamento_de_electrica_electronica_mecanica.JPG',
    category: 'Departamentos',
    description: 'Área administrativa de las ingenierías técnica y eléctrica.',
    mapCoords: { x: 84, y: 60 },
    hotspots: []
  },
  { 
    id: 'bel_4', 
    name: 'Jefatura Académica', 
    imageFileName: 'jefatura_academica.JPG',
    category: 'Departamentos',
    description: 'Oficina de gestión y jefatura académica del campus.',
    mapCoords: { x: 45, y: 70 },
    hotspots: []
  },

  // --- LABORATORIOS ---
  { 
    id: 'bel_3', 
    name: 'Laboratorio de Física', 
    imageFileName: 'laboratorio_de_fisica.JPG',
    category: 'Laboratorios',
    description: 'Laboratorio especializado para experimentación en física aplicada.',
    mapCoords: { x: 70, y: 30 },
    hotspots: []
  },
  { 
    id: 'bel_16', 
    name: 'Laboratorio de Mecánica', 
    imageFileName: 'laboratorio_de_mecanica.JPG',
    category: 'Laboratorios',
    description: 'Taller de mecánica para prácticas de ingeniería.',
    mapCoords: { x: 74, y: 30 },
    hotspots: []
  },
  { 
    id: 'bel_11', 
    name: 'Laboratorio Petroquímica', 
    imageFileName: 'laboratorio_petroquimica.JPG',
    category: 'Laboratorios',
    description: 'Laboratorio de alta especialidad en petroquímica.',
    mapCoords: { x: 78, y: 30 },
    hotspots: []
  },

  // --- SERVICIOS Y OTROS ---
  { 
    id: 'bel_6', 
    name: 'Admisión y Registro', 
    imageFileName: 'admision_y_registro.JPG',
    category: 'Servicios',
    description: 'Unidad de Admisión, Registro y atención al estudiante.',
    mapCoords: { x: 55, y: 70 },
    hotspots: []
  },
  { 
    id: 'bel_8', 
    name: 'Investigación y Vinculación', 
    imageFileName: 'investigacion_y_vinculacion.JPG',
    category: 'Servicios',
    description: 'Unidad encargada de proyectos de investigación y vinculación social.',
    mapCoords: { x: 60, y: 70 },
    hotspots: []
  },
  { 
    id: 'bel_17', 
    name: 'Salud Ocupacional', 
    imageFileName: 'salud_ocupacional.JPG',
    category: 'Servicios',
    description: 'Unidad médica y de salud ocupacional del personal y alumnos.',
    mapCoords: { x: 65, y: 70 },
    hotspots: []
  },
  { 
    id: 'bel_15', 
    name: 'Áreas Verdes', 
    imageFileName: 'areas_verdes.JPG',
    category: 'Campus',
    description: 'Zonas de recreación y áreas verdes del Campus Belisario.',
    mapCoords: { x: 50, y: 20 },
    hotspots: []
  }
];
