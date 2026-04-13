import { ESFORCE_PLACES, type Place360 } from '../data/esforcePlaces';
import { ESMEL_PLACES } from '../data/esmelPlaces';
import { ESPE_MATRIZ_PLACES } from '../data/espeMatrizPlaces';
import { ESPE_SD_PLACES } from '../data/espeSdPlaces';
import { ETFA_LATACUNGA_PLACES } from '../data/etfaLatacungaPlaces';
import { IASA_PLACES } from '../data/iasaPlaces';
import { IDIOMAS_PLACES } from '../data/idiomasPlaces';
import { IWIAS_PLACES } from '../data/iwiasPlaces';
import { BELISARIO_PLACES } from '../data/belisarioPlaces';

export interface SedeConfig {
  id: string;
  nombre: string;
  nombreCorto: string;
  ciudad: string;
  provincia: string;
  color: string;
  acento: string;
  basePath: string;
  mapImage: string;
  places: Place360[];
}

export const SEDE_CONFIGS: Record<string, SedeConfig> = {
  'esforce': {
    id: 'esforce',
    nombre: 'ESFORCE',
    nombreCorto: 'ESFORCE Ambato',
    ciudad: 'Ambato',
    provincia: 'Tungurahua',
    color: '#0a0a0a',
    acento: '#d97706',
    basePath: '360_ESFORCE',
    mapImage: '/map_esforce.png',
    places: ESFORCE_PLACES
  },
  'esmel': {
    id: 'esmel',
    nombre: 'ESMEL',
    nombreCorto: 'ESMEL',
    ciudad: 'Quito',
    provincia: 'Pichincha',
    color: '#1a2e05',
    acento: '#a3e635',
    basePath: '360_ESMEL',
    mapImage: '/map_esmel.png',
    places: ESMEL_PLACES
  },
  'espe-matriz': {
    id: 'espe-matriz',
    nombre: 'ESPE Matriz',
    nombreCorto: 'ESPE Sangolquí',
    ciudad: 'Sangolquí',
    provincia: 'Pichincha',
    color: '#0a0a0a',
    acento: '#e11d48',
    basePath: '360_ESPE_MATRIZ',
    mapImage: '/map_espe_matriz.png',
    places: ESPE_MATRIZ_PLACES
  },
  'espe-sd': {
    id: 'espe-sd',
    nombre: 'ESPE Santo Domingo',
    nombreCorto: 'ESPE Sto. Domingo',
    ciudad: 'Santo Domingo',
    provincia: 'Tsáchila',
    color: '#111827',
    acento: '#10b981',
    basePath: '360_ESPE_SD',
    mapImage: '/map_espe_sd.png',
    places: ESPE_SD_PLACES
  },
  'etfa-latacunga': {
    id: 'etfa-latacunga',
    nombre: 'ETFA Latacunga',
    nombreCorto: 'ETFA Latacunga',
    ciudad: 'Latacunga',
    provincia: 'Cotopaxi',
    color: '#1e293b',
    acento: '#38bdf8',
    basePath: '360_ETFA_LATACUNGA',
    mapImage: '/map_etfa_latacunga.png',
    places: ETFA_LATACUNGA_PLACES
  },
  'iasa': {
    id: 'iasa',
    nombre: 'IASA',
    nombreCorto: 'IASA Sangolquí',
    ciudad: 'Sangolquí',
    provincia: 'Pichincha',
    color: '#064e3b',
    acento: '#10b981',
    basePath: '360_IASA',
    mapImage: '/map_iasa_sangolqui.png',
    places: IASA_PLACES
  },
  'idiomas': {
    id: 'idiomas',
    nombre: 'Idiomas',
    nombreCorto: 'Idiomas Quito',
    ciudad: 'Quito',
    provincia: 'Pichincha',
    color: '#4c1d95',
    acento: '#a78bfa',
    basePath: '360_IDIOMAS',
    mapImage: '/map_idiomas_quito.png',
    places: IDIOMAS_PLACES
  },
  'iwias-puyo': {
    id: 'iwias-puyo',
    nombre: 'IWIAS Puyo',
    nombreCorto: 'IWIAS Puyo',
    ciudad: 'Puyo',
    provincia: 'Pastaza',
    color: '#064e3b',
    acento: '#65a30d',
    basePath: '360_IWIAS',
    mapImage: '/map_espe_sd.png', // Temporary Tropical Map
    places: IWIAS_PLACES
  },
  'belisario': {
    id: 'belisario',
    nombre: 'Belisario Quevedo',
    nombreCorto: 'Belisario Latacunga',
    ciudad: 'Latacunga',
    provincia: 'Cotopaxi',
    color: '#0891b2',
    acento: '#22d3ee',
    basePath: '360_BELISARIO',
    mapImage: '/map_etfa_latacunga.png', // Temporary Technical Map
    places: BELISARIO_PLACES
  }
};
