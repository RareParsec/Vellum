"use client";

import customAxios from "@/config/axios";
import { Certificate, DotsThreeOutline, Pencil, TrashSimple, Share, ListHeart } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { formatDistanceToNow } from "date-fns";
import { auth } from "@/config/firebase";
import { useUserStore } from "@/zustand/userStore";

function PostStruct({ post, expanded = true }: { post: Post; expanded?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(post.subscribed);

  const user = useUserStore((state) => state.user);

  const router = useRouter();

  const handleShare = () => {};

  const handleAward = () => {};

  const handleSubscribe = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    setSubscribed((prev) => !prev);
    await customAxios.post(`post/subscribe/${post.id}`).catch((error) => {
      const { response } = error;
      const message = response?.data?.message || "Failed to subscribe";
      toast.error(Array.isArray(message) ? message[0] : message);
      setSubscribed((prev) => !prev);
    });
  };

  const deletePost = async () => {
    const toastId = toast.loading("Deleting post...");
    try {
      await customAxios.delete(`/post/${post.id}`);

      toast.success("Post deleted successfully", { id: toastId });
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to delete post";
      toast.error(Array.isArray(message) ? message[0] : message, { id: toastId });
    }
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
          <div className="font-semibold">{post.user.username}</div>
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
      <div className={`flex flex-row ${expanded ? "justify-between" : "justify-end"} mt-2`}>
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
          className={`rd-block flex flex-row ${subscribed ? "bg-rose-100" : "bg-isabelline hover:bg-[#fffdfd]"} cursor-pointer gap-2 child`}
          onClick={
            user
              ? handleSubscribe
              : (e) => {
                  e.stopPropagation();
                  router.push("/auth/signup");
                }
          }
        >
          <ListHeart size={22} color="var(--color-beaver)" />
          <div className="text-sm">subscribe</div>
        </button>
      </div>
    </div>
  );
}

export default PostStruct;
