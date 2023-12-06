import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'this Action returns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this Action returns a coffee located at id: ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates the coffee at id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes the coffee at id: ${id}`;
  }
}
