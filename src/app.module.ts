import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';
import { AdminModule } from './module/admin/admin.module';

@Module({
  imports: [ApiModule, DefaultModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
