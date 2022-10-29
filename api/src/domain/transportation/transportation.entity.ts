import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Transportation from './transportation';

@Entity()
export default class TransportationEntity implements Transportation {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  description: string;
}
