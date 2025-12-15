import { IsIn, IsString, MinLength } from 'class-validator';

export class CreateMentorDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsIn(['신입', '경력', '팀장'])
  position: string;
}
