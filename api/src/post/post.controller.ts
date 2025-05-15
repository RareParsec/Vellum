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
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @UseGuards(AuthGuard)
  @SetMetadata('OptionalAuth', true)
  async getPosts(
    @Req() req: Request,
    @Query('limit', new ParseIntPipe()) limit: number,
    @Query('cursor')
    cursor: string | null = null,
  ) {
    const user = req['user'];

    return await this.postService.getPosts(user, limit, cursor);
  }

  @Get(':pid')
  @UseGuards(AuthGuard)
  @SetMetadata('OptionalAuth', true)
  async getPost(@Param('pid') pid: string, @Req() req: Request) {
    const user: DecodedIdToken = req['user'];
    return await this.postService.getPost(pid, user);
  }

  @Get('user/:username')
  @UseGuards(AuthGuard)
  @SetMetadata('OptionalAuth', true)
  async getUserPosts(@Param('username') username: string) {
    console.log(username);
    return await this.postService.getUserPosts(username);
  }

  @Get('search')
  @UseGuards(AuthGuard)
  @SetMetadata('OptionalAuth', true)
  async getPostsBySearch(@Req() req: Request, @Query('q') search: string) {
    const user = req['user'];
    return await this.postService.getPostsBySearch(search, user);
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

  @Post('subscribe/:id')
  @UseGuards(AuthGuard)
  async subscribePost(@Param('id') id: string, @Req() req: Request) {
    const user = req['user'];

    return await this.postService.subscribePost(id, user);
  }

  @Get('user/subscribed/:username')
  @UseGuards(AuthGuard)
  @SetMetadata('OptionalAuth', true)
  async getSubscribedPosts(
    @Param('username') username: string,
    @Req() req: Request,
  ) {
    const user = req['user'];

    return await this.postService.getSubscribedPosts(username, user);
  }
}
