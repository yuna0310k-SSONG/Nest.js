import { StaffsService } from './staffs.service';
import { Body, Controller, Delete, Get, Param } from '@nestjs/common';

@Controller('staffs')
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}

  @Get()
  findAll() {
    return this.staffsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffsService.remove(+id);
  }
}
