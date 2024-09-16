import { PartialType } from '@nestjs/swagger';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto extends PartialType(CreateNewsDto) {
    title?: string;
    author?: string;
    coments?: string;
    apiId?: string;
    isDeleted?: Date;
}
