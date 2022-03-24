import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Member } from './entities/member.entity';
import { Logger } from '@nestjs/common';
export declare class MemberService {
    private memberRepository;
    logger: Logger;
    constructor(memberRepository: Repository<Member>);
    create(createMemberDto: CreateMemberDto): Promise<Member>;
    findAll(): Promise<Member[]>;
    findOne(id: number): Promise<Member>;
    update(id: number, updateMemberDto: UpdateMemberDto): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
    testLogger(): void;
}
