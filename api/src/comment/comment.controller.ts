import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { AuthGuard } from 'src/common/auth.guard';
import { CreateCommentDTO } from './dtos/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  async createComment(
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    body: CreateCommentDTO,
    @Req() req: any,
  ) {
    const user = req.user;

    return await this.commentService.createComment(body, user);
  }
}
