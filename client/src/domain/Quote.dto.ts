import Quote from './Quote';

export default interface QuoteDTO {
  id?: string;
  departureId: string;
  destinationId: string;
  departureDate: string;
  returnDate: string;
  numberOfTravelers: number;
  contactName: string;
  contactEmail: string;
  transportationId: string;
}

export const createDTO = (quote: Quote): QuoteDTO => ({
  id: quote.id,
  departureId: quote.departure.id,
  destinationId: quote.destination.id,
  departureDate: quote.departureDate.toISOString(),
  returnDate: quote.returnDate.toISOString(),
  numberOfTravelers: quote.numberOfTravelers,
  contactName: quote.contactName,
  contactEmail: quote.contactEmail,
  transportationId: quote.transportation.id,
});
