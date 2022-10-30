import Airport from '../../domain/Airport';
import { createDTO } from '../../domain/Quote.dto';
import quotes, { rawQuotes } from '../../domain/Quotes.data';
import Api from '../Api';
import QuoteService from './QuoteService';

jest.mock('../Api', () => ({
  get: jest.fn(),
  post: jest.fn(),
}));

describe('QuoteService', () => {
  const mockAPIGet = jest.spyOn(Api, 'get');
  const mockAPIPost = jest.spyOn(Api, 'post');

  describe('listAll', () => {
    it('should make a GET request to /quote', async () => {
      mockAPIGet.mockResolvedValue({
        data: rawQuotes,
      });

      await QuoteService.listAll();

      expect(mockAPIGet).toBeCalledWith('/quote');
    });

    it('should parse Quote', async () => {
      mockAPIGet.mockResolvedValue({
        data: rawQuotes,
      });

      const result = await QuoteService.listAll();

      expect(result[0].departure).toBeInstanceOf(Airport);
      expect(result[0].destination).toBeInstanceOf(Airport);
      expect(result[0].departureDate).toBeInstanceOf(Date);
      expect(result[0].returnDate).toBeInstanceOf(Date);
    });
  });

  describe('getById', () => {
    beforeEach(() => {
      mockAPIGet.mockResolvedValue({
        data: rawQuotes[0],
      });
    });

    it('should make a GET request to /quote/:id', async () => {
      // eslint-disable-next-line testing-library/no-await-sync-query
      await QuoteService.getById(rawQuotes[0].id);

      expect(mockAPIGet).toBeCalledWith(`/quote/${rawQuotes[0].id}`);
    });

    it('should parse Quote', async () => {
      // eslint-disable-next-line testing-library/no-await-sync-query
      const result = await QuoteService.getById(rawQuotes[0].id);

      expect(result.departure).toBeInstanceOf(Airport);
      expect(result.destination).toBeInstanceOf(Airport);
      expect(result.departureDate).toBeInstanceOf(Date);
      expect(result.returnDate).toBeInstanceOf(Date);
    });
  });

  describe('create', () => {
    beforeEach(() => {
      mockAPIPost.mockResolvedValue({
        data: rawQuotes[0],
      });
    });

    it('should make a POST request to /quote', async () => {
      const dto = createDTO(quotes[0]);
      await QuoteService.create(dto);

      expect(mockAPIPost).toBeCalledWith(`/quote`, dto);
    });

    it('should parse Quote', async () => {
      const result = await QuoteService.create(createDTO(quotes[0]));

      expect(result.departure).toBeInstanceOf(Airport);
      expect(result.destination).toBeInstanceOf(Airport);
      expect(result.departureDate).toBeInstanceOf(Date);
      expect(result.returnDate).toBeInstanceOf(Date);
    });
  });
});
