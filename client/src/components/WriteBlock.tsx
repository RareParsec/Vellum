import customAxios from "@/config/axios";
import { X } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { Rnd } from "react-rnd";

function WriteBlock({
  text,
  setText,
  setWritingToId,
  writingToId,
  replyingToPost = false,
}: {
  text: string;
  setText: (state: string) => void;
  setWritingToId: (id: string | null) => void;
  writingToId: string | null;
  replyingToPost?: boolean;
}) {
  const handleReply = async () => {
    try {
      const res = await customAxios.post("/comment/create", {
        type: replyingToPost ? "POST" : "COMMENT",
        targetId: writingToId,
        content: text,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <Rnd
      default={{
        x: window.innerWidth / 2 - 300, // Center horizontally (half screen width minus half component width)
        y: window.innerHeight - 320,
        width: 600,
        height: 300,
      }}
      minHeight={200}
      minWidth={320}
      dragHandleClassName="handle"
      bounds={"window"}
    >
      <div className="w-full h-full flex flex-col rounded-md border border-beaver">
        <div className="w-full flex flex-row justify-between handle border-b border-gentleBlueGray bg-isabelline rounded-t-md items-center">
          <div className="flex flex-row">
            <div
              className="px-2 py-[4px] flex flex-row items-end hover:cursor-pointer"
              onClick={() => {
                console.log("close");
                setWritingToId(null);
              }}
            >
              <X color="var(--color-deepMocha)" size={18} />
            </div>
            {/* <Link href={"https://www.markdownguide.org/cheat-sheet/"} className="text-[12px] ml-3">
                learn markdown
              </Link> */}
          </div>
          <button className="font-semibold px-2 mr-1 py-[4px]" onClick={handleReply}>
            Reply
          </button>
        </div>
        <textarea
          className="flex-grow resize-none rounded-b-md p-2 bg-isabelline text-sm outline-none"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </Rnd>
  );
}

export default WriteBlock;
