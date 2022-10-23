import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AirportService from '../../services/airport/AirportService';
import QuoteService from '../../services/quote/QuoteService';
import TransportationService from '../../services/transportation/TransportationService';
import DashboardPage from './DashboardPage';

jest.mock('../../services/quote/QuoteService');
jest.mock('../../services/airport/AirportService');
jest.mock('../../services/transportation/TransportationService');

describe('<DashboardPage />', () => {
  it('should render QuoteForm', async () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    );

    await waitFor(() => expect(AirportService.listAll).toBeCalled());
    await waitFor(() => expect(TransportationService.listAll).toBeCalled());
    await waitFor(() => expect(QuoteService.listAll).toBeCalled());

    expect(screen.getByTestId('quoteForm')).toBeInTheDocument();
  });

  it('should render Quotes heading', async () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    );

    await waitFor(() => expect(AirportService.listAll).toBeCalled());
    await waitFor(() => expect(TransportationService.listAll).toBeCalled());
    await waitFor(() => expect(QuoteService.listAll).toBeCalled());

    expect(screen.getByRole('heading', { name: 'Quotes' })).toBeInTheDocument();
  });

  it('should render QuoteTable', async () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>,
    );

    await waitFor(() => expect(AirportService.listAll).toBeCalled());
    await waitFor(() => expect(TransportationService.listAll).toBeCalled());
    await waitFor(() => expect(QuoteService.listAll).toBeCalled());

    expect(screen.getByTestId('quoteTable')).toBeInTheDocument();
  });
});
