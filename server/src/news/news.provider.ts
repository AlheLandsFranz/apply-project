import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs/operators';
import { News } from './entities/news.entity';

@Injectable()
export class NewsProvider {
    constructor(private httpService: HttpService) { }

    async fetchNews(): Promise<News[]> {

        try {
            const data = this.httpService.get(`https://hn.algolia.com/api/v1/search_by_date?query=nodejs}`).pipe(
                map(response => response.data),
                catchError(error => {
                    throw new Error('Error al procesar la solicitud');
                })
            );
            const response = await lastValueFrom(data);

            const news = await response.hits.map(newsData => {
                return {
                    author: newsData.author,
                    title: newsData.story_title,
                    coments: newsData.comment_text,
                    apiId: newsData.objectID
                }
            })
            return news;
        } catch (error) {
            throw new Error('Error al procesar la solicitud de la api')
        }
    }
}
