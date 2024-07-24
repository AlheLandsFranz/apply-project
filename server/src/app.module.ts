import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostsModule, 
    MongooseModule.forRoot('mongodb://localhost:27017/apply-project')
  ],
  controllers: [],
})
export class AppModule {}
