import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum CommentType {
  POST = 'POST',
  COMMENT = 'COMMENT',
}

export class CreateCommentDTO {
  @IsEnum(CommentType, {
    message: "type must be either 'POST' or 'COMMENT'",
  })
  @IsNotEmpty({ message: 'type must not be empty' })
  type: CommentType;

  @IsString({ message: 'id must be a string' })
  @IsNotEmpty({ message: 'id must not be empty' })
  targetId: string;

  @IsNotEmpty({ message: 'content must not be empty' })
  content: string;
}
