import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendNotification(username: string): string {
    return `Notification was send to ${username}!`;
  }
}
