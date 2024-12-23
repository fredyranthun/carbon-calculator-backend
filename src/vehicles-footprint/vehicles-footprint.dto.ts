import { IsBoolean, IsNumber, IsPositive } from 'class-validator';

export class CalculateVehiclesFootprintDto {
  @IsNumber()
  @IsPositive()
  milesPerYear: number;

  @IsNumber()
  @IsPositive()
  milesPerGallon: number;

  @IsBoolean()
  regularMaintenance: boolean;
}
