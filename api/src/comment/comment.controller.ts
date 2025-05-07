import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { AuthGuard } from 'src/common/auth.guard';
import { CreateCommentDTO } from './dtos/create-comment.dto';
import { MdFormatPipe } from 'src/common/md-format.pipe';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  async createComment(
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    body: CreateCommentDTO,
    @Req() req: any,
    @Body('content', new MdFormatPipe())
    content: string,
  ) {
    const user = req.user;

    return await this.commentService.createComment({ ...body, content }, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deletePost(@Param('id') id: string, @Req() req: Request) {
    const user = req['user'];

    return await this.commentService.deleteComment(id, user);
  }
}
