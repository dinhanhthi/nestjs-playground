// import { Controller, Get, Next, UseFilters, Logger } from '@nestjs/common';
import { Controller, Get, Next, Logger, Res } from '@nestjs/common';
import { NextFunction, Response } from 'express';
// import { AllExceptionsFilter } from './all-exceptions.filter';
import { AppService } from './app.service';

@Controller('cat')
export class CatController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  // @UseFilters(AllExceptionsFilter)
  async getHello(
    @Next() next: NextFunction,
    @Res() res: Response,
  ): Promise<void> {
    try {
      // throw new Error('🐱‍👤');
      const result = await this.appService.getHello('---');
      res.status(200).json(result);
    } catch (error) {
      Logger.debug("👆 I'm in catch of try");
      next(error);
      // throw error;
    }
  }
}
