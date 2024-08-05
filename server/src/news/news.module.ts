import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { News, NewsSchema } from './entities/news.entity';
import { HttpModule } from '@nestjs/axios';
import { NewsProvider } from './news.provider';
import { NewsRepository } from './news.repository';
import { NewsSchedule } from 'src/schedule/news.schedule';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ 
      name: News.name, 
      schema: NewsSchema 
    }])
  ],
  controllers: [NewsController],
  providers: [NewsService, NewsProvider, NewsRepository, NewsSchedule],
})
export class NewsModule {}
