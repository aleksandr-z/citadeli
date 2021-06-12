import { User } from './users.model';
import { usersRepository } from '../constants';

export const userProviders = {
  provide: usersRepository,
  useValue: User,
};
