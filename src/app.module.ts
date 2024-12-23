import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HousingFootprintModule } from './housing-footprint/housing-footprint.module';
import { ZipCodesModule } from './zip-codes/zip-codes.module';
import { ElectricityFootprintModule } from './electricity-footprint/electricity-footprint.module';
import { NaturalGasFootprintModule } from './natural-gas-footprint/natural-gas-footprint.module';
import { FuelOilFootprintModule } from './fuel-oil-footprint/fuel-oil-footprint.module';
import { PropaneFootprintModule } from './propane-footprint/propane-footprint.module';

@Module({
  imports: [
    HousingFootprintModule,
    ZipCodesModule,
    ElectricityFootprintModule,
    NaturalGasFootprintModule,
    FuelOilFootprintModule,
    PropaneFootprintModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
