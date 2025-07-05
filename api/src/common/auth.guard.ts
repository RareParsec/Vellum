import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import admin from 'src/config/adminSDK';
import { PrismaService } from './prisma.service';
import { AuthController } from 'src/auth/auth.controller';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  private allowIfOptionalAuth(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    request.user = null;
    return true;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('AuthGuard activated');
    const optionalAuth =
      this.reflector.get<boolean>('OptionalAuth', context.getHandler()) ||
      false;

    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(`bearer `)[1];

    if (!token) {
      if (optionalAuth) return this.allowIfOptionalAuth(context);

      throw new UnauthorizedException('No token provided');
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);

      if (!decodedToken) {
        if (optionalAuth) return this.allowIfOptionalAuth(context);

        throw new UnauthorizedException('Invalid token');
      }

      const emailVerified = decodedToken.email_verified;
      if (!emailVerified) {
        if (optionalAuth) return this.allowIfOptionalAuth(context);

        throw new UnauthorizedException('Email not verified');
      }

      const dbUser = await this.prisma.user.findUnique({
        where: { id: decodedToken.uid },
      });

      if (!dbUser) {
        if (optionalAuth) return this.allowIfOptionalAuth(context);

        if (context.getClass() !== AuthController) {
          throw new UnauthorizedException('Registeration incomplete');
        }
      }

      request.user = decodedToken;
    } catch (error) {
      if (optionalAuth) return this.allowIfOptionalAuth(context);

      if (error instanceof HttpException) throw error;

      if (error.code === 'auth/id-token-expired') {
        throw new UnauthorizedException(
          'ID token has expired. Please log in again.',
        );
      }

      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }
}
