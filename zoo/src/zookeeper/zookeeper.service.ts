import { Injectable } from '@nestjs/common';
import { CreateZookeeperDto } from './dto/create-zookeeper.dto';
import { UpdateZookeeperDto } from './dto/update-zookeeper.dto';
import { Zookeeper } from './entities/zookeeper.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ZookeeperService {
  constructor(
    @InjectRepository(Zookeeper)
    private ZookeeperRepository: Repository<Zookeeper>,
  ) {}
  async create(createZookeeperDto: CreateZookeeperDto) {
    const zookeeper = this.ZookeeperRepository.create(createZookeeperDto);
    const result = await this.ZookeeperRepository.save(zookeeper);
    return result;
  }

  async findAll() {
    return await this.ZookeeperRepository.find();
  }

  findOne(id: number) {
    const result = this.ZookeeperRepository.findOne({ where: { id } });
    return result;
  }

  update(id: number, updateZookeeperDto: UpdateZookeeperDto) {
    return `This action updates a #${id} zookeeper`;
  }

  async remove(id: number) {
    const result = await this.ZookeeperRepository.findOne({ where: { id } });
    if (!result) {
      return `Zookeeper with #${id} not found`;
    }
    await this.ZookeeperRepository.remove(result);
    return `${result.name}이 삭제되었습니다.`;
  }
}
