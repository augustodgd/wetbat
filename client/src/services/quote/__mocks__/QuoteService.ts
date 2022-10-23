import quotes from '../../../domain/Quotes.data';

const QuoteService = {
  listAll: jest.fn().mockResolvedValue(quotes),
  getById: jest.fn().mockResolvedValue(quotes[0]),
};

export default QuoteService;
