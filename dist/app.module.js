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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const bull_1 = require("@nestjs/bull");
const typeorm_2 = require("typeorm");
const postgres_config_1 = require("./postgres.config");
const member_module_1 = require("./member/member.module");
const message_producer_service_1 = require("./message.producer.service");
const message_consumer_1 = require("./message.consumer");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [postgres_config_1.default],
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                port: parseInt(process.env.DB_PORT),
                host: process.env.DB_HOST,
                database: process.env.DB_DATABASE,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: true,
            }),
            bull_1.BullModule.forRoot({
                redis: {
                    host: process.env.REDIS_HOST,
                    port: parseInt(process.env.REDIS_PORT)
                }
            }),
            bull_1.BullModule.registerQueue({
                name: 'message-queue'
            }),
            member_module_1.MemberModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, message_producer_service_1.MessageProducerService, message_consumer_1.MessageConsumer],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map