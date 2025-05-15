import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

    const countofcomments = await this.prisma.comment.count({
      where: { post_id: postId },
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
      console.error(error);
      throw new InternalServerErrorException('error getting comments');
    }
  }

  async createComment({ type, targetId, content }: CreateCommentDTO, user) {
    if (type == 'POST') {
      try {
        const comment = await this.prisma.comment.create({
          data: {
            content,
            post: { connect: { id: targetId } },
            user: { connect: { id: user.uid } },
          },
          include: {
            user: true,
            comments: true,
          },
        });

        this.prisma.post
          .findUnique({
            where: { id: targetId },
            select: { user: { select: { id: true } } },
          })
          .then(async (post) => {
            if (post) {
              const commentUser = await this.prisma.user.findUnique({
                where: { id: user.uid },
                select: { username: true },
              });

              if (!commentUser) return;

              const allSubscribedUsers =
                await this.prisma.subscribedPost.findMany({
                  where: { post_id: targetId },
                  select: { user_id: true },
                });

              allSubscribedUsers.forEach((subscribedUser) => {
                if (
                  subscribedUser.user_id !== post.user.id &&
                  subscribedUser.user_id !== user.uid
                ) {
                  this.notificationsService.sendNotification({
                    user_id: subscribedUser.user_id,
                    post_id: targetId,
                    comment_id: comment.id,
                    message: `${commentUser?.username} commented on a post you are subscribed to`,
                    viewed: false,
                  });
                }
              });

              this.notificationsService.sendNotification({
                user_id: post.user.id,
                post_id: targetId,
                comment_id: comment.id,
                message: `${commentUser?.username} commented on your post`,
                viewed: false,
              });
            }
          });

        return comment;
      } catch (error) {
        console.error(error);
        throw new InternalServerErrorException('error creating comment');
      }
    } else if (type == 'COMMENT') {
      try {
        // First, fetch the parent comment to get its post ID
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
                message: `${user.username} replied to your comment`,
                viewed: false,
              });
            }
          });

        return comment;
      } catch (error) {
        console.error('Failed to create reply comment:', error);
        throw new InternalServerErrorException('error creating reply comment');
      }
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
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('error deleting comment');
    }
  }
}
