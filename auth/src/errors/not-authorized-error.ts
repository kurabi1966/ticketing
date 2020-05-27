import { CustomeError } from './custome-error';

export class NotAutorizedError extends CustomeError {
  statusCode = 401;
  constructor() {
    super('Not authorized');
  }
  serializeErrors = () => {
    return [{ message: 'Not authorized' }];
  };
}
