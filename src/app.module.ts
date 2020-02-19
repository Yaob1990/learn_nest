import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, NewsController, ArticleController, UserController],
  providers: [AppService, NewsService, ArticleService, UserService],
})
export class AppModule {}
