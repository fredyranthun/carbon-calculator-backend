import { Module } from '@nestjs/common';
import { VehiclesFootprintService } from './vehicles-footprint.service';
import { VehiclesFootprintController } from './vehicles-footprint.controller';

@Module({
  providers: [VehiclesFootprintService],
  controllers: [VehiclesFootprintController],
})
export class VehiclesFootprintModule {}
