"use client";
import customAxios from "@/config/axios";
import { TextB, TextItalic, TextStrikethrough, User } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [hashtagValue, setHashtagValue] = useState("");

  const [textAreaFocused, setTextAreaFocused] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [hashtags, setHashtags] = useState<string[]>([
    "numberone",
    "numbertwo",
    "numberthree",
    "numberfour",
    "numberfive",
    "numbersix",
    "numberseven",
    "numbereight",
    "numbernine",
    "numberten",
  ]);

  const handleStyling = (style: string) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Insert `****` at the cursor position
      const before = body.slice(0, start);
      const after = body.slice(end);

      const markup = style === "bold" ? "****" : style === "italic" ? "**" : "~~~~";

      const updatedText = `${before}${markup}${after}`;
      setBody(updatedText);

      const cursorPosition = start + markup.length / 2;
      setTimeout(() => {
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
      }, 0);
    }
  };

  const handlePost = async () => {
    const toastId = toast.loading("Creating post...");

    if (title.length < 8) return toast.error("Title must be at least 8 characters long", { id: toastId });

    if (!body) return toast.error("Please add a body to your post", { id: toastId });

    if (hashtags.length === 0) return toast.error("Please add at least one hashtag", { id: toastId });

    try {
      const res = await customAxios.post("/post/create", {
        title,
        body,
        hashtags,
      });

      if (res.status === 201) {
        toast.success("Post created successfully!", { id: toastId });
      } else {
        toast.error("Failed to create post", { id: toastId });
      }
    } catch (error: any) {
      const { response } = error;

      const message = response?.data?.message || "Failed to create post";

      toast.error(Array.isArray(message) ? message[0] : message, { id: toastId });
    }
  };

  return (
    <div className="w-[500px] h-full mb-[20%] mt-5 rd-block flex flex-col p-2 pb-0">
      <div className="flex flex-col gap-2 px-2 pt-2 flex-grow ">
        <input
          placeholder="title..."
          className="font-semibold text-lg outline-none"
          value={title}
          onChange={(e) => {
            if (e.target.value.length > 50) return;
            setTitle(e.target.value);
          }}
        />
        <textarea
          ref={textareaRef}
          placeholder="title..."
          className="text-sm h-full resize-none outline-none"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onFocus={() => setTextAreaFocused(true)}
          onBlur={() => setTextAreaFocused(false)}
        />
      </div>
      <div className="rd-block bg-isabelline mb-2 p-[2px]">
        <div className="flex flex-row gap-x-5 gap-y-1 px-2 py-1 text-[13px] font-light flex-wrap">
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
              <div className="text-[10px] font-bold">#</div>
              <div>{hashtag}</div>
            </button>
          ))}
          <div className="flex flex-row gap-1 items-center flex-grow">
            <input
              type="text"
              placeholder="add another..."
              className="text-[12px] outline-none w-full"
              value={hashtagValue}
              onChange={(e) => {
                const value = e.target.value.replace(/\s/g, "");
                if (value.length > 12) return;
                setHashtagValue(value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setHashtags((prev) => [...prev, hashtagValue]);
                  setHashtagValue("");
                }
              }}
              onBlur={(e) => {
                const value = e.target.value.replace(/\s/g, "");
                if (value.length > 12) return;
                setHashtags((prev) => [...prev, hashtagValue]);
                setHashtagValue("");
              }}
            />
          </div>
        </div>
        <div className="flex flex-row mt-1 justify-between">
          <div className="flex flex-row ml-1 items-center">
            <button
              className="p-1 rd-block bg-isabelline rounded-sm hover:bg-linen cursor-pointer"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                handleStyling("bold");
              }}
              disabled={!textAreaFocused}
            >
              <TextB size={17} color="var(--color-deepBeaver)" />
            </button>
            <button
              className="p-1 rd-block bg-isabelline rounded-sm hover:bg-linen cursor-pointer"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                handleStyling("italic");
              }}
              disabled={!textAreaFocused}
            >
              <TextItalic size={17} color="var(--color-deepBeaver)" />
            </button>
            <button
              className="p-1 rd-block bg-isabelline rounded-sm hover:bg-linen cursor-pointer"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                handleStyling("strikethrough");
              }}
              disabled={!textAreaFocused}
            >
              <TextStrikethrough size={17} color="var(--color-deepBeaver)" />
            </button>
            <div className=" text-[12px] font-extralight ml-1 mt-[2px]">
              <p>Markdown supported!</p>
            </div>
          </div>
          <button className="px-3 py-1 mr-2 rd-block bg-isabelline hover:bg-linen cursor-pointer" onClick={handlePost}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
