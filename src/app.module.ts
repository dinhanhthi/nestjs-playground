import { Module } from '@nestjs/common';
import { allExceptionsFilterFactory } from './all-exceptions.provider';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, allExceptionsFilterFactory],
})
export class AppModule {}
