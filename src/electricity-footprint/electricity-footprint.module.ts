import { Module } from '@nestjs/common';
import { ElectricityFootprintService } from './electricity-footprint.service';
import { ZipCodesModule } from 'src/zip-codes/zip-codes.module';

@Module({
  providers: [ElectricityFootprintService],
  imports: [ZipCodesModule],
  exports: [ElectricityFootprintService],
})
export class ElectricityFootprintModule {}
