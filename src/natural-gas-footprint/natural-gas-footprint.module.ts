import { Module } from '@nestjs/common';
import { NaturalGasFootprintService } from './natural-gas-footprint.service';

@Module({
  providers: [NaturalGasFootprintService],
  exports: [NaturalGasFootprintService],
})
export class NaturalGasFootprintModule {}
