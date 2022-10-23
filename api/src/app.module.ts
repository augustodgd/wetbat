import { Module } from '@nestjs/common';
import { AirportController, AirportService } from './domain/airport';
import { QuoteController, QuoteService } from './domain/quote';
import TransportationController from './domain/transportation/transportation.controller';
import TransportationService from './domain/transportation/transportation.service';

@Module({
  imports: [],
  controllers: [AirportController, QuoteController, TransportationController],
  providers: [AirportService, QuoteService, TransportationService],
})
export class AppModule {}
