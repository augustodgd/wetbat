import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

import Quote from '../../domain/Quote';
import { TableColumn } from '../QuoteTable/QuoteTable';

interface QuoteDetailsProps {
  quote: Quote;
}

const tableColumns: TableColumn<Quote>[] = [
  {
    title: 'Name',
    selector: (quote) => quote.contact.name,
    testid: 'quote-name',
  },
  {
    title: 'Email',
    selector: (quote) => quote.contact.email,
    testid: 'quote-email',
  },
  {
    title: 'Departure',
    selector: (quote) => quote.departure.toString(),
    testid: 'quote-departure',
  },
  {
    title: 'Destination',
    selector: (quote) => quote.destination.toString(),
    testid: 'quote-destination',
  },
  {
    title: 'Departure Date',
    selector: (quote) => format(quote.departureDate, 'dd/MM/yyyy'),
    testid: 'quote-departureDate',
  },
  {
    title: 'Return Date',
    selector: (quote) => format(quote.returnDate, 'dd/MM/yyyy'),
    testid: 'quote-returnDate',
  },
  {
    title: 'No. of Travelers',
    selector: (quote) => String(quote.numberOfTravelers),
    testid: 'quote-numOfTravelers',
  },
  {
    title: 'Transportation',
    selector: (quote) => String(quote.transportation),
    testid: 'quote-transportation',
  },
];

export default function QuoteDetails({ quote }: QuoteDetailsProps) {
  return (
    <SimpleGrid columns={2} p={5} data-testid="quoteDetails">
      {tableColumns.map((col) => (
        <Box py={3} key={col.title} data-testid={col.testid}>
          <Heading
            mb={2}
            color="gray.600"
            as="h3"
            size="xs"
            textTransform="uppercase"
          >
            {col.title}
          </Heading>
          <Text>{col.selector(quote)}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}
