import { IsNumber, Min } from 'class-validator';

export class CalculateFuelOilFootprintDto {
  @IsNumber()
  @Min(0)
  gallonsPerMonth: number;
}
