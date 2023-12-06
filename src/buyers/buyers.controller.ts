import { Controller, Get } from '@nestjs/common';

@Controller('buyers')
export class BuyersController {
  @Get()
  findBuyers() {
    return 'this returns buyers';
  }
}
