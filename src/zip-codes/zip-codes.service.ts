import { Injectable } from '@nestjs/common';
import * as json from './zip-codes.json';

interface ZipCode {
  zipCode: string;
  state: string;
  eGridSubregion: string;
}

@Injectable()
export class ZipCodesService {
  private zipCodes: ZipCode[] = [];

  constructor() {
    this.zipCodes = json.map((zipCodeData) => ({
      zipCode: zipCodeData.zip_code,
      state: zipCodeData.state,
      eGridSubregion: zipCodeData.primary_eGRID_subregion,
    }));
  }

  findByZipCode(zipCode: string): ZipCode | undefined {
    return this.zipCodes.find((zip) => zip.zipCode === zipCode);
  }

  findAll(): ZipCode[] {
    return this.zipCodes;
  }

  findEGridSubregion(zipCode: string): string | undefined {
    const zipCodeData = this.findByZipCode(zipCode);
    return zipCodeData ? zipCodeData.eGridSubregion : undefined;
  }
}
