import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service'; // Ensure this path is correct
// UserDocument might not be directly needed here if types are inferred or 'any' is used for simplicity initially
// import { UserDocument } from '../user/schemas/user.schema'; 

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && (await user.comparePassword(pass))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user.toObject(); // Ensure user.toObject() is valid
      return result;
    }
    return null;
  }

  async login(user: any) {
    // For now, just return the user object. Later, this will involve JWT.
    return {
      message: 'Login successful', // Or simply return the user object
      user,
    };
  }
}
