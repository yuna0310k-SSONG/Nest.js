import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, phone: '010-4565-7890' },
    { id: 2, name: 'Jane Smith', age: 22, phone: '010-654-3210' },
    { id: 3, name: 'Alice Johnson', age: 19, phone: '010-5545-5555' },
  ];
  create(createStudentDto: CreateStudentDto) {
    const newStudent = {
      id: this.students.length + 1,
      ...createStudentDto,
    };
    this.students.push(newStudent);
    return `${newStudent.name} 학생이 등록되었습니다.`;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find((student) => student.id === id);
    return student ?? '그런 학생 없음';
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) throw new Error('Student not found');
    const deletedStudent = this.students[index];
    this.students.splice(index, 1);
    return deletedStudent;
  }
}
