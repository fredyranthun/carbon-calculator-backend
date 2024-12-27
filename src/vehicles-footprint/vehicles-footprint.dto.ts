import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator';

export class VehicleDto {
  @IsNumber()
  @IsPositive()
  milesPerYear: number;

  @IsNumber()
  @IsPositive()
  milesPerGallon: number;

  @IsBoolean()
  regularMaintenance: boolean;
}

export class CalculateVehiclesFootprintDto {
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => VehicleDto)
  vehicles: VehicleDto[];
}
