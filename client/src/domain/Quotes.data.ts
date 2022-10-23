import Airports from './Airports.data';
import Contacts from './Contacts.data';
import Quote from './Quote';
import Transportation from './Transportation';

const quotes: Quote[] = [
  {
    id: '1',
    departure: Airports.GRU,
    destination: Airports.GIG,
    contact: Contacts.Ian,
    departureDate: new Date(2023, 0, 20),
    returnDate: new Date(2023, 0, 31),
    numberOfTravelers: 2,
    transportation: Transportation.PUBLIC_TRANSPORT,
  },
  {
    id: '2',
    departure: Airports.GIG,
    destination: Airports.BSB,
    contact: Contacts.Lorenzo,
    departureDate: new Date(2023, 2, 15),
    returnDate: new Date(2023, 2, 20),
    numberOfTravelers: 1,
    transportation: Transportation.PUBLIC_TRANSPORT,
  },
  {
    id: '3',
    departure: Airports.GIG,
    destination: Airports.GRU,
    contact: Contacts.Rodrigo,
    departureDate: new Date(2023, 1, 18),
    returnDate: new Date(2023, 1, 27),
    numberOfTravelers: 3,
    transportation: Transportation.RENTAL_CAR,
  },
  {
    id: '4',
    departure: Airports.BSB,
    destination: Airports.GRU,
    contact: Contacts.Gabriel,
    departureDate: new Date(2023, 2, 13),
    returnDate: new Date(2023, 2, 31),
    numberOfTravelers: 1,
    transportation: Transportation.PUBLIC_TRANSPORT,
  },
];

export default quotes;
