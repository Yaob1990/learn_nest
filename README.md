## 中间件

### 0. 执行时机：中间件是在路由处理程序 **之前** 调用的函数
![中间件](./images/Middlewares_1.png)

### 1. 创建中间件
```javascript
nest g middleware init
```
### 2. 配置中间件
1. 多个中间件 `consumer.apply().forRoutes.apply().forRoutes()`

```javascript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(InitMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
      .apply(NewsMiddleware).
      forRoutes({ path: 'news', method: RequestMethod.ALL })
      .apply(UserMiddleware).
      forRoutes({ path: 'user', method: RequestMethod.GET }, {
        path: '', method:
          RequestMethod.GET
      });
  }
}
```

### 3. 函数式中间件
```javascript
export function logger(req, res, next) {
  console.log(`Request...`);
  next();
};
```

### 4. 全局中间件(只能是函数式中间件)
```javascript
const app = await NestFactory.create(ApplicationModule);
app.use(logger);
await app.listen(3000);
```
