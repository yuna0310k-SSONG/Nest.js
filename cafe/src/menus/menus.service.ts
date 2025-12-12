import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenusService {
  menus = [
    { id: 1, name: 'Espresso', price: 3000, shots: 1 },
    { id: 2, name: 'Latte', price: 4000, shots: 2 },
    { id: 3, name: 'Cappuccino', price: 4000, shots: 3 },
  ];
  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }

  findAll() {
    return this.menus;
  }

  findOne(id: number) {
    if (id < 0 || isNaN(id)) return '해당 선생을 찾을 수 없습니다.';
    const targetMenu = this.menus.find((menu) => menu.id === id);
    return targetMenu ? targetMenu : `Menu with id ${id} not found`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    if (id < 0 || this.menus.length < id)
      return '해당 메뉴를 찾을 수 없습니다.';
    const targetMenu = this.menus.find((menu) => menu.id === id);
    if (!targetMenu) return '해당 메뉴를 찾을 수 없습니다.';
    this.menus = this.menus.filter((menu) => menu.id !== id);
    return '메뉴 삭제 완료!';
  }
}
