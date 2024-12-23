import { Test, TestingModule } from '@nestjs/testing';
import { HousingFootprintService } from './housing-footprint.service';
import { ElectricityFootprintService } from 'src/electricity-footprint/electricity-footprint.service';
import { PropaneFootprintService } from 'src/propane-footprint/propane-footprint.service';
import { NaturalGasFootprintService } from 'src/natural-gas-footprint/natural-gas-footprint.service';
import { FuelOilFootprintService } from 'src/fuel-oil-footprint/fuel-oil-footprint.service';

describe('HousingFootprintService', () => {
  let service: HousingFootprintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HousingFootprintService,
        { provide: ElectricityFootprintService, useValue: {} },
        PropaneFootprintService,
        NaturalGasFootprintService,
        FuelOilFootprintService,
      ],
    }).compile();

    service = module.get<HousingFootprintService>(HousingFootprintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
