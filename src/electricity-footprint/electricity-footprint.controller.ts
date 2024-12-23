import { Body, Controller, Post } from '@nestjs/common';
import { ElectricityFootprintService } from './electricity-footprint.service';
import { CalculateElectricityFootprintDto } from './calculate-electricity-footprint.dto';

@Controller('electricity-footprint')
export class ElectricityFootprintController {
  constructor(
    private readonly electricityFootprintService: ElectricityFootprintService,
  ) {}

  @Post()
  calculate(
    @Body() calculateElectricityFootprintDto: CalculateElectricityFootprintDto,
  ): { electricityFootprint: number } {
    const { zipCode, kwhPerMonth, greenPowerFraction } =
      calculateElectricityFootprintDto;
    const electricityFootprint =
      this.electricityFootprintService.calculateElectricityFootprint(
        kwhPerMonth,
        zipCode,
        greenPowerFraction,
      );

    return {
      electricityFootprint,
    };
  }
}
