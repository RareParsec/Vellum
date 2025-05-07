"use client";
import PostStruct from "@/components/PostStruct";
import Search from "@/components/Search";
import customAxios from "@/config/axios";
import { useRouteScrollStore } from "@/zustand/routeScrollStore";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";

function SearchPage() {
  const searchParams = useSearchParams();

  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState(true);

  const triggerScroll = useRouteScrollStore((state) => state.triggerScroll);

  useEffect(() => {
    console.log("search params", searchParams.get("q"));
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

    fetchPosts();
  }, [searchParams]);

  useEffect(() => {
    triggerScroll();
  }, [posts]);

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

export default SearchPage;
