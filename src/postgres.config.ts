import { TypeOrmModuleOptions } from "@nestjs/typeorm" ;

export const postgresConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    host: '127.0.0.1' ,
    database: 'member',
    username: 'develop',
    password: '1234',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}