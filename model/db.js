const mongoose = require('mongoose');
// 建立连接
mongoose.connect('mongodb://eggadmin:123456@localhost:27017/eggcms', { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('数据库连接成功');
});

module.exports = mongoose;
