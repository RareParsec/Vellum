type User = {
  id: string;
  username: string;
  email: string;
  bio?: string | null;
  timestamp: Date;

  posts?: Post[];
  comments?: Comment[];
  PostView?: PostView[];
  Notification?: Notification[];
  SubscribedPost?: SubscribedPost[];
};

type NotificationType = {
  id: string;
  user_id: string;
  post_id?: string;
  comment_id?: string;
  message: string;
  viewed: boolean;
  preview: string;
  timestamp: Date;
};

type CommentType = {
  id: string;
  user_id: string;
  post_id: string;
  parent_comment_id?: string | null;
  content: string;
  timestamp: Date;

  user?: User;
  post?: Post;
  parentComment?: CommentType | null;

  comments: CommentType[] | [];
  Notification?: Notification[];
};

type Post = {
  id: string;
  user_id: string;
  title: string;
  body: string;
  timestamp: Date;

  user: User;
  hashtags: {
    value: string;
  }[];
  SubscribedPost: {
    id: string;
    user_id: string;
    timestamp: Date;
    post_id: string;
  }[];
  _count: {
    comments: number;
  };
  comments: CommentType[];
};
