import { Controller, Get } from '@nestjs/common';
import Transportation from './transportation';
import TransportationService from './transportation.service';

@Controller('transportation')
export default class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Get()
  listTransportations(): Promise<Transportation[]> {
    return this.transportationService.listAll();
  }
}
