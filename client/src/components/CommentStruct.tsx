"use client";
import { ArrowBendUpLeft, Certificate, DotsThreeOutline, ListHeart, Share, TrashSimple } from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";
import customAxios from "@/config/axios";
import { auth } from "@/config/firebase";

function CommentStruct({
  comment,
  allowReply = true,
  isReplyingTo = false,
  setWritingToId,
}: {
  comment: CommentType;
  allowReply?: boolean;
  isReplyingTo?: boolean;
  setWritingToId?: (id: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleShare = () => {
    console.log("Share clicked");
  };

  const handleAward = () => {
    console.log("Award clicked");
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
    <div className="rd-block rounded-bl-none">
      <div className="flex flex-row justify-between text-sm">
        <div className={`flex flex-row gap-2`}>
          <div className="font-semibold">{comment.user.username}</div>
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
              onClick={handleReply}
            >
              <ArrowBendUpLeft size={22} color={isReplyingTo ? "black" : "var(--color-beaver)"} />
              <div className="text-sm">reply</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default CommentStruct;
