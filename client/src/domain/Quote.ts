import Airport from './Airport';
import Contact from './Contact';
import Transportation from './Transportation';

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
