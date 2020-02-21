# mongoose

### 索引
mongoose 中除了以前创建索引的方式，我们也可以在定义Schema 的时候指定创建索引。

```javascript
var DeviceSchema = new mongoose.Schema({
  sn: {
    type: Number,
    // 唯一索引
    unique: true
  },
  name: {
    type: String,
    // 普通索引
    index: true
  }
});
```

### 内置 curd
* Model.deleteMany()
* Model.deletedOne()
* Model.find()
* Model.findById()
* Model.findByIdAndDelete()
* Model.findByIdAndRemove()
* Model.findByIdAndUpdate()
* Model.findOne()
* Model.findOneAndDelete()
* Model.findOneAndRemove()
* Model.findOneAndReplace()
* Model.findOneAndUpdate()
* Model.replaceOne()
* Model.updateMany()
* Model.updateOne()
