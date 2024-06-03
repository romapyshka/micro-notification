import { Injectable } from "@nestjs/common";
import axios from "axios";
import { QueueService } from "./queue/queue.service";

@Injectable()
export class AppService {
  constructor(private readonly queueService: QueueService) {
  }

  async sendNotification(username: string): Promise<string> {
    setTimeout(async () => {
      await axios.post("https://webhook.site/f6e50b78-c54d-4409-a910-13dca6241000", {
        message: `Hello ${username}! Welcome to our community!`,
      })
        .then((res) => {
          console.log(`Response from webhook send by timeout: ${res.data}`);
        })
        .catch((err) => {
          console.error(`Error while sending data to webhook by timeout: ${err}`);
        });
      }, 24 * 60 * 60 * 1000);
    console.log("Timeout set for notification");

    // This part of code use Bull.js library for queue operations
    await this.queueService.addNotification(username);
    console.log("Job added to notification schedule");
    return `Notification was send to ${username}!`;
  }
}
