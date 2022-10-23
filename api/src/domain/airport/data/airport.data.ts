import Airport from '../interfaces/airport.interface';

const GRU = { code: 'GRU', name: 'Guarulhos' };
const GIG = { code: 'GIG', name: 'Rio Galeão' };
const BSB = { code: 'BSB', name: 'Brasília' };

const Airports: Record<string, Airport> = { GRU, GIG, BSB };

export default Airports;
