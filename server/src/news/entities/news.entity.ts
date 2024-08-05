import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class News extends Document{

    // story_title
    @Prop()
    title: string;

    // author
    @Prop()
    author: string;

    // comment_text
    @Prop()
    coments: string;

    @Prop({unique: true})
    apiId: string
}

export const NewsSchema = SchemaFactory.createForClass(News);