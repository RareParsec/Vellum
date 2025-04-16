"use client";
import { ArrowBendUpLeft, Certificate, DotsThreeOutline, ListHeart, Share } from "@phosphor-icons/react";
import React from "react";

function CommentStruct({
  comment,
  isReplyingTo = false,
  setWritingToId,
}: {
  comment: Comment;
  isReplyingTo: boolean;
  setWritingToId: (id: string) => void;
}) {
  const handleMenuClick = () => {
    console.log("Menu clicked");
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
    setWritingToId(comment.id);
  };

  return (
    <div className="rd-block">
      <div className="flex flex-row justify-between text-sm">
        <div className={`flex flex-row gap-2`}>
          <div className="font-semibold">Azolight_</div>
          <div>4d ago</div>
        </div>

        <button className="rd-block py-0 hover:bg-whisperBlush cursor-pointer" onClick={handleMenuClick}>
          <DotsThreeOutline size={22} color="var(--color-beaver)" />
        </button>
      </div>
      <div className="mt-2">
        <div className={`mt-2`}>{comment.content}</div>
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
          <button className="rd-block flex flex-row bg-isabelline cursor-pointer gap-2 hover:bg-whisperBlush" onClick={handleSubscribe}>
            <ListHeart size={22} color="var(--color-beaver)" />
          </button>

          <button
            className={`rd-block flex flex-row bg-isabelline cursor-pointer gap-2 ${
              isReplyingTo ? "bg-softSageGreen" : "hover:bg-whisperBlush"
            }`}
            onClick={handleReply}
          >
            <ArrowBendUpLeft size={22} color={isReplyingTo ? "black" : "var(--color-beaver)"} />
            <div className="text-sm">reply</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentStruct;
