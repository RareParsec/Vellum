"use client";
import { Certificate, DotsThreeOutline, ListHeart, Share } from "@phosphor-icons/react";
import React from "react";

function Post({ expanded = true }: { expanded?: boolean }) {
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
        <div className="font-bold text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quaerat error sed voluptate ipsa earum?
        </div>
        <div className={`mt-2 line-clamp-[${expanded ? 0 : 6}]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quasi dolores, mollitia alias quis ipsum veniam nostrum aspernatur
          ut perspiciatis maiores, a saepe illum obcaecati maxime excepturi deleniti. Adipisci aut architecto exercitationem delectus neque
          sint dolor iste assumenda quibusdam impedit, corporis consectetur repellat quisquam aliquam tempora quas ad saepe? A incidunt
          iusto ipsam asperiores neque, accusantium porro soluta id repellat illo officiis quibusdam dolorum rem debitis omnis maxime sunt.
          Repellat odio incidunt quod cumque iure quas necessitatibus provident totam obcaecati.
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

        <button className="rd-block flex flex-row bg-isabelline cursor-pointer gap-2 hover:bg-whisperBlush" onClick={handleSubscribe}>
          <ListHeart size={22} color="var(--color-beaver)" />
          <div className="text-sm">subscribe</div>
        </button>
      </div>
    </div>
  );
}

export default Post;
