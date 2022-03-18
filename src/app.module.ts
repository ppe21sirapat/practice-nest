import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { postgresConfig } from './postgres.config';
import { MemberModule } from './member/member.module';

@Module({
  imports: [TypeOrmModule.forRoot(postgresConfig), MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection:Connection) {}
}
