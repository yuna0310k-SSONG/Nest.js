import { IsIn, IsInt, IsPositive } from 'class-validator';

export class CreateRoomDto {
  @IsIn(['A', 'B', 'C', 'D', 'E'], {
    message: 'Room name must be one of A, B, C, D, E',
  })
  name: string;
  @IsInt()
  @IsPositive()
  capacity: number;
}
