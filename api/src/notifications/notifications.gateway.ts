import { SetMetadata, UnauthorizedException, UseGuards } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Server } from 'http';
import admin from 'src/config/adminSDK';
import { NotificationsService } from './notifications.service';

@WebSocketGateway({})
export class NotificationsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly notificationsService: NotificationsService) {}

  afterInit(server: any) {
    this.notificationsService.setServer(server);
  }

  async handleConnection(client: any, ...args: any[]) {
    try {
      const token = client.handshake.auth.token;
      if (!token) client.disconnect();
      const decodedToken = await admin.auth().verifyIdToken(token);
      if (!decodedToken) client.disconnect();
      client.join(decodedToken.uid);
    } catch (error) {
      client.disconnect();
    }
  }

  handleDisconnect(client: any) {}
}
