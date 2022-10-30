import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DBConfigModule from 'src/config/db/dbconfig.module';
import { AirportEntity } from 'src/domain/airport';
import { TransportationEntity } from 'src/domain/transportation';
import SeederService from './seeder.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AirportEntity, TransportationEntity]),
    DBConfigModule,
  ],
  providers: [SeederService],
})
export default class SeederModule {}
