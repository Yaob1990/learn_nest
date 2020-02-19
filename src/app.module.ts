import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsService } from './controller/news/news.service';
import { NewsController } from './controller/news/news.controller';
import { ArticleController } from './controller/article/article.controller';
import { ArticleService } from './controller/article/article.service';
import { UserController } from './controller/user/user.controller';
import { UserService } from './controller/user/user.service';
import { InitMiddleware } from './middleware/init.middleware';

@Module({
  imports: [],
  controllers: [
    AppController,
    NewsController,
    ArticleController,
    UserController,
  ],
  providers: [AppService, NewsService, ArticleService, UserService],
})
export class AppModule implements NestModule {
  // 配置中间件
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(InitMiddleware).forRoutes('*');
  }
}
