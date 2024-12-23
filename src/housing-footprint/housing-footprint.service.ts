import { Injectable } from '@nestjs/common';
import { ElectricityFootprintService } from 'src/electricity-footprint/electricity-footprint.service';
import { FuelOilFootprintService } from 'src/fuel-oil-footprint/fuel-oil-footprint.service';
import { NaturalGasFootprintService } from 'src/natural-gas-footprint/natural-gas-footprint.service';
import { PropaneFootprintService } from 'src/propane-footprint/propane-footprint.service';

@Injectable()
export class HousingFootprintService {
  constructor(
    private readonly electricityFootprintService: ElectricityFootprintService,
    private readonly propaneFootprintService: PropaneFootprintService,
    private readonly naturalGasFootprintService: NaturalGasFootprintService,
    private readonly fuelOilFootprintService: FuelOilFootprintService,
  ) {}

  convertToKgCO2ePerYear(lbCO2ePerMWh: number): number {
    return lbCO2ePerMWh / 2.20462;
  }

  convertToKgCO2ePerKWh(lbCO2ePerMWh: number): number {
    return lbCO2ePerMWh / 2.20462 / 1000;
  }
}
