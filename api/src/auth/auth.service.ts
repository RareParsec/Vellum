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
          email: user.email,
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
    const trimmedUsername = username.trim();

    if (!trimmedUsername || trimmedUsername.length < 3)
      throw new BadRequestException(
        'Username must be at least 3 characters long',
      );

    try {
      if (!user.email) {
        throw new UnauthorizedException('Email not provided');
      }

      const existingEmailUser = await this.prisma.user.findUnique({
        where: { email: user.email },
      });
      if (existingEmailUser) {
        return await this.signIn(user);
      }

      const existingUsername = await this.prisma.user.findUnique({
        where: { username: trimmedUsername },
      });
      if (existingUsername) {
        throw new UnauthorizedException('Username already exists');
      }

      const createdUser = await this.prisma.user.create({
        data: {
          id: user.uid,
          email: user.email,
          username: trimmedUsername,
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
        where: { email: user.email },
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
      console.log('Searching for username:', `"${username}"`);

      const users = await this.prisma.user.findMany({});
      console.log(
        'All users:',
        users.map((u, index) => `[${index}]: "${u.username}"`),
      );

      // Check if ANY user matches
      const matchingUser = users.find((u) => u.username === username);
      console.log('Found matching user in array:', matchingUser);

      const foundUser = await this.prisma.user.findFirst({
        where: { username },
      });
      console.log('foundUser from findFirst:', foundUser);

      console.log(foundUser);
      if (!foundUser) {
        throw new NotFoundException('User not found...');
      }

      const { email, ...rest } = foundUser;

      return user && user.email === foundUser.email ? foundUser : rest;
    } catch (error) {
      // console.log(error);
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error getting user...');
    }
  }
}
