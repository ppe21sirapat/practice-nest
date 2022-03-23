import { TypeOrmModuleOptions } from "@nestjs/typeorm" ;
import { registerAs } from "@nestjs/config";

// export const postgresConfig : TypeOrmModuleOptions = {
//     type: 'postgres',
//     port: 5432,
//     host: '127.0.0.1' ,
//     database: 'member',
//     username: 'develop',
//     password: '1234',
//     entities: ["dist/**/*.entity{.ts,.js}"],
//     synchronize: true,
// }

export default registerAs('database', () => ({
    type: 'postgres',
    port: process.env.DB_PORT,
    host: process.env.DB_HOST ,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}));