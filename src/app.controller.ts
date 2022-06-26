import { Controller } from '@nestjs/common';

@Controller('')
export class AppController {}

// controller + decorator method のパスの順番となる
// 任意のidを受け取る際は :idとすればOK
