import { ArrowBackIcon } from '@chakra-ui/icons';
import { Container, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import QuoteDetails from '../../components/QuoteDetails/QuoteDetails';
import Quote from '../../domain/Quote';
import QuoteService from '../../services/quote/QuoteService';

export default function QuoteDetailsPage() {
  const { id } = useParams();

  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const fetchQuote = async (id: string) => {
      const quote = await QuoteService.getById(id);
      setQuote(quote);
    };

    if (id) {
      fetchQuote(id);
    }
  }, [id]);

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
