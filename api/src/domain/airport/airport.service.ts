import { Injectable } from '@nestjs/common';
import Airports from './data/airport.data';
import Airport from './interfaces/airport.interface';

@Injectable()
export default class AirportService {
  listAll(): Airport[] {
    return Object.values(Airports);
  }
}
