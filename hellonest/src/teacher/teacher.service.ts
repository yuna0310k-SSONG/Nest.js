import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  teachers: Teacher[] = [
    {
      id: 1,
      name: '유나',
      nickName: '유나짱',
      age: 30,
      subjects: ['Math', 'Science'],
    },
    {
      id: 2,
      name: '민서',
      nickName: '민서님',
      age: 35,
      subjects: ['English', 'History'],
    },
    {
      id: 3,
      name: '지우',
      nickName: '쥬쌤',
      age: 28,
      subjects: ['Art', 'Physical Education'],
    },
  ];

  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }

  findAll() {
    return this.teachers;
  }

  findOne(id: number) {
    // const student = this.students.find((s) => s.id === id);
    // return student || '해당 학생을 찾을 수 없습니다.';

    if (id < 0 || isNaN(id)) return '해당 선생을 찾을 수 없습니다.';
    const targetTeacher = this.teachers.find((teacher) => teacher.id === id);
    if (!targetTeacher) return '해당 선생을 찾을 수 없습니다.';
    return targetTeacher;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    if (id < 0 || this.teachers.length < id)
      return '해당 선생을 찾을 수 없습니다.';
    const targetTeacher = this.teachers.find((teacher) => teacher.id === id);
    if (!targetTeacher) return '해당 선생을 찾을 수 없습니다.';
    this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
    return '선생 삭제 완료!';
  }
}
