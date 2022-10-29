import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Transportation from './transportation';
import TransportationEntity from './transportation.entity';

@Injectable()
export default class TransportationService {
  @InjectRepository(TransportationEntity)
  private transportationRepository: Repository<TransportationEntity>;

  listAll(): Promise<Transportation[]> {
    return this.transportationRepository.find();
  }

  create(transportation: Transportation): Promise<Transportation> {
    return this.transportationRepository.save(transportation);
  }

  getById(id: string): Promise<Transportation> {
    return this.transportationRepository.findOneBy({ id });
  }
}
