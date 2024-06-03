import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class QueueService {
  constructor(@InjectQueue("notification-queue") private readonly queue: Queue) {
  }

  async addNotification(username: string) {
    await this.queue.add("notification-job", username, {
      // delay: 24 * 60 * 60 * 1000, // 24 години у мілісекундах
      delay: 10000, // 10 seconds
    });
  }
}
