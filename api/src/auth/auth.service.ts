import {
  Injectable,
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
          OR: [{ email: email }, { id: uid }],
        },
      });

      if (foundUser) {
        // If the user exists, sign them in
        this.signIn(user);
      } else {
        // If the user does not exist, create a new user
        this.createUser(user);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createUser({ uid, email }) {
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
          email: 'dhillonaaspreet@gmail.com',
          username: `${Math.random().toString(36).substring(2, 15)}`,
          bio: 'This is a bio',
        },
      });
      return user;
    } catch (error) {
      console.log(error.message);
      throw error;
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
      throw error;
    }
  }
}
