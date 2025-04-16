"use client";
import { Certificate, DotsThreeOutline, ListHeart, Share } from "@phosphor-icons/react";
import React from "react";

function PostStruct({ post, expanded = true }: { post: Post; expanded?: boolean }) {
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

  return (
    <div className="rd-block">
      <div className="flex flex-row justify-between text-sm">
        <div className={`flex flex-row ${expanded ? "gap-2" : "flex-grow justify-between"}`}>
          <div className="font-semibold">Azolight_</div>
          <div>4d ago</div>
        </div>
        {expanded && (
          <button className="rd-block py-0 hover:bg-whisperBlush cursor-pointer" onClick={handleMenuClick}>
            <DotsThreeOutline size={22} color="var(--color-beaver)" />
          </button>
        )}
      </div>
      <div className="mt-2">
        <div className="font-bold text-lg">{post.title}</div>
        <div className={`mt-2 line-clamp-[${expanded ? 0 : 6}]`}>{post.body}</div>
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

        <button className="rd-block flex flex-row bg-isabelline cursor-pointer gap-2 hover:bg-whisperBlush" onClick={handleSubscribe}>
          <ListHeart size={22} color="var(--color-beaver)" />
          <div className="text-sm">subscribe</div>
        </button>
      </div>
    </div>
  );
}

export default PostStruct;
