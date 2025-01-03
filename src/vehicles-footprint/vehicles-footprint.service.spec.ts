import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesFootprintService } from './vehicles-footprint.service';

describe('VehiclesFootprintService', () => {
  let service: VehiclesFootprintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesFootprintService],
    }).compile();

    service = module.get<VehiclesFootprintService>(VehiclesFootprintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate footprint with regular maintenance', () => {
    const milesPerYear = 10_000;
    const milesPerGallon = 25;
    const expectedFootprint = 7_854;

    expect(
      service.calculateFootprintPerVehicle(milesPerYear, milesPerGallon, true),
    ).toBeCloseTo(expectedFootprint, 1);
  });

  it('should calculate footprint without regular maintenance', () => {
    const milesPerYear = 10_000;
    const milesPerGallon = 25;
    const expectedFootprint = 7_979.7;

    expect(
      service.calculateFootprintPerVehicle(milesPerYear, milesPerGallon, false),
    ).toBeCloseTo(expectedFootprint, 1);
  });

  it('should calculate total footprint', () => {
    const vehicles = [
      {
        milesPerYear: 10_000,
        milesPerGallon: 25,
        regularMaintenance: true,
      },
      {
        milesPerYear: 10_000,
        milesPerGallon: 25,
        regularMaintenance: false,
      },
    ];

    const expectedFootprint = 15_833.7;

    expect(service.calculateFootprint(vehicles)).toBeCloseTo(
      expectedFootprint,
      1,
    );
  });
});
