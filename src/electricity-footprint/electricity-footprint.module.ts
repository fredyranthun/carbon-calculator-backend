import { Module } from '@nestjs/common';
import { ElectricityFootprintService } from './electricity-footprint.service';
import { ZipCodesModule } from 'src/zip-codes/zip-codes.module';
import { ElectricityFootprintController } from './electricity-footprint.controller';

@Module({
  providers: [ElectricityFootprintService],
  imports: [ZipCodesModule],
  exports: [ElectricityFootprintService],
  controllers: [ElectricityFootprintController],
})
export class ElectricityFootprintModule {}
