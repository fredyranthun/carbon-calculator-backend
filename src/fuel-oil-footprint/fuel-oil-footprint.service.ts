import { Injectable } from '@nestjs/common';

@Injectable()
export class FuelOilFootprintService {
  fuelOilEmissionFactor = 22.46; // lbCO2e/gallon

  calculateFuelOilFootprint(gallonsPerMonth: number): number {
    // Emission factor is in lbCO2e/gallon
    return gallonsPerMonth * this.fuelOilEmissionFactor * 12;
  }
}
