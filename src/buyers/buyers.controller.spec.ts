import { Test, TestingModule } from '@nestjs/testing';
import { BuyersController } from './buyers.controller';
import { BuyersService } from './buyers.service';
import { Buyer } from './entities/buyer.entity';

describe('BuyersController', () => {
  let controller: BuyersController;
  let service: BuyersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyersController],
      providers: [BuyersService],
    }).compile();

    controller = module.get<BuyersController>(BuyersController);
    service = module.get<BuyersService>(BuyersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('BuyersController', () => {
    it('should return an array of buyers', () => {
      const result: Buyer[] = [
        {
          id: 1,
          name: 'sdfdfdf',
          location: 'fdfdfdfd',
          isVip: true,
        },
      ];

      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      expect(service.findAll()).toBe(result);
    });
  });
});
