import Airport, { parseAirport, RawAirport } from './Airport';
import Transportation from './Transportation';

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

export interface RawQuote
  extends Omit<
    Quote,
    'departureDate' | 'returnDate' | 'departure' | 'destination'
  > {
  departureDate: string;
  returnDate: string;
  departure: RawAirport;
  destination: RawAirport;
}

export function parseQuote(raw: RawQuote): Quote {
  return {
    ...raw,
    departureDate: new Date(raw.departureDate),
    returnDate: new Date(raw.returnDate),
    departure: parseAirport(raw.departure),
    destination: parseAirport(raw.destination),
  };
}
