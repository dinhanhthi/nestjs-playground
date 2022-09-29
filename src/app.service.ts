import { Inject, Injectable } from '@nestjs/common';
import { AllExceptionsFilter } from './all-exceptions.filter';

@Injectable()
export class AppService {
  constructor(
    @Inject('ALL_EXCEPTIONS_FILTER')
    private allExceptionsFilter: AllExceptionsFilter,
  ) {}

  getHello(name?: string): string {
    return `Hello ${name ? name : 'World'}`;
  }
}
