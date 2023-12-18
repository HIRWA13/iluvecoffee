import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { CreateBuyerDto } from './dto/create-buyers.dto';

@Controller('buyers')
export class BuyersController {
  constructor(private readonly coffeBuyers: BuyersService) {}
  @Get()
  findBuyers() {
    return this.coffeBuyers.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeBuyers.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  createBuyer(@Body() buyer: CreateBuyerDto) {
    return this.coffeBuyers.create(buyer);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeBuyers.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeBuyers.remove(id);
  }
}
