import { AxiosResponse } from 'axios';
import Quote, { parseQuote, RawQuote } from '../../domain/Quote';
import QuoteDTO from '../../domain/Quote.dto';
import Api from '../Api';

type ListAllQuotesResponse = AxiosResponse<RawQuote[]>;
type GetQuoteByIdResponse = AxiosResponse<RawQuote>;
type CreateQuoteResponse = AxiosResponse<RawQuote>;

const QuoteService = {
  async listAll(): Promise<Quote[]> {
    const { data: quotes } = (await Api.get('/quote')) as ListAllQuotesResponse;

    return quotes.map(parseQuote);
  },

  async getById(id: string): Promise<Quote> {
    const { data: quote } = (await Api.get(
      `/quote/${id}`,
    )) as GetQuoteByIdResponse;

    return parseQuote(quote);
  },

  async create(quoteDTO: QuoteDTO): Promise<Quote> {
    const { data: quote } = (await Api.post(
      `/quote`,
      quoteDTO,
    )) as CreateQuoteResponse;

    return parseQuote(quote);
  },
};

export default QuoteService;
