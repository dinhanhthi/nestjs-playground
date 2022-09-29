import { Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    Logger.debug(`👉 I'm in AllExceptionsFilter!`); /*###Thi*/
    super.catch(exception, host);
  }
}
