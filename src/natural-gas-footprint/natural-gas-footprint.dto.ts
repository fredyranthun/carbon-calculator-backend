import { IsEnum, IsNumber, IsString, Min } from 'class-validator';

export class CalculateNaturalGasFootprintDto {
  @IsNumber()
  @Min(0)
  consumePerMonth: number;

  @IsString()
  @IsEnum(['therms', 'ccf'], {})
  unit: 'therms' | 'ccf';
}
