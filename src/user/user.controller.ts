import { Controller, Get, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('cookie')
  getCookie(@Request() req) {
    console.log(req.cookies);
    return req.signedCookies;
  }
}
