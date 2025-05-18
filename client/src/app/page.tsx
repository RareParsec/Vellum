"use client";
import { useEffect, useState } from "react";
import customAxios from "@/config/axios";
import PostStruct from "@/components/PostStruct";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { usePathname } from "next/navigation";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";
import { globalScrollRef } from "@/components/AppShell";
import errorHandler from "@/utils/errorHandler";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const getStoredPosts = useStoredPostsStore((state) => state.getPosts);
  const setStoredPosts = useStoredPostsStore((state) => state.setPosts);

  const pathname = usePathname();

  const { ref, inView, entry } = useInView({ root: globalScrollRef.current });

  const [posts, setPosts] = useState<Post[]>(getStoredPosts(pathname) || []);
  const [loading, setLoading] = useState(false);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [cursor, setCursor] = useState<string | null>(posts[posts.length - 1]?.id || null);
  const [endOfPosts, setEndOfPosts] = useState(false);

  const fetchPosts = async () => {
    try {
      const res = await customAxios.get(`/post?limit=10&${cursor ? `cursor=${cursor}` : ""}`);

      if (!res.data) {
        return [];
      }

      if (res.data.length === 0) {
        return [];
      }

      setCursor(res.data[res.data.length - 1].id);
      return res.data;
    } catch (error: any) {
      errorHandler(error);
    }
  };

  const refreshFeed = async () => {
    setLoading(true);
    const fetchedPosts = await fetchPosts();

    if (fetchedPosts && fetchedPosts.length > 0) {
      const uniquePosts = fetchedPosts.filter(
        (post: Post, index: number, self: Post[]) => index === self.findIndex((t) => t.id === post.id)
      );

      setPosts(uniquePosts);
    } else {
      setPosts([]);
    }
    setLoading(false);
  };

  const concatenateMorePosts = async () => {
    setFetchingMore(true);
    const fetchedPosts = await fetchPosts();

    if (!fetchedPosts || fetchedPosts.length === 0) {
      setFetchingMore(false);
      setEndOfPosts(true);
      return;
    } else {
      setEndOfPosts(false);
    }

    const currentPostIds = posts?.map((post: Post) => post.id);
    const filteredFetchedPosts = fetchedPosts.filter((post: Post) => !currentPostIds?.includes(post.id));

    if (filteredFetchedPosts.length === 0) {
      setFetchingMore(false);
      setEndOfPosts(true);
    }

    setPosts((prev) => [...prev, ...filteredFetchedPosts]);
    setFetchingMore(false);
  };

  useEffect(() => {
    if (inView && !fetchingMore) {
      concatenateMorePosts();
    }
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setStoredPosts(pathname, posts);
    }, 100);
  }, [posts]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      setLoading(false);

      globalScrollRef.current?.scrollTo({
        top: sessionStorage.getItem(`scroll-${pathname}`) ? parseInt(sessionStorage.getItem(`scroll-${pathname}`)!) : undefined,
      });
    } else {
      refreshFeed();
    }
  }, []);

  const RenderBeforePosts = () => {
    if (loading) {
      return Array(3)
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
        });
    }

    if (!posts || posts.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-xl">
            Nothing here... Try refreshing the feed :&#x29;
            <button
              className="rd-block ml-4 font-bold text-sm cursor-pointer"
              onClick={() => {
                refreshFeed();
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="defined-w flex flex-col gap-4 h-fit">
      <RenderBeforePosts />
      {!loading && posts && posts.length > 0 && (
        <div className="flex flex-col gap-4">
          {posts.map((post, index) => {
            return (
              <div key={post.id} className="" ref={index == posts.length - 3 ? ref : null}>
                <PostStruct post={post} expanded={false} setPosts={setPosts} />
              </div>
            );
          })}
          <button
            onClick={() => {
              if (fetchingMore) return;
              setFetchingMore(true);
              concatenateMorePosts();
            }}
            className="rd-block h-16 font-semibold flex flex-row justify-center items-center cursor-pointer"
          >
            {fetchingMore ? "Fetching..." : endOfPosts ? "No more posts :(" : "Click here to fetch more posts!"}
          </button>
        </div>
      )}
    </div>
  );
}

/*
  const scrollTop = scrollElement.scrollTop;
      const scrollHeight = scrollElement.scrollHeight;
      const clientHeight = scrollElement.clientHeight;
      
      // Check if we're near the bottom
      const nearBottom = scrollTop + clientHeight + threshold >= scrollHeight;
      
      */
