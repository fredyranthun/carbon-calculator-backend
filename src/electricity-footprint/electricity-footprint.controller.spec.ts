import { Test, TestingModule } from '@nestjs/testing';
import { ElectricityFootprintController } from './electricity-footprint.controller';
import { ElectricityFootprintService } from './electricity-footprint.service';

describe('ElectricityFootprintController', () => {
  let controller: ElectricityFootprintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectricityFootprintController],
      providers: [{ provide: ElectricityFootprintService, useValue: {} }],
    }).compile();

    controller = module.get<ElectricityFootprintController>(
      ElectricityFootprintController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
