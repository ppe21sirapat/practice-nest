import { Process, Processor } from "@nestjs/bull" ;

@Processor('message-queue')
export class MessageConsumer {
    @Process('message-job')
    messageJob(job) {
        console.log(job.data) ;
    }
}