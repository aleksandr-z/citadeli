import { ApiProperty } from '@nestjs/swagger';

export class RegistrationDto {
    @ApiProperty({
        example: 'login',
        description: 'Логин',
    })
    readonly login: string;

    @ApiProperty({
        example: 'qwerty12345',
        description: 'Пароль',
    })
    readonly password: string;
}

export class AuthorizationDto {
    @ApiProperty({
        example: 'login',
        description: 'Логин',
    })
    readonly username: string;

    @ApiProperty({
        example: 'qwerty12345',
        description: 'Пароль',
    })
    readonly password: string;
}
