## 文件上传

1. 设置表单 `enctype="multipart/form-data"`

### 单文件上传(@UploadedFile)

```javascript
import { Controller, Get, Render, Post,UseInterceptors,UploadedFile} from '@nestjs/common';
import { FileInterceptor,FilesInterceptor } from '@nestjs/platform-express';
@Post('doAdd')
@UseInterceptors(FileInterceptor('pic'))
addUser(@UploadedFile() file,@Body() body){
console.log(body);
console.log(file);
const writeImage = createWriteStream(join(__dirname, '..','../public/upload', `${file.originalname}`))
writeImage.write(file.buffer)
return '上传成功';
}
```

### 多文件上传(@UploadedFiles)

```javascript
import { Controller, Get, Render, Post,UseInterceptors,UploadedFiles} from '@nestjs/common';
import { FileInterceptor,FilesInterceptor } from '@nestjs/platform-express';
@Post('doAddAll')
@UseInterceptors(FilesInterceptor('pic'))
addAllUser(@UploadedFiles() files,@Body() body){
for (const file of files) {
const writeImage =
createWriteStream(join(__dirname, '../../', 'public/upload', `${body.name}-${Date.now()}-${file.originalname}`));
writeImage.write(file.buffer);
}
return '上传成功';
}
```
