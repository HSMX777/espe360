// data/espeMatrizPlaces.ts
import { type Place360 } from './esforcePlaces';

export const ESPE_MATRIZ_PLACES: Place360[] = [
  // --- ADMINISTRACIÓN Y ACCESO ---
  { 
    id: 'espe_m1', 
    name: 'Acceso Principal', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223091904_0255_d.JPG',
    category: 'Administración y Acceso',
    description: 'Entrada principal a la Universidad de las Fuerzas Armadas ESPE en Sangolquí. Punto de control y bienvenida.',
    mapCoords: { x: 50, y: 92 },
    hotspots: [
      { id: 'hs_m1_m2', yaw: 0, pitch: 0, targetPlaceId: 'espe_m2', label: 'Ver Edificio Administrativo' }
    ]
  },
  { 
    id: 'espe_m2', 
    name: 'Edificio Administrativo', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223093218_0259_d.JPG',
    category: 'Administración y Acceso',
    description: 'Fachada del edificio principal administrativo, núcleo de la gestión universitaria.',
    mapCoords: { x: 50, y: 88 },
    hotspots: [
      { id: 'hs_m2_m1', yaw: 3.14, pitch: 0, targetPlaceId: 'espe_m1', label: 'Volver al Acceso' }
    ]
  },
  { 
    id: 'espe_m3', 
    name: 'Pagaduría y Centro Financiero', 
    imageFileName: 'pagaduria_y_centro_financiero_20260223094931_0265_d.JPG',
    category: 'Administración y Acceso',
    description: 'Centro de servicios financieros para estudiantes y personal institucional.',
    mapCoords: { x: 65, y: 80 },
    hotspots: []
  },

  // --- ACADÉMICO ---
  { 
    id: 'espe_m4', 
    name: 'Bloque A', 
    imageFileName: 'bloque_a_b_c_d_20260223100449_0266_d.JPG',
    category: 'Académico',
    description: 'Inicio del complejo de bloques académicos A, B, C y D.',
    mapCoords: { x: 25, y: 50 },
    hotspots: [
      { id: 'hs_m4_m5', yaw: 1.5, pitch: 0, targetPlaceId: 'espe_m5', label: 'Ir al Bloque B' }
    ]
  },
  { 
    id: 'espe_m5', 
    name: 'Bloque B', 
    imageFileName: 'bloque_a_b_c_d_20260223100824_0267_d.JPG',
    category: 'Académico',
    description: 'Bloque académico B, sede de diversos departamentos técnicos.',
    mapCoords: { x: 28, y: 50 },
    hotspots: [
      { id: 'hs_m5_m4', yaw: 4.5, pitch: 0, targetPlaceId: 'espe_m4', label: 'Ir al Bloque A' }
    ]
  },
  { 
    id: 'espe_m6', 
    name: 'Bloque C', 
    imageFileName: 'bloque_a_b_c_d_20260223102228_0270_d.JPG',
    category: 'Académico',
    description: 'Bloque académico C, aulas y laboratorios de ingeniería.',
    mapCoords: { x: 25, y: 45 },
    hotspots: []
  },
  { 
    id: 'espe_m7', 
    name: 'Bloque D', 
    imageFileName: 'bloque_a_b_c_d_20260223102616_0271_d.JPG',
    category: 'Académico',
    description: 'Bloque académico D, parte fundamental del anillo académico principal.',
    mapCoords: { x: 28, y: 45 },
    hotspots: []
  },

  // --- BIBLIOTECA Y BIENESTAR ---
  { 
    id: 'espe_m8', 
    name: 'Biblioteca Central Ext.', 
    imageFileName: 'biblioteca_central_20260223092611_0257_d.JPG',
    category: 'Servicios',
    description: 'Vista exterior de la Biblioteca Central, centro de conocimiento de la matriz.',
    mapCoords: { x: 50, y: 40 },
    hotspots: [
      { id: 'hs_m8_m9', yaw: 0, pitch: 0, targetPlaceId: 'espe_m9', label: 'Ingresar a la Biblioteca' }
    ]
  },
  { 
    id: 'espe_m9', 
    name: 'Biblioteca Central Int.', 
    imageFileName: 'biblioteca_central_20260223113511_0292_d.JPG',
    category: 'Servicios',
    description: 'Interior de la biblioteca central, espacios de estudio y consulta bibliográfica.',
    mapCoords: { x: 50, y: 38 },
    hotspots: [
      { id: 'hs_m9_m8', yaw: 3.14, pitch: 0, targetPlaceId: 'espe_m8', label: 'Salir de la Biblioteca' }
    ]
  },
  { 
    id: 'espe_m10', 
    name: 'Unidad de Bienestar', 
    imageFileName: 'unidad_de_bienestar_univesitario_20260223114256_0295_d.JPG',
    category: 'Servicios',
    description: 'Oficinas de Bienestar Universitario, dedicadas al apoyo integral del estudiante.',
    mapCoords: { x: 75, y: 75 },
    hotspots: []
  },

  // --- INVESTIGACIÓN Y POSGRADO ---
  { 
    id: 'espe_m11', 
    name: 'Centro de Posgrados', 
    imageFileName: 'centro_de_posgrado.JPG',
    category: 'Investigación',
    description: 'Edificio de Posgrados, donde se desarrollan maestrías y doctorados de excelencia.',
    mapCoords: { x: 70, y: 40 },
    hotspots: []
  },
  { 
    id: 'espe_m12', 
    name: 'Centro de Nanociencia', 
    imageFileName: 'centro_de_nanociencia_y_nanotenologia.JPG',
    category: 'Investigación',
    description: 'Centro de Nanociencia y Nanotecnología (CINNANE), vanguardia en investigación científica.',
    mapCoords: { x: 85, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_m13', 
    name: 'Laboratorio Geoespacial', 
    imageFileName: 'laboratorio_geoespacial.JPG',
    category: 'Investigación',
    description: 'Instalaciones de investigación geoespacial y teledetección.',
    mapCoords: { x: 85, y: 45 },
    hotspots: []
  },

  // --- ÁREAS VERDES Y DEPARTAMENTOS ---
  { 
    id: 'espe_m14', 
    name: 'Plaza Central', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223110556_0283_d.JPG',
    category: 'Áreas Comunes',
    description: 'Gran plaza central del campus, rodeada de jardines y zonas de esparcimiento.',
    mapCoords: { x: 50, y: 60 },
    hotspots: [
      { id: 'hs_m14_m15', yaw: 0, pitch: 0, targetPlaceId: 'espe_m15', label: 'Ver Fuentes' }
    ]
  },
  { 
    id: 'espe_m15', 
    name: 'Jardines de Matriz', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223111043_0284_d.JPG',
    category: 'Áreas Comunes',
    description: 'Espacios verdes diseñados para el descanso y la integración de la comunidad ESPE.',
    mapCoords: { x: 55, y: 65 },
    hotspots: []
  },
  { 
    id: 'espe_d1', 
    name: 'Dep. Ciencias Computación', 
    imageFileName: 'departamento_de_ciencias_de_la_computacion.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Computación.',
    mapCoords: { x: 15, y: 30 },
    hotspots: []
  },
  { 
    id: 'espe_d2', 
    name: 'Dep. Ciencias Vida', 
    imageFileName: 'departamento_de_ciencias_de_la_vida.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Vida.',
    mapCoords: { x: 15, y: 40 },
    hotspots: []
  },
  { 
    id: 'espe_d3', 
    name: 'Dep. Energía y Mecánica', 
    imageFileName: 'dep_energia_mecanica.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Energía y Mecánica.',
    mapCoords: { x: 15, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_d4', 
    name: 'Dep. Ciencias Tierra y Const.', 
    imageFileName: 'dep_tierra_construccion.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias de la Tierra y la Construcción.',
    mapCoords: { x: 15, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_d5', 
    name: 'Dep. Ciencias Exactas', 
    imageFileName: 'departamento_de_ciencias_exactas.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias Exactas.',
    mapCoords: { x: 15, y: 70 },
    hotspots: []
  },
  { 
    id: 'espe_d6', 
    name: 'Dep. Seguridad y Defensa', 
    imageFileName: 'dep_seguridad_defensa.JPG',
    category: 'Departamentos',
    description: 'Sede de Seguridad, Defensa y Ciencias Humanas.',
    mapCoords: { x: 85, y: 65 },
    hotspots: []
  },
  { 
    id: 'espe_s1', 
    name: 'Unidad de Admisión', 
    imageFileName: 'unidad_de_admision.JPG',
    category: 'Servicios',
    description: 'Punto de información y trámites para nuevos aspirantes.',
    mapCoords: { x: 40, y: 85 },
    hotspots: [
      { id: 'hs_s1_s2', yaw: 0, pitch: 0, targetPlaceId: 'espe_s2', label: 'Ver interior Admisión' }
    ]
  },
  { 
    id: 'espe_s2', 
    name: 'Admisión Interno', 
    imageFileName: 'unidad_de_admision_interno.JPG',
    category: 'Servicios',
    description: 'Área de atención al público dentro de la unidad de admisión.',
    mapCoords: { x: 40, y: 83 },
    hotspots: [
      { id: 'hs_s2_s1', yaw: 3.14, pitch: 0, targetPlaceId: 'espe_s1', label: 'Salir' }
    ]
  },
  { 
    id: 'espe_s3', 
    name: 'Unidad TIC', 
    imageFileName: 'unidad_de_tecnologias_de_la_onfimacion_y_comunicacion.JPG',
    category: 'Servicios',
    description: 'Unidad de Tecnologías de la Información y Comunicación (UTIC).',
    mapCoords: { x: 35, y: 80 },
    hotspots: []
  },
  { 
    id: 'espe_m16', 
    name: 'Espacio Común 1', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223111304_0285_d.JPG',
    category: 'Áreas Comunes',
    description: 'Zonas de tránsito y descanso entre bloques académicos.',
    mapCoords: { x: 60, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_m17', 
    name: 'Paseo de la ESPE', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223111413_0286_d.JPG',
    category: 'Áreas Comunes',
    description: 'Vía peatonal principal que conecta los diversos departamentos del campus.',
    mapCoords: { x: 65, y: 60 },
    hotspots: []
  },
  { 
    id: 'espe_m18', 
    name: 'Área Verde - Bloque B', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223120853_0300_d.JPG',
    category: 'Áreas Comunes',
    description: 'Entorno natural junto al bloque académico B.',
    mapCoords: { x: 30, y: 55 },
    hotspots: []
  },
  { 
    id: 'espe_m19', 
    name: 'Espacio Común 2', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223121030_0301_d.JPG',
    category: 'Áreas Comunes',
    description: 'Áreas de paso y recreación estudiantil.',
    mapCoords: { x: 45, y: 70 },
    hotspots: []
  },
  { 
    id: 'espe_d7', 
    name: 'Dep. Ciencias Vida - Ext.', 
    imageFileName: 'departamento_de_ciencias_de_la_vida.JPG',
    category: 'Departamentos',
    description: 'Vista exterior del edificio de Ciencias de la Vida.',
    mapCoords: { x: 75, y: 25 },
    hotspots: []
  },
  { 
    id: 'espe_l5', 
    name: 'Lab. Electrónica', 
    imageFileName: 'laboratorio_e_electronica.JPG',
    category: 'Investigación',
    description: 'Laboratorios equipados para ingeniería electrónica y control.',
    mapCoords: { x: 80, y: 50 },
    hotspots: []
  },
  { 
    id: 'espe_p1', 
    name: 'Edificio Postgrado 1', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_posgrado.JPG',
    category: 'Investigación',
    description: 'Bloque principal de la unidad de posgrados.',
    mapCoords: { x: 70, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_p2', 
    name: 'Edificio Postgrado 2', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_edificio_postgrado.JPG',
    category: 'Investigación',
    description: 'Segunda vista del complejo de investigación y posgrado.',
    mapCoords: { x: 72, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_m20', 
    name: 'Acceso Administrativo 3', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223112122_0287_d.JPG',
    category: 'Administración y Acceso',
    description: 'Vista lateral del complejo administrativo.',
    mapCoords: { x: 52, y: 88 },
    hotspots: []
  },
  { 
    id: 'espe_m21', 
    name: 'Acceso Administrativo 4', 
    imageFileName: 'acceso_principal_y_edificio_administrativo_20260223112605_0290_d.JPG',
    category: 'Administración y Acceso',
    description: 'Áreas de circulación del bloque administrativo.',
    mapCoords: { x: 52, y: 86 },
    hotspots: []
  },
  { 
    id: 'espe_d8', 
    name: 'Dep. Ciencias Económicas', 
    imageFileName: 'dep_economicas.JPG',
    category: 'Departamentos',
    description: 'Sede del Departamento de Ciencias Económicas y Administrativas.',
    mapCoords: { x: 80, y: 70 },
    hotspots: []
  },
  { 
    id: 'espe_d9', 
    name: 'Dep. Ciencias Exactas 2', 
    imageFileName: 'dep_ciencias_exactas_2.JPG',
    category: 'Departamentos',
    description: 'Bloque complementario de Ciencias Exactas.',
    mapCoords: { x: 18, y: 70 },
    hotspots: []
  },
  { 
    id: 'espe_p3', 
    name: 'Centro de Posgrado Int.', 
    imageFileName: 'posgrado_y_edificio_de_centro_de_investigacion_centro_de_posgrado_.JPG',
    category: 'Investigación',
    description: 'Vista del centro de posgrado y laboratorios de investigación.',
    mapCoords: { x: 74, y: 35 },
    hotspots: []
  },
  { 
    id: 'espe_s4', 
    name: 'Unidad de Admisión 2', 
    imageFileName: 'unidad_de_admision_2.JPG',
    category: 'Servicios',
    description: 'Segunda sala de atención en la Unidad de Admisión.',
    mapCoords: { x: 42, y: 85 },
    hotspots: []
  },
  { 
    id: 'espe_s5', 
    name: 'Bienestar Universitario 2', 
    imageFileName: 'unidad_de_bienestar_univesitario_20260223114138_0294_d.JPG',
    category: 'Servicios',
    description: 'Áreas complementarias de Bienestar Universitario.',
    mapCoords: { x: 77, y: 75 },
    hotspots: []
  },
  { 
    id: 'espe_m22', 
    name: 'Camino al Auditorio', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223104352_0274_d.JPG',
    category: 'Áreas Comunes',
    description: 'Senderos peatonales hacia el área del auditorio principal.',
    mapCoords: { x: 80, y: 55 },
    hotspots: []
  },
  { 
    id: 'espe_m23', 
    name: 'Bosque de la ESPE', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260223115845_0299_d.JPG',
    category: 'Áreas Comunes',
    description: 'Sendero ecológico y áreas boscosas del campus matriz.',
    mapCoords: { x: 10, y: 15 },
    hotspots: []
  },
  { 
    id: 'espe_m24', 
    name: 'Área Verde Norte', 
    imageFileName: 'areas_verdes_y_espacios_comunues_20260224081334_0303_d.JPG',
    category: 'Áreas Comunes',
    description: 'Vista de las canchas y áreas verdes del sector norte.',
    mapCoords: { x: 50, y: 10 },
    hotspots: []
  },
  { 
    id: 'espe_m25', 
    name: 'Vista Panorámica Matriz', 
    imageFileName: '20260224150111_0337_d.JPG',
    category: 'Áreas Comunes',
    description: 'Vista general del complejo universitario ESPE Sangolquí.',
    mapCoords: { x: 50, y: 50 },
    hotspots: []
  }
];
