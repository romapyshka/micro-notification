import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class AppService {
  sendNotification(username: string): string {
    console.log("MASHARAG!")
    setTimeout(async () => {
      await axios.post('https://webhook.site/f6e50b78-c54d-4409-a910-13dca6241000', {
        message: `Hello ${username}! Welcome to our community!`,
      })
        .then((res) => {
          console.log(`Response from webhook: ${res}`)
        })
        .catch((err) => {
          console.error(`Error while sending data to webhook: ${err}`)
        });
      // }, 24 * 60 * 60 * 1000);
    }, 10000);
    return `Notification was send to ${username}!`;
  }
}
