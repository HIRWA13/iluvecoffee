import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  // HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { CreateBuyerDto } from './dto/create-buyers.dto';
import { ExceptionForMe } from './exceptions/forbiden.exceptions';
import { HttpExceptionFilter } from './exceptions/filters/http-exception.filter';

@Controller('buyers')
export class BuyersController {
  constructor(private readonly coffeBuyers: BuyersService) {}
  @Get()
  findBuyers() {
    // return this.coffeBuyers.findAll();
    throw new ExceptionForMe();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeBuyers.findOne(id);
  }

  @Post()
  @UseFilters(HttpExceptionFilter)
  createBuyer(@Body() buyer: CreateBuyerDto) {
    // return this.coffeBuyers.create(buyer);
    throw new BadRequestException();
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
