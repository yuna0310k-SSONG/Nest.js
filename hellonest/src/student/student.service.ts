import { Injectable } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  students: Student[] = [
    { id: 1, name: '유나', age: 20 },
    { id: 2, name: '민서', age: 22 },
    { id: 3, name: '지우', age: 21 },
  ];

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return this.students;
  }

  findOne(id: number): Student | string {
    // const student = this.students.find((s) => s.id === id);
    // return student || '해당 학생을 찾을 수 없습니다.';

    if (id < 0 || this.students.length < id)
      return '해당 학생을 찾을 수 없습니다.';
    const targetStudent = this.students.find((student) => student.id === id);
    if (!targetStudent) return '해당 학생을 찾을 수 없습니다.';
    return targetStudent;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number): string {
    //   const index = this.students.findIndex((s) => s.id === id);
    //   if (index === -1) {
    //     return '해당 학생이 없습니다.';
    //   }
    //   this.students.splice(index, 1);
    //   return '학생 삭제 완료!';
    // }
    if (id < 0 || this.students.length < id)
      return '해당 학생을 찾을 수 없습니다.';
    const targetStudent = this.students.find((student) => student.id === id);
    if (!targetStudent) return '해당 학생을 찾을 수 없습니다.';
    this.students = this.students.filter((student) => student.id !== id);
    return '학생 삭제 완료!';
  }
}
