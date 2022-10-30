import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { format } from 'date-fns';
import { MemoryRouter } from 'react-router-dom';
import { createDTO } from '../../domain/Quote.dto';
import quotes from '../../domain/Quotes.data';
import AirportService from '../../services/airport/AirportService';
import QuoteService from '../../services/quote/QuoteService';
import TransportationService from '../../services/transportation/TransportationService';
import DashboardPage from './DashboardPage';

jest.mock('../../services/quote/QuoteService');
jest.mock('../../services/airport/AirportService');
jest.mock('../../services/transportation/TransportationService');

const fields = {
  contactEmail: () => screen.getByRole('textbox', { name: 'Email' }),
  contactName: () => screen.getByRole('textbox', { name: 'Name' }),
  departureDate: () => screen.getByLabelText('Depart Date'),
  returnDate: () => screen.getByLabelText('Return Date'),
  numberOfTravelers: () => screen.getByRole('spinbutton', { name: 'People' }),
  departureId: () => screen.getByRole('combobox', { name: 'From' }),
  destinationId: () => screen.getByRole('combobox', { name: 'Destination' }),
  transportationId: () =>
    screen.getByRole('combobox', { name: 'Transportation' }),
};

describe('<DashboardPage />', () => {
  describe('render', () => {
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

      expect(
        screen.getByRole('heading', { name: 'Quotes' }),
      ).toBeInTheDocument();
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

  describe('onSubmit', () => {
    const windowLocation = window.location;

    beforeAll(() => {
      // @ts-ignore
      delete window.location;
      window.location = {
        ...windowLocation,
        reload: jest.fn(),
      };
    });

    afterAll(() => {
      window.location = windowLocation;
    });

    it('should call QuoteService.create and reload page on submit', async () => {
      const mockCreateQuote = jest.spyOn(QuoteService, 'create');

      const quoteDTO = createDTO(quotes[0]);
      delete quoteDTO.id;

      render(
        <MemoryRouter>
          <DashboardPage />
        </MemoryRouter>,
      );
      await waitFor(() => expect(AirportService.listAll).toBeCalled());
      await waitFor(() => expect(TransportationService.listAll).toBeCalled());
      await waitFor(() => expect(QuoteService.listAll).toBeCalled());

      userEvent.type(fields.contactEmail(), quoteDTO.contactEmail);
      userEvent.type(fields.contactName(), quoteDTO.contactName);
      userEvent.type(
        fields.numberOfTravelers(),
        String(quoteDTO.numberOfTravelers),
      );
      userEvent.type(
        fields.departureDate(),
        format(new Date(quoteDTO.departureDate), 'yyyy-MM-dd'),
      );
      userEvent.type(
        fields.returnDate(),
        format(new Date(quoteDTO.returnDate), 'yyyy-MM-dd'),
      );
      userEvent.selectOptions(fields.departureId(), quoteDTO.departureId);
      userEvent.selectOptions(fields.destinationId(), quoteDTO.destinationId);
      userEvent.selectOptions(
        fields.transportationId(),
        quoteDTO.transportationId,
      );

      userEvent.click(screen.getByRole('button', { name: 'Create a quote' }));

      expect(mockCreateQuote).toBeCalledWith(quoteDTO);
      await waitFor(() => expect(window.location.reload).toBeCalled());
    });
  });
});
