import { Module } from '@nestjs/common';
import { ZipCodesModule } from 'src/zip-codes/zip-codes.module';
import { HousingFootprintService } from './housing-footprint.service';
import { ElectricityFootprintModule } from 'src/electricity-footprint/electricity-footprint.module';
import { PropaneFootprintModule } from 'src/propane-footprint/propane-footprint.module';
import { NaturalGasFootprintModule } from 'src/natural-gas-footprint/natural-gas-footprint.module';
import { FuelOilFootprintModule } from 'src/fuel-oil-footprint/fuel-oil-footprint.module';

@Module({
  imports: [
    ZipCodesModule,
    ElectricityFootprintModule,
    PropaneFootprintModule,
    NaturalGasFootprintModule,
    FuelOilFootprintModule,
  ],
  providers: [HousingFootprintService],
})
export class HousingFootprintModule {}
