import { Controller, Get, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('cookie')
  getCookie(@Request() req) {
    console.log(req.cookies);
    return req.signedCookies;
  }
  @Get("session")
  setSession(@Request() req){
    req.session.username="hello dog~"
    return "设置session"
  }
  @Get("getsession")
  getSession(@Request() req){
    console.log(req.session.username)
    return "设置session"
  }
}
