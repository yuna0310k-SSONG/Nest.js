import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateBasicDBDTO } from './dto/create-basic-db-dto';
import { callNotionApi, validateNotionConfig } from './notion';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async postBasicDB(dto: CreateBasicDBDTO): Promise<any> {
    const { token, pageId } = validateNotionConfig(
      this.config.get<string>('TOKEN'),
      this.config.get<string>('PAGEID'),
    );
    return callNotionApi(token, dto, pageId);
  }
}
