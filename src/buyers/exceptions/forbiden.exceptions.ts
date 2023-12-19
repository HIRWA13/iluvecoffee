import { HttpException, HttpStatus } from '@nestjs/common';

export class ExceptionForMe extends HttpException {
  constructor() {
    super('this is your new excption', HttpStatus.FORBIDDEN);
  }
}
