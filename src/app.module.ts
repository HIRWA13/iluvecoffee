import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { BuyersController } from './buyers/buyers.controller';
import { CoffeesService } from './coffees/coffees.service';
import { BuyersService } from './buyers/buyers.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeesModule],
  controllers: [AppController, CoffeesController, BuyersController],
  providers: [AppService, CoffeesService, BuyersService],
})
export class AppModule {}
