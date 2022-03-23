import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
export declare class MemberController {
    private readonly memberService;
    constructor(memberService: MemberService);
    create(createMemberDto: CreateMemberDto): Promise<import("./entities/member.entity").Member>;
    findAll(): Promise<import("./entities/member.entity").Member[]>;
    findOne(id: string): Promise<import("./entities/member.entity").Member>;
    update(id: string, updateMemberDto: UpdateMemberDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    testLog(): void;
}
