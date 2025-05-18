import {
  Get,
  HttpException,
  Injectable,
  InternalServerErrorException,
  Req,
} from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { Notification, Prisma } from 'prisma/app/generated/prisma/client';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  @WebSocketServer()
  private server: any;

  setServer(server: any) {
    this.server = server;
  }

  async getNotifications(user: DecodedIdToken) {
    try {
      const notifications = await this.prisma.notification.findMany({
        where: { user_id: user.uid },
        orderBy: { timestamp: 'desc' },
      });

      return notifications;
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('error getting notifications');
    }
  }

  async sendNotification(
    notification: Prisma.NotificationUncheckedCreateInput,
  ) {
    try {
      const createdNotif = await this.prisma.notification.create({
        data: notification,
      });

      if (this.server)
        this.server
          .to(notification.user_id)
          .emit('new.notification', createdNotif);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('error creating notification');
    }
  }

  async markAsViewed(user, id) {
    try {
      await this.prisma.notification.update({
        where: { id, user_id: user.uid },
        data: { viewed: true },
      });

      return true;
    } catch (error) {
      throw new InternalServerErrorException(
        'error marking notification as viewed',
      );
    }
  }

  async deleteNotifications(user: DecodedIdToken) {
    try {
      await this.prisma.notification.deleteMany({
        where: { user_id: user.uid },
      });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('error deleting notifications');
    }
  }

  async deleteNotification(user: DecodedIdToken, id) {
    try {
      await this.prisma.notification.delete({
        where: { id, user_id: user.uid },
      });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('error deleting notification');
    }
  }
}
