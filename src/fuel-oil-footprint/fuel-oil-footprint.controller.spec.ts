import { Test, TestingModule } from '@nestjs/testing';
import { FuelOilFootprintController } from './fuel-oil-footprint.controller';
import { FuelOilFootprintService } from './fuel-oil-footprint.service';
import { CalculateFuelOilFootprintDto } from './fuel-oil-footprint.dto';

describe('FuelOilFootprintController', () => {
  let controller: FuelOilFootprintController;
  let service: FuelOilFootprintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuelOilFootprintController],
      providers: [FuelOilFootprintService],
    }).compile();

    controller = module.get<FuelOilFootprintController>(
      FuelOilFootprintController,
    );
    service = module.get<FuelOilFootprintService>(FuelOilFootprintService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('calculate', () => {
    it('should return the calculated fuel oil footprint', () => {
      const dto: CalculateFuelOilFootprintDto = { gallonsPerMonth: 100 };
      const result = { fuelOilFootprint: 200 };
      jest.spyOn(service, 'calculateFuelOilFootprint').mockReturnValue(200);

      expect(controller.calculate(dto)).toEqual(result);
      expect(service.calculateFuelOilFootprint).toHaveBeenCalledWith(100);
    });
  });
});
