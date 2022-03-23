import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import postgresConfig from './postgres.config';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [postgresConfig],
    }),
    // TypeOrmModule.forRoot(postgresConfig),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     port: configService.get<number>('DB_PORT'),
    //     host: configService.get<string>('DB_HOST'),
    //     database: configService.get<string>('DB_DATABASE'),
    //     username: configService.get<string>('DB_USERNAME'),
    //     password: configService.get<string>('DB_PASSWORD'),
    //     entities: ["dist/**/*.entity{.ts,.js}"],
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService]
    // }),
    TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigService) => ({
          ...configService.get('database')
        }),
        inject: [ConfigService]
    }),
    MemberModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection:Connection) {}
}
