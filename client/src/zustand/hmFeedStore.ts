import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useHmFeedStore = create(
  combine(
    {
      posts: [] as Post[],
    },
    (set) => ({
      setPosts: (posts: Post[]) => set({ posts }),
      clearPosts: () => set({ posts: [] }),
    })
  )
);
