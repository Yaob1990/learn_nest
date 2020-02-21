# 数据校验
### 1. Mongoose 校验
 * required
 * max
 * min
 * enum: 枚举属性,只针对`string` 类型 eg: enum:['0','1','2']
 * match
 * maxlength
 * minlength
 
 ### 自定义校验,
 `validata` 函数 返回 `Boolean` 值
 
 ```javascript
desc: {
  type: String,
  // 自定义的验证器，如果通过验证返回true，没有通过则返回false
  validate: function(desc) {
      return desc.length >= 10;
    }
}
```

