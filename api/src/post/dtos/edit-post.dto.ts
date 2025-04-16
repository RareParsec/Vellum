import {
  ArrayContains,
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class EditPostDTO {
  @IsString()
  @IsNotEmpty({ message: 'Post ID must not be empty' })
  postId: string;

  @IsString()
  @MinLength(8, {
    message: 'Title must be at least 8 characters long',
  })
  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;

  @IsString()
  @MinLength(1, {
    message: 'Body must be at least 1 character long',
  })
  @IsNotEmpty({ message: 'Body must not be empty' })
  body: string;

  @IsArray({ message: 'Hashtags must be an array' })
  @ArrayNotEmpty({ message: 'Hashtags array must not be empty' })
  @ArrayMinSize(1, {
    message: 'Hashtags array must contain at least one hashtag',
  })
  @IsString({ each: true, message: 'Each hashtag must be a string' })
  hashtags: string[];
}
