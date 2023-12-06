import { Controller, Get, Param, Body, Post } from '@nestjs/common';

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
}
