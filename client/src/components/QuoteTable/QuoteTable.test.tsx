import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import allQuotes from '../../domain/Quotes.data';
import QuoteTable, { QuoteTableProps } from './QuoteTable';

const expectedValues = [
  {
    heading: 'Name',
    value: 'Ian Mateus',
  },
  {
    heading: 'Departure',
    value: 'GRU - Guarulhos',
  },
  {
    heading: 'Destination',
    value: 'GIG - Rio Galeão',
  },
  {
    heading: 'Departure Date',
    value: '20/01/2023',
  },
  {
    heading: 'Return Date',
    value: '31/01/2023',
  },
];

describe('<QuoteDetails />', () => {
  describe('Headings', () => {
    const props: QuoteTableProps = {
      quotes: [],
    };

    it('should have 5 column headers', () => {
      render(
        <MemoryRouter>
          <QuoteTable {...props} />
        </MemoryRouter>,
      );

      expect(screen.getAllByRole('columnheader')).toHaveLength(5);
    });

    it.each(expectedValues)(
      'should render $heading column header',
      ({ heading }) => {
        render(
          <MemoryRouter>
            <QuoteTable {...props} />
          </MemoryRouter>,
        );
        const headingElement = screen.getByRole('columnheader', {
          name: heading,
        });
        expect(headingElement).toBeInTheDocument();
      },
    );
  });

  describe('Values', () => {
    const props: QuoteTableProps = {
      quotes: allQuotes.slice(0, 1),
    };

    it('should have 2 rows (header + data row)', () => {
      render(
        <MemoryRouter>
          <QuoteTable {...props} />
        </MemoryRouter>,
      );

      expect(screen.getAllByRole('row')).toHaveLength(2);
    });

    it.each(expectedValues)('should render $heading value', ({ value }) => {
      render(
        <MemoryRouter>
          <QuoteTable {...props} />
        </MemoryRouter>,
      );

      const valueElement = screen.getByRole('cell', { name: value });
      expect(valueElement).toBeInTheDocument();
    });
  });

  describe('Link', () => {
    const props: QuoteTableProps = {
      quotes: allQuotes.slice(0, 1),
    };

    it('should redirect /quotes/:id when click on row', async () => {
      render(
        <MemoryRouter>
          <QuoteTable {...props} />
        </MemoryRouter>,
      );

      const linkElement = within(
        screen.getByRole('cell', { name: /Ian Mateus/ }),
      ).getByRole('link');

      expect(linkElement).toHaveProperty(
        'href',
        expect.stringMatching(/\/quote\/1$/),
      );
    });
  });
});
