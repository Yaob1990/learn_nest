import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../../../guard/auth.guard';

@Controller('user')
// @UseGuards(AuthGuard) // 配置守卫
export class UserController {
  @Get()
  @UseGuards(AuthGuard) // 配置守卫
  index() {
    return 'user 页面';
  }
  @Get('name')
  name() {
    return 'user name页面';
  }
}
