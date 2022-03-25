import { Injectable, HttpException, HttpStatus, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Logger } from '@nestjs/common';

@Injectable()
export class MemberService {
  logger: Logger = new Logger(MemberService.name);

  constructor(
    @InjectRepository(Member)
    private memberRepository:Repository<Member>,  
  ) {}

  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    try {
      this.logger.verbose(
      { 
        method: 'create',
        data: createMemberDto
      }) ;
      return this.memberRepository.save(createMemberDto) ;
    }
    catch(error) {
      this.logger.error(
        {
          method: 'create',
          error: error
        }
      ) ;
      throw new InternalServerErrorException()
    }
  }

  async findAll(): Promise<Member[]> {
    try {
      return this.memberRepository.find() ;
    }
    catch(error) {
      this.logger.error({
        method: 'findAll',
        error: error
      }) ;
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR
      },HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findOne(id: number): Promise<Member> {
    try {
      return this.memberRepository.findOne(id);
    }
    catch(error) {
      this.logger.error(
        {
          method: 'findOne',
          error: error
        }
      ) ;
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR
      },HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async update(id: number, updateMemberDto: UpdateMemberDto): Promise<UpdateResult> {
    try {
      this.logger.verbose({
        method: 'update',
        id: id,
        data: updateMemberDto
      })
      return this.memberRepository.update(id, updateMemberDto) ;
    }
    catch(error) {
      this.logger.error({
        method: 'update',
        error: error
      }) ;
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR
      },HttpStatus.INTERNAL_SERVER_ERROR)
    }
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
}
