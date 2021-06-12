import { Model, Table, DataType, Column } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttributes {
  login: string;
  email: string;
  password: string;
}

@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttributes> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'login',
    description: 'Логин',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;

  @ApiProperty({
    example: 'test@test.ru',
    description: 'Электронная почта',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: 'qwerty12345',
    description: 'Пароль',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: 'true',
    description: 'Пользователь подтвержден',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  confirmed: boolean;

  @ApiProperty({
    example: 'true',
    description: 'Признак бана пользователя',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({
    example: 'Поддержка Навального',
    description: 'Причина бана',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;
}
