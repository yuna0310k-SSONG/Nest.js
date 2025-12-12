import { Injectable } from '@nestjs/common';
import { CreateGroundDto } from './dto/create-ground.dto';
import { UpdateGroundDto } from './dto/update-ground.dto';

@Injectable()
export class GroundService {
  create(createGroundDto: CreateGroundDto) {
    return 'This action adds a new ground';
  }

  findAll() {
    return `This action returns all ground`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ground`;
  }

  update(id: number, updateGroundDto: UpdateGroundDto) {
    return `This action updates a #${id} ground`;
  }

  remove(id: number) {
    return `This action removes a #${id} ground`;
  }
}
