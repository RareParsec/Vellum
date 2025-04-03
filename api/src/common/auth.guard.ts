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

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const optionalAuth =
      this.reflector.get('optionalAuth', context.getHandler()) || false;

    const request = context.switchToHttp().getRequest();
    const token = request.headers['Authorization']?.split(`bearer`)[1];

    if (!token) {
      if (optionalAuth) {
        request.user = null;
        return true;
      } else {
        throw new UnauthorizedException('No token provided');
      }
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);

      if (!decodedToken) {
        if (optionalAuth) {
          request.user = null;
          return true;
        }
        throw new UnauthorizedException('Invalid token');
      }

      const emailVerified = decodedToken.email_verified;
      if (!emailVerified) {
        if (optionalAuth) {
          request.user = null;
          return true;
        }
        throw new UnauthorizedException('Email not verified');
      }

      request.user = decodedToken;
    } catch (error) {
      console.error('Error verifying token:', error);

      if (optionalAuth) {
        request.user = null;
        return true;
      }

      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }
}
