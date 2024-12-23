import { Test, TestingModule } from '@nestjs/testing';
import { PropaneFootprintService } from './propane-footprint.service';

describe('PropaneFootprintService', () => {
  let service: PropaneFootprintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropaneFootprintService],
    }).compile();

    service = module.get<PropaneFootprintService>(PropaneFootprintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate propane footprint', () => {
    expect(service.calculatePropaneFootprint(100)).toBeCloseTo(15_216, 2);
  });
});
