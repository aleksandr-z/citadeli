import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { User } from '../users/users.model';
import {LocalAuthGuard} from "./local-auth.guard";

@ApiTags('Авторизация')
@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'Авторизация пользователя',
  })
  @ApiResponse({
    status: 200,
    type: User,
  })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }
}
