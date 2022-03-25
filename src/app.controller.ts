import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducerService } from './message.producer.service';

interface Member {
  firstname? : string,
  lastname? : string,
  email? : string,
  tel? : string
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private messageProducerService: MessageProducerService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/message-queue')
  messageQueue(@Body('message') message:string): string {
    this.messageProducerService.sendMessage(message) ;
    return message
  }
}
