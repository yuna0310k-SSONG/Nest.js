import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotionService } from './notion.service';
import { CreateNotionDto } from './dto/create-notion.dto';

@Controller('notion')
export class NotionController {
  constructor(private readonly notionService: NotionService) {}

  @Post()
  create(@Body() createNotionDto: CreateNotionDto) {
    return this.notionService.create(createNotionDto);
  }
  @Post('/kakao')
  createKakao(@Body() createNotionDto: CreateNotionDto) {
    return this.notionService.createKakaoDailyDb();
  }
  @Post('/kakao2')
  createKakao2(@Body() createNotionDto: CreateNotionDto) {
    return this.notionService.createKakaoDailyDb2();
  }
  @Post('/add')
  async add() {
    return await this.notionService.addData();
  }
  @Get('/kakao')
  kakaoLog() {
    return this.notionService.kakaoLog2();
  }
  @Get('/kakao2')
  kakaoLog2() {
    return this.notionService.kakaoLog2();
  }
}
