import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendNotification(username: string): string {
    console.log("MASHARAG!")
    return `Notification was send to ${username}!`;
  }
}
