import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의된 값만 허용
      forbidNonWhitelisted: true, // 정의되지 않은 값이 있으면 에러 발생
      transform: true, // 요청 데이터를 DTO 타입으로 변환
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
