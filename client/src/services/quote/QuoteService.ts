import { AxiosResponse } from 'axios';
import Quote from '../../domain/Quote';
import { parseAirport, RawAirport } from '../airport/AirportService';
import Api from '../Api';

interface RawQuote
  extends Omit<
    Quote,
    'departureDate' | 'returnDate' | 'departure' | 'destination'
  > {
  departureDate: string;
  returnDate: string;
  departure: RawAirport;
  destination: RawAirport;
}

function parseQuote(raw: RawQuote): Quote {
  return {
    ...raw,
    departureDate: new Date(raw.departureDate),
    returnDate: new Date(raw.returnDate),
    departure: parseAirport(raw.departure),
    destination: parseAirport(raw.destination),
  };
}

type ListAllQuotesResponse = AxiosResponse<RawQuote[]>;
type GetQuoteByIdResponse = AxiosResponse<RawQuote>;

const QuoteService = {
  async listAll(): Promise<Quote[]> {
    const { data: quotes } = (await Api.get('/quote')) as ListAllQuotesResponse;

    return quotes.map(parseQuote);
  },

  async getById(id: string): Promise<Quote | undefined> {
    const { data: quote } = (await Api.get(
      `/quote/${id}`,
    )) as GetQuoteByIdResponse;

    return parseQuote(quote);
  },
};

export default QuoteService;
