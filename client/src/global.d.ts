// Comment type already exists in typescript, the 'Type' at the end is required.
type CommentType = {
  id: string;
  user_id: string;
  post_id: string;
  parent_comment_id?: string | null;
  content: string;
  comments: CommentType[]; // Nested comments
  timestamp: string;
};

type Post = {
  id: string;
  user_id: string;
  title: string;
  body: string;
  timestamp: string; // Use string instead of Date on the client (JSON-serialized)

  user: {
    id: string;
    username: string;
    email?: string;
    bio?: string | null;
    timestamp?: string;
  };

  hashtags: {
    value: string;
  }[];

  comments: CommentType[];
};
