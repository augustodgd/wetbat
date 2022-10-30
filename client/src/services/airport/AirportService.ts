import { AxiosResponse } from 'axios';
import Airport, { parseAirport, RawAirport } from '../../domain/Airport';
import Api from '../Api';

type ListAllAirportsResponse = AxiosResponse<RawAirport[]>;

const AirportService = {
  async listAll(): Promise<Airport[]> {
    const { data: airports } = (await Api.get(
      '/airport',
    )) as ListAllAirportsResponse;

    return airports.map(parseAirport);
  },
};

export default AirportService;
