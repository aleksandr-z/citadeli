import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { userProviders } from '../users/users.providers';
import { LocalStrategy } from "./local.strategy";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [DatabaseModule, UsersModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, userProviders, LocalStrategy],
})
export class AuthModule {}
