import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AirportEntity } from 'src/domain/airport';
import Airports from 'src/domain/airport/data/airport.data';
import { TransportationEntity } from 'src/domain/transportation';
import Transportations from 'src/domain/transportation/data/transportation.data';
import { Repository } from 'typeorm';

@Injectable()
export default class SeederService {
  constructor(
    @InjectRepository(TransportationEntity)
    private readonly transportationRepository: Repository<TransportationEntity>,
    @InjectRepository(AirportEntity)
    private readonly airportRepository: Repository<AirportEntity>,
  ) {}

  private async seedAirports() {
    const airports = Object.values(Airports);

    const promises = airports.map(async (airport) => {
      const airportFound = await this.airportRepository.findOneBy({
        code: airport.code,
      });

      if (airportFound) return Promise.resolve();

      return this.airportRepository.save(airport);
    });

    return Promise.all(promises);
  }

  private seedTransportations() {
    const transportations = Object.values(Transportations);

    const promises = transportations.map(async (transportation) => {
      const transportationFound = await this.transportationRepository.findOneBy(
        {
          description: transportation.description,
        },
      );

      if (transportationFound) return Promise.resolve();

      return this.airportRepository.save(transportation);
    });

    return Promise.all(promises);
  }

  public seed() {
    return Promise.all([this.seedAirports(), this.seedTransportations()]);
  }
}
