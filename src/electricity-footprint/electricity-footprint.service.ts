import { Injectable } from '@nestjs/common';
import { ZipCodesService } from 'src/zip-codes/zip-codes.service';

@Injectable()
export class ElectricityFootprintService {
  constructor(private readonly zipCodesService: ZipCodesService) {}

  emissionFactorsPerEGridSubregion = {
    AKGD: 1057.8,
    AKMS: 497.6,
    AZNM: 779.4,
    CAMX: 499.3,
    ERCT: 774.3,
    FRCC: 816.9,
    HIMS: 1163.1,
    HIOA: 1586.9,
    MROE: 1488.7,
    MROW: 943.4,
    NEWE: 540.5,
    NWPP: 605.9,
    NYCW: 886.6,
    NYLI: 1209.3,
    NYUP: 275.4,
    PRMS: 1599.9,
    RFCE: 660.3,
    RFCM: 1224.2,
    RFCW: 1005.9,
    RMPA: 1131.7,
    SPNO: 959.4,
    SPSO: 975.3,
    SRMV: 803.7,
    SRMW: 1380.2,
    SRSO: 897.7,
    SRTV: 938.6,
    SRVC: 625.9,
  };

  defaultEmissionFactor = 827.52; // US average emission factor in lbCO2e/MWh

  calculateElectricityFootprint(
    kwhPerMonth: number,
    zipCode: string,
    greenPowerFraction: number = 0,
  ): number {
    const eGridSubregion = this.zipCodesService.findEGridSubregion(zipCode);
    const emissionFactor = this.getElectricityEmissionFactor(eGridSubregion);

    // Emission factor is in lbCO2e/kWh
    return kwhPerMonth * emissionFactor * 12 * (1 - greenPowerFraction);
  }

  getElectricityEmissionFactor(eGridSubregion: string): number {
    // Emission factors are in lbCO2e/MWh
    let emissionFactor = this.emissionFactorsPerEGridSubregion[eGridSubregion];

    if (!emissionFactor) {
      emissionFactor = this.defaultEmissionFactor;
    }

    return emissionFactor / 1000;
  }
}
