import { Post, Get, Body, Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { User } from './users.model';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({
    summary: 'Создание пользователя',
  })
  @ApiResponse({
    status: 200,
    type: User,
  })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.create(userDto);
  }

  @ApiOperation({
    summary: 'Получение всех пользователей',
  })
  @ApiResponse({
    status: 200,
    type: [User],
  })
  @Get()
  getUsers() {
    return this.usersService.findAll();
  }
}
