import { IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  @Min(25)
  age: number;

  position: ('골키퍼' | '수비수' | '미드필더' | '공격수')[];
}
