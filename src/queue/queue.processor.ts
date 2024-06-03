import { Process, Processor } from "@nestjs/bull";
import axios from "axios";
import { Job } from "bull";

@Processor("notification-queue")
export class QueueProcessor {
  @Process("notification-job")
  async handleDelayedJob(job: Job) {
    console.log("Processing delayed job for:", job.data);
    await axios.post("https://webhook.site/f6e50b78-c54d-4409-a910-13dca6241000", {
      message: `Hello ${job.data}! Welcome to our community! Bull.js message`,
    })
      .then((res) => {
        console.log(`Response from webhook send by Bull.js: ${res.data}`);
      })
      .catch((err) => {
        console.error(`Error while sending data to webhook by Bull.js: ${err}`);
      });
  }
}