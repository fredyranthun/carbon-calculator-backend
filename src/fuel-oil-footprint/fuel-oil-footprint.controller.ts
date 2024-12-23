import { Body, Controller, Post } from '@nestjs/common';
import { FuelOilFootprintService } from './fuel-oil-footprint.service';
import { CalculateFuelOilFootprintDto } from './fuel-oil-footprint.dto';

@Controller('fuel-oil-footprint')
export class FuelOilFootprintController {
  constructor(
    private readonly fuelOilFootprintService: FuelOilFootprintService,
  ) {}

  @Post()
  calculate(
    @Body() calculateFuelOilFootprintDto: CalculateFuelOilFootprintDto,
  ): { fuelOilFootprint: number } {
    const { gallonsPerMonth } = calculateFuelOilFootprintDto;
    const fuelOilFootprint =
      this.fuelOilFootprintService.calculateFuelOilFootprint(gallonsPerMonth);

    return {
      fuelOilFootprint,
    };
  }
}
