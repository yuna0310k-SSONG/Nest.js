import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @Get('/lunch')
  // getLunch(): string {
  //   return this.appService.getLunch();
  // }
  // //숫자100 리턴
  // @Get('/number')
  // getNumber(): number {
  //   return 100;
  // }

  // // 퀴즈
  // // 오브젝트 타입 {name: '점심 디저트', price: number}돌려주기
  // @Get('/dessert')
  // getDessert(): { name: string; price: number } {
  //   return { name: '카페라떼', price: 5000 };
  // }

  // // 동적 파라메터 /coffee/1 -> {"아아", 4000}, /coffee/2 -> {"카페라떼", 5000}
  // // id 파라미터를 받아오기 위해 @Param 사용!
  // @Get('/coffee/:id')
  // getCoffeeById(@Param('id') id: string) {
  //   const coffeeMenu = [
  //     { name: '아아', price: 4000 },
  //     { name: '카페라떼', price: 5000 },
  //     { name: '바닐라라떼', price: 5500 },
  //   ];
  //   return coffeeMenu[Number(id)];
  // }
  //------------------------------------------------------------------------//
  @Get('/hello')
  getHello() {
    return this.appService.getHello();
  }
  @Get('/lunch')
  getLunch() {
    return 'Today lunch is curry🍛';
  }
}
