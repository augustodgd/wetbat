import Airport from './airport';

export default interface AirportRepository {
  listAll(): Promise<Airport[]>;
}
