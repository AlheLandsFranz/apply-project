import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Post extends Document{

    // story_title
    @Prop()
    title: string;

    // author
    @Prop()
    author: string;

    // created_at
    @Prop()
    created_at: string;

    // comment_text
    @Prop()
    coments: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);