import customAxios from "@/config/axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Rnd } from "react-rnd";
import { DotsSix, X, Notches } from "@phosphor-icons/react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  function getCommentsById(
    comments: CommentType[],
    targetId: string,
    newComment: CommentType
  ): CommentType[] {
    return comments.map((comment) => {
      if (comment.id === targetId) {
        return { ...comment, comments: [...comment.comments, newComment] };
      }

      if (comment.comments) {
        return {
          ...comment,
          comments: getCommentsById(comment.comments, targetId, newComment),
        };
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
          const updatedComments = getCommentsById(
            prev.comments,
            writingToId!,
            res.data
          );

          updateViewingComment({ comments: updatedComments });

          return { ...prev, comments: updatedComments };
        }
      });
    } catch (error: any) {
      const { response } = error;
      const message = response?.data?.message || "Failed to create comment";

      toast.error(Array.isArray(message) ? message[0] : message, {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  if (isMobile) {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl"
        style={{ boxShadow: "0 -10px 50px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="bg-isabelline rounded-t-2xl p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handleReply}
              disabled={loading || !text.trim()}
              className="font-bold text-deepBeaver disabled:text-beaver/50"
            >
              {loading ? "..." : "Reply"}
            </button>
            <button
              onClick={() => setWritingToId(null)}
              className="text-deepBeaver"
            >
              <X weight="bold" size={20} />
            </button>
          </div>
          <textarea
            className="w-full h-32 resize-none bg-transparent text-base outline-none placeholder-beaver/60 overflow-y-auto"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
        </div>
      </div>
    );
  }

  return (
    <Rnd
      resizeHandleComponent={{
        bottomRight: <Notches size={15} />,
      }}
      default={{
        x: window.innerWidth / 2 - 300,
        y: window.innerHeight - 320,
        width: 600,
        height: 300,
      }}
      minHeight={200}
      minWidth={320}
      dragHandleClassName="handle"
      bounds={"window"}
    >
      <div className="w-full h-full flex flex-col rounded-md border-4 border-antiqueWhite">
        <div className="w-full flex flex-row justify-between handle border-b-2 border-antiqueWhite bg-toastedLinen rounded-t-md items-center cursor-grab">
          <div className="flex flex-row">
            <div
              className="px-2 py-[4px] flex flex-row items-end hover:cursor-pointer"
              onClick={() => {
                setWritingToId(null);
              }}
            >
              <div className="text-deepBeaver">
                <X weight="bold" size={18} />
              </div>
            </div>
          </div>
          <div className="text-beaver/70 flex flex-row cursor-grab mr-auto ml-2 gap">
            <div className="mr-[-3px]">
              <DotsSix size={32} />
            </div>
            <div className="ml-[-3px]">
              <DotsSix size={32} />
            </div>
          </div>
          <button
            className="font-semibold px-2 mr-1 py-[4px] cursor-pointer text-deepBeaver hover:text-deepMocha"
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
