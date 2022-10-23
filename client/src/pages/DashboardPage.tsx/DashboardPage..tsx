import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import QuoteTable from '../../components/QuoteTable/QuoteTable';
import quotes from '../../domain/Quotes.data';

export default function DashboardPage() {
  return (
    <Grid
      data-testid="dashboardPage"
      templateColumns="1fr 2fr"
      gap={5}
      padding={10}
    >
      <GridItem>
        <QuoteForm />
      </GridItem>

      <GridItem>
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
      </GridItem>
    </Grid>
  );
}
