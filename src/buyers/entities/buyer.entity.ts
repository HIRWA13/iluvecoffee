import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Buyer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  isVip: boolean;
}
