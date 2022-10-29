import { Airport } from 'src/domain/airport';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class AirportEntity implements Airport {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;
}
