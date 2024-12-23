import { Body, Controller, Post } from '@nestjs/common';
import { VehiclesFootprintService } from './vehicles-footprint.service';
import { CalculateVehiclesFootprintDto } from './vehicles-footprint.dto';

@Controller('vehicles-footprint')
export class VehiclesFootprintController {
  constructor(
    private readonly vehiclesFootprintService: VehiclesFootprintService,
  ) {}

  @Post()
  calculate(
    @Body() calculateVehicleFootprintDto: CalculateVehiclesFootprintDto,
  ) {
    const { milesPerYear, milesPerGallon, regularMaintenance } =
      calculateVehicleFootprintDto;
    const vehicleFootprint = this.vehiclesFootprintService.calculateFootprint(
      milesPerYear,
      milesPerGallon,
      regularMaintenance,
    );

    return {
      vehicleFootprint,
    };
  }
}
