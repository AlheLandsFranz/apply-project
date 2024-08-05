import { IsString, MinLength } from "class-validator";


export class CreateNewsDto {
    @IsString()
    @MinLength(1)
    title: string;
  
    @IsString()
    @MinLength(1)
    author: string;

    @IsString()
    @MinLength(1)
    coments: string;

    @IsString()
    apiId: string;
}
