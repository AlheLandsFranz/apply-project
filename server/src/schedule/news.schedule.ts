import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from 'src/news/news.service';

@Injectable()
export class NewsSchedule {
    constructor(private readonly newsService: NewsService) { }

    private readonly logger = new Logger(NewsSchedule.name);

    @Cron('15 * * * * *')
    handleCron() {
        this.logger.debug('Called from Cron when the current second is 15');
    }

    @Cron(CronExpression.EVERY_HOUR)
    reloadNews() {
        this.newsService.loadNews();
    }
}
