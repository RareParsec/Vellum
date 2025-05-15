"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CommentStruct from "@/components/CommentStruct";
import PostStruct from "@/components/PostStruct";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";
import { useRouteScrollStore } from "@/zustand/routeScrollStore";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import customAxios from "@/config/axios";
import toast from "react-hot-toast";
import { useUserStore } from "@/zustand/userStore";
import { auth } from "@/config/firebase";

enum Tabs {
  Posts = "Posts",
  Comments = "Comments",
  Subscribed = "Subscribed",
}

function Profile() {
  const [active, setActive] = useState(Tabs.Posts);

  const [items, setItems] = useState<Post[] | CommentType[] | null>(null);

  const [loading, setLoading] = useState(true);

  const getStoredPosts = useStoredPostsStore((state) => state.getPosts);
  const setStoredPosts = useStoredPostsStore((state) => state.setPosts);
  const clearStoredPosts = useStoredPostsStore((state) => state.clearPosts);

  const triggerScroll = useRouteScrollStore((state) => state.triggerScroll);

  const setRouteScroll = useRouteScrollStore((state) => state.setRouteScroll);

  const user = useUserStore((state) => state.user);

  const pathname = usePathname();

  const params = useParams();

  const isInitialRender = useRef(true);

  const router = useRouter();

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const res = await customAxios.get("/post/user/" + params?.username);
      const data = res.data;
      setItems(data);
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to load post";
      toast.error(Array.isArray(message) ? message[0] : message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscribedPosts = async () => {
    setLoading(true);

    try {
      const res = await customAxios.get("/post/user/subscribed/" + params?.username);
      const data = res.data;
      setItems(data);
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to load post";
      toast.error(Array.isArray(message) ? message[0] : message);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    setLoading(true);

    try {
      const res = await customAxios.get("/comment/user/" + params?.username);
      const data = res.data;
      setItems(data);
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to load post";
      toast.error(Array.isArray(message) ? message[0] : message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (items == null) return;

    setTimeout(() => {
      setStoredPosts(pathname + "/" + active, items as Post[]);
    }, 100);

    if (isInitialRender.current && !loading) {
      triggerScroll();
      isInitialRender.current = false;
    }
  }, [items]);

  useEffect(() => {
    const storedPosts = getStoredPosts(pathname + "/" + active);

    if (storedPosts && storedPosts.length > 0) {
      console.log("stored posts");
      setItems(() => storedPosts);
      setLoading(false);
    } else if (active === Tabs.Posts) {
      console.log("abc");
      fetchPosts();
    } else if (active === Tabs.Comments) {
      fetchComments();
    } else if (active === Tabs.Subscribed) {
      console.log("abc");
      fetchSubscribedPosts();
    }
  }, [active]);

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <div className="defined-w flex flex-col">
      <div className="rd-block mt-2">
        <div>
          <h1 className="text-2xl font-bold">{user?.username}</h1>
          {/* <p className="">quote</p> */}
        </div>

        <div className="mt-6 flex flex-row gap-4 text-sm">
          <div>joined: {user?.timestamp.toString().split("T")[0]}</div>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-4">
        <motion.div className="relative rd-block flex justify-between text-sm font-semibold px-3">
          {[
            { label: "Posts", tab: Tabs.Posts },
            { label: "Comments", tab: Tabs.Comments },
            { label: "Subscribed", tab: Tabs.Subscribed },
          ].map(({ label, tab }) => (
            <button
              key={label}
              onClick={() => {
                if (active === tab) return;
                setItems(null);
                setActive(tab);
                clearStoredPosts(pathname + "/" + Tabs.Comments);
                clearStoredPosts(pathname + "/" + Tabs.Posts);
                clearStoredPosts(pathname + "/" + Tabs.Subscribed);
              }}
              disabled={loading}
              className={`relative px-12 py-[6px] rounded-md cursor-pointer ${active === tab && "font-bold"}`}
            >
              {active === tab && (
                <motion.div
                  layoutId="profileTabs"
                  className="absolute inset-0 bg-isabelline rounded-lg z-0"
                  transition={{ duration: 0.2 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </motion.div>
        {!items && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-md font-semibold">loading...</div>
            <p className="text-sm text-zinc-600">please wait while we load your profile.</p>
          </div>
        )}

        {items && (
          <>
            {items.length === 0 && !loading && (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-md font-semibold">no items found.</div>
              </div>
            )}
            {items.map((item, index) => {
              // if(index > 3) {return;}

              return (
                <div key={item.id} className="">
                  {active === Tabs.Posts || active === Tabs.Subscribed ? (
                    <PostStruct post={item as Post} expanded={false} />
                  ) : (
                    active === Tabs.Comments && <CommentStruct comment={item as CommentType} allowReply={false} />
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
