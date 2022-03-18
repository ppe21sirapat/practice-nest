import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private memberRepository:Repository<Member>
  ) {}

  create(createMemberDto: CreateMemberDto) {
    return this.memberRepository.save(createMemberDto) ;
    
  }

  findAll(): Promise<Member[]> {
    return this.memberRepository.find() ;
  }

  findOne(id: number): Promise<Member> {
    return this.memberRepository.findOne(id);
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return this.memberRepository.update(id, updateMemberDto) ;
  }

  remove(id: number) {
    return this.memberRepository.delete(id) ;
  }
}
