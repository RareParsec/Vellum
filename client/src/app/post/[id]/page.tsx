"use client";

import CommentStruct from "@/components/CommentStruct";
import PostStruct from "@/components/PostStruct";
import WriteBlock from "@/components/WriteBlock";
import customAxios from "@/config/axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Post() {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);

  const [text, setText] = useState<string>("");

  const [writingToId, setWritingToId] = useState<string | null>(null);

  const [showWritingBlock, setShowWritingBlock] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const toastId = toast.loading("Loading post...");

      try {
        const res = await customAxios.get(`/post/${id}`);

        if (res.status !== 200) {
          toast.error("Error loading post", { id: toastId });
          return;
        }

        // console.log(res.data);
        res.data!.comments = [
          {
            id: "1",
            user_id: "1",
            post_id: "1",
            parent_comment_id: null,
            content: "This is a comment",
            timestamp: new Date().toISOString(),
          },
          {
            id: "2",
            user_id: "2",
            post_id: "1",
            parent_comment_id: null,
            content: "This is another comment",
            timestamp: new Date().toISOString(),
          },
          {
            id: "3",
            user_id: "1",
            post_id: "1",
            parent_comment_id: "2",
            content: "This is a reply to comment 2",
            timestamp: new Date().toISOString(),
          },
          {
            id: "4",
            user_id: "2",
            post_id: "1",
            parent_comment_id: "3",
            content: "This is a reply to comment 3",
            timestamp: new Date().toISOString(),
          },
          {
            id: "5",
            user_id: "1",
            post_id: "1",
            parent_comment_id: "4",
            content: "This is a reply to comment 4",
            timestamp: new Date().toISOString(),
          },
          {
            id: "6",
            user_id: "2",
            post_id: "1",
            parent_comment_id: "5",
            content: "This is a reply to comment 5",
            timestamp: new Date().toISOString(),
          },
          {
            id: "7",
            user_id: "1",
            post_id: "1",
            parent_comment_id: "6",
            content: "This is a reply to comment 6",
            timestamp: new Date().toISOString(),
          },
          {
            id: "8",
            user_id: "2",
            post_id: "1",
            parent_comment_id: null,
            content: "This is a comment",
            timestamp: new Date().toISOString(),
          },
        ];

        setPost(res.data);
        toast.success("Post loaded successfully", { id: toastId });
      } catch (error: any) {
        const { response } = error;

        const message = response?.data?.message || "Failed to load post";

        toast.error(Array.isArray(message) ? message[0] : message, { id: toastId });
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    if (writingToId == null) {
      setShowWritingBlock(false);
    } else {
      setShowWritingBlock(true);
    }
  }, [writingToId]);

  if (!post) {
    return (
      <div className="flex flex-col flex-grow w-[700px] mt-5 items-center mb-52">
        <div className="rd-block">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow w-[700px] mt-5 items-center mb-52">
      <PostStruct post={post} />
      <div
        className={`w-[90%] rd-block mt-4 py-2 hover:cursor-text ${writingToId == post.id && "bg-softSageGreen"}`}
        onClick={() => {
          setWritingToId(post.id);
        }}
      >
        Write a comment...
      </div>
      <div className="w-full mt-7 flex flex-col gap-5">
        {post?.comments.map((comment) => {
          return (
            <div key={comment.id}>
              <CommentStruct comment={comment} isReplyingTo={writingToId === comment.id} setWritingToId={setWritingToId} />
            </div>
          );
        }) || ""}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="pointer-events-auto">
          {showWritingBlock && (
            <WriteBlock
              text={text}
              setText={setText}
              setWritingToId={setWritingToId}
              writingToId={writingToId}
              replyingToPost={writingToId == post.id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
