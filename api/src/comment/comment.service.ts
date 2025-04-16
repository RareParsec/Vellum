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
            user: { connect: { id: user.id } }, // Replace with actual user ID
          },
        });
        return comment;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
}
