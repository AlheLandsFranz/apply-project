import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './entities/news.entity';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Injectable()
export class NewsRepository {

    constructor(
        @InjectModel(News.name) private readonly newsModel: Model<News>
    ) { }

    private readonly logger = new Logger(NewsRepository.name);

    async findAll(paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery;
        return this.newsModel
            .find()
            .skip(offset)
            .limit(limit)
            .exec();
    }

    async create(createNewsDto: CreateNewsDto) {
        const exists = await this.newsModel.findOne({ apiId: createNewsDto.apiId });
        if (!exists) {
            const newNews = new this.newsModel(createNewsDto);
            return newNews.save();
        }
    }

    async update(id: string, updateNewsDto: UpdateNewsDto) {
        const existingNews = await this.newsModel
            .findOneAndUpdate({ _id: id }, { $set: updateNewsDto }, { new: true })
            .exec();

        if (!existingNews) {
            throw new NotFoundException(`News #${id} not found`);
        }
        return existingNews;
    }

    async findById(id: string) {
        const news = await this.newsModel.findById({ _id: id }).exec();

        if (!news) {
            throw new NotFoundException(`News with id ${id} not found`)
        }
        return news;
    }
    
    async findByApiId(id: string) {

        const news = await this.newsModel.findOne({ apiId: id }).exec();
        if (!news) {
            throw new NotFoundException(`News with id ${id} not found`)
        }
        return news;
    }

    async remove(id: string) {
        const news = this.findById(id);
        return this.newsModel.deleteOne({ _id: id })
    }
}
