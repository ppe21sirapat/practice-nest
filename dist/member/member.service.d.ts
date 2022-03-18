import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';
export declare class MemberService {
    private memberRepository;
    constructor(memberRepository: Repository<Member>);
    create(createMemberDto: CreateMemberDto): Promise<CreateMemberDto & Member>;
    findAll(): Promise<Member[]>;
    findOne(id: number): Promise<Member>;
    update(id: number, updateMemberDto: UpdateMemberDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
