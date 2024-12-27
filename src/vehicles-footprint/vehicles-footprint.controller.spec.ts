import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesFootprintController } from './vehicles-footprint.controller';
import { VehiclesFootprintService } from './vehicles-footprint.service';

describe('VehiclesFootprintController', () => {
  let controller: VehiclesFootprintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiclesFootprintController],
      providers: [VehiclesFootprintService],
    }).compile();

    controller = module.get<VehiclesFootprintController>(
      VehiclesFootprintController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should calculate footprint with regular maintenance', () => {
    const milesPerYear = 10_000;
    const milesPerGallon = 25;
    const regularMaintenance = true;
    const expectedFootprint = 7_854;

    expect(
      controller.calculate({
        vehicles: [
          {
            milesPerYear,
            milesPerGallon,
            regularMaintenance,
          },
        ],
      }).vehicleFootprint,
    ).toBeCloseTo(expectedFootprint, 1);
  });
});
