import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { AuthGuard } from 'src/common/auth.guard';

@Controller('notifications')
@UseGuards(AuthGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async getNotifications(@Req() req: any) {
    const user = req['user'];
    return await this.notificationsService.getNotifications(user);
  }

  @Patch('mark-as-viewed/:id')
  async markAsViewed(@Req() req: any, @Param('id') id: string) {
    const user = req['user'];
    return await this.notificationsService.markAsViewed(user, id);
  }

  @Delete('delete')
  async deleteNotifications(@Req() req: any) {
    const user = req['user'];
    return await this.notificationsService.deleteNotifications(user);
  }

  @Delete('delete/:id')
  async deleteNotification(@Req() req: any, @Param('id') id: string) {
    const user = req['user'];
    return await this.notificationsService.deleteNotification(user, id);
  }
}
