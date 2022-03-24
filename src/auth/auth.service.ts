import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(id : string): Promise<any> {
    const user = await this.usersService.findOne(id);
    console.log("user",user)
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { user: user.username, password: user.password };
    console.log("payload",payload)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}