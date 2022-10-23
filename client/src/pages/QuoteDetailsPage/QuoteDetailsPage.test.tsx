import { render, screen } from '@testing-library/react';
import * as ReactRouterDOM from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import QuoteDetailsPage from './QuoteDetailsPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('<QuoteDetailsPage />', () => {
  it('should render Back link', () => {
    jest.spyOn(ReactRouterDOM, 'useParams').mockReturnValueOnce({ id: '1' });

    render(
      <MemoryRouter>
        <QuoteDetailsPage />
      </MemoryRouter>,
    );

    const backLinkElement = screen.getByRole('link', { name: 'Back' });

    expect(backLinkElement).toBeInTheDocument();
    expect(backLinkElement).toHaveProperty(
      'href',
      expect.stringMatching(/localhost\/$/),
    );
  });

  it('should render Quote Details heading', () => {
    jest.spyOn(ReactRouterDOM, 'useParams').mockReturnValueOnce({ id: '1' });

    render(
      <MemoryRouter>
        <QuoteDetailsPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', { name: 'Quote Details' }),
    ).toBeInTheDocument();
  });

  it('should render QuoteDetails if found quote', () => {
    jest.spyOn(ReactRouterDOM, 'useParams').mockReturnValueOnce({ id: '1' });

    render(
      <MemoryRouter>
        <QuoteDetailsPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('quoteDetails')).toBeInTheDocument();
  });

  it('should render "Quote not found" message if quote doesn\'t exist', () => {
    jest.spyOn(ReactRouterDOM, 'useParams').mockReturnValueOnce({ id: '404' });

    render(
      <MemoryRouter>
        <QuoteDetailsPage />
      </MemoryRouter>,
    );

    expect(screen.queryByTestId('quoteDetails')).toBeNull();
    expect(screen.getByText('Quote not found')).toBeInTheDocument();
  });
});
