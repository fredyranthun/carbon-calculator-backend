import { Injectable } from '@nestjs/common';

@Injectable()
export class PropaneFootprintService {
  emissionFactorPropanePerGallon = 12.68; // lbCO2e/gallon

  calculatePropaneFootprint(gallonsPerMonth: number): number {
    // Emission factor is in lbCO2e/gallon
    return gallonsPerMonth * this.emissionFactorPropanePerGallon * 12;
  }
}
