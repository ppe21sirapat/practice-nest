import { AppService } from './app.service';
import { MessageProducerService } from './message.producer.service';
export declare class AppController {
    private readonly appService;
    private messageProducerService;
    constructor(appService: AppService, messageProducerService: MessageProducerService);
    getHello(): string;
    messageQueue(message: string): string;
}
