"use client";
import { ArrowBendUpLeft, Certificate, DotsThreeOutline, Share, TrashSimple } from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";
import customAxios from "@/config/axios";
import { auth } from "@/config/firebase";
import AwardModal from "./modals/AwardModal";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/zustand/userStore";

function CommentStruct({
  comment,
  allowReply = true,
  isReplyingTo = false,
  setWritingToId,
  pushUserToRoute = false,
}: {
  comment: CommentType;
  allowReply?: boolean;
  isReplyingTo?: boolean;
  setWritingToId?: (id: string) => void;
  pushUserToRoute?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [awardModalOpen, setAwardModalOpen] = useState(false);

  const user = useUserStore((state) => state.user);

  const router = useRouter();

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleShare = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const toastId = toast.loading("Sharing comment...");
    try {
      await navigator.clipboard.writeText(`http://localhost:5000/post/${comment.post_id}?comment=${comment.id}`);
      toast.success("Comment link copied to clipboard", { id: toastId });
    } catch (error) {
      toast.error("Failed to copy comment link", { id: toastId });
    }
  };

  const handleAward = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setAwardModalOpen(true);
  };

  const handleSubscribe = () => {
    console.log("Subscribe clicked");
  };

  const handleReply = () => {
    if (!setWritingToId) return;
    setWritingToId(comment.id);
  };

  const deleteComment = async () => {
    const toastId = toast.loading("Deleting comment...");
    try {
      await customAxios.delete(`/comment/${comment.id}`);
      toast.success("Comment deleted successfully", { id: toastId });
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to delete comment";
      toast.error(Array.isArray(message) ? message[0] : message, { id: toastId });
    }
  };

  return (
    <div
      className={`rd-block rounded-bl-none ${pushUserToRoute ? "cursor-pointer" : "cursor-default"}`}
      onClick={() => pushUserToRoute && router.push(`/post/${comment.post_id}?comment=${comment.id}`)}
    >
      <div className="flex flex-row justify-between text-sm">
        <div className={`flex flex-row gap-2`}>
          <div
            className="font-semibold hover:cursor-pointer hover:underline"
            onClick={() => router.push(`/profile/${comment.user?.username}`)}
          >
            {comment.user?.username}
          </div>
          <div>{formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true }).replace(/^(about|over|almost)\s/, "")}</div>
        </div>
        <div className="relative flex">
          <button
            className={`${
              comment.user_id !== auth.currentUser?.uid && "hidden"
            } rd-block py-0 hover:bg-whisperBlush cursor-pointer rounded-sm ${menuOpen && "rounded-b-none bg-isabelline"}`}
            onClick={handleMenuClick}
          >
            <DotsThreeOutline size={22} color="var(--color-beaver)" />
          </button>

          {menuOpen && (
            <div className="absolute flex flex-col top-full left-0 rd-block bg-isabelline p-0 w-30 rounded-tl-none overflow-hidden border border-linen border-l-0 border-r-2 border-b-2">
              <button onClick={deleteComment}>
                <div className="flex flex-row flex-grow p-2 py-[7px] gap-2 hover:bg-whisperBlush cursor-pointer items-center">
                  <TrashSimple size={22} color="var(--color-beaver)" />
                  <div className="text-sm">delete</div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-2">
        <div className={`mt-2`}>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>{comment.content}</ReactMarkdown>
        </div>
      </div>
      <div className={`flex flex-row justify-between mt-2`}>
        <div className="flex flex-row gap-2">
          <button className="rd-block flex flex-row bg-isabelline cursor-pointer gap-2 ml-2 hover:bg-whisperBlush" onClick={handleShare}>
            <Share size={22} color="var(--color-beaver)" />
          </button>
          <button className="rd-block flex flex-row bg-isabelline cursor-pointer gap-2 hover:bg-whisperBlush" onClick={handleAward}>
            <Certificate size={22} color="var(--color-beaver)" />
            <div className="text-sm">award</div>
          </button>
        </div>
        <div className="flex flex-row gap-2">
          {/* <button className="rd-block flex flex-row bg-isabelline cursor-pointer gap-2 hover:bg-whisperBlush" onClick={handleSubscribe}>
            <ListHeart size={22} color="var(--color-beaver)" />
          </button> */}
          {allowReply && (
            <button
              className={`rd-block flex flex-row bg-isabelline cursor-pointer gap-2 ${
                isReplyingTo ? "bg-softSageGreen" : "hover:bg-whisperBlush"
              }`}
              onClick={() => {
                if (!user) return router.push("/auth");
                handleReply();
              }}
            >
              <div className={`${isReplyingTo ? "text-deepMocha" : "text-deepBeaver"}`}>
                <ArrowBendUpLeft size={22} />
              </div>
              <div className="text-sm">reply</div>
            </button>
          )}
        </div>
      </div>
      <AwardModal isOpen={awardModalOpen} setIsOpen={setAwardModalOpen} />
    </div>
  );
}
export default CommentStruct;
