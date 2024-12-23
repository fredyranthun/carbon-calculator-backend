import { Test, TestingModule } from '@nestjs/testing';
import { FuelOilFootprintController } from './fuel-oil-footprint.controller';
import { FuelOilFootprintService } from './fuel-oil-footprint.service';

describe('FuelOilFootprintController', () => {
  let controller: FuelOilFootprintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuelOilFootprintController],
      providers: [FuelOilFootprintService],
    }).compile();

    controller = module.get<FuelOilFootprintController>(
      FuelOilFootprintController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
