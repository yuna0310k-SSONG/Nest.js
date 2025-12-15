import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { Mentor } from './entities/mentor.entity';
import { UpdateMentorDto } from './dto/update-mentor.dto';

@Injectable()
export class MentorService {
  private mentors: Mentor[] = [
    { id: 1, name: 'Kim Yuna', position: '신입' },
    { id: 2, name: 'Lee Minho', position: '경력' },
    { id: 3, name: 'Park Jisung', position: '팀장' },
  ];
  create(createMentorDto: CreateMentorDto) {
    const newMentor = {
      id: this.mentors.length + 1,
      ...createMentorDto,
    };
    this.mentors.push(newMentor);

    return newMentor;
  }

  findAll() {
    return this.mentors;
  }

  findOne(id: number) {
    const mentor = this.mentors.find((mentor) => mentor.id === id);
    return mentor ?? '그런 멘토 없음';
  }

  // UPDATE
  update(id: number, updateMentorDto: UpdateMentorDto) {
    const index = this.mentors.findIndex((mentor) => mentor.id === id);
    if (index === -1) throw new NotFoundException('Mentor not found');

    this.mentors[index] = {
      ...this.mentors[index], // 기존 데이터
      ...updateMentorDto, // 들어온 값만 덮어쓰기
    };

    return this.mentors[index];
  }

  remove(id: number) {
    const index = this.mentors.findIndex((mentor) => mentor.id === id);
    if (index === -1) return '그런 멘토 없음';
    const deletedMentor = this.mentors[index];
    this.mentors.splice(index, 1);
    return deletedMentor;
  }
}
