import { AppService } from './app.service';
interface Member {
    firstname?: string;
    lastname?: string;
    email?: string;
    tel?: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    memberArray: Member[];
    memberData: Member;
    getHello(): string;
    addMember(firstname: string, lastname: string): Member[];
}
export {};
