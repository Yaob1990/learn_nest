## 设置 cookie

### 1.安装

```javascript
npm instlal cookie-parser --save
```

### 2.在 main.js 中引入`cookie-parser`,配置中间件

```javascript
import * as cookieParser from 'cookie-parser';
app.use(cookieParser());
```

### 3.设置 `cookie`

```javascript
 @Get();
  index(@Response() res) {
    //  设置cookie
    res.cookie('username', 'Yao', {
      maxAge: 1000 * 60,
      //只允许后端访问，js拿不到
      httpOnly: true,
    });
    // return 'cookie 测试页面';
    res.send('cookie 测试页面')
  }
```

### 4.获取 `cookie`

```javascript
@Get('getCookies');
getCookies(@Request() req){
return req.cookies.name;
}
```

### 5.加密，解密(使用的是hmac算法)
```javascript
// 设置密钥
app.use(cookieParser('123456'));

// 加密 signed:true
res.cookie('userinfo','hahaha',{signed:true});

// 解密：
req.signedCookies
```
