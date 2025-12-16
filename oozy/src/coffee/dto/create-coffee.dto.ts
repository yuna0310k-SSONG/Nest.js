import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  shots: number;
}
