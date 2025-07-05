import customAxios from "@/config/axios";
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { X, PaperPlaneRight } from "@phosphor-icons/react";

function InlineReplyBox({
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus the textarea when component mounts
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

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
    if (!text.trim()) return;

    const toastId = toast.loading("Creating comment...");
    setLoading(true);

    try {
      const replyingToPost = post.id === writingToId;

      const res = await customAxios.post("/comment/create", {
        type: replyingToPost ? "POST" : "COMMENT",
        targetId: writingToId,
        content: text,
      });

      console.log(res.data);

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleReply();
    }
  };

  return (
    <div className="w-full mt-3 mb-4 bg-isabelline border border-antiqueWhite rounded-md">
      <div className="flex flex-col">
        <textarea
          ref={textareaRef}
          className="w-full p-3 bg-transparent resize-none outline-none text-sm placeholder-beaver/60 min-h-[80px] max-h-[200px]"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={3}
        />

        <div className="flex justify-between items-center px-3 py-2 border-t border-antiqueWhite/50 bg-toastedLinen/30">
          <div className="text-xs text-beaver/60">{/* Cmd/Ctrl + Enter to submit */}⌘ + Enter to submit</div>

          <div className="flex gap-2">
            <button
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-beaver hover:text-deepBeaver transition-colors"
              onClick={() => {
                setText("");
                setWritingToId(null);
              }}
              disabled={loading}
            >
              <X size={14} />
              Cancel
            </button>

            <button
              className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded transition-colors ${
                text.trim() && !loading ? "bg-deepBeaver text-white hover:bg-deepMocha" : "bg-beaver/30 text-beaver/60 cursor-not-allowed"
              }`}
              onClick={handleReply}
              disabled={loading || !text.trim()}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <PaperPlaneRight size={14} />
              )}
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InlineReplyBox;
