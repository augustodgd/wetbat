import { render, screen, within } from '@testing-library/react';
import quotes from '../../domain/Quotes.data';
import QuoteDetails from './QuoteDetails';

const expectedValues: Record<string, string>[] = [
  {
    testid: 'quote-departure',
    heading: 'Departure',
    value: 'GRU - Guarulhos',
  },
  {
    testid: 'quote-destination',
    heading: 'Destination',
    value: 'GIG - Rio Galeão',
  },
  {
    testid: 'quote-departureDate',
    heading: 'Departure Date',
    value: '20/01/2023',
  },
  {
    testid: 'quote-returnDate',
    heading: 'Return Date',
    value: '31/01/2023',
  },
  {
    testid: 'quote-numOfTravelers',
    heading: 'No. of Travelers',
    value: '2',
  },
  {
    testid: 'quote-name',
    heading: 'Name',
    value: 'Ian Mateus',
  },
  {
    testid: 'quote-email',
    heading: 'Email',
    value: 'ian.mateus.monteiro@wetbat.com',
  },
  {
    testid: 'quote-transportation',
    heading: 'Transportation',
    value: 'Public Transport',
  },
];

const quote = quotes[0];

describe('<QuoteDetails />', () => {
  describe('Headings', () => {
    it.each(expectedValues)(
      'should render $heading heading',
      ({ testid, heading }) => {
        render(<QuoteDetails quote={quote} />);
        const headingElement = within(screen.getByTestId(testid)).getByRole(
          'heading',
          {
            name: heading,
          },
        );
        expect(headingElement).toBeInTheDocument();
      },
    );
  });

  describe('Values', () => {
    it.each(expectedValues)(
      'should render $heading value',
      ({ testid, value }) => {
        render(<QuoteDetails quote={quote} />);
        const valueElement = within(screen.getByTestId(testid)).getByText(
          value,
        );

        expect(valueElement).toBeInTheDocument();
      },
    );
  });
});
