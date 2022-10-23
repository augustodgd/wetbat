import { render, screen, waitFor } from '@testing-library/react';
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
        render(<QuoteForm />);

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
      render(<QuoteForm />);

      await waitFor(() => expect(AirportService.listAll).toBeCalled());
      await waitFor(() => expect(TransportationService.listAll).toBeCalled());

      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
  });
});
