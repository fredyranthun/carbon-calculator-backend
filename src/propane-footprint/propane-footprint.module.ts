import { Module } from '@nestjs/common';
import { PropaneFootprintService } from './propane-footprint.service';

@Module({
  providers: [PropaneFootprintService],
  exports: [PropaneFootprintService],
})
export class PropaneFootprintModule {}
