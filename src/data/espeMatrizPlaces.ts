// data/espeMatrizPlaces.ts
import { type Place360 } from './esforcePlaces';

export const ESPE_MATRIZ_PLACES: Place360[] = [
  // --- ACCESOS Y REFERENCIAS PRINCIPALES ---
  { 
    id: 'espe_m18', 
    name: 'Visión Panorámica', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223120853_0300_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Vista general del complejo universitario ESPE Sangolquí.',
    mapCoords: { x: 30, y: 55 },
    hotspots: []
  },
  { 
    id: 'espe_m20', 
    name: 'Acceso Principal', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223112122_0287_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Entrada principal a la Universidad de las Fuerzas Armadas ESPE en Sangolquí.',
    mapCoords: { x: 52, y: 88 },
    hotspots: []
  },
  { 
    id: 'espe_m21', 
    name: 'Paso Vehicular', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223112605_0290_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Áreas de circulación vehicular del bloque administrativo.',
    mapCoords: { x: 52, y: 86 },
    hotspots: []
  },
  { 
    id: 'espe_m1', 
    name: 'Edificio Administrativo', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223091904_0255_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Punto de control y bienvenida en el edificio administrativo.',
    mapCoords: { x: 50, y: 92 },
    hotspots: []
  },
  { 
    id: 'espe_m2', 
    name: 'Edificio Administrativo / Tesorería', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223093218_0259_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Fachada del edificio principal administrativo y área de tesorería.',
    mapCoords: { x: 50, y: 88 },
    hotspots: []
  },
  { 
    id: 'espe_m3', 
    name: 'Vicerrectorado Administrativo - Dirección Financiera - Dirección de Talento Humano', 
    imageFileName: 'pagaduria_y_centro_financiero_20260223094931_0265_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Centro de servicios financieros y talento humano.',
    mapCoords: { x: 65, y: 80 },
    hotspots: []
  },
  { 
    id: 'espe_m4', 
    name: 'Ingreso Posterior a los Bloques A y B', 
    imageFileName: 'bloque_a_b_c_d_20260223100449_0266_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Acceso posterior al complejo académico A y B.',
    mapCoords: { x: 25, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_m5', 
    name: 'Planta Baja Bloque A y B', 
    imageFileName: 'bloque_a_b_c_d_20260223100824_0267_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Planta baja de los bloques académicos A y B.',
    mapCoords: { x: 28, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_s1', 
    name: 'Vicerrectorado de Docencia', 
    imageFileName: 'unidad_de_admision.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Oficinas del Vicerrectorado de Docencia.',
    mapCoords: { x: 40, y: 85 },
    hotspots: []
  },
  { 
    id: 'espe_m6', 
    name: 'Ingreso Principal a los Bloques C D G y H', 
    imageFileName: 'bloque_a_b_c_d_20260223102228_0270_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Acceso principal a los bloques académicos C, D, G y H.',
    mapCoords: { x: 25, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_m7', 
    name: 'Planta Baja de los Bloques C D G y H', 
    imageFileName: 'bloque_a_b_c_d_20260223102616_0271_d.JPG',
    category: 'Accesos y Referencias Principales',
    description: 'Planta baja de los bloques académicos C, D, G y H.',
    mapCoords: { x: 28, y: 45 },
    hotspots: []
  },

  // --- DEPARTAMENTOS ---
  { 
    id: 'espe_d1', 
    name: 'Departamento de Ciencias de la Computación Bloque H - 1er Piso', 
    imageFileName: 'departamento_de_ciencias_de_la_computacion.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Computación.',
    mapCoords: { x: 15, y: 30 },
    hotspots: []
  },
  { 
    id: 'espe_d3', 
    name: 'Departamento de Ciencias de la Energía y Mecánica', 
    imageFileName: 'dep_energia_mecanica.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Energía y Mecánica.',
    mapCoords: { x: 15, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_d4', 
    name: 'Departamento de Ciencias de la Tierra y la Construcción Bloque A - 2do Piso', 
    imageFileName: 'dep_tierra_construccion.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Tierra y la Construcción.',
    mapCoords: { x: 15, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_d6', 
    name: 'Departamentos de Ciencias Humanas y Sociales, Seguridad y Defensa Bloque B - 2do Piso', 
    imageFileName: 'dep_seguridad_defensa.JPG',
    category: 'Departamentos',
    description: 'Sede de Seguridad, Defensa y Ciencias Humanas.',
    mapCoords: { x: 85, y: 65 },
    hotspots: []
  },
  { 
    id: 'espe_d7', 
    name: 'Departamento de Ciencias de la Vida y de la Agricultura Bloque A - 4to Piso', 
    imageFileName: 'departamento_de_ciencias_de_la_vida.JPG',
    category: 'Departamentos',
    description: 'Edificio de Ciencias de la Vida.',
    mapCoords: { x: 75, y: 25 },
    hotspots: []
  },
  { 
    id: 'espe_d8', 
    name: 'Departamento de Ciencias Económicas, Administrativas y de Comercio Bloque A - 3er Piso', 
    imageFileName: 'dep_economicas.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias Económicas y Administrativas.',
    mapCoords: { x: 80, y: 70 },
    hotspots: []
  },
  { 
    id: 'espe_d9', 
    name: 'Departamento de Ciencias Exactas Bloque B - 4to Piso', 
    imageFileName: 'dep_ciencias_exactas_2.JPG',
    category: 'Departamentos',
    description: 'Bloque complementario de Ciencias Exactas.',
    mapCoords: { x: 18, y: 70 },
    hotspots: []
  },

  // --- LABORATORIOS ---
  { 
    id: 'espe_m11', 
    name: 'Laboratorios de Eléctrica y Electrónica', 
    imageFileName: 'centro_de_posgrado.JPG',
    category: 'Laboratorios',
    description: 'Instalaciones del Departamento de Eléctrica y Electrónica.',
    mapCoords: { x: 70, y: 40 },
    hotspots: []
  },
  { 
    id: 'espe_l5', 
    name: 'Laboratorios de Electrónica', 
    imageFileName: 'laboratorio_e_electronica.JPG',
    category: 'Laboratorios',
    description: 'Laboratorios equipados para ingeniería electrónica.',
    mapCoords: { x: 80, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_m13', 
    name: 'Laboratorios de los Departamentos de Ciencias de la Tierra y la Construcción, Energía y Mecánica', 
    imageFileName: 'laboratorio_geoespacial.JPG',
    category: 'Laboratorios',
    description: 'Instalaciones de investigación técnica y geoespacial.',
    mapCoords: { x: 85, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_m25', 
    name: 'Laboratorios del Departamento de Ciencias de la Vida', 
    imageFileName: '20260224150111_0337_d.JPG',
    category: 'Laboratorios',
    description: 'Laboratorios dedicados a las ciencias de la vida.',
    mapCoords: { x: 50, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_m12', 
    name: 'Departamento de Ciencias Médicas y Centro de Nanociencia y Nanotecnología', 
    imageFileName: 'centro_de_nanociencia_y_nanotenologia.JPG',
    category: 'Laboratorios',
    description: 'Centro de Nanociencia y Nanotecnología (CINNANE).',
    mapCoords: { x: 85, y: 35 },
    hotspots: []
  },

  // --- SERVICIOS AL ESTUDIANTE ---
  { 
    id: 'espe_s3', 
    name: 'UTIC Bloque A - 1er Piso', 
    imageFileName: 'unidad_de_tecnologias_de_la_onfimacion_y_comunicacion.JPG',
    category: 'Servicios al Estudiante',
    description: 'Unidad de Tecnologías de la Información y Comunicación.',
    mapCoords: { x: 35, y: 80 },
    hotspots: []
  },
  { 
    id: 'espe_m8', 
    name: 'Biblioteca Alejandro Segovia G.', 
    imageFileName: 'biblioteca_central_20260223092611_0257_d.JPG',
    category: 'Servicios al Estudiante',
    description: 'Biblioteca Central de la matriz.',
    mapCoords: { x: 50, y: 40 },
    hotspots: []
  },
  { 
    id: 'espe_m9', 
    name: 'Hall Biblioteca Alejandro Segovia G.', 
    imageFileName: 'biblioteca_central_20260223113511_0292_d.JPG',
    category: 'Servicios al Estudiante',
    description: 'Espacios internos de la biblioteca central.',
    mapCoords: { x: 50, y: 38 },
    hotspots: []
  },
  { 
    id: 'espe_m10', 
    name: 'Sistema Integrado de Salud', 
    imageFileName: 'unidad_de_bienestar_univesitario_20260223114256_0295_d.JPG',
    category: 'Servicios al Estudiante',
    description: 'Atención integral y bienestar universitario.',
    mapCoords: { x: 75, y: 75 },
    hotspots: []
  },
  { 
    id: 'espe_s2', 
    name: 'Unidad de Admisión', 
    imageFileName: 'unidad_de_admision_interno.JPG',
    category: 'Servicios al Estudiante',
    description: 'Área de atención de admisión.',
    mapCoords: { x: 40, y: 83 },
    hotspots: []
  },

  // --- RECREACIÓN Y BIENESTAR ---
  { 
    id: 'espe_m14', 
    name: 'Coliseo Grad. Miguel G. Iturralde J.', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223110556_0283_d.JPG',
    category: 'Recreación y Bienestar',
    description: 'Coliseo principal del campus.',
    mapCoords: { x: 50, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_m19', 
    name: 'Canchas Deportivas', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223121030_0301_d.JPG',
    category: 'Recreación y Bienestar',
    description: 'Áreas de recreación estudiantil.',
    mapCoords: { x: 45, y: 70 },
    hotspots: []
  },
  { 
    id: 'espe_m23', 
    name: 'Salón 2000 y Bar Universitario', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223115845_0299_d.JPG',
    category: 'Recreación y Bienestar',
    description: 'Área social y gastronómica.',
    mapCoords: { x: 10, y: 15 },
    hotspots: []
  },
  { 
    id: 'espe_m22', 
    name: 'Parte Posterior Bar Universitario', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223104352_0274_d.JPG',
    category: 'Recreación y Bienestar',
    description: 'Senderos hacia el área posterior del bar.',
    mapCoords: { x: 80, y: 55 },
    hotspots: []
  },
  { 
    id: 'espe_m24', 
    name: 'Área Verde', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260224081334_0303_d.JPG',
    category: 'Recreación y Bienestar',
    description: 'Jardines y zonas naturales.',
    mapCoords: { x: 50, y: 10 },
    hotspots: []
  },

  // --- RESIDENCIA ---
  { 
    id: 'espe_m16', 
    name: 'Residencia Universitaria Bloque A', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223111304_0285_d.JPG',
    category: 'Residencia',
    description: 'Bloque A de residencias universitarias.',
    mapCoords: { x: 60, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_m15', 
    name: 'Residencia Universitaria Bloque B', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223111043_0284_d.JPG',
    category: 'Residencia',
    description: 'Bloque B de residencias universitarias.',
    mapCoords: { x: 55, y: 65 },
    hotspots: []
  },

  // --- CENTRO DE INVESTIGACIÓN Y POSGRADO ---
  { 
    id: 'espe_p2', 
    name: 'Centro de Investigaciones y Posgrados', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_edificio_postgrado.JPG',
    category: 'Centro de Investigación y Posgrado',
    description: 'Complejo de investigación y posgrado.',
    mapCoords: { x: 72, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_p1', 
    name: 'Aulas del Centro de Posgrados Bloque D - 3er Piso', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_posgrado.JPG',
    category: 'Centro de Investigación y Posgrado',
    description: 'Aulas de la unidad de posgrados.',
    mapCoords: { x: 70, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_p3', 
    name: 'Centro de Posgrados Bloque D - 4to Piso', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_centro_de_posgrado_.JPG',
    category: 'Centro de Investigación y Posgrado',
    description: 'Nivel superior del centro de posgrados.',
    mapCoords: { x: 74, y: 35 },
    hotspots: []
  }
];
