import { Controller, Get } from '@nestjs/common';
import AirportService from './airport.service';

@Controller('airport')
export default class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get()
  listAirports() {
    return this.airportService.listAll();
  }
}
