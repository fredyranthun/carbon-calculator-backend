import { Test, TestingModule } from '@nestjs/testing';
import { FuelOilFootprintService } from './fuel-oil-footprint.service';

describe('FuelOilFootprintService', () => {
  let service: FuelOilFootprintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuelOilFootprintService],
    }).compile();

    service = module.get<FuelOilFootprintService>(FuelOilFootprintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate fuel oil footprint', () => {
    expect(service.calculateFuelOilFootprint(100)).toBeCloseTo(26_952, 2);
  });
});
