import { Test, TestingModule } from '@nestjs/testing';
import { ElectricityFootprintService } from './electricity-footprint.service';
import { ZipCodesService } from 'src/zip-codes/zip-codes.service';

describe('ElectricityFootprintService', () => {
  let service: ElectricityFootprintService;

  const mockZipCodesService = {
    findEGridSubregion: jest.fn(() => 'AKGD'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ElectricityFootprintService,
        { provide: ZipCodesService, useValue: mockZipCodesService },
      ],
    }).compile();

    service = module.get<ElectricityFootprintService>(
      ElectricityFootprintService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate electricity footprint', () => {
    expect(service.calculateElectricityFootprint(100, '00001')).toBeCloseTo(
      1269.36,
      2,
    );
  });

  it('should get electricity emission factor', () => {
    expect(service.getElectricityEmissionFactor('AKGD')).toBeCloseTo(1.0577, 2);
    expect(service.getElectricityEmissionFactor('INVALID')).toBeCloseTo(
      0.827,
      2,
    );
  });

  it('should calculate electricity footprint with a custom emission factor', () => {
    expect(
      service.calculateElectricityFootprint(100, '00001', 0.5),
    ).toBeCloseTo(1269.36 * 0.5, 2);
  });
});
