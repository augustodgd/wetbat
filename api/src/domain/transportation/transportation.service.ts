import { Injectable } from '@nestjs/common';
import Transportations from './data/transportation.data';
import Transportation from './interfaces/transportation.interface';

@Injectable()
export default class TransportationService {
  listAll(): Transportation[] {
    return Object.values(Transportations);
  }
}
