import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { AirportService } from '../airport';
import TransportationService from '../transportation/transportation.service';
import Quote from './quote';
import QuoteDTO from './quote.dto';
import QuoteService from './quote.service';

@Controller('quote')
export default class QuoteController {
  constructor(
    private readonly quoteService: QuoteService,
    private readonly airportService: AirportService,
    private readonly transportationService: TransportationService,
  ) {}

  @Get()
  listQuotes(): Promise<Quote[]> {
    return this.quoteService.listAll();
  }

  @Get(':id')
  async getQuote(@Param('id') id: string): Promise<Quote> {
    const quote = await this.quoteService.getById(id);

    if (!quote) {
      throw new NotFoundException('Quote not found');
    }

    return quote;
  }

  @Post()
  async createQuote(@Body() quoteDTO: QuoteDTO): Promise<Quote> {
    const departure = await this.airportService.getById(quoteDTO.departureId);
    const destination = await this.airportService.getById(
      quoteDTO.destinationId,
    );
    const transportation = await this.transportationService.getById(
      quoteDTO.transportationId,
    );

    const quote = { ...quoteDTO, departure, destination, transportation };
    return this.quoteService.create(quote);
  }
}
