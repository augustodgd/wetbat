import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import quotes from '../../domain/Quotes.data';
import QuoteService from '../../services/quote/QuoteService';
import QuoteDetailsPage from './QuoteDetailsPage';

jest.mock('../../services/quote/QuoteService');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1' }),
}));

describe('<QuoteDetailsPage />', () => {
  it('should render Back link', async () => {
    render(
      <MemoryRouter>
        <QuoteDetailsPage />
      </MemoryRouter>,
    );

    await screen.findByTestId('quoteDetails');

    const backLinkElement = screen.getByRole('link', { name: 'Back' });

    expect(backLinkElement).toBeInTheDocument();
    expect(backLinkElement).toHaveProperty(
      'href',
      expect.stringMatching(/localhost\/$/),
    );
  });

  it('should render Quote Details heading', async () => {
    render(
      <MemoryRouter>
        <QuoteDetailsPage />
      </MemoryRouter>,
    );

    await screen.findByTestId('quoteDetails');

    expect(
      screen.getByRole('heading', { name: 'Quote Details' }),
    ).toBeInTheDocument();
  });

  it('should render QuoteDetails if found quote', async () => {
    render(
      <MemoryRouter>
        <QuoteDetailsPage />
      </MemoryRouter>,
    );

    expect(await screen.findByTestId('quoteDetails')).toBeInTheDocument();
  });

  it('should render "Quote not found" message if quote doesn\'t exist', async () => {
    jest.spyOn(QuoteService, 'getById').mockResolvedValue(quotes[0]);

    render(
      <MemoryRouter>
        <QuoteDetailsPage />
      </MemoryRouter>,
    );

    await waitFor(() => expect(QuoteService.getById).toBeCalled());

    expect(screen.queryByTestId('quoteDetails')).toBeNull();
    expect(screen.getByText('Quote not found')).toBeInTheDocument();
  });
});
