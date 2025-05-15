"use client";
import { useEffect, useRef, useState } from "react";
import customAxios from "@/config/axios";
import PostStruct from "@/components/PostStruct";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouteScrollStore } from "@/zustand/routeScrollStore";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";
import { useInView } from "react-intersection-observer";
import { globalScrollRef } from "@/components/AppShell";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const getStoredPosts = useStoredPostsStore((state) => state.getPosts);
  const setStoredPosts = useStoredPostsStore((state) => state.setPosts);

  const triggerScroll = useRouteScrollStore((state) => state.triggerScroll);

  const { ref, inView } = useInView({ threshold: 0.1 });
  const [loading, setLoading] = useState(true);
  const [fetchingMore, setFetchingMore] = useState(false);

  const pathname = usePathname();

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

  const concatenateMorePosts = async () => {
    const res = await fetchPosts();
    const currentPostIds = posts.map((post) => post.id);
    const newPosts = res.filter((post: Post) => !currentPostIds.includes(post.id));
    if (newPosts.length === 0 && res) {
      setPosts((prev) => [...prev, ...res]);
    } else {
      setPosts((prev) => [...prev, ...newPosts]);
    }
    setFetchingMore(false);
  };

  useEffect(() => {
    if (inView) {
      console.log("fetching more posts");
      if (fetchingMore) return;
      setFetchingMore(true);
      concatenateMorePosts();
    }
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setStoredPosts(pathname, posts);
      // console.log("storing posts", posts);
    }, 100);

    triggerScroll();
  }, [posts]);

  useEffect(() => {
    const storedPosts = getStoredPosts(pathname);

    if (storedPosts && storedPosts.length > 0) {
      setPosts(storedPosts);
      setLoading(false);
    } else {
      refreshFeed();
    }

    window.addEventListener("beforeunload", (e) => {
      console.log("unloading");
    });

    return () => {
      console.log("unmounting" + globalScrollRef.current?.scrollTop);
    };
  }, []);

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("feed-scroll", String("deoido"));
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
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
          <div key={post.id} className="" ref={index == posts.length - 3 ? ref : null}>
            <PostStruct post={post} expanded={false} />
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
        {fetchingMore ? "Fetching..." : "Click here to fetch more posts!"}
      </button>
    </div>
  );
}
