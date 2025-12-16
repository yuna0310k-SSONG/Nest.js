import { IsNumber, IsString } from 'class-validator';

export class CreateZookeeperDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  position: string;
}
