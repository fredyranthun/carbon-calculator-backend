import { Body, Controller, Post } from '@nestjs/common';
import { PropaneFootprintService } from './propane-footprint.service';
import { CalculatePropaneFootprintDto } from './propane-footprint.dto';

@Controller('propane-footprint')
export class PropaneFootprintController {
  constructor(
    private readonly propaneFootprintService: PropaneFootprintService,
  ) {}

  @Post()
  calculate(
    @Body() calculatePropaneFootprintDto: CalculatePropaneFootprintDto,
  ): { propaneFootprint: number } {
    const { gallonsPerMonth } = calculatePropaneFootprintDto;
    const propaneFootprint =
      this.propaneFootprintService.calculatePropaneFootprint(gallonsPerMonth);

    return {
      propaneFootprint,
    };
  }
}
