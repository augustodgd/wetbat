import Transportations from '../../domain/Transportation.data';
import Api from '../Api';
import TransportationService from './TransportationService';

jest.mock('../Api', () => ({
  get: jest.fn(),
}));

describe('TransportationService', () => {
  describe('listAll', () => {
    const mockAPIGet = jest.spyOn(Api, 'get').mockResolvedValue({
      data: [Transportations.RENTAL_CAR],
    });

    it('should make a GET request to /transportation', async () => {
      const result = await TransportationService.listAll();

      expect(mockAPIGet).toBeCalledWith('/transportation');
      expect(result).toStrictEqual([Transportations.RENTAL_CAR]);
    });
  });
});
