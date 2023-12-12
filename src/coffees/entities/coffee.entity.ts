import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn() // automatically generated Id
  id: number;

  @Column() // required by default
  name: string;

  @Column() // required by default
  brand: string;

  // @Column('json', { nullable: true }) // here we specify the kind of data to take in and allow the columns to be empty or optional
  @JoinTable() // this decorator is used to specify the relationship between the two entities
  @ManyToMany(type => Flavor, (flavor) => flavor.coffees)
  flavors: string[];
}
