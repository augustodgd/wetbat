import { Controller, Get } from '@nestjs/common';
import Transportation from './interfaces/transportation.interface';
import TransportationService from './transportation.service';

@Controller('transportation')
export default class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Get()
  listTransportations(): Transportation[] {
    return this.transportationService.listAll();
  }
}
