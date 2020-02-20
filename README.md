# mongoDb

### 管道操作符


| 管道操作符 | MYSQL    | 功能                                     |
| ---------- | -------- | ---------------------------------------- |
| $project   | SELECT   | 增加，删除，重命名字段（类似于查找功能） |
| $match     | WHERE    | 条件匹配                                 |
| $limit     | LIMIT    | 限制结果的数量                           |
| $skip      |          | 跳过文档的数量                           |
| $sort      | ORDER BY | 条件排序                                 |
| $group     | GROUP BY | 条件组合结果、统计                       |
| $lookup    | JOIN     | 引入其他集合的数据（表关联查询）         |

### 管道表达式

| 表达式操作符 | 功能                 |
| ------------ | -------------------- |
| $addToSet    | 文档指定字段去重     |
| $max         | 文档指定字段的最大值 |
| $min         | 文档指定字段的最小值 |
| $sum         | 文档指定字段求和     |
| $avg         | 求平均值             |
| $gt          | 大于给定值           |
| $lt          | 小于给定值           |
| $eq          | 等于给定值           |

