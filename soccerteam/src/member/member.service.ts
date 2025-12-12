import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  members: Member[] = [
    {
      id: 1,
      name: '신여진',
      age: 29,
      registerDate: new Date('2025-01-01'),
      position: ['미드필더'],
    },
  ];

  create(createMemberDto: CreateMemberDto) {
    this.members.push({
      id: this.members.length + 1,
      registerDate: new Date(),
      ...createMemberDto,
    });
    return '멤버가 성공적으로 생성되었습니다.';
  }

  findAll() {
    return this.members;
  }
  // READ ONE
  findOne(id: number) {
    const member = this.members.find((m) => m.id === id);
    if (!member) throw new NotFoundException(`Member #${id} not found`);
    return member;
  }

  // UPDATE
  update(id: number, updateMemberDto: UpdateMemberDto) {
    const index = this.members.findIndex((m) => m.id === id);
    if (index === -1) throw new NotFoundException(`Member #${id} not found`);

    // 기존 값 유지 + 수정 값 덮기
    this.members[index] = {
      ...this.members[index],
      ...updateMemberDto,
    };

    return this.members[index];
  }

  // DELETE
  remove(id: number) {
    const index = this.members.findIndex((m) => m.id === id);
    if (index === -1) throw new NotFoundException(`Member #${id} not found`);

    const deleted = this.members[index];
    this.members.splice(index, 1);

    return deleted;
  }
}
