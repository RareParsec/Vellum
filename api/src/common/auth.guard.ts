import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import admin from 'src/config/adminSDK';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  private allowIfOptionalAuth(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    request.user = null;
    return true;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
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

      request.user = decodedToken;
    } catch (error) {
      console.error('Error verifying token:', error);

      if (optionalAuth) return this.allowIfOptionalAuth(context);

      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }
}
