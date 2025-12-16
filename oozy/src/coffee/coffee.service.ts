import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee) private coffeeRepository: Repository<Coffee>,
  ) {}

  async create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    const result = await this.coffeeRepository.save(coffee);
    return `${result.name}가 추가되었습니다.`;
  }

  async findAll() {
    const coffees = await this.coffeeRepository.find();

    return coffees;
  }

  findOne(id: number) {
    return `coffee`;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return '해당 커피가 존재하지 않습니다.';
  }

  remove(id: number) {
    return `This action removes a #${id} coffee`;
  }
}
