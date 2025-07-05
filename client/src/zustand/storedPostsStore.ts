import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useStoredPostsStore = create(
  combine(
    {
      posts: new Map<string, Post[]>(),
    },
    (set, get) => ({
      getPosts: (route: string) => {
        const existingPosts = get().posts.get(route);

        if (existingPosts) {
          return existingPosts;
        } else {
          return null;
        }
      },
      setPosts: (route: string, posts: Post[]) => {
        set((state) => {
          const newPosts = new Map(state.posts);

          newPosts.set(route, posts);

          return { posts: newPosts };
        });
      },
      clearPosts: (route: string) => {
        set((state) => {
          const newPosts = new Map(state.posts);

          newPosts.delete(route);

          return { posts: newPosts };
        });
      },
      changeSubscribed: (postId: string, subscribedPost: any[]) => {
        set((state) => {
          const newPosts = new Map(state.posts);
          newPosts.forEach((posts, route) => {
            newPosts.set(
              route,
              posts.map((post) => {
                if (post.id === postId) {
                  return { ...post, SubscribedPost: subscribedPost };
                }
                return post;
              })
            );
          });
          return { posts: newPosts };
        });
      },
    })
  )
);
