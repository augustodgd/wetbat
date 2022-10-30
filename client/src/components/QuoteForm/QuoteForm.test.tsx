import { render, screen, waitFor } from '@testing-library/react';
import Airports from '../../domain/Airports.data';
import Transportations from '../../domain/Transportation.data';
import AirportService from '../../services/airport/AirportService';
import TransportationService from '../../services/transportation/TransportationService';
import QuoteForm from './QuoteForm';

jest.mock('../../services/airport/AirportService');
jest.mock('../../services/transportation/TransportationService');

const expectedFields = {
  combobox: ['From', 'Destination', 'Transportation'],
  textbox: ['Name', 'Email'],
  spinbutton: ['People'],
};

const dateFields = ['Depart Date', 'Return Date'];

describe('<QuoteForm />', () => {
  describe.each(Object.entries(expectedFields))(
    '%s fields',
    (fieldType, fieldLabels) => {
      it.each(fieldLabels)('should render %s field', async (label) => {
        render(<QuoteForm onSubmit={jest.fn()} />);

        await waitFor(() => expect(AirportService.listAll).toBeCalled());
        await waitFor(() => expect(TransportationService.listAll).toBeCalled());

        expect(
          screen.getByRole(fieldType, { name: label }),
        ).toBeInTheDocument();
      });
    },
  );

  describe('date fields', () => {
    it.each(dateFields)('should render %s field', async (label) => {
      render(<QuoteForm onSubmit={jest.fn()} />);

      await waitFor(() => expect(AirportService.listAll).toBeCalled());
      await waitFor(() => expect(TransportationService.listAll).toBeCalled());

      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
  });

  describe('select options', () => {
    it('should render select options', async () => {
      render(<QuoteForm onSubmit={jest.fn()} />);

      expect(
        await screen.findAllByRole('option', { name: Airports.GRU.toString() }),
      ).toHaveLength(2);

      expect(
        await screen.findAllByRole('option', {
          name: Transportations.RENTAL_CAR.description,
        }),
      ).toHaveLength(1);
    });
  });
});
