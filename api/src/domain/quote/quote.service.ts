import { Injectable } from '@nestjs/common';
import quotes from './data/quotes.data';
import Quote from './interfaces/quote.interface';

@Injectable()
export default class QuoteService {
  listAll(): Quote[] {
    return quotes;
  }

  getById(id: string): Quote | undefined {
    return quotes.find((quote) => quote.id === id);
  }
}
