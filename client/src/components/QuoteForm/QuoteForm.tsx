import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';
import Airports from '../../domain/Airports.data';
import Transportation from '../../domain/Transportation';

export default function QuoteForm() {
  const airports = Object.values(Airports);
  const transportations = Object.values(Transportation);

  return (
    <Container
      p={7}
      maxW="container.xl"
      bgColor="white"
      borderRadius="7px"
      borderWidth="1px"
      borderColor="gray.200"
      data-testid="quoteForm"
    >
      <Heading color="gray.700" mb={7} size="lg">
        Quick Quote
      </Heading>
      <SimpleGrid columns={2} gap={5} mb={5} as="form">
        <FormControl>
          <FormLabel>From</FormLabel>
          <Select>
            {airports.map((airport) => (
              <option key={airport.code}>{airport.toString()}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Destination</FormLabel>
          <Select>
            {airports.map((airport) => (
              <option key={airport.code}>{airport.toString()}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Depart Date</FormLabel>
          <Input type="date" />
        </FormControl>

        <FormControl>
          <FormLabel>Return Date</FormLabel>
          <Input type="date" />
        </FormControl>

        <FormControl>
          <FormLabel>People</FormLabel>
          <NumberInput min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Transportation</FormLabel>
          <Select>
            {transportations.map((transportation) => (
              <option key={transportation}>{transportation}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
      </SimpleGrid>

      <Box display="flex" justifyContent="flex-end">
        <Button colorScheme="teal">Create a quote</Button>
      </Box>
    </Container>
  );
}
