export default class QuoteDTO {
  id: string;
  departureId: string;
  destinationId: string;
  departureDate: Date;
  returnDate: Date;
  numberOfTravelers: number;
  contactName: string;
  contactEmail: string;
  transportationId: string;
}
