// data/esforcePlaces.ts
export interface Hotspot {
  id: string;
  yaw: number;
  pitch: number;
  targetPlaceId: string;
  label: string;
}

export interface Place360 {
  id: string;
  name: string;
  imageFileName: string;
  description?: string;
  category: string;
  mapCoords?: { x: number; y: number };
  hotspots?: Hotspot[];
}

export const ESFORCE_PLACES: Place360[] = [
  { 
    id: '1', 
    name: 'Acceso Principal', 
    imageFileName: 'acceso principal.JPG',
    category: 'Administración y Bienvenida',
    description: 'Pórtico principal de la Escuela de Formación de Soldados del Ejército (ESFORCE) "Vencedores del Cenepa". Este es el primer punto de control e ingreso para los futuros soldados de nuestra nación.',
    mapCoords: { x: 50, y: 92 },
    hotspots: [
      { id: 'hs_1_2', yaw: 0.1, pitch: -0.05, targetPlaceId: '2', label: 'Avanzar a Edificio Principal' },
      { id: 'hs_1_15', yaw: -1.5, pitch: 0.6, targetPlaceId: '15', label: 'Subir a Vista Aérea' }
    ]
  },
  { 
    id: '2', 
    name: 'Edificio Principal', 
    imageFileName: 'edificio principal.JPG',
    category: 'Administración y Bienvenida',
    description: 'Sede administrativa y comandancia general. Aquí se dirige el adiestramiento académico y estratégico de las tropas bajo los más altos valores institucionales.',
    mapCoords: { x: 50, y: 36 },
    hotspots: [
      { id: 'hs_2_1', yaw: 3.2, pitch: -0.05, targetPlaceId: '1', label: 'Volver al Acceso' },
      { id: 'hs_2_4', yaw: 0.0, pitch: -0.05, targetPlaceId: '4', label: 'Ir al Patio de Formación' },
      { id: 'hs_2_6', yaw: 1.5, pitch: -0.02, targetPlaceId: '6', label: 'Ir a las Aulas' }
    ]
  },
  { 
    id: '4', 
    name: 'Patio de Formación', 
    imageFileName: 'patio de formacion.JPG',
    category: 'Instrucción Militar',
    description: 'El corazón de la disciplina militar. En esta vasta explanada verde se realizan partes diarios, ceremonias, revistas y la consolidación del espíritu de cuerpo.',
    mapCoords: { x: 50, y: 50 },
    hotspots: [
      { id: 'hs_4_2', yaw: 3.1, pitch: -0.05, targetPlaceId: '2', label: 'Volver a Edificio Principal' },
      { id: 'hs_4_11', yaw: 0.2, pitch: -0.02, targetPlaceId: '11', label: 'Ir al Campo de Entrenamiento' },
      { id: 'hs_4_15', yaw: 1.0, pitch: 0.7, targetPlaceId: '15', label: 'Subir a Vista Aérea' }
    ]
  },
  { 
    id: '5', 
    name: 'Aulas de Formación', 
    imageFileName: 'aulas de formacion.JPG',
    category: 'Zona Académica',
    description: 'Complejo académico norte. Las aulas están equipadas con tecnología moderna para impartir táctica, liderazgo y ciencias militares fundamentales.',
    mapCoords: { x: 37, y: 50 },
    hotspots: [
      { id: 'hs_5_6', yaw: 3.1, pitch: -0.02, targetPlaceId: '6', label: 'Ir a Aulas de Formación 2' },
      { id: 'hs_5_8', yaw: 0.8, pitch: -0.05, targetPlaceId: '8', label: 'Ir al Laboratorio de Computación' }
    ]
  },
  { 
    id: '6', 
    name: 'Aulas de Formación 2', 
    imageFileName: 'aulas de formacion (2).JPG',
    category: 'Zona Académica',
    description: 'Bloque central de educación. Los aspirantes reciben instrucción incesante sobre legislaciones, derechos humanos y doctrinas internacionales conjuntas.',
    mapCoords: { x: 63, y: 48 },
    hotspots: [
      { id: 'hs_6_5', yaw: 0.0, pitch: -0.05, targetPlaceId: '5', label: 'Edificio Principal de Aulas' },
      { id: 'hs_6_7', yaw: 1.5, pitch: -0.05, targetPlaceId: '7', label: 'Aulas de Formación 3' },
      { id: 'hs_6_2', yaw: 4.7, pitch: -0.02, targetPlaceId: '2', label: 'Volver a Edificio Principal' }
    ]
  },
  { 
    id: '7', 
    name: 'Aulas de Formación 3', 
    imageFileName: 'aulas de formacion (3).JPG',
    category: 'Zona Académica',
    description: 'Pabellón enfocado en planeamiento táctico de nivel táctico avanzado y simulaciones teóricas esenciales antes de avanzar al campo de batalla.',
    mapCoords: { x: 63, y: 52 },
    hotspots: [
      { id: 'hs_7_6', yaw: 3.1, pitch: -0.05, targetPlaceId: '6', label: 'Volver a Aulas 2' },
      { id: 'hs_7_9', yaw: 1.0, pitch: -0.02, targetPlaceId: '9', label: 'Ir al Centro de Salud' }
    ]
  },
  { 
    id: '8', 
    name: 'Laboratorio de Computación', 
    imageFileName: 'laboratorio de computacion.JPG',
    category: 'Zona Académica',
    description: 'Centro informático vanguardista dedicado a ciberdefensa, sistemas de geolocalización, cartografía digital y alfabetización militar de nuevas tecnologías.',
    mapCoords: { x: 74, y: 72 },
    hotspots: [
      { id: 'hs_8_5', yaw: 3.14, pitch: -0.05, targetPlaceId: '5', label: 'Volver a Aulas de Formación' },
      { id: 'hs_8_10', yaw: 0.5, pitch: -0.05, targetPlaceId: '10', label: 'Ir a Residencias' }
    ]
  },
  { 
    id: '9', 
    name: 'Centro de Salud', 
    imageFileName: 'centro de salud.JPG',
    category: 'Servicios y Vida Militar',
    description: 'Unidad de sanidad dispuesta con personal capacitado listo para reaccionar y tratar a los futuros soldados, promoviendo el bienestar integral rápido.',
    mapCoords: { x: 74, y: 76 },
    hotspots: [
      { id: 'hs_9_7', yaw: 3.0, pitch: -0.05, targetPlaceId: '7', label: 'Volver a Aulas' }
    ]
  },
  { 
    id: '10', 
    name: 'Residencias', 
    imageFileName: 'residencias.JPG',
    category: 'Servicios y Vida Militar',
    description: 'Dormitorios e instalaciones de convivencia donde los aspirantes descansan y conviven bajo estándares inquebrantables de orden, limpieza y compañerismo total.',
    mapCoords: { x: 41, y: 72 },
    hotspots: [
      { id: 'hs_10_8', yaw: 3.14, pitch: -0.05, targetPlaceId: '8', label: 'Regresar a la zona académica' }
    ]
  },
  { 
    id: '11', 
    name: 'Campo de Entrenamiento', 
    imageFileName: 'campo de entrenamiento.JPG',
    category: 'Entrenamiento Militar',
    description: 'Amplia explanada terrosa utilizada como antesala a las pistas severas. Aquí inician los ensayos de destreza atlética y marchas de campaña pesada de la milicia.',
    mapCoords: { x: 24, y: 36 },
    hotspots: [
      { id: 'hs_11_4', yaw: 3.1, pitch: -0.05, targetPlaceId: '4', label: 'Volver al Patio de Formación' },
      { id: 'hs_11_12', yaw: 0.5, pitch: -0.05, targetPlaceId: '12', label: 'Avanzar a Pista 1' },
      { id: 'hs_11_13', yaw: 5.5, pitch: -0.05, targetPlaceId: '13', label: 'Avanzar a Pista 2' }
    ]
  },
  { 
    id: '12', 
    name: 'Pista de Entrenamiento 1', 
    imageFileName: 'pista de entrenamiento.JPG',
    category: 'Entrenamiento Militar',
    description: 'Circuito de obstáculos militares y pasajes de combate estricto. Diseñada para llevar el vigor humano y la resistencia física individual y colectiva hasta sus picos.',
    mapCoords: { x: 75, y: 48 },
    hotspots: [
      { id: 'hs_12_11', yaw: 3.1, pitch: -0.05, targetPlaceId: '11', label: 'Volver al Campo' },
      { id: 'hs_12_14', yaw: 0.1, pitch: -0.02, targetPlaceId: '14', label: 'Ir a Pista de Tiros' }
    ]
  },
  { 
    id: '13', 
    name: 'Pista de Entrenamiento 2', 
    imageFileName: 'pistas de entrenamiento.JPG',
    category: 'Entrenamiento Militar',
    description: 'Fase de obstáculos combinados que demanda trabajo en binomios o patrullas; evaluando la capacidad de resolución de problemas bajo altísima presión del equipo.',
    mapCoords: { x: 78, y: 50 },
    hotspots: [
      { id: 'hs_13_11', yaw: 3.14, pitch: -0.05, targetPlaceId: '11', label: 'Volver al Campo Central' }
    ]
  },
  { 
    id: '14', 
    name: 'Pista de Tiros', 
    imageFileName: 'pista de tiros.JPG',
    category: 'Entrenamiento Militar',
    description: 'Polígono de práctica de precisión. Aquí los fusileros refinan su coordinación, postura y técnica para alcanzar maestría total en manejo de fuego real.',
    mapCoords: { x: 75, y: 62 },
    hotspots: [
      { id: 'hs_14_12', yaw: 3.14, pitch: -0.05, targetPlaceId: '12', label: 'Regresar a Pista 1' }
    ]
  },
  { 
    id: '15', 
    name: 'Vista Aérea 1', 
    imageFileName: 'DJI_20260306101401_0107_D.JPG',
    category: 'Vistas Panorámicas',
    description: 'Sobrevolando el Recinto Militar ESFORCE. Panorámica a vuelo de pájaro mostrando el diseño cuadrangular principal del campo base, la entrada y las avenidas cívicas.',
    mapCoords: { x: 50, y: 50 },
    hotspots: [
      { id: 'hs_15_1', yaw: 1.0, pitch: -0.4, targetPlaceId: '1', label: 'Bajar al Acceso Principal' },
      { id: 'hs_15_4', yaw: 4.5, pitch: -0.5, targetPlaceId: '4', label: 'Bajar al Patio de Formación' },
      { id: 'hs_15_16', yaw: 0.0, pitch: 0.0, targetPlaceId: '16', label: 'Siguiente Vista Aérea' }
    ]
  },
  { 
    id: '16', 
    name: 'Vista Aérea 2', 
    imageFileName: 'DJI_20260306110856_0118_D.JPG',
    category: 'Vistas Panorámicas',
    description: 'Impresionante horizonte a altitud de crucero, donde se puede apreciar el contorno de los bloques residenciales norte y la amplitud de nuestras pistas de campaña.',
    mapCoords: { x: 50, y: 50 },
    hotspots: [
      { id: 'hs_16_15', yaw: 3.1, pitch: 0.0, targetPlaceId: '15', label: 'Volver a Primera Vista Aérea' },
      { id: 'hs_16_5', yaw: 1.5, pitch: -0.4, targetPlaceId: '5', label: 'Bajar a las Aulas' }
    ]
  },
  { 
    id: '3', 
    name: 'Edificio Principal 2', 
    imageFileName: 'edificio principal (2).JPG', 
    category: 'Administración y Bienvenida',
    description: 'Cara frontal complementaria del comando general de la fuerza armada Vencedores del Cenepa.',
    hotspots: [{id: 'hs_3_2', yaw: 3.14, pitch: 0, targetPlaceId: '2', label: 'Volver a Edificio M.'}] 
  }
];
