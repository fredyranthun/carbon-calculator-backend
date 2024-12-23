import { Module } from '@nestjs/common';
import { FuelOilFootprintService } from './fuel-oil-footprint.service';
import { FuelOilFootprintController } from './fuel-oil-footprint.controller';

@Module({
  providers: [FuelOilFootprintService],
  exports: [FuelOilFootprintService],
  controllers: [FuelOilFootprintController],
})
export class FuelOilFootprintModule {}
