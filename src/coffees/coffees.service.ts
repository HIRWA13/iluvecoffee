import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Solo Sol',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 3,
      name: 'Colombia Narino',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ]; // let's use this array of coffes as our data base for now

  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }
  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }
  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex > 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
