"use client";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import customAxios from "@/config/axios";
import PostStruct from "@/components/PostStruct";
import { useHmFeedStore } from "@/zustand/hmFeedStore";
import Search from "@/components/Search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouteScrollStore } from "@/zustand/routeScrollStore";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const storedPosts = useHmFeedStore((state) => state.posts);
  const setStoredPosts = useHmFeedStore((state) => state.setPosts);

  const triggerScroll = useRouteScrollStore((state) => state.triggerScroll);

  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await customAxios.get("/post");

      if (res.data.length === 0) {
        toast.error("No posts found");
        return;
      }

      return res.data;
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to load post";
      toast.error(Array.isArray(message) ? message[0] : message);
    }
  };

  const refreshFeed = async () => {
    setLoading(true);
    const res = await fetchPosts();
    if (res) {
      setPosts(res);
    }
    setLoading(false);
  };

  const _concatenateMorePosts = async () => {
    const res = await fetchPosts();
    if (res) {
      setPosts((prev) => [...prev, ...res]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setStoredPosts(posts);
    }, 100);

    triggerScroll();
  }, [posts]);

  useEffect(() => {
    if (storedPosts.length > 0) {
      setPosts(storedPosts);
      setLoading(false);
    } else {
      refreshFeed();
    }
  }, []);

  return (
    <div className="defined-w flex flex-col gap-4 h-fit">
      {loading &&
        Array(3)
          .fill("")
          .map((_, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="flex flex-row justify-between">
                  <Skeleton width={120} baseColor="var(--color-linen)" />
                  <Skeleton width={120} baseColor="var(--color-linen)" />
                </div>
                <Skeleton count={2} height={90} baseColor="var(--color-linen)" className="mt-3" />
                <div className="flex flex-row justify-end">
                  <Skeleton height={30} width={140} baseColor="var(--color-linen)" className="mt-2" />
                </div>
              </div>
            );
          })}
      {posts.length === 0 && !loading && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-center">No posts found</h1>
          <p className="text-gray-500">Try refreshing the feed or creating a new post.</p>
        </div>
      )}
      {posts.map((post, index) => {
        // if(index > 3) {return;}
        return (
          <div key={post.id} className="">
            <PostStruct post={post} expanded={false} />
          </div>
        );
      })}
    </div>
  );
}
