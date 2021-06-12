import {
  Injectable,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.usersService.find(login);
    const isPasswordMatching = await bcrypt.compare(pass, user.password);
    if (!isPasswordMatching) {
      throw new HttpException('Неверный пароль', HttpStatus.BAD_REQUEST);
    }
    if (user && isPasswordMatching) {
      const { login, confirmed, email, banned, banReason } = user;
      return {
        login,
        confirmed,
        email,
        banned,
        banReason,
      };
    }
    return null;
  }
}
