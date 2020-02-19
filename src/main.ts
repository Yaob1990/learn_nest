import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //配置虚拟目录
  app.useStaticAssets('public', {
    prefix: '/static/',
  });
  //设置模板引擎
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  //配置 cookie 中间件
  app.use(cookieParser('123'));
  // 配置 session 中间件
  app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }));
  await app.listen(3000);
}
bootstrap();
