import Transportation from 'src/domain/transportation/transportation';
import Airport from '../airport/airport';

export default interface Quote {
  id: string;
  departure: Airport;
  destination: Airport;
  departureDate: Date;
  returnDate: Date;
  numberOfTravelers: number;
  contactName: string;
  contactEmail: string;
  transportation: Transportation;
}
