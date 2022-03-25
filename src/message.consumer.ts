import { Process, Processor } from "@nestjs/bull" ;
import { Job } from 'bull';

@Processor('message-queue')
export class MessageConsumer {
    @Process({
        name: 'message-job',
        concurrency: 5,
        
    })
    messageJob(job: Job<unknown>) {
        console.log(job)
        console.log(job.data) ;
    }
}