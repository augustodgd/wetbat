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
import { FormEvent, useEffect, useState } from 'react';
import Airport from '../../domain/Airport';
import Transportation from '../../domain/Transportation';
import AirportService from '../../services/airport/AirportService';
import TransportationService from '../../services/transportation/TransportationService';

interface QuoteFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function QuoteForm({ onSubmit }: QuoteFormProps) {
  const [transportations, setTransportations] = useState<Transportation[]>([]);
  const [airports, setAirports] = useState<Airport[]>([]);

  useEffect(() => {
    const fetchAirports = async () => {
      const airports = await AirportService.listAll();
      setAirports(airports);
    };
    const fetchTransportations = async () => {
      const transportations = await TransportationService.listAll();
      setTransportations(transportations);
    };

    fetchAirports();
    fetchTransportations();
  }, []);

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
      <form onSubmit={onSubmit}>
        <SimpleGrid columns={2} gap={5} mb={5}>
          <FormControl>
            <FormLabel>From</FormLabel>
            <Select name="departureId">
              {airports.map((airport) => (
                <option key={airport.id} value={airport.id}>
                  {airport.toString()}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Destination</FormLabel>
            <Select name="destinationId">
              {airports.map((airport) => (
                <option key={airport.id} value={airport.id}>
                  {airport.toString()}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Depart Date</FormLabel>
            <Input required name="departDate" type="date" />
          </FormControl>

          <FormControl>
            <FormLabel>Return Date</FormLabel>
            <Input required name="returnDate" type="date" />
          </FormControl>

          <FormControl>
            <FormLabel>People</FormLabel>
            <NumberInput isRequired name="numberOfTravelers" min={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel>Transportation</FormLabel>
            <Select name="transportationId">
              {transportations.map((transportation) => (
                <option key={transportation.id} value={transportation.id}>
                  {transportation.description}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input name="contactName" required type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input name="contactEmail" required type="email" />
          </FormControl>
        </SimpleGrid>

        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" colorScheme="teal">
            Create a quote
          </Button>
        </Box>
      </form>
    </Container>
  );
}
