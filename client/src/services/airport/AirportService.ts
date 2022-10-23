import { AxiosResponse } from 'axios';
import Airport from '../../domain/Airport';
import Api from '../Api';

export interface RawAirport {
  code: string;
  name: string;
}

export const parseAirport = (raw: RawAirport): Airport => {
  return new Airport(raw.code, raw.name);
};

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
