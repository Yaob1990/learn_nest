import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

//https://github.com/hapijs/joi
// import * as Joi from '@hapi/joi';
@Injectable()
export class UserPipe implements PipeTransform {
  private schema;
  constructor(schema){
    this.schema=schema
  }
  transform(value: any, metadata: ArgumentMetadata) {
    //  校验
    const { error } = this.schema.validate(value);

    // console.log(error);
    // 不满足验证条件
    if(error){
      return {"success":false};
    }
    return value;
  }
}
