import {
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async continueWithGoogle(user, { uid, email } = user) {
    try {
      // Check if the user exists
      const foundUser = await this.prisma.user.findFirst({
        where: {
          id: uid,
        },
      });

      if (foundUser) {
        return await this.signIn({ uid: user.uid });
      } else {
        return 'user-not-yet-created';
      }
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error signing in');
    }
  }

  async createUser({ uid, email }, username: string) {
    try {
      // Check if email exists
      const existingEmail = await this.prisma.user.findUnique({
        where: { email },
      });
      if (existingEmail) {
        throw new UnauthorizedException('Email already exists');
      }
      // Check if username exists
      const existingUsername = await this.prisma.user.findUnique({
        where: { username: uid },
      });
      if (existingUsername) {
        throw new UnauthorizedException('Username already exists');
      }

      // Create the user
      const user = await this.prisma.user.create({
        data: {
          id: uid,
          email: email,
          username: username,
          bio: 'This is a bio',
        },
      });
      return { user };
    } catch (error) {
      if (error instanceof HttpException) return error;
      console.log(error.message);
      throw new InternalServerErrorException('Error creating user');
    }
  }

  async signIn({ uid }) {
    try {
      // Find user
      const user = await this.prisma.user.findUnique({
        where: { id: uid },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return user;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Error signing in');
    }
  }
}
