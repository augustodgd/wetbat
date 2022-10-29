import Airport from '../airport';

const GRU = { id: '1', code: 'GRU', name: 'Guarulhos' };
const GIG = { id: '2', code: 'GIG', name: 'Rio Galeão' };
const BSB = { id: '3', code: 'BSB', name: 'Brasília' };

const Airports: Record<string, Airport> = { GRU, GIG, BSB };

export default Airports;
