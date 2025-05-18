"use client";
import { globalScrollRef } from "@/components/AppShell";
import PostStruct from "@/components/PostStruct";
import customAxios from "@/config/axios";
import errorHandler from "@/utils/errorHandler";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

function SearchClient() {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);

  const getStoredPosts = useStoredPostsStore((state) => state.getPosts);
  const setStoredPosts = useStoredPostsStore((state) => state.setPosts);

  const [posts, setPosts] = useState<Post[]>(getStoredPosts(usePathname() + searchParams.get("q")) || []);

  const pathname = usePathname();

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await customAxios.get(`/post/search?q=${searchParams.get("q")}&hashtags=${searchParams.get("hashtags")}`);

      if (res.data.length === 0) {
        return setPosts([]);
      }

      setPosts(res.data);
    } catch (error: any) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedPosts = getStoredPosts(pathname + searchParams.get("q"));

    if (storedPosts && storedPosts.length > 0) {
      setPosts(storedPosts);
      setLoading(false);
    } else {
      fetchPosts();
    }
  }, [searchParams]);

  useEffect(() => {
    setTimeout(() => {
      setStoredPosts(pathname + searchParams.get("q"), posts);
    }, 100);
  }, [posts]);

  useEffect(() => {
    if (!posts || posts.length === 0) return;
    console.log(posts.length, sessionStorage.getItem("scroll-" + pathname));
    globalScrollRef.current?.scrollTo({
      top: sessionStorage.getItem("scroll-" + pathname) ? parseInt(sessionStorage.getItem("scroll-" + pathname) || "0") : undefined,
    });
  }, []);

  return (
    <div className="defined-w min-w-0 flex flex-col gap-4 h-fit">
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
            <PostStruct post={post} expanded={false} setPosts={setPosts} />
          </div>
        );
      })}
    </div>
  );
}

function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchClient />
    </Suspense>
  );
}

export default SearchPage;
