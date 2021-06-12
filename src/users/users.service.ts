import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { usersRepository } from '../constants';
import { CreateUserDto } from './dto/create-user-dto';
import { getHashedPassword } from '../helpers';

@Injectable()
export class UsersService {
  constructor(
    @Inject(usersRepository)
    private usersRepository: typeof User,
  ) {}

  async create(dto: CreateUserDto) {
    const hashedPassword = await getHashedPassword(dto.password);
    const data = {
      ...dto,
      password: hashedPassword,
    };
    return this.usersRepository.create(data);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  async find(login: string): Promise<User> {
    return this.usersRepository.findOne({ where: { login } });
  }
}
