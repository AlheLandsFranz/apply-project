import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from 'src/news/news.service';

@Injectable()
export class NewsSchedule {
    constructor(private readonly newsService: NewsService) { }

    @Cron(CronExpression.EVERY_HOUR)
    reloadNews() {
        this.newsService.loadNews();
    }
}
