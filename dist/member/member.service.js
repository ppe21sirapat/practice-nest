"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MemberService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const member_entity_1 = require("./entities/member.entity");
const common_2 = require("@nestjs/common");
let MemberService = MemberService_1 = class MemberService {
    constructor(memberRepository) {
        this.memberRepository = memberRepository;
        this.logger = new common_2.Logger(MemberService_1.name);
    }
    async create(createMemberDto) {
        try {
            this.logger.verbose({
                method: 'create',
                data: createMemberDto
            });
            return this.memberRepository.save(createMemberDto);
        }
        catch (error) {
            this.logger.error({
                method: 'create',
                error: error
            });
            throw new common_1.InternalServerErrorException();
        }
    }
    async findAll() {
        try {
            return this.memberRepository.find();
        }
        catch (error) {
            this.logger.error({
                method: 'findAll',
                error: error
            });
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            return this.memberRepository.findOne(id);
        }
        catch (error) {
            this.logger.error({
                method: 'findOne',
                error: error
            });
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateMemberDto) {
        try {
            this.logger.verbose({
                method: 'update',
                id: id,
                data: updateMemberDto
            });
            return this.memberRepository.update(id, updateMemberDto);
        }
        catch (error) {
            this.logger.error({
                method: 'update',
                error: error
            });
            throw new common_1.HttpException({
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    remove(id) {
        return this.memberRepository.delete(id);
    }
    testLogger() {
        this.logger.verbose('test verbose log');
        this.logger.warn('test warn log');
        this.logger.debug('test debug log');
        this.logger.error('test error log');
    }
};
MemberService = MemberService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(member_entity_1.Member)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MemberService);
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map