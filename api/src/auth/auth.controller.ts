import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/common/prisma.service';
import { AuthGuard } from 'src/common/auth.guard';

@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('continueWithGoogle')
  continueWithGoogle(@Req() req: Request) {
    const user = req['user'];
    // console.log(user.uid);

    this.authService.continueWithGoogle(user);
  }

  @Get('signIn')
  signIn(@Req() req: Request) {
    const user = req['user'];

    return this.authService.signIn(user);
  }

  @Get('createUser')
  async createUser(@Req() req: Request) {
    const user = req['user'];

    return this.authService.createUser(user);
  }
}
