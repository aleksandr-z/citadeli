import { User } from './users.model';
import { usersRepository } from '../constants/providers';

export const userProviders = [
  {
    provide: usersRepository,
    useValue: User,
  },
];
