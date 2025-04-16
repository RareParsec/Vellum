type Comment = {
  id: string;
  user_id: string;
  post_id: string;
  parent_comment_id?: string | null;
  content: string;
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

  comments: Comment[];
};
