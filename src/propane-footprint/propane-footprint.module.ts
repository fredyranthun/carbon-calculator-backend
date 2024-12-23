import { Module } from '@nestjs/common';
import { PropaneFootprintService } from './propane-footprint.service';
import { PropaneFootprintController } from './propane-footprint.controller';

@Module({
  providers: [PropaneFootprintService],
  exports: [PropaneFootprintService],
  controllers: [PropaneFootprintController],
})
export class PropaneFootprintModule {}
