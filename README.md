# 模块
### 模块定义

模块是具有@Module() 装饰器的类。@Module() 装饰器提供了元数据，Nest 用它来组织应用程序结构。

### 模块共享

实际上，每个模块都是一个共享模块。一旦创建就能被任意模块重复使用。假设我们将在几个模块之间共享CatsService 实例。我们需要把CatsService 放到exports 数组中，如下所示：

```javascript
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService] // 共享
})
export class CatsModule { }
```
