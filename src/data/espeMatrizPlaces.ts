// data/espeMatrizPlaces.ts
import { type Place360 } from './esforcePlaces';

export const ESPE_MATRIZ_PLACES: Place360[] = [
  // --- ADMINISTRACIÓN Y ACCESO ---
  { 
    id: 'espe_m1', 
    name: 'Edificio Administrativo', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223091904_0255_d.JPG',
    category: 'Administración y Acceso',
    description: 'Entrada principal a la Universidad de las Fuerzas Armadas ESPE en Sangolquí. Punto de control y bienvenida.',
    mapCoords: { x: 50, y: 92 },
    hotspots: []
  },
  { 
    id: 'espe_m2', 
    name: 'Edificio Administrativo / Tesorería', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223093218_0259_d.JPG',
    category: 'Administración y Acceso',
    description: 'Fachada del edificio principal administrativo, núcleo de la gestión universitaria.',
    mapCoords: { x: 50, y: 88 },
    hotspots: []
  },
  { 
    id: 'espe_m3', 
    name: 'Vicerrectorado Administrativo - Dirección Financiera - Dirección de Talento Humano', 
    imageFileName: 'pagaduria_y_centro_financiero_20260223094931_0265_d.JPG',
    category: 'Administración y Acceso',
    description: 'Centro de servicios financieros para estudiantes y personal institucional.',
    mapCoords: { x: 65, y: 80 },
    hotspots: []
  },
  { 
    id: 'espe_m20', 
    name: 'Acceso Principal', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223112122_0287_d.JPG',
    category: 'Administración y Acceso',
    description: 'Vista lateral del complejo administrativo.',
    mapCoords: { x: 52, y: 88 },
    hotspots: []
  },
  { 
    id: 'espe_m21', 
    name: 'Ingreso Vehicular', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223112605_0290_d.JPG',
    category: 'Administración y Acceso',
    description: 'Áreas de circulación del bloque administrativo.',
    mapCoords: { x: 52, y: 86 },
    hotspots: []
  },

  // --- ACADÉMICO ---
  { 
    id: 'espe_m4', 
    name: 'Ingreso Posterior a los Bloques A y B', 
    imageFileName: 'bloque_a_b_c_d_20260223100449_0266_d.JPG',
    category: 'Académico',
    description: 'Inicio del complejo de bloques académicos A, B, C y D.',
    mapCoords: { x: 25, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_m5', 
    name: 'Planta Baja Bloque A y B', 
    imageFileName: 'bloque_a_b_c_d_20260223100824_0267_d.JPG',
    category: 'Académico',
    description: 'Bloque académico B, sede de diversos departamentos técnicos.',
    mapCoords: { x: 28, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_m6', 
    name: 'Ingreso Principal a los Bloques C D G y H', 
    imageFileName: 'bloque_a_b_c_d_20260223102228_0270_d.JPG',
    category: 'Académico',
    description: 'Bloque académico C, aulas y laboratorios de ingeniería.',
    mapCoords: { x: 25, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_m7', 
    name: 'Planta Baja de los Bloques C D G y H', 
    imageFileName: 'bloque_a_b_c_d_20260223102616_0271_d.JPG',
    category: 'Académico',
    description: 'Bloque académico D, parte fundamental del anillo académico principal.',
    mapCoords: { x: 28, y: 45 },
    hotspots: []
  },

  // --- BIBLIOTECA Y BIENESTAR ---
  { 
    id: 'espe_m8', 
    name: 'Biblioteca Alejandro Segovia G.', 
    imageFileName: 'biblioteca_central_20260223092611_0257_d.JPG',
    category: 'Servicios',
    description: 'Vista exterior de la Biblioteca Central, centro de conocimiento de la matriz.',
    mapCoords: { x: 50, y: 40 },
    hotspots: []
  },
  { 
    id: 'espe_m9', 
    name: 'Hall Biblioteca Alejandro Segovia G.', 
    imageFileName: 'biblioteca_central_20260223113511_0292_d.JPG',
    category: 'Servicios',
    description: 'Interior de la biblioteca central, espacios de estudio y consulta bibliográfica.',
    mapCoords: { x: 50, y: 38 },
    hotspots: []
  },
  { 
    id: 'espe_m10', 
    name: 'Sistema Integrado de Salud', 
    imageFileName: 'unidad_de_bienestar_univesitario_20260223114256_0295_d.JPG',
    category: 'Servicios',
    description: 'Oficinas de Bienestar Universitario, dedicadas al apoyo integral del estudiante.',
    mapCoords: { x: 75, y: 75 },
    hotspots: []
  },
  { 
    id: 'espe_s1', 
    name: 'Vicerrectorado de Docencia', 
    imageFileName: 'unidad_de_admision.JPG',
    category: 'Servicios',
    description: 'Punto de información y trámites para nuevos aspirantes.',
    mapCoords: { x: 40, y: 85 },
    hotspots: []
  },
  { 
    id: 'espe_s2', 
    name: 'Unidad de Admisión', 
    imageFileName: 'unidad_de_admision_interno.JPG',
    category: 'Servicios',
    description: 'Área de atención al público dentro de la unidad de admisión.',
    mapCoords: { x: 40, y: 83 },
    hotspots: []
  },
  { 
    id: 'espe_s3', 
    name: 'UTIC', 
    imageFileName: 'unidad_de_tecnologias_de_la_onfimacion_y_comunicacion.JPG',
    category: 'Servicios',
    description: 'Unidad de Tecnologías de la Información y Comunicación (UTIC).',
    mapCoords: { x: 35, y: 80 },
    hotspots: []
  },

  // --- INVESTIGACIÓN Y POSGRADO ---
  { 
    id: 'espe_m11', 
    name: 'Laboratorios de Eléctrica y Electrónica', 
    imageFileName: 'centro_de_posgrado.JPG',
    category: 'Investigación',
    description: 'Edificio de Posgrados, donde se desarrollan maestrías y doctorados de excelencia.',
    mapCoords: { x: 70, y: 40 },
    hotspots: []
  },
  { 
    id: 'espe_m12', 
    name: 'Centro de Nanociencia y Nanotecnología', 
    imageFileName: 'centro_de_nanociencia_y_nanotenologia.JPG',
    category: 'Investigación',
    description: 'Centro de Nanociencia y Nanotecnología (CINNANE), vanguardia en investigación científica.',
    mapCoords: { x: 85, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_m13', 
    name: 'Laboratorios del Departamento de Ciencias de la Tierra y la Contrucción', 
    imageFileName: 'laboratorio_geoespacial.JPG',
    category: 'Investigación',
    description: 'Instalaciones de investigación geoespacial y teledetección.',
    mapCoords: { x: 85, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_l5', 
    name: 'Laboratorios de Electrónica', 
    imageFileName: 'laboratorio_e_electronica.JPG',
    category: 'Investigación',
    description: 'Laboratorios equipados para ingeniería electrónica y control.',
    mapCoords: { x: 80, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_p1', 
    name: 'Aulas del Centro de Posgrados', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_posgrado.JPG',
    category: 'Investigación',
    description: 'Bloque principal de la unidad de posgrados.',
    mapCoords: { x: 70, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_p2', 
    name: 'Centro de Investigaciones y Posgrados', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_edificio_postgrado.JPG',
    category: 'Investigación',
    description: 'Segunda vista del complejo de investigación y posgrado.',
    mapCoords: { x: 72, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_p3', 
    name: 'Centro de Posgrados', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_centro_de_posgrado_.JPG',
    category: 'Investigación',
    description: 'Vista del centro de posgrado y laboratorios de investigación.',
    mapCoords: { x: 74, y: 35 },
    hotspots: []
  },

  // --- ÁREAS COMUNES Y DEPARTAMENTOS ---
  { 
    id: 'espe_m14', 
    name: 'Coliseo GRAD. MIGUEL G. ITURRALDE J.', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223110556_0283_d.JPG',
    category: 'Áreas Comunes',
    description: 'Gran plaza central del campus, rodeada de jardines y zonas de esparcimiento.',
    mapCoords: { x: 50, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_m15', 
    name: 'Residencia Universtaria Bloque B', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223111043_0284_d.JPG',
    category: 'Áreas Comunes',
    description: 'Espacios verdes diseñados para el descanso y la integración de la comunidad ESPE.',
    mapCoords: { x: 55, y: 65 },
    hotspots: []
  },
  { 
    id: 'espe_m16', 
    name: 'Residencia Universtaria Bloque A', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223111304_0285_d.JPG',
    category: 'Áreas Comunes',
    description: 'Zonas de tránsito y descanso entre bloques académicos.',
    mapCoords: { x: 60, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_m18', 
    name: 'Visión Panorámica', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223120853_0300_d.JPG',
    category: 'Áreas Comunes',
    description: 'Entorno natural junto al bloque académico B.',
    mapCoords: { x: 30, y: 55 },
    hotspots: []
  },
  { 
    id: 'espe_m19', 
    name: 'Canchas Deportivas', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223121030_0301_d.JPG',
    category: 'Áreas Comunes',
    description: 'Áreas de paso y recreación estudiantil.',
    mapCoords: { x: 45, y: 70 },
    hotspots: []
  },
  { 
    id: 'espe_m22', 
    name: 'Parte Posterior Bar Universitario', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223104352_0274_d.JPG',
    category: 'Áreas Comunes',
    description: 'Senderos peatonales hacia el área del auditorio principal.',
    mapCoords: { x: 80, y: 55 },
    hotspots: []
  },
  { 
    id: 'espe_m23', 
    name: 'Salón 2000 y Bar Universitario', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223115845_0299_d.JPG',
    category: 'Áreas Comunes',
    description: 'Sendero ecológico y áreas boscosas del campus matriz.',
    mapCoords: { x: 10, y: 15 },
    hotspots: []
  },
  { 
    id: 'espe_m24', 
    name: 'Área Verde', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260224081334_0303_d.JPG',
    category: 'Áreas Comunes',
    description: 'Vista de las canchas y áreas verdes del sector norte.',
    mapCoords: { x: 50, y: 10 },
    hotspots: []
  },
  { 
    id: 'espe_m25', 
    name: 'Laboratorios del departamento de Ciencias de la Vida', 
    imageFileName: '20260224150111_0337_d.JPG',
    category: 'Áreas Comunes',
    description: 'Vista general del complejo universitario ESPE Sangolquí.',
    mapCoords: { x: 50, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_d1', 
    name: 'Departamento de Ciencias de la Computación', 
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
    name: 'Departamento de Ciencias de la Tierra y la Construcción', 
    imageFileName: 'dep_tierra_construccion.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Tierra y la Construcción.',
    mapCoords: { x: 15, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_d6', 
    name: 'Departamentos de Ciencias Humanas y Sociales, Seguridad y Defensa ', 
    imageFileName: 'dep_seguridad_defensa.JPG',
    category: 'Departamentos',
    description: 'Sede de Seguridad, Defensa y Ciencias Humanas.',
    mapCoords: { x: 85, y: 65 },
    hotspots: []
  },
  { 
    id: 'espe_d7', 
    name: 'Departamento de Ciencias de la Vida', 
    imageFileName: 'departamento_de_ciencias_de_la_vida.JPG',
    category: 'Departamentos',
    description: 'Vista exterior del edificio de Ciencias de la Vida.',
    mapCoords: { x: 75, y: 25 },
    hotspots: []
  },
  { 
    id: 'espe_d8', 
    name: 'Departamento Ciencias Económicas, Administrativas y de Comercio', 
    imageFileName: 'dep_economicas.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias Económicas y Administrativas.',
    mapCoords: { x: 80, y: 70 },
    hotspots: []
  },
  { 
    id: 'espe_d9', 
    name: 'Departamento de Ciencias Exactas', 
    imageFileName: 'dep_ciencias_exactas_2.JPG',
    category: 'Departamentos',
    description: 'Bloque complementario de Ciencias Exactas.',
    mapCoords: { x: 18, y: 70 },
    hotspots: []
  }
];
