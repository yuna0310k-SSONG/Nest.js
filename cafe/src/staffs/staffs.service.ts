import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StaffsService {
  staffs = [
    { id: 1, name: 'J', position: '점장', startDate: new Date('2015/01/01') },
    {
      id: 2,
      name: '여진쓰',
      position: '부점장',
      startDate: new Date('2017/05/01'),
    },
    {
      id: 3,
      name: '율스',
      position: '슈퍼바이저',
      startDate: new Date('2020/04/01'),
    },
  ];

  findAll() {
    return this.staffs;
  }

  findOne(id: number) {
    const targetStaff = this.staffs.find((staff) => staff.id === id);
    if (!targetStaff) {
      throw new NotFoundException(`ID가 ${id}인 직원을 찾을 수 없습니다.`);
    }
    return targetStaff;
  }

  remove(id: number) {
    const index = this.staffs.findIndex((staff) => staff.id === id);
    if (index === -1) {
      throw new NotFoundException(`ID가 ${id}인 직원을 찾을 수 없습니다.`);
    }
    this.staffs.splice(index, 1);
    return '직원 삭제 완료!';
  }
}
