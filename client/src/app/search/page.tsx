"use client";
import PostStruct from "@/components/PostStruct";
import customAxios from "@/config/axios";
import { useRouteScrollStore } from "@/zustand/routeScrollStore";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

function SearchClient() {
  const searchParams = useSearchParams();

  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);

  const getStoredPosts = useStoredPostsStore((state) => state.getPosts);
  const setStoredPosts = useStoredPostsStore((state) => state.setPosts);

  const triggerScroll = useRouteScrollStore((state) => state.triggerScroll);

  const [allowTriggerScroll, setAllowTriggerScroll] = useState(true);

  const pathname = usePathname();

  const fetchPosts = async () => {
    try {
      const res = await customAxios.get(`/post/search?q=${searchParams.get("q")}`);

      if (res.data.length === 0) {
        return setPosts([]);
      }

      setPosts(res.data);
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to load posts";
      toast.error(Array.isArray(message) ? message[0] : message);

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setStoredPosts(pathname, posts);
    }, 100);

    if (!allowTriggerScroll || posts.length == 0) return;
    console.log("triggering scroll");
    triggerScroll();
    setAllowTriggerScroll(false);
  }, [posts]);

  useEffect(() => {
    const storedPosts = getStoredPosts(pathname);

    if (storedPosts && storedPosts.length > 0) {
      setPosts(storedPosts);
      setLoading(false);
    } else {
      fetchPosts();
    }
  }, [searchParams]);

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
            <PostStruct post={post} expanded={false} />
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
