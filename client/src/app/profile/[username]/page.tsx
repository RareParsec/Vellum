"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CommentStruct from "@/components/CommentStruct";
import PostStruct from "@/components/PostStruct";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";
import { notFound, useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import customAxios from "@/config/axios";
import toast from "react-hot-toast";
import errorHandler from "@/utils/errorHandler";

enum Tabs {
  Posts = "post",
  Comments = "comment",
  Subscribed = "subscribed",
}

function Profile() {
  const [loading, setLoading] = useState(true);

  const getStoredPosts = useStoredPostsStore((state) => state.getPosts);
  const setStoredPosts = useStoredPostsStore((state) => state.setPosts);
  const clearStoredPosts = useStoredPostsStore((state) => state.clearPosts);

  // const user = useUserStore((state) => state.user);

  const [userLoading, setUserLoading] = useState(true);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = useParams();

  const [username, setUsername] = useState(params?.username || "");
  const [user, setUser] = useState<any>(null);

  const [active, setActive] = useState(searchParams.get("tab") || Tabs.Posts);

  const [items, setItems] = useState<Post[] | CommentType[] | null>(getStoredPosts(pathname + "/" + active) || null);

  const isInitialRender = useRef(true);

  const router = useRouter();

  const fetchUserInfo = async () => {
    try {
      const res = await customAxios.get("/auth/user/" + username);
      const data = res.data;

      if (data) {
        setUser(data);
      } else {
        toast.error("User not found");
      }
    } catch (error) {
      errorHandler(error);
    } finally {
      setUserLoading(false);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const res = await customAxios.get("/post/user/" + params?.username);
      const data = res.data;
      setItems(data);
    } catch (error: any) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscribedPosts = async () => {
    setLoading(true);

    try {
      const res = await customAxios.get("/post/user/subscribed/" + params?.username);
      setItems(res.data);
    } catch (error: any) {
      errorHandler(error);
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
      errorHandler(error);
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
      isInitialRender.current = false;
    }
  }, [items]);

  useEffect(() => {
    if (!user) return;
    const storedPosts = getStoredPosts(pathname + "/" + active);

    if (storedPosts && storedPosts.length > 0) {
      setItems(() => storedPosts);
      setLoading(false);
    } else if (active === Tabs.Posts) {
      fetchPosts();
    } else if (active === Tabs.Comments) {
      fetchComments();
    } else if (active === Tabs.Subscribed) {
      fetchSubscribedPosts();
    }
  }, [active, user, userLoading]);

  useEffect(() => {
    if (!userLoading && !user) {
      notFound();
    }
  }, [userLoading]);

  useEffect(() => {
    if (searchParams.get("tab") !== active) {
      setActive(searchParams.get("tab") || Tabs.Posts);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchUserInfo();

    window.scrollTo({
      top: sessionStorage.getItem("scroll-" + pathname) ? parseInt(sessionStorage.getItem("scroll-" + pathname)!) : undefined,
    });
  }, []);

  if (!username) return notFound();

  return (
    <div className="defined-w flex flex-col">
      <div className="rd-block mt-2">
        <div>
          <h1 className="text-2xl font-bold">{userLoading ? "loading..." : user?.username}</h1>
        </div>

        <div className="mt-5 mb-1 flex flex-col gap-1 text-xs">
          {userLoading ? (
            "loading..."
          ) : (
            <>
              {user?.email && <div>{user?.email}</div>}
              {user && <div>joined: {user?.timestamp.toString().split("T")[0]}</div>}
            </>
          )}
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-4">
        <motion.div className="relative rd-block grid grid-cols-3 font-semibold px-3">
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
                clearStoredPosts(pathname + "/" + Tabs.Comments);
                clearStoredPosts(pathname + "/" + Tabs.Posts);
                clearStoredPosts(pathname + "/" + Tabs.Subscribed);
                router.replace(`/profile/${params?.username}?tab=${tab}`);
              }}
              disabled={loading}
              className={`relative py-[6px] rounded-md cursor-pointer text-sm ${active === tab && "font-bold"}`}
            >
              {active === tab && (
                <motion.div
                  layoutId="profileTabs"
                  className="absolute inset-0 bg-antiqueWhite rounded-lg z-0"
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
              <div className="flex flex-col items-center">
                <div className="font-bold text-sm">no items found.</div>
              </div>
            )}
            {items.map((item, index) => {
              // if(index > 3) {return;}

              return (
                <div key={item.id} className="">
                  {active === Tabs.Posts || active === Tabs.Subscribed ? (
                    <PostStruct post={item as Post} expanded={false} setPosts={setItems as React.Dispatch<React.SetStateAction<Post[]>>} />
                  ) : (
                    active === Tabs.Comments && <CommentStruct comment={item as CommentType} allowReply={false} pushUserToRoute={true} />
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
