import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    NewsModule, 
    ScheduleModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/apply-project')
  ],
  controllers: [],
})
export class AppModule {}
