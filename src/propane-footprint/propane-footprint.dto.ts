import { IsNumber, Min } from 'class-validator';

export class CalculatePropaneFootprintDto {
  @IsNumber()
  @Min(0)
  gallonsPerMonth: number;
}
