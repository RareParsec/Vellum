import {
  ImATeapotException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPost(id: string, depth: number, userId?: string) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id },
        include: {
          user: true,
          hashtags: true,
        },
      });

      if (!post) {
        throw new NotFoundException('Post not found');
      }

      const allComments = await this.prisma.comment.findMany({
        where: { post_id: id },
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      });

      const commentMap = new Map<string, any>();

      const initializedComments = allComments.map((comment) => {
        const initComment = { ...comment, comments: [] as any };
        commentMap.set(comment.id, initComment);
        return initComment;
      });

      const threadedComments: any[] = [];

      initializedComments.forEach((comment) => {
        if (comment.parent_comment_id) {
          const parent = commentMap.get(comment.parent_comment_id);

          if (parent) {
            parent.comments.push(comment || '');
          }
        } else {
          threadedComments.push(comment);
        }
      });

      post['comments'] = threadedComments;

      if (userId) {
        console.log('hererhehrhehreh');
        this.prisma.postView
          .create({
            data: {
              user_id: userId,
              post_id: id,
            },
          })
          .then(() => {
            console.log('added');
          })
          .catch(() => {});
      }

      return post;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getPostsBySearch(search: string) {
    try {
      const posts = this.prisma.post.findMany({
        where: {
          OR: [{ title: { contains: search } }, { body: { contains: search } }],
        },
        include: {
          user: true,
          hashtags: true,
        },
      });

      return posts;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getPosts() {
    try {
      const posts = await this.prisma.post.findMany({
        include: {
          user: true,
          hashtags: true,
        },
      });

      return posts;
    } catch (error) {
      console.error(error);
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

  async deletePost(id, user) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id },
        include: { user: true },
      });

      if (!post) throw new NotFoundException('Post not found');

      if (post.user.id !== user.uid)
        throw new ImATeapotException('Unauthorized');

      await this.prisma.post.delete({ where: { id } });

      return { message: 'Post deleted successfully' };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
