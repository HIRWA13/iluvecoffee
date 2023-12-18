import { Injectable } from '@nestjs/common';
import { Buyer } from './entities/buyer.entity';

@Injectable()
export class BuyersService {
  private buyers: Buyer[] = [
    {
      id: 1,
      name: 'John',
      location: 'USA',
      isVip: true,
    },
    {
      id: 2,
      name: 'Maria',
      location: 'Brazil',
      isVip: false,
    },
    {
      id: 3,
      name: 'Kate',
      location: 'Russia',
      isVip: true,
    },
    {
      id: 4,
      name: 'Alex',
      location: 'USA',
      isVip: false,
    },
  ];

  // methods
  findAll() {
    return this.buyers;
  }

  findOne(id: string) {
    return this.buyers.filter((item) => item.id === +id);
  }

  create(buyer: any) {
    return this.buyers.push(buyer);
  }

  update(id: string, newBuyer: any) {
    const existingBuyer = this.findOne(id);
    if (existingBuyer) {
      return `the buyer with the same id exists ${newBuyer}`;
    }
  }

  remove(id: string) {
    const buyerIndex = this.buyers.findIndex((item) => item.id === +id);
    if (buyerIndex > 0) {
      this.buyers.splice(buyerIndex, 1);
    }
  }
}
