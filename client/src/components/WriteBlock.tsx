import customAxios from "@/config/axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Rnd } from "react-rnd";
import { X } from "@phosphor-icons/react";

function WriteBlock({
  text,
  setText,
  setWritingToId,
  writingToId,
  post,
  setPost,
  viewingComment,
  setViewingComment,
}: {
  text: string;
  setText: (state: string) => void;
  setWritingToId: (id: string | null) => void;
  writingToId: string | null;
  post: Post;
  setPost: (state: Post | null | ((prev: Post | null) => Post | null)) => void;
  viewingComment: CommentType[] | undefined;
  setViewingComment: (state: CommentType[] | undefined) => void;
}) {
  const [loading, setLoading] = useState(false);

  function getCommentsById(comments: CommentType[], targetId: string, newComment: CommentType): CommentType[] {
    return comments.map((comment) => {
      if (comment.id === targetId) {
        return { ...comment, comments: [...comment.comments, newComment] };
      }

      if (comment.comments) {
        return { ...comment, comments: getCommentsById(comment.comments, targetId, newComment) };
      }

      return comment;
    });
  }

  function updateViewingComment({ comments }: { comments: CommentType[] }) {
    if (!viewingComment) return;

    comments.forEach((comment) => {
      if (comment.id == viewingComment[0].id) {
        setViewingComment([comment]);
      }

      if (comment.comments) {
        updateViewingComment({ comments: comment.comments });
      }
    });
  }

  const handleReply = async () => {
    const toastId = toast.loading("Creating comment...");
    setLoading(true);

    try {
      const replyingToPost = post.id === writingToId;

      const res = await customAxios.post("/comment/create", {
        type: replyingToPost ? "POST" : "COMMENT",
        targetId: writingToId,
        content: text,
      });

      toast.success("Comment created successfully", { id: toastId });
      setText("");
      setWritingToId(null);

      setPost((prev: Post | null) => {
        if (!prev) return prev;
        if (replyingToPost) {
          return { ...prev, comments: [...prev.comments, res.data] };
        } else {
          const updatedComments = getCommentsById(prev.comments, writingToId!, res.data);

          updateViewingComment({ comments: updatedComments });

          return { ...prev, comments: updatedComments };
        }
      });
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to create comment";

      toast.error(Array.isArray(message) ? message[0] : message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

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
                setWritingToId(null);
              }}
            >
              <X color="var(--color-deepMocha)" size={18} />
            </div>
            {/* <Link href={"https://www.markdownguide.org/cheat-sheet/"} className="text-[12px] ml-3">
                learn markdown
              </Link> */}
          </div>
          <button
            className="font-semibold px-2 mr-1 py-[4px] cursor-pointer hover:text-deepBeaver"
            onClick={handleReply}
            disabled={loading}
          >
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
