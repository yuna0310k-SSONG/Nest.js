import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Zookeeper } from 'src/zookeeper/entities/zookeeper.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal) private animalRepository: Repository<Animal>,
    @InjectRepository(Zookeeper)
    private zookeeperRepository: Repository<Zookeeper>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto) {
    const zookeeper = await this.zookeeperRepository.findOne({
      where: { id: createAnimalDto.zookeeperId },
    });
    if (!zookeeper) return `Zookeeper 가 없어서 동물을 추가할 수 없습니다.`;
    const animal = this.animalRepository.create(createAnimalDto);
    const result = await this.animalRepository.save(animal);
    return `${result.name}이(가) 추가되었습니다.`;
  }

  async findAll() {
    return await this.animalRepository.find();
  }

  async findOne(id: number) {
    const result = await this.animalRepository.findOne({ where: { id } });
    return result;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  async remove(id: number) {
    const result = await this.animalRepository.findOne({ where: { id } });
    if (!result) {
      return `Animal with #${id} not found`;
    }
    await this.animalRepository.remove(result);
    return `${result.name}이 삭제되었습니다.`;
  }
}
