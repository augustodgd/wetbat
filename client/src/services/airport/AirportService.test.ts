import Airport from '../../domain/Airport';
import Api from '../Api';
import AirportService from './AirportService';

jest.mock('../Api', () => ({
  get: jest.fn(),
}));

describe('AirportService', () => {
  describe('listAll', () => {
    const mockAPIGet = jest.spyOn(Api, 'get').mockResolvedValue({
      data: [{ id: 1, code: 'GRU', name: 'Guarulhos' }],
    });

    it('should make a GET request to /airport', async () => {
      await AirportService.listAll();

      expect(mockAPIGet).toBeCalledWith('/airport');
    });

    it('should parse the Airport object', async () => {
      const result = await AirportService.listAll();

      expect(result[0]).toBeInstanceOf(Airport);
    });
  });
});
