"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConfig = void 0;
exports.postgresConfig = {
    type: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    database: 'member',
    username: 'develop',
    password: '1234',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
};
//# sourceMappingURL=postgres.config.js.map