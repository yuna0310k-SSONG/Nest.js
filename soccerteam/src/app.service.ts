import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '꼰대회원에 오신걸 환영합니다! 😊';
  }
}
