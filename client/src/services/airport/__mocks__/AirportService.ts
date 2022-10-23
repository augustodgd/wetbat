import Airports from '../../../domain/Airports.data';

const AirportService = {
  listAll: jest.fn().mockResolvedValue(Object.values(Airports)),
};

export default AirportService;
