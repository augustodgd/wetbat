import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportController, AirportEntity, AirportService } from './airport';
import { QuoteController, QuoteService } from './quote';
import QuoteEntity from './quote/quote.entity';
import { TransportationEntity } from './transportation';
import TransportationController from './transportation/transportation.controller';
import TransportationService from './transportation/transportation.service';

@Module({
  controllers: [AirportController, QuoteController, TransportationController],
  imports: [
    TypeOrmModule.forFeature([
      AirportEntity,
      TransportationEntity,
      QuoteEntity,
    ]),
  ],
  providers: [AirportService, QuoteService, TransportationService],
})
export default class DomainModule {}
