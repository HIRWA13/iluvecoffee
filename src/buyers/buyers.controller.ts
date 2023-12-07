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
  // updating: put and patch
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `this action updates the buyer with id ${id}`;
  }
  // deleting: delete
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action removes the buyer with id ${id}`;
  }
}
