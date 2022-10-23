import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import Quote from './interfaces/quote.interface';
import QuoteService from './quote.service';

@Controller('quote')
export default class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  listQuotes(): Quote[] {
    return this.quoteService.listAll();
  }

  @Get(':id')
  getQuote(@Param('id') id: string): Quote {
    const quote = this.quoteService.getById(id);

    if (!quote) {
      throw new NotFoundException('Quote not found');
    }

    return quote;
  }
}
