import { Module } from '@nestjs/common';
import { BuyersController } from './buyers.controller';
import { BuyersService } from './buyers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Buyer } from './entities/buyer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Buyer])],
  controllers: [BuyersController],
  providers: [BuyersService],
})
export class BuyersModule {}
