import {
  IsNumber,
  IsString,
  IsNotEmpty,
  Length,
  IsOptional,
  Min,
  Max,
} from 'class-validator';
import { IsValidZipCode } from 'src/zip-codes/zip-codes.validator';

export class CalculateElectricityFootprintDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 5)
  @IsValidZipCode({ message: 'Invalid zip code' })
  zipCode: string;

  @IsNumber()
  @Min(0)
  kwhPerMonth: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(1)
  greenPowerFraction: number;
}
