import { Controller, Get, Query, UsePipes } from '@nestjs/common';

import { UserPipe } from '../../pipe/user.pipe';

import * as Joi from '@hapi/joi';

let userSchema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number()
    .integer()
    .min(6)
    .max(66)
    .required(),
});

@Controller('user')
export class UserController {
  //http://localhost:3000/user?name=zhangsan&age=xxx

  //http://localhost:3000/user?name=zhangsan&age=20

  @Get()
  @UsePipes(new UserPipe(userSchema))
  index(@Query() info) {
    //  验证失败，会修改info，info 来自于管道的结果
    console.log(info);
    return '这是一个用户中心页面';
  }
}
