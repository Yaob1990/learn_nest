import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll() {
    return {
      name: 'Yao',
    };
  }
}
