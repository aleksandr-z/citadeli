import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { userProviders } from './users/users.providers';

@Module({
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, ...userProviders],
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    DatabaseModule,
    UsersModule,
  ],
})
export class AppModule {}
