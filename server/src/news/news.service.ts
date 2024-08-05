import { Injectable, Logger } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { NewsRepository } from './news.repository';
import { NewsProvider } from './news.provider';

@Injectable()
export class NewsService {

  constructor(
    private readonly newsRepository: NewsRepository,
    private readonly newsProvider: NewsProvider
  ) { }

  private readonly logger = new Logger(NewsService.name);

  async loadNews() {
    const apiNews = await this.newsProvider.fetchNews()
    apiNews.map(news => {
      this.create(news)
    })
  }

  async findAll(paginationQuery: PaginationQueryDto) {
    return this.newsRepository.findAll(paginationQuery)
  }

  async create(createNewsDto: CreateNewsDto) {
    return this.newsRepository.create(createNewsDto)

  }

  async update(id: string, updateNewsDto: UpdateNewsDto) {
    return this.newsRepository.update(id, updateNewsDto)
  }

  async findById(id: string) {
    return this.newsRepository.findById(id)
  }

  async remove(id: string) {
    return this.newsRepository.remove(id)
  }
}
