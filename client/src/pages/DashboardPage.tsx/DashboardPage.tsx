import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import { parse } from 'date-fns';
import { FormEvent, useEffect, useState } from 'react';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import QuoteTable from '../../components/QuoteTable/QuoteTable';
import Quote from '../../domain/Quote';
import QuoteDTO from '../../domain/Quote.dto';
import QuoteService from '../../services/quote/QuoteService';

function QuotesSection() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await QuoteService.listAll();
      setQuotes(quotes);
    };

    fetchQuotes();
  }, []);

  return (
    <Container
      p={7}
      maxW="container.xl"
      bgColor="white"
      borderRadius="7px"
      borderWidth="1px"
      borderColor="gray.200"
      height="100%"
    >
      <Heading color="gray.700" mb={5} size="lg">
        Quotes
      </Heading>
      <QuoteTable quotes={quotes} />
    </Container>
  );
}

export default function DashboardPage() {
  const onSubmitQuoteForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formatDate = (dateInput: string): string =>
      parse(dateInput, 'yyyy-MM-dd', new Date()).toISOString();

    const formData = new FormData(e.currentTarget);

    const quoteDTO: QuoteDTO = {
      contactEmail: formData.get('contactEmail') as string,
      contactName: formData.get('contactName') as string,
      departureId: formData.get('departureId') as string,
      destinationId: formData.get('destinationId') as string,
      departureDate: formatDate(formData.get('departDate') as string),
      returnDate: formatDate(formData.get('returnDate') as string),
      numberOfTravelers: Number(formData.get('numberOfTravelers')),
      transportationId: formData.get('transportationId') as string,
    };

    await QuoteService.create(quoteDTO);

    window.location.reload();
  };
  return (
    <Grid
      data-testid="dashboardPage"
      templateColumns="1fr 2fr"
      gap={5}
      padding={10}
    >
      <GridItem>
        <QuoteForm onSubmit={onSubmitQuoteForm} />
      </GridItem>

      <GridItem>
        <QuotesSection />
      </GridItem>
    </Grid>
  );
}
