import {
  BadRequestException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async continueWithGoogle(user: DecodedIdToken) {
    try {
      const foundUser = await this.prisma.user.findFirst({
        where: {
          id: user.uid,
        },
      });

      if (foundUser) {
        return await this.signIn(user);
      } else {
        return 'user-not-yet-created';
      }
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error signing in with Google...');
    }
  }

  async createUser(user: DecodedIdToken, username: string) {
    if (!username || username.length < 3)
      throw new BadRequestException(
        'Username must be at least 3 characters long',
      );

    try {
      if (!user.email) {
        throw new UnauthorizedException('Email not provided');
      }

      const existingEmail = await this.prisma.user.findUnique({
        where: { email: user.email },
      });
      if (existingEmail) {
        throw new UnauthorizedException('Email already exists');
      }

      const existingUsername = await this.prisma.user.findUnique({
        where: { username },
      });
      if (existingUsername) {
        throw new UnauthorizedException('Username already exists');
      }

      const createdUser = await this.prisma.user.create({
        data: {
          id: user.uid,
          email: user.email,
          username: username,
          bio: 'This is a bio',
        },
      });
      return { createdUser };
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error creating user...');
    }
  }

  async signIn(user: DecodedIdToken) {
    try {
      const foundUser = await this.prisma.user.findUnique({
        where: { id: user.uid },
      });

      if (!foundUser) {
        throw new NotFoundException('User not found...');
      }

      return foundUser;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error signing in...');
    }
  }

  async getUser(username: string, user: DecodedIdToken) {
    try {
      const foundUser = await this.prisma.user.findUnique({
        where: { username },
      });

      if (!foundUser) {
        throw new NotFoundException('User not found...');
      }

      const { email, ...rest } = foundUser;

      return user.uid === foundUser.id ? foundUser : rest;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error getting user...');
    }
  }
}
