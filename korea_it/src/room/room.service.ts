import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
  private rooms: Room[] = [
    { id: 1, name: 'A', capacity: 20 },
    { id: 2, name: 'B', capacity: 15 },
    { id: 3, name: 'C', capacity: 10 },
  ];
  create(createRoomDto: CreateRoomDto) {
    const newRoom = {
      id: this.rooms.length + 1,
      ...createRoomDto,
    };
    this.rooms.push(newRoom);
    return newRoom;
  }

  findAll() {
    return this.rooms;
  }

  findOne(id: number) {
    const room = this.rooms.find((room) => room.id === id);
    if (!room) throw new Error('Room not found');
    return room;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    const index = this.rooms.findIndex((room) => room.id === id);
    if (index === -1) throw new Error('Room not found');
    const deletedRoom = this.rooms[index];
    this.rooms.splice(index, 1);
    return deletedRoom;
  }
}
