# 守卫
和vue的路由守卫其实类似，使用时候都是返回Boolean值，确定是否通过守卫验证。


### 创建守卫
```shell script
nest g guard auth
```

### 使用守卫
1. 控制器使用
```javascript
@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {}
```

2. 路由使用
```javascript
@Get('guard')
@UseGuards(AuthGuard)
guard(@Query() info) {
  console.log(info);
  return `this is guard`;
}
```

3. 全局使用
```javascript
app.useGlobalGuards(new AuthGuard());
```
### 获取 cookie 和 session
```javascript
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(context.switchToHttp().getRequest().cookies);
    console.log(context.switchToHttp().getRequest().session);
    return true;
  }
}
```
