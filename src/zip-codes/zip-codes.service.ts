import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

interface ZipCode {
  zipCode: string;
  state: string;
  eGridSubregion: string;
}

interface ZipCodeData {
  zip_code: string;
  state: string;
  primary_eGRID_subregion: string;
}

@Injectable()
export class ZipCodesService {
  private zipCodes: ZipCode[] = [];

  constructor() {
    const filePath = path.resolve(__dirname, '..', '..', 'zip-codes.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const zipCodesData: ZipCodeData[] = JSON.parse(data);
    this.zipCodes = zipCodesData.map((zipCodeData) => ({
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
