"use client";
import customAxios from "@/config/axios";
import { useUserStore } from "@/zustand/userStore";
import { TextB, TextItalic, TextStrikethrough } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function Create() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [hashtagValue, setHashtagValue] = useState("");

  const [textAreaFocused, setTextAreaFocused] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const user = useUserStore((state) => state.user);

  const [hashtags, setHashtags] = useState<string[]>([]);

  const handlePost = async () => {
    const toastId = toast.loading("Creating post...");

    if (title.length < 8)
      return toast.error("Title must be at least 8 characters long", {
        id: toastId,
      });

    if (!body)
      return toast.error("Please add a body to your post", { id: toastId });

    if (hashtags.length === 0)
      return toast.error("Please add at least one hashtag", { id: toastId });

    try {
      const res = await customAxios.post("/post/create", {
        title,
        body,
        hashtags,
      });

      toast.success("Post created successfully!", { id: toastId });
      router.replace("/post/" + res.data.id);
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to create post";
      toast.error(Array.isArray(message) ? message[0] : message, {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    if (!user) {
      router.replace("/auth");
    }
  }, []);

  return (
    <div className="defined-w min-w-0 flex flex-col gap-4 h-fit rd-block p-2">
      <div className="flex flex-col gap-2 px-2 pt-2 flex-grow">
        <input
          placeholder="title..."
          className="font-semibold text-xl outline-none"
          value={title}
          onChange={(e) => {
            if (e.target.value.length > 50) return;
            setTitle(e.target.value);
          }}
        />
        <textarea
          ref={textareaRef}
          placeholder="title..."
          className="text-base h-full resize-none outline-none min-h-[50vh]"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onFocus={() => setTextAreaFocused(true)}
          onBlur={() => setTextAreaFocused(false)}
        />
      </div>
      <div className="rd-block !bg-linen mb-2 p-1">
        <div className="flex flex-row gap-x-6 gap-y-2 px-3 py-2 text-sm sm:text-[16px] font-light flex-wrap">
          {hashtags.map((hashtag) => (
            <button
              className="flex flex-row gap-1 items-center hover:line-through cursor-pointer"
              key={hashtag}
              onClick={() => {
                setHashtags((prev) => {
                  return prev.filter((h) => h !== hashtag);
                });
              }}
            >
              <div className="text-xs font-bold">#</div>
              <div>{hashtag}</div>
            </button>
          ))}
          <div className="flex flex-row gap-1 items-center flex-grow">
            <input
              type="text"
              placeholder="hashtag..."
              className="text-sm sm:text-[16px] outline-none w-full"
              value={hashtagValue}
              onChange={(e) => {
                const value = e.target.value.replace(/\s/g, "");
                if (value.length > 12) return;
                setHashtagValue(value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (hashtagValue.length < 1) return;
                  if (hashtags.includes(hashtagValue))
                    return setHashtagValue("");
                  setHashtags((prev) => [...prev, hashtagValue]);
                  setHashtagValue("");
                }
              }}
              onBlur={(e) => {
                const value = e.target.value.replace(/\s/g, "");
                if (value.length < 1) return;
                if (value.length > 12) return;
                if (hashtags.includes(hashtagValue)) return setHashtagValue("");
                setHashtags((prev) => [...prev, hashtagValue]);
                setHashtagValue("");
              }}
            />
          </div>
        </div>
        <div className="flex flex-row ml-2 px-1 justify-between">
          <div className="text-xs font-extralight mt-[2px]">
            <p>Markdown supported!</p>
          </div>
          <button
            className="px-4 mr-2 font-bold cursor-pointer text-base active-tap"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
