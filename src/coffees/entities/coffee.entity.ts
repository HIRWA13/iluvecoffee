import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn() // automatically generated Id
  id: number;

  @Column() // required by default
  name: string;

  @Column() // required by default
  brand: string;

  @Column('json', { nullable: true }) // here we specify the kind of data to take in and allow the columns to be empty or optional
  flavors: string[];
}
