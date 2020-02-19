import { Controller, Get, Response } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  index(@Response() res) {
    //  设置cookie
    res.cookie('username', 'Yao', {
      maxAge: 1000 * 60,
      //只允许后端访问，js拿不到
      httpOnly: true,
      signed:true
    });
    // return 'cookie 测试页面';
    res.send('cookie 测试页面')
  }
}
