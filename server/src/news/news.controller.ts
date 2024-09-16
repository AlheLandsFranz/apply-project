import { Controller, Get, Post, Body, Patch, Param, Delete, Query, OnModuleInit } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('/')
export class NewsController implements OnModuleInit {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.newsService.findAll(paginationQuery);
  }

  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }

  async onModuleInit(): Promise<any> {
    await this.newsService.loadNews();
  }
}


