import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @MessagePattern("notification")
  async sendNotification(username: string): Promise<string> {
    return this.appService.sendNotification(username);
  }
}
