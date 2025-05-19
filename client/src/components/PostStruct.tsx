"use client";

import customAxios from "@/config/axios";
import { Certificate, DotsThreeOutline, TrashSimple, Share, ListHeart } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { formatDistanceToNow } from "date-fns";
import { auth } from "@/config/firebase";
import { useUserStore } from "@/zustand/userStore";
import { useStoredPostsStore } from "@/zustand/storedPostsStore";
import errorHandler from "@/utils/errorHandler";
import AwardModal from "./modals/AwardModal";

function PostStruct({
  post,
  setPosts,
  expanded = true,
}: {
  post: Post;
  setPosts?: React.Dispatch<React.SetStateAction<Post[]>>;
  expanded?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [awardModalOpen, setAwardModalOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(post.SubscribedPost?.length > 0);
  const [subscribedOnUI, setSubscribedOnUI] = useState(post.SubscribedPost?.length > 0);

  const changeSubscribed = useStoredPostsStore((state) => state.changeSubscribed);
  const clearStoredPosts = useStoredPostsStore((state) => state.clearPosts);

  const user = useUserStore((state) => state.user);

  const router = useRouter();

  const handleShare = () => {
    const toastId = toast.loading("Sharing post...");
    try {
      navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_API_URL}/post/${post.id}`);
      toast.success("Post link copied to clipboard", { id: toastId });
    } catch (error) {
      toast.error("Failed to copy post link", { id: toastId });
    }
  };

  const handleAward = () => {
    setAwardModalOpen(true);
  };

  const handleSubscribe = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    setSubscribedOnUI((prev) => !prev);
    await customAxios
      .post(`post/subscribe/${post.id}`)
      .then((res) => {
        changeSubscribed(post.id, res.data);

        if (!setPosts) return;
        setPosts((prev) => {
          return prev.map((p) => {
            if (p.id === post.id) {
              return { ...p, SubscribedPost: res.data };
            }
            return p;
          });
        });
      })
      .catch((error) => {
        console.log(error);
        setSubscribedOnUI((prev) => !prev);
        errorHandler(error);
      });
  };

  const deletePost = async () => {
    const toastId = toast.loading("Deleting post...");
    try {
      await customAxios.delete(`/post/${post.id}`);

      toast.success("Post deleted successfully", { id: toastId });

      clearStoredPosts("/");
      sessionStorage.removeItem("scroll-/");
      router.push("/");
    } catch (error: any) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    setSubscribed(post.SubscribedPost?.length > 0);
    setSubscribedOnUI(post.SubscribedPost?.length > 0);
  }, [post.SubscribedPost]);

  const RenderHashtags = () => {
    return (
      <div className="flex flex-row flex-grow flex-wrap gap-x-2 text-[13px]">
        {post.hashtags.map((hashtag) => {
          return (
            <div
              key={hashtag.value}
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/search?q=&hashtags=${hashtag.value}`);
              }}
              className="no-underline text-[#8e7866] hover:text-deepMocha"
            >
              <div className="font-semibold hover:cursor-pointer flex flex-row">
                #<div className="ml-[1px]">{hashtag.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`rd-block w-full ${!expanded && "cursor-pointer hover:bg-toastedLinen parent"} ${
        expanded ? "select-text" : "select-none"
      }`}
      onClick={() => {
        if (!expanded) router.push(`/post/${post.id}`);
      }}
    >
      <div className="flex flex-row justify-between text-sm">
        <div className={`flex flex-row ${expanded ? "gap-2" : "flex-grow justify-between"}`}>
          <div className="font-semibold hover:cursor-pointer hover:underline" onClick={() => router.push(`/profile/${post.user.username}`)}>
            {post.user.username}
          </div>
          <div>{formatDistanceToNow(new Date(post.timestamp), { addSuffix: true }).replace(/^(about|over|almost)\s/, "")}</div>
        </div>
        {expanded && (
          <div className="relative flex">
            <button
              className={`${
                post.user_id !== auth.currentUser?.uid && "hidden"
              } rd-block py-0 hover:bg-whisperBlush cursor-pointer rounded-sm ${menuOpen && "rounded-b-none bg-isabelline"}`}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <DotsThreeOutline size={22} color="var(--color-beaver)" />
            </button>

            {menuOpen && (
              <div className="absolute flex flex-col top-full left-0 rd-block bg-isabelline p-0 w-30 rounded-tl-none overflow-hidden border border-linen border-l-0 border-r-2 border-b-2">
                {/* <button>
                  <div className="flex flex-row flex-grow p-2 py-[7px] gap-2 pt-[8px] hover:bg-whisperBlush cursor-pointer items-center">
                    <Pencil size={22} color="var(--color-beaver)" />
                    <div className="text-sm">edit</div>
                  </div>
                </button> */}
                <button onClick={deletePost}>
                  <div className="flex flex-row flex-grow p-2 py-[7px] gap-2 hover:bg-whisperBlush cursor-pointer items-center">
                    <TrashSimple size={22} color="var(--color-beaver)" />
                    <div className="text-sm">delete</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-2">
        <div className="font-bold text-xl">{post.title}</div>
        <div className={`mt-2 break-words ${expanded ? "" : "max-h-40 overflow-hidden line-clamp-5 "}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>{post.body}</ReactMarkdown>
        </div>
      </div>
      {expanded && post.hashtags?.length > 0 && <div className="mt-5">{RenderHashtags()}</div>}
      <div className={`flex flex-row justify-between mt-4 items-end`}>
        {!expanded && post.hashtags?.length > 0 ? RenderHashtags() : !expanded && <div></div>}
        {expanded && (
          <div className="flex flex-row gap-2">
            <button className="rd-block flex flex-row bg-isabelline cursor-pointer gap-2 ml-2 hover:bg-whisperBlush" onClick={handleShare}>
              <Share size={22} color="var(--color-beaver)" />
            </button>
            <button className="rd-block flex flex-row bg-isabelline cursor-pointer gap-2 hover:bg-whisperBlush" onClick={handleAward}>
              <Certificate size={22} color="var(--color-beaver)" />
              <div className="text-sm">award</div>
            </button>
          </div>
        )}

        <button
          className={`rd-block h-fit flex flex-row ${
            subscribedOnUI ? "bg-rose-100" : "bg-isabelline hover:bg-[#fffdfd]"
          } cursor-pointer gap-2 child`}
          onClick={
            user
              ? handleSubscribe
              : (e) => {
                  e.stopPropagation();
                  router.push("/auth");
                }
          }
        >
          <ListHeart size={22} color="var(--color-beaver)" />
          <div className="text-sm">subscribe</div>
        </button>
      </div>
      <AwardModal isOpen={awardModalOpen} setIsOpen={setAwardModalOpen} />
    </div>
  );
}

export default PostStruct;
