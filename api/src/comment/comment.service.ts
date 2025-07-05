import {
  BadRequestException,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateCommentDTO } from './dtos/create-comment.dto';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class CommentService {
  constructor(
    private prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async getComments(postId: string) {
    try {
      const rootComments = await this.prisma.comment.findMany({
        where: { post_id: postId, parentComment: null },
        include: {
          user: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      });

      const addCommentsToComment = async (comment) => {
        const comments = await this.prisma.comment.findMany({
          where: { parent_comment_id: comment.id },
          include: {
            user: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        });

        comment.comments = comments;

        await Promise.all(
          comment.comments.map((childComment) =>
            addCommentsToComment(childComment),
          ),
        );

        return comment;
      };

      const comments = await Promise.all(
        rootComments.map((childComment) => {
          return addCommentsToComment(childComment);
        }),
      );

      return comments;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error getting comments...');
    }
  }

  async getUserComments(username: string) {
    try {
      const comments = await this.prisma.comment.findMany({
        where: { user: { username } },
        include: {
          user: true,
          post: true,
          parentComment: true,
        },
      });

      return comments;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error getting comments');
    }
  }

  async createComment({ type, targetId, content }: CreateCommentDTO, user) {
    if ((type !== 'POST' && type !== 'COMMENT') || !targetId || !content)
      throw new BadRequestException('Invalid data provided');

    try {
      if (type == 'POST') {
        const comment = await this.prisma.comment.create({
          data: {
            content,
            post_id: targetId,
            user_id: user.uid,
          },
          include: {
            user: true,
            comments: true,
          },
        });

        this.prisma.post
          .findUnique({
            where: { id: targetId },
            include: {
              user: { select: { id: true } },
              SubscribedPost: { select: { user_id: true } },
            },
          })
          .then(async (post) => {
            if (!post) return;
            const commenter = await this.prisma.user.findUnique({
              where: { id: user.uid },
              select: { username: true, id: true },
            });

            if (!commenter) return;

            post.SubscribedPost.forEach((subscribedUser) => {
              if (subscribedUser.user_id == user.uid) return;
              this.notificationsService.sendNotification({
                user_id: subscribedUser.user_id,
                post_id: targetId,
                comment_id: comment.id,
                message: `${commenter?.username} commented on a post you are subscribed to.`,
                preview: comment.content,
                viewed: false,
              });
            });

            if (commenter.id == post.user.id) return;

            this.notificationsService.sendNotification({
              user_id: post.user.id,
              post_id: targetId,
              comment_id: comment.id,
              message: `${commenter?.username} commented on your post`,
              preview: comment.content,
              viewed: false,
            });
          });

        return comment;
      }

      if (type == 'COMMENT') {
        const parentComment = await this.prisma.comment.findUnique({
          where: { id: targetId },
          select: { post_id: true },
        });

        if (!parentComment)
          throw new InternalServerErrorException('Parent comment not found');

        const comment = await this.prisma.comment.create({
          data: {
            content,
            parentComment: { connect: { id: targetId } },
            post: { connect: { id: parentComment.post_id } },
            user: { connect: { id: user.uid } },
          },
          include: {
            user: true,
            comments: true,
          },
        });

        this.prisma.comment
          .findUnique({ where: { id: comment.parent_comment_id || '' } })
          .then(async (parentComment) => {
            if (
              parentComment &&
              parentComment.user_id !== user.uid &&
              comment.id
            ) {
              this.notificationsService.sendNotification({
                user_id: parentComment.user_id,
                post_id: parentComment.post_id,
                comment_id: comment.id,
                message: `${comment.user.username} replied to your comment`,
                preview: comment.content,
                viewed: false,
              });
            }
          });
        return comment;
      }
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error creating comment...');
    }
  }

  async deleteComment(id: string, user) {
    try {
      const comment = await this.prisma.comment.findUnique({
        where: { id },
        include: { user: true },
      });

      if (!comment) throw new InternalServerErrorException('Comment not found');

      if (comment.user.id !== user.uid)
        throw new InternalServerErrorException('Unauthorized');

      await this.prisma.comment.delete({ where: { id } });
      return true;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error deleting comment...');
    }
  }
}
