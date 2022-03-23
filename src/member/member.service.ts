import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Logger } from '@nestjs/common';
import { resolve } from 'path';

@Injectable()
export class MemberService {
  logger: Logger ;

  constructor(
    @InjectRepository(Member)
    private memberRepository:Repository<Member>,  
  ) {
    this.logger = new Logger() ;
  }

  create(createMemberDto: CreateMemberDto): Promise<Member> {
    return this.memberRepository.save(createMemberDto) ;
  }

  findAll(): Promise<Member[]> {
    return this.memberRepository.find() ;
  }

  findOne(id: number): Promise<Member> {
    return this.memberRepository.findOne(id);
  }

  update(id: number, updateMemberDto: UpdateMemberDto): Promise<UpdateResult> {
    return this.memberRepository.update(id, updateMemberDto) ;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.memberRepository.delete(id) ;
  }
  
  testLogger() {
    this.logger.verbose('test verbose log') ;
    this.logger.warn('test warn log') ;
    this.logger.debug('test debug log') ;
    this.logger.error('test error log') ;
  }
  countMember() {
   return this.memberRepository.findAndCount() ;
  }
}
