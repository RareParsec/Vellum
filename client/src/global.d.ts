// Comment type already exists in typescript, the 'Type' at the end is required.
type User = {
  id: string;
  username: string;
  email: string;
  bio?: string | null;
  timestamp?: string;
};

type CommentType = {
  id: string;
  user_id: string;
  post_id: string;
  parent_comment_id?: string | null;
  content: string;
  comments: CommentType[]; // Nested comments
  timestamp: string;
  user: User;
};

type Post = {
  id: string;
  user_id: string;
  title: string;
  body: string;
  timestamp: string;
  subscribed: boolean;

  user: User;

  hashtags: {
    value: string;
  }[];

  comments: CommentType[];
};
