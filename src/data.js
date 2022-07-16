// import house images
import House1 from './assets/img/houses/rumah1.jpg';
import House2 from './assets/img/houses/rumah2.jpg';
import House3 from './assets/img/houses/rumah3.jpg';
import House4 from './assets/img/houses/rumah5.jpg';
import House5 from './assets/img/houses/rumah6.jpg';
import House6 from './assets/img/houses/rumah7.jpg';

// import house large images
import House1Lg from './assets/img/houses/rumah1.jpg';
import House2Lg from './assets/img/houses/rumah2.jpg';
import House3Lg from './assets/img/houses/rumah3.jpg';
import House4Lg from './assets/img/houses/rumah5.jpg';
import House5Lg from './assets/img/houses/rumah6.jpg';
import House6Lg from './assets/img/houses/rumah7.jpg';


// import apartments images
import Apartment1 from './assets/img/apartments/apartemen1.jpg';
import Apartment2 from './assets/img/apartments/apartemen2.jpg';
import Apartment3 from './assets/img/apartments/apartemen3.jpg';
import Apartment4 from './assets/img/apartments/apartemen4.jpg';
import Apartment5 from './assets/img/apartments/apartemen5.jpg';
import Apartment6 from './assets/img/apartments/apartemen6.jpg';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/apartemen1.jpg';
import Apartment2Lg from './assets/img/apartments/apartemen2.jpg';
import Apartment3Lg from './assets/img/apartments/apartemen3.jpg';
import Apartment4Lg from './assets/img/apartments/apartemen4.jpg';
import Apartment5Lg from './assets/img/apartments/apartemen5.jpg';
import Apartment6Lg from './assets/img/apartments/apartemen6.jpg';

// import agents images
import Agent1 from './assets/img/agents/agent1.jpg';
import Agent2 from './assets/img/agents/agent2.jpg';
import Agent3 from './assets/img/agents/agent3.jpg';
import Agent4 from './assets/img/agents/agent4.jpg';
import Agent5 from './assets/img/agents/agent5.jpg';
import Agent6 from './assets/img/agents/agent6.jpg';
import Agent7 from './assets/img/agents/agent7.jpg';
import Agent8 from './assets/img/agents/agent8.jpg';
import Agent9 from './assets/img/agents/agent9.jpg';


export const housesData = [
  {
    id: 1,
    type: 'Rumah',
    name: 'Rumah 1',
    description:
      'Dekat dengan area perkantoran dan 15 menit ke mall grand indonesia',
    image: House1,
    imageLg: House1Lg,
    country: 'Jakarta',
    address: 'jl. raya lapangan banteng 1',
    bedrooms: '3',
    bathrooms: '2',
    surface: '300 m',
    year: '2016',
    price: '150 juta',
    agent: {
      image: Agent1,
      name: 'Analita',
      phone: '0812 3204568',
    },
  },
  {
    id: 2,
    type: 'Rumah',
    name: 'Rumah 2',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: House2,
    imageLg: House2Lg,
    country: 'Bandung',
    address: 'jl setiabudi no.1',
    bedrooms: '6',
    bathrooms: '3',
    surface: '400 m',
    year: '2018',
    price: '120 juta',
    agent: {
      image: Agent2,
      name: 'Yonda',
      phone: '0813 45602943',
    },
  },
  {
    id: 3,
    type: 'Rumah',
    name: 'Rumah 3',
    description:
      'Dekat dengan terminal Bis dan 15 menit ke stasiun bogor',
    image: House3,
    imageLg: House3Lg,
    country: 'Bogor',
    address: 'Jl Raya Padjajaran no.4',
    bedrooms: '6',
    bathrooms: '3',
    surface: '350 m',
    year: '2016',
    price: '85 juta',
    agent: {
      image: Agent3,
      name: 'Rahmat',
      phone: '0813 670892',
    },
  },
  {
    id: 4,
    type: 'Rumah',
    name: 'Rumah 4',
    description:
      'Dekat dengan halte Bis dan 15 menit ke tempat wisata',
    image: House4,
    imageLg: House4Lg,
    country: 'Jakarta',
    address: 'Jl raya menteng no.3',
    bedrooms: '6',
    bathrooms: '3',
    surface: '500 m',
    year: '2004',
    price: '100 juta',
    agent: {
      image: Agent4,
      name: 'Vira',
      phone: '0812 3204568',
    },
  },
  {
    id: 5,
    type: 'Rumah',
    name: 'Rumah 5',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: House5,
    imageLg: House5Lg,
    country: 'Bekasi',
    address: 'Jl cut mutia no.5',
    bedrooms: '5',
    bathrooms: '3',
    surface: '120 m',
    year: '2015',
    price: '50 juta',
    agent: {
      image: Agent5,
      name: 'Yuki',
      phone: '0812 84732',
    },
  },
  {
    id: 6,
    type: 'Rumah',
    name: 'Rumah 6',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: House6,
    imageLg: House6Lg,
    country: 'Tangerang',
    address: 'JL Cisauk no.7',
    bedrooms: '6',
    bathrooms: '3',
    surface: '130 m',
    year: '2014',
    price: '50 juta',
    agent: {
      image: Agent6,
      name: 'masita',
      phone: '0813 560278',
    },
  },
  {
    id: 7,
    type: 'Apartement',
    name: 'Apartement 1',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'jakarta',
    address: 'Pakubuwono',
    bedrooms: '2',
    bathrooms: '1',
    surface: '85 m',
    year: '2012',
    price: '30 juta',
    agent: {
      image: Agent7,
      name: 'samira',
      phone: '0812 8456343',
    },
  },
  {
    id: 8,
    type: 'Apartement',
    name: 'Apartement 2',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Bogor',
    address: 'Padjajaran suite',
    bedrooms: '3',
    bathrooms: '1',
    surface: '73 m',
    year: '2011',
    price: '55 juta',
    agent: {
      image: Agent8,
      name: 'Juliana ',
      phone: '0813 4523320',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Tangerang',
    address: 'Panjibuwono suites',
    bedrooms: '2',
    bathrooms: '1',
    surface: '68 m',
    year: '2011',
    price: '36 juta',
    agent: {
      image: Agent9,
      name: 'Jerry yan',
      phone: '0812 765082',
    },
  },
 
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Bekasi',
    address: 'Summarecon',
    bedrooms: '2',
    bathrooms: '1',
    surface: ' 90 mt',
    year: '2011',
    price: '60 juta',
    agent: {
      image: Agent4,
      name: 'Kartika',
      phone: '0812 8743000',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Jakarta',
    address: 'Basuura city',
    bedrooms: '3',
    bathrooms: '1',
    surface: '78 m',
    year: '2012',
    price: '36 juta',
    agent: {
      image: Agent5,
      name: 'Govar',
      phone: '0813 982400',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Dekat dengan stasiun kereta api dan 15 menit ke tempat wisata',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Bekasi',
    address: 'Kamala lagoon',
    bedrooms: '2',
    bathrooms: '1',
    surface: '45 m',
    year: '2010',
    price: '30 juta',
    agent: {
      image: Agent6,
      name: 'Kharisma',
      phone: '0812 872123230',
    },
  },
];
