## 设置 cookie

### 1.安装 express-session

```javascript
cnpm install express-session --save
```

### 2.在 main.js 中引入`express-session`,配置中间件

```javascript
import * as session from 'express-session';
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }));
```

### 3.使用

```javascript
// 设置
req.session.username = '张三';
// 获取
req.session.username;
```
