import { AllExceptionsFilter } from './all-exceptions.filter';

export const allExceptionsFilterFactory = {
  provide: 'ALL_EXCEPTIONS_FILTER',
  useClass: AllExceptionsFilter,
};
