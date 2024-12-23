import { Test, TestingModule } from '@nestjs/testing';
import { NaturalGasFootprintController } from './natural-gas-footprint.controller';
import { NaturalGasFootprintService } from './natural-gas-footprint.service';

describe('NaturalGasFootprintController', () => {
  let controller: NaturalGasFootprintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaturalGasFootprintController],
      providers: [NaturalGasFootprintService],
    }).compile();

    controller = module.get<NaturalGasFootprintController>(
      NaturalGasFootprintController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
