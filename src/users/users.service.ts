import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { usersRepository } from '../constants/providers';

@Injectable()
export class UsersService {
  constructor(
      @Inject(usersRepository)
      private usersRepository: typeof User
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }
}
