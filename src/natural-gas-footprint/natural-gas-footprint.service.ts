import { Injectable } from '@nestjs/common';

@Injectable()
export class NaturalGasFootprintService {
  emissionFactorNaturalGasPerTherm = 11.7; // lbCO2e/therm
  emissionFactorNaturalGasPerThousandsCubicFeet = 121.08; // lbCO2e/Mcf

  calculateNaturalGasFootprint(thermsPerMonth: number): number {
    // Emission factor is in lbCO2e/therm
    return thermsPerMonth * this.emissionFactorNaturalGasPerTherm * 12;
  }

  calculateNaturalGasFootprintPerThousandsCubicFeet(
    thousandsCubicFeetPerMonth: number,
  ): number {
    // Emission factor is in lbCO2e/Mcf
    return (
      thousandsCubicFeetPerMonth *
      this.emissionFactorNaturalGasPerThousandsCubicFeet *
      12
    );
  }
}
