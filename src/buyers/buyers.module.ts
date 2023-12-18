import { Module } from '@nestjs/common';
import { BuyersController } from './buyers.controller';
import { BuyersService } from './buyers.service';

@Module({
  imports: [],
  controllers: [BuyersController],
  providers: [BuyersService],
})
export class BuyersModule {}
