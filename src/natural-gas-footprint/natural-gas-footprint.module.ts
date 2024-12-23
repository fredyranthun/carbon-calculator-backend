import { Module } from '@nestjs/common';
import { NaturalGasFootprintService } from './natural-gas-footprint.service';
import { NaturalGasFootprintController } from './natural-gas-footprint.controller';

@Module({
  providers: [NaturalGasFootprintService],
  exports: [NaturalGasFootprintService],
  controllers: [NaturalGasFootprintController],
})
export class NaturalGasFootprintModule {}
