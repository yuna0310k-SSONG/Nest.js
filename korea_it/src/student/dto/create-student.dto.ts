import {
  IsInt,
  IsPhoneNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsPositive()
  @IsInt()
  age: number;

  @IsPhoneNumber('KR')
  phone: string;
}
