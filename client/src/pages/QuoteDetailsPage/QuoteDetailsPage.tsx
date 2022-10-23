import { ArrowBackIcon } from '@chakra-ui/icons';
import { Container, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import QuoteDetails from '../../components/QuoteDetails/QuoteDetails';
import quotes from '../../domain/Quotes.data';

export default function QuoteDetailsPage() {
  const { id } = useParams();

  const quote = quotes.find((q) => q.id === id);

  return (
    <Container maxW="container.xl" my={10}>
      <ChakraLink as={RouterLink} to="/">
        <ArrowBackIcon mr={1} />
        Back
      </ChakraLink>
      <Container
        p={7}
        mt={3}
        maxW="container.xl"
        bgColor="white"
        borderRadius="7px"
        borderWidth="1px"
        borderColor="gray.200"
      >
        <Heading color="gray.700">Quote Details</Heading>
        {quote ? <QuoteDetails quote={quote} /> : <Text>Quote not found</Text>}
      </Container>
    </Container>
  );
}
