import Transportation from '../interfaces/transportation.interface';

const Transportations: Record<string, Transportation> = {
  RENTAL_CAR: { id: 'RENTAL_CAR', description: 'Rental Car' },
  PUBLIC_TRANSPORT: { id: 'PUBLIC_TRANSPORT', description: 'Public Transport' },
};

export default Transportations;
