import Transportations from 'src/domain/transportation/data/transportation.data';
import Airports from '../../airport/data/airport.data';
import Contacts from '../../contact/data/contact.data';
import Quote from '../quote';

const quotes: Quote[] = [
  {
    id: '1',
    departure: Airports.GRU,
    destination: Airports.GIG,
    contactName: Contacts.IAN.name,
    contactEmail: Contacts.IAN.email,
    departureDate: new Date(2023, 0, 20),
    returnDate: new Date(2023, 0, 31),
    numberOfTravelers: 2,
    transportation: Transportations.PUBLIC_TRANSPORT,
  },
  {
    id: '2',
    departure: Airports.GIG,
    destination: Airports.BSB,
    contactName: Contacts.LORENZO.name,
    contactEmail: Contacts.LORENZO.email,
    departureDate: new Date(2023, 2, 15),
    returnDate: new Date(2023, 2, 20),
    numberOfTravelers: 1,
    transportation: Transportations.PUBLIC_TRANSPORT,
  },
  {
    id: '3',
    departure: Airports.GIG,
    destination: Airports.GRU,
    contactName: Contacts.RODRIGO.name,
    contactEmail: Contacts.RODRIGO.email,
    departureDate: new Date(2023, 1, 18),
    returnDate: new Date(2023, 1, 27),
    numberOfTravelers: 3,
    transportation: Transportations.RENTAL_CAR,
  },
  {
    id: '4',
    departure: Airports.BSB,
    destination: Airports.GRU,
    contactName: Contacts.GABRIEL.name,
    contactEmail: Contacts.GABRIEL.email,
    departureDate: new Date(2023, 2, 13),
    returnDate: new Date(2023, 2, 31),
    numberOfTravelers: 1,
    transportation: Transportations.PUBLIC_TRANSPORT,
  },
];

export default quotes;
