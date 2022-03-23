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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const common_1 = require("@nestjs/common");
const member_service_1 = require("./member.service");
const create_member_dto_1 = require("./dto/create-member.dto");
const update_member_dto_1 = require("./dto/update-member.dto");
let MemberController = class MemberController {
    constructor(memberService) {
        this.memberService = memberService;
    }
    create(createMemberDto) {
        let messageArray = [];
        if (!createMemberDto.firstname || !createMemberDto.lastname) {
            if (!createMemberDto.firstname) {
                messageArray.push('firstname is require');
            }
            if (!createMemberDto.lastname) {
                messageArray.push('lastname is require');
            }
            throw new common_1.BadRequestException({
                message: messageArray
            });
        }
        else {
            return this.memberService.create(createMemberDto);
        }
    }
    findAll() {
        return this.memberService.findAll();
    }
    findOne(id) {
        return this.memberService.findOne(+id);
    }
    update(id, updateMemberDto) {
        let messageArray = [];
        if (!updateMemberDto.firstname || !updateMemberDto.lastname) {
            if (!updateMemberDto.firstname) {
                messageArray.push('firstname is require');
            }
            if (!updateMemberDto.lastname) {
                messageArray.push('lastname is require');
            }
            throw new common_1.BadRequestException({
                message: messageArray
            });
        }
        else {
            return this.memberService.update(+id, updateMemberDto);
        }
    }
    remove(id) {
        return this.memberService.remove(+id);
    }
    testLog() {
        this.memberService.testLogger();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_member_dto_1.CreateMemberDto]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_member_dto_1.UpdateMemberDto]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/test-log'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MemberController.prototype, "testLog", null);
MemberController = __decorate([
    (0, common_1.Controller)('member'),
    __metadata("design:paramtypes", [member_service_1.MemberService])
], MemberController);
exports.MemberController = MemberController;
//# sourceMappingURL=member.controller.js.map