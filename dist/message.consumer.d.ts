import { Job } from 'bull';
export declare class MessageConsumer {
    messageJob(job: Job<unknown>): void;
}
