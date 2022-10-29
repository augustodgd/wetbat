import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Airport from './airport';
import AirportEntity from './airport.entity';

@Injectable()
export default class AirportService {
  @InjectRepository(AirportEntity)
  private airportRepository: Repository<AirportEntity>;

  listAll(): Promise<Airport[]> {
    return this.airportRepository.find();
  }

  create(airport: AirportEntity): Promise<Airport> {
    return this.airportRepository.save(airport);
  }

  getById(id: string): Promise<Airport> {
    return this.airportRepository.findOneBy({ id });
  }
}
