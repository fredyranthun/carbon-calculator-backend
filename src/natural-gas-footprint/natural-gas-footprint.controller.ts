import { Body, Controller, Post } from '@nestjs/common';
import { CalculateNaturalGasFootprintDto } from './natural-gas-footprint.dto';
import { NaturalGasFootprintService } from './natural-gas-footprint.service';

@Controller('natural-gas-footprint')
export class NaturalGasFootprintController {
  constructor(
    private readonly naturalGasFootprintService: NaturalGasFootprintService,
  ) {}

  @Post()
  calculate(
    @Body() calculateNaturalGasFootprintDto: CalculateNaturalGasFootprintDto,
  ): { naturalGasFootprint: number } {
    const { consumePerMonth, unit } = calculateNaturalGasFootprintDto;
    switch (unit) {
      case 'therms':
        return {
          naturalGasFootprint:
            this.naturalGasFootprintService.calculateNaturalGasFootprint(
              consumePerMonth,
            ),
        };
      case 'ccf':
        return {
          naturalGasFootprint:
            this.naturalGasFootprintService.calculateNaturalGasFootprintPerThousandsCubicFeet(
              consumePerMonth * 1.037,
            ),
        };
      default:
        return {
          naturalGasFootprint:
            this.naturalGasFootprintService.calculateNaturalGasFootprint(
              consumePerMonth,
            ),
        };
    }
  }
}
