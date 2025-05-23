import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module'; // Ensure this path is correct
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UserModule, // To use UserService for finding users
    PassportModule, // You can optionally register a default strategy: PassportModule.register({ defaultStrategy: 'local' })
  ],
  providers: [AuthService, LocalStrategy], // LocalStrategy will be available for Passport to use
  controllers: [AuthController],
})
export class AuthModule {}
