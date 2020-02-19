import { Body, Controller, Get, Post, Render, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  index() {
    return { name: 'Yao' };
  }
  @Post('doAdd')
  doAdd(@Body() body, @Response() res) {
    console.log(body);
    // 路由跳转
    res.redirect('user');
  }
}
