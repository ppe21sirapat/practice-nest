import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface Member {
  firstname? : string,
  lastname? : string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  memberArray: Member[] = [] ;

  memberData: Member = new Object() ;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/add')
  addMember(@Body('firstname') firstname:string, @Body('lastname') lastname:string) {
    this.memberData.firstname = firstname ;
    this.memberData.lastname = lastname ;
    
    // push data to memberArray
    this.memberArray.push(this.memberData) ;

    return this.memberArray ;
  }
}
