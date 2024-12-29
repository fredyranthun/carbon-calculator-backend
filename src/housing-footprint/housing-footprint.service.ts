import { Injectable } from '@nestjs/common';

@Injectable()
export class HousingFootprintService {
  constructor() {}

  convertToKgCO2ePerYear(lbCO2ePerMWh: number): number {
    return lbCO2ePerMWh / 2.20462;
  }

  convertToKgCO2ePerKWh(lbCO2ePerMWh: number): number {
    return lbCO2ePerMWh / 2.20462 / 1000;
  }
}
