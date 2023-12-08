import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { BuyersModule } from './buyers/buyers.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [CoffeesModule, BuyersModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
