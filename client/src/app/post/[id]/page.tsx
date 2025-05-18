"use client";

import CommentStruct from "@/components/CommentStruct";
import PostStruct from "@/components/PostStruct";
import WriteBlock from "@/components/WriteBlock";
import customAxios from "@/config/axios";
import errorHandler from "@/utils/errorHandler";
import { useUserStore } from "@/zustand/userStore";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Post() {
  const params = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [text, setText] = useState<string>("");
  const [writingToId, setWritingToId] = useState<string | null>(null);
  const [showWritingBlock, setShowWritingBlock] = useState(false);
  const [viewingComment, setViewingComment] = useState<CommentType[]>();

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  const user = useUserStore((state) => state.user);

  function findCommentById(comments: CommentType[], id: string): CommentType | null {
    for (const comment of comments) {
      if (comment.id === id) return comment;
      const found = findCommentById(comment.comments, id);
      if (found) return found;
    }
    return null;
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await customAxios.get(`/post/${params.id}`);

        setPost(res.data);
      } catch (error: any) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [params.id]);

  useEffect(() => {
    if (writingToId == null) {
      setShowWritingBlock(false);
    } else {
      setShowWritingBlock(true);
    }
  }, [writingToId]);

  // useEffect(() => {
  //   if (!viewingComment) return;
  //   router.push(`/post/${id}?comment=${viewingComment[0].id}`);
  // }, [viewingComment]);

  useEffect(() => {
    const commentId = searchParams.get("comment");
    if (!commentId) {
      setViewingComment(undefined);
      return;
    }

    if (post?.comments) {
      const comment = findCommentById(post.comments, commentId);
      if (comment) {
        setViewingComment([comment]);
      } else {
        setViewingComment(undefined);
      }
    }
  }, [searchParams, post]);

  const DisplayComments = ({
    comments,
    depth = 5,
    recursionCount = 0,
  }: {
    comments: CommentType[];
    depth?: number;
    recursionCount?: number;
  }) => {
    recursionCount++;

    return (
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className={`flex flex-col ${
                  comment.parent_comment_id == null || comment.id == viewingComment?.[0].id ? "mb-8" : "ml-[15px]"
                }`}
              >
                <CommentStruct comment={comment} isReplyingTo={writingToId === comment.id} setWritingToId={setWritingToId} />
                {comment.comments.length !== 0 && (
                  <div className={`pt-5 ${true && "border-l-[4px] border-beaver/40 border-dotted"}`}>
                    {recursionCount > depth ? (
                      <button className="cursor-pointer">
                        <div
                          className="rd-block w-full text-sm font-semibold py-2 ml-[20px]"
                          onClick={() => {
                            router.push(`/post/${params.id}?comment=${comment.id}`);
                          }}
                        >
                          Load more comments...
                        </div>
                      </button>
                    ) : (
                      <DisplayComments comments={comment.comments} depth={depth++} recursionCount={recursionCount} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="defined-w min-w-0 flex flex-col gap-4 h-fit">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-center">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="defined-w min-w-0 flex flex-col gap-4 h-fit">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold text-center">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="defined-w min-w-0 flex flex-col gap-4 h-fit items-center">
      <PostStruct post={post} />
      <div
        className={`w-[90%] rd-block mt-4 py-2 hover:cursor-text ${writingToId == post.id && "bg-softSageGreen text-black"}`}
        onClick={() => {
          if (!user) return router.push("/auth");
          setWritingToId(post.id);
        }}
      >
        Write a comment...
      </div>
      {(viewingComment || post.comments.length > 0) && (
        <div className="w-full mt-7">
          <div className="w-full">
            <div
              className="text-sm cursor-pointer hover:underline ml-auto w-fit mr-1 mb-1 px-2"
              onClick={() => {
                router.push("/post/" + post?.id);
              }}
            >
              {searchParams.get("comment") ? "view all comments" : ""}
            </div>
          </div>
          <DisplayComments comments={viewingComment || post.comments} depth={2} />
        </div>
      )}
      {post.comments.length === 0 && <div className="font-semibold w-full text-center text-md mt-4">No comments yet!</div>}

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="pointer-events-auto">
          {showWritingBlock && (
            <WriteBlock
              text={text}
              setText={setText}
              setWritingToId={setWritingToId}
              writingToId={writingToId}
              post={post}
              setPost={setPost}
              viewingComment={viewingComment}
              setViewingComment={setViewingComment}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
