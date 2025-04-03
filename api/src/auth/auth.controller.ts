import {
  Controller,
  Get,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { NotFoundError } from 'rxjs';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';
import { AuthGuard } from 'src/common/auth.guard';
import { OptionalAuth } from 'src/common/optionalAuth.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private prisma: PrismaService,
  ) {}

  @Get('continueWithGoogle')
  @UseGuards(AuthGuard)
  @OptionalAuth(true)
  continueWithGoogle() {
    this.authService.continueWithGoogle();
  }
}
