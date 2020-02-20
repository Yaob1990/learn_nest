import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  index() {
    return {
      result: 'api 接口',
    };
  }
  @Get('user')
  user() {
    return {
      result: 'user api 接口',
    };
  }
}
