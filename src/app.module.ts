import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { Connection } from 'typeorm';
import postgresConfig from './postgres.config';
import { MemberModule } from './member/member.module';
import { MessageProducerService } from './message.producer.service';
import { MessageConsumer } from './message.consumer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [postgresConfig],
    }),
    // TypeOrmModule.forRoot(postgresConfig),
    TypeOrmModule.forRoot({
        type: 'postgres',
        port: parseInt(process.env.DB_PORT),
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     ...configService.get('database')
    //   }),
    //   inject: [ConfigService]
    // }),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT)
      }
    }),
    BullModule.registerQueue({
      name: 'message-queue'
    }),
    MemberModule
  ],
  controllers: [AppController],
  providers: [AppService,MessageProducerService,MessageConsumer],
})
export class AppModule {
  constructor(private connection:Connection) {}
}
