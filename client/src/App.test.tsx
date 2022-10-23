import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import AirportService from './services/airport/AirportService';
import QuoteService from './services/quote/QuoteService';
import TransportationService from './services/transportation/TransportationService';

jest.mock('./services/quote/QuoteService');
jest.mock('./services/airport/AirportService');
jest.mock('./services/transportation/TransportationService');

describe('<App />', () => {
  it('should render header', async () => {
    render(<App />);

    await waitFor(() => expect(AirportService.listAll).toBeCalled());
    await waitFor(() => expect(TransportationService.listAll).toBeCalled());
    await waitFor(() => expect(QuoteService.listAll).toBeCalled());

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render DashboardPage by default', async () => {
    render(<App />);

    await waitFor(() => expect(AirportService.listAll).toBeCalled());
    await waitFor(() => expect(TransportationService.listAll).toBeCalled());
    await waitFor(() => expect(QuoteService.listAll).toBeCalled());

    expect(screen.getByTestId('dashboardPage')).toBeInTheDocument();
  });
});
