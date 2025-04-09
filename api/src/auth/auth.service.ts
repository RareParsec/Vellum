import { Injectable, UnauthorizedException } from '@nestjs/common';
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
      throw new UnauthorizedException('Internal server error');
    }
  }

  async createUser({ uid, email }) {
    try {
      // Create the user
      const user = await this.prisma.user.create({
        data: {
          id: uid,
          email: email,
          username: `${Math.random().toString(36).substring(2, 15)}`,
          bio: 'This is a bio',
        },
      });
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async signIn({ uid }) {
    try {
      // Find user
      const user = await this.prisma.user.findUnique({
        where: { id: uid },
      });
      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
