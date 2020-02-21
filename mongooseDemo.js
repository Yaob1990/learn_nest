const mongoose = require('mongoose');
// 建立连接
mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms');
// 操作user表（集合），定义一个schema
const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: Number,
});
//  定义数据库模型 操作数据库
// model 里面的第一个参数：1. 首字母大写 2.要和数据库表名称对应
// 模型会和模型名称相同的复数的数据库表建立连接
const User = mongoose.model('User', UserSchema);

// 查询 users 表的数据
User.find({}, function(err, doc) {
  if (err) {
    console.log(err);
  }
  console.log(doc);
});

// 增加数据
// const addData=new User({
//   name:"Yao",
//   age:20,
//   status:true
// })
// addData.save()

// 修改数据
User.updateOne({ name: 'Yao' }, { name: '哈哈哈' }, function(err, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('成功');
});

// 删除数据
User.deleteOne({ name: '哈哈哈' }, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('删除成功');
});
