import { Test, TestingModule } from '@nestjs/testing';
import { PropaneFootprintController } from './propane-footprint.controller';
import { PropaneFootprintService } from './propane-footprint.service';

describe('PropaneFootprintController', () => {
  let controller: PropaneFootprintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropaneFootprintController],
      providers: [PropaneFootprintService],
    }).compile();

    controller = module.get<PropaneFootprintController>(
      PropaneFootprintController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
