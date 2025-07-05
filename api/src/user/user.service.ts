import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(user) {
    const userInfo = await this.prisma.user.findUnique({
      where: { id: 'userId' }, // Replace with actual user ID logic
      include: {
        posts: true,
        comments: true,
      },
    });

    if (!user) {
      throw new InternalServerErrorException('error getting user');
    }

    return user;
  }
}
