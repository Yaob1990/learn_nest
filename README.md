# mongoose

### 1. 建立连接
```javascript
mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms');
```

### 2. 定义 Schema
```javascript
var UserSchema=mongoose.Schema({
name: String,
age:Number,
status: {
  type: Number,
  // 默认参数
  default: 1
 }
})
```

### 3. 创建数据模型
```javascript
var User=mongoose.model('User', UserSchema);
```

### 4. 查找数据
```javascript
User.find({}, function (err, docs) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(docs);
})
```

### 5. 新增数据
```javascript
var u = new User({ //实例化模型传入增加的数据
  name: 'lisi2222333',
  age: 20,
  status: true
})
u.save();
```

### 6. 修改数据
```javascript
User.updateOne({ name: 'lisi2222' }, { name: '哈哈哈' }, function (err, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('成功')
});
```

### 7. 删除数据
```javascript
User.deleteOne({ _id: '5b72ada84e284f0acc8d318a' }, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  // deleted at most one tank document
  console.log('成功');
});
```

### 封装
参见 model 文件夹

