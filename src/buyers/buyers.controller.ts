import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('buyers')
export class BuyersController {
  @Get()
  findBuyers() {
    return 'this returns buyers';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this returns information of the buyer with id: ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  createBuyer(@Body() buyer) {
    return buyer;
  }
}
