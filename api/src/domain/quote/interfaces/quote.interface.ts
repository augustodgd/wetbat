import Transportation from 'src/domain/transportation/interfaces/transportation.interface';
import Airport from '../../airport/interfaces/airport.interface';
import Contact from '../../contact/interfaces/contact.interface';

export default interface Quote {
  id: string;
  departure: Airport;
  destination: Airport;
  departureDate: Date;
  returnDate: Date;
  numberOfTravelers: number;
  contact: Contact;
  transportation: Transportation;
}
