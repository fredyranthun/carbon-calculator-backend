import { Test, TestingModule } from '@nestjs/testing';
import { NaturalGasFootprintService } from './natural-gas-footprint.service';

describe('NaturalGasFootprintService', () => {
  let service: NaturalGasFootprintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaturalGasFootprintService],
    }).compile();

    service = module.get<NaturalGasFootprintService>(
      NaturalGasFootprintService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate natural gas footprint', () => {
    expect(service.calculateNaturalGasFootprint(100)).toBeCloseTo(14_040, 2);
  });

  it('should calculate natural gas footprint using thousand cubic feet', () => {
    expect(
      service.calculateNaturalGasFootprintPerThousandsCubicFeet(100),
    ).toBeCloseTo(145_296, 2);
  });
});
