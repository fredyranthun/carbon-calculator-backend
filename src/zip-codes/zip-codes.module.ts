import { Module } from '@nestjs/common';
import { ZipCodesService } from './zip-codes.service';

@Module({
  providers: [ZipCodesService],
  exports: [ZipCodesService],
})
export class ZipCodesModule {}
