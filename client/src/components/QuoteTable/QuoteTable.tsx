import {
  LinkBox,
  LinkOverlay,
  Table,
  TableCellProps,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import Quote from '../../domain/Quote';

export interface TableColumn<T> {
  title: string;
  selector: (item: T) => JSX.Element | string;
  options?: TableCellProps;
  testid?: string;
}

const tableColumns: TableColumn<Quote>[] = [
  {
    title: 'Name',
    selector: (quote) => quote.contact.name,
  },
  {
    title: 'Departure',
    selector: (quote) => quote.departure.toString(),
  },
  {
    title: 'Destination',
    selector: (quote) => quote.destination.toString(),
  },
  {
    title: 'Departure Date',
    selector: (quote) => format(quote.departureDate, 'dd/MM/yyyy'),
  },
  {
    title: 'Return Date',
    selector: (quote) => format(quote.returnDate, 'dd/MM/yyyy'),
  },
];

export interface QuoteTableProps {
  quotes: Quote[];
}

export default function QuoteTable({ quotes }: QuoteTableProps) {
  return (
    <TableContainer>
      <Table variant="simple" data-testid="quoteTable">
        <Thead>
          <Tr>
            {tableColumns.map((column) => (
              <Th key={column.title} {...column.options}>
                {column.title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {quotes.map((quote) => (
            <LinkBox
              key={quote.id}
              as={Tr}
              _hover={{ backgroundColor: 'gray.50' }}
            >
              {tableColumns.map((column) => (
                <Td key={column.title} {...column.options}>
                  <LinkOverlay to={`/quote/${quote.id}`} as={RouterLink} />
                  {column.selector(quote)}
                </Td>
              ))}
            </LinkBox>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
