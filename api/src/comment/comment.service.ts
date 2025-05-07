import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateCommentDTO } from './dtos/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

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

        return comment;
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else if (type == 'COMMENT') {
      try {
        // First, fetch the parent comment to get its post ID
        const parentComment = await this.prisma.comment.findUnique({
          where: { id: targetId },
          select: { post_id: true },
        });

        if (!parentComment) throw new Error('Parent comment not found');

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

        return comment;
      } catch (error) {
        console.error('Failed to create reply comment:', error);
        throw error;
      }
    }
  }

  async deleteComment(id: string, user) {
    try {
      const comment = await this.prisma.comment.findUnique({
        where: { id },
        include: { user: true },
      });

      if (!comment) throw new Error('Comment not found');

      if (comment.user.id !== user.uid) throw new Error('Unauthorized');

      await this.prisma.comment.delete({ where: { id } });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
