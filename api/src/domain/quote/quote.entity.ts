import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Airport, AirportEntity } from '../airport';
import { Transportation, TransportationEntity } from '../transportation';
import Quote from './quote';

@Entity()
export default class QuoteEntity implements Quote {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => AirportEntity)
  departure: Airport;

  @ManyToOne(() => AirportEntity)
  destination: Airport;

  @Column()
  departureDate: Date;

  @Column()
  returnDate: Date;

  @Column()
  numberOfTravelers: number;

  @Column()
  contactName: string;

  @Column()
  contactEmail: string;

  @ManyToOne(() => TransportationEntity)
  transportation: Transportation;
}
