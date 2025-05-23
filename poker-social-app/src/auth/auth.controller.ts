import { Controller, Request, Post, UseGuards, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
// import { LocalAuthGuard } from './guards/local-auth.guard'; // We will create this guard - using AuthGuard('local') for now

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req) {
    return this.authService.login(req.user); // req.user is populated by LocalStrategy
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    // Basic registration: create user, password will be hashed by UserSchema pre-save hook
    // Error handling (e.g., user already exists) should ideally be more robust
    const user = await this.userService.create(createUserDto);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user.toObject();
    return result;
  }
}
