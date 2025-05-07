import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  SetMetadata,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dtos/create-post.dto';
import { AuthGuard } from 'src/common/auth.guard';
import { EditPostDTO } from './dtos/edit-post.dto';
import { MdFormatPipe } from 'src/common/md-format.pipe';
import { Reflector } from '@nestjs/core';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts() {
    return await this.postService.getPosts();
  }

  @Get('search')
  async getPostsBySearch(@Query('q') search: string) {
    console.log(search);
    return await this.postService.getPostsBySearch(search);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @SetMetadata('OptionalAuth', true)
  async getPost(
    @Param('id') id: string,
    @Query('depth', new ParseIntPipe()) depth: number = 5,
    @Req() req: Request,
  ) {
    const user = req['user'];
    return await this.postService.getPost(id, depth, user?.uid);
  }

  @Post('create')
  @UseGuards(AuthGuard)
  async createPost(
    @Body('body', new MdFormatPipe())
    bodyFormatted: string,
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

    return await this.postService.createPost(
      { ...body, body: bodyFormatted },
      user,
    );
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

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deletePost(@Param('id') id: string, @Req() req: Request) {
    const user = req['user'];

    return await this.postService.deletePost(id, user);
  }
}
