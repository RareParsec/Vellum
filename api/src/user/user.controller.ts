import {
  Controller,
  Get,
  ParseBoolPipe,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/common/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getUser(
    @Req() req: Request,
    @Query('i', new ParseBoolPipe()) i: boolean = false,
  ) {
    const user = req['user'];
    return await this.userService.getUser(user);
  }
}
