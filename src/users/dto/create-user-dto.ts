import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'login',
    description: 'Логин',
  })
  readonly login: string;

  @ApiProperty({
    example: 'test@test.ru',
    description: 'Электронная почта',
  })
  readonly email: string;

  @ApiProperty({
    example: 'qwerty12345',
    description: 'Пароль',
  })
  readonly password: string;
}
