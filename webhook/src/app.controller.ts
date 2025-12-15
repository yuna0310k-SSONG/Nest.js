import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBasicDBDTO } from './dto/create-basic-db-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postBasicDB(@Body() dto: CreateBasicDBDTO) {
    return this.appService.postBasicDB(dto);
  }
  @Post('/:dbid'){
    postToNotion (@Params() dto: any, dbid: string) {
  }
}
}
