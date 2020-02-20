### 管道

处理数据（加工），验证数据是否符合要求

### 1. 创建管道

```javascript
nest g pipe user
```
```javascript
@Injectable()
export class NewsPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value); // Get 或者Post传过来的值
    console.log('-------我是管道------');
    value.id = '666666';

    return value;
  }
}
```

### 2. 使用管道

```javascript
import { Controller, Get, UsePipes, Query } from '@nestjs/common';
import { UserPipe } from '../../user.pipe';
@Controller('user')
export class UserController {
  @Get()
  index() {
    return '用户页面';
  }
  @Get('pipe')
  @UsePipes(new UserPipe())
  pipe(@Query() info) {
    console.log(info);
    return `this is Pipe`;
  }
}
```

### 3. 可以结合 joi 库进行数据验证，通过返回true，否则，返回 false
Joi 库： https://github.com/hapijs/joi
