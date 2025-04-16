import {
  ImATeapotException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPost(id: string) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id },
        include: {
          user: true,
          hashtags: true,
          comments: {
            include: {
              user: true,
            },
          },
        },
      });

      if (!post) {
        throw new NotFoundException('Post not found');
      }

      return post;
    } catch (error) {
      throw error;
    }
  }

  async createPost({ title, body, hashtags }, user) {
    try {
      const post = await this.prisma.post.create({
        data: {
          title,
          body,
          user: { connect: { id: user.uid } },
          hashtags: {
            connectOrCreate: hashtags.map((tag) => ({
              where: { value: tag },
              create: { value: tag },
            })),
          },
        },
      });

      return post;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async editPost({ title, body, hashtags, postId }, user) {
    try {
      const post = await this.prisma.post.update({
        where: { id: postId, user_id: user.uid },
        data: {
          title,
          body,
          hashtags: {
            connectOrCreate: hashtags.map((tag) => ({
              where: { value: tag },
              create: { value: tag },
            })),
          },
        },
      });

      return post;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  deletePost() {
    // Logic to delete a post by ID
    return 'Post deleted successfully!';
  }
}
