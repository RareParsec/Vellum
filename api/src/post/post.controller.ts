import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dtos/create-post.dto';
import { AuthGuard } from 'src/common/auth.guard';
import { EditPostDTO } from './dtos/edit-post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return await this.postService.getPost(id);
  }

  @Post('create')
  @UseGuards(AuthGuard)
  async createPost(
    @Body(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    )
    body: CreatePostDTO,
    @Req() req: Request,
  ) {
    const user = req['user'];

    return await this.postService.createPost(body, user);
  }

  @Post('edit/:id')
  @UseGuards(AuthGuard)
  async editPost(
    @Body(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    )
    body: EditPostDTO,
    @Req() req: Request,
  ) {
    const user = req['user'];

    return await this.postService.editPost(body, user);
  }

  @Post('delete/:id')
  async deletePost() {
    // Logic to delete a post by ID
    return await this.postService.deletePost();
  }
}
