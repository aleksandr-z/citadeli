import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { usersRepository } from '../constants/providers';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(usersRepository)
    private usersRepository: typeof User,
  ) {}

  async create(dto: CreateUserDto) {
    return await this.usersRepository.create(dto);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }
}
