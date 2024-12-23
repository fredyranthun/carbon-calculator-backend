import { Module } from '@nestjs/common';
import { FuelOilFootprintService } from './fuel-oil-footprint.service';

@Module({
  providers: [FuelOilFootprintService],
  exports: [FuelOilFootprintService],
})
export class FuelOilFootprintModule {}
