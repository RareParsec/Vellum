import {
  BadRequestException,
  HttpException,
  ImATeapotException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { Prisma } from 'prisma/app/generated/prisma/client';
import { CommentService } from 'src/comment/comment.service';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class PostService {
  constructor(
    private prisma: PrismaService,
    private readonly comment: CommentService,
  ) {}

  private async fetchPosts(
    user: DecodedIdToken,
    limit: number | undefined = undefined,
    cursor: string | null = null,
    search: string | null = null,
    hashtags: string[] | [] | null = null,
    fetchUnseen: boolean = false,
  ) {
    try {
      let seenPostsIds: string[] = [];
      if (user && fetchUnseen) {
        const seenPosts = await this.prisma.postView.findMany({
          where: {
            user_id: user.uid,
          },
          select: {
            post_id: true,
          },
        });

        seenPostsIds = seenPosts.map((post) => post.post_id);
      }

      const posts = await this.prisma.post.findMany({
        where:
          search || (hashtags && hashtags.length > 0)
            ? {
                OR: [
                  // Title contains search term
                  ...(search ? [{ title: { contains: search } }] : []),
                  // Body contains search term
                  ...(search ? [{ body: { contains: search } }] : []),
                  // Has any of the specified hashtags
                  ...(hashtags && hashtags.length > 0
                    ? [
                        {
                          hashtags: {
                            some: {
                              value: { in: hashtags },
                            },
                          },
                        },
                      ]
                    : []),
                ],
              }
            : fetchUnseen
              ? { id: { notIn: seenPostsIds } }
              : undefined,
        include: {
          user: true,
          hashtags: true,
          SubscribedPost: user
            ? {
                where: {
                  user_id: user.uid,
                },
              }
            : undefined,
          _count: {
            select: {
              comments: true,
            },
          },
        },
        take: limit,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          timestamp: 'desc',
        },
      });
      return posts;
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(
        'There was an error getting posts...',
      );
    }
  }

  async getPost(pid: string, user?: DecodedIdToken) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id: pid },
        include: {
          user: true,
          hashtags: true,
          SubscribedPost: user
            ? {
                where: {
                  user_id: user.uid,
                },
              }
            : undefined,
          _count: {
            select: {
              comments: true,
            },
          },
        },
      });

      if (!post) {
        throw new NotFoundException('Post not found');
      }

      const comments = await this.comment.getComments(pid);

      post['comments'] = comments;

      if (user) {
        await this.prisma.postView
          .create({
            data: {
              user_id: user?.uid,
              post_id: pid,
            },
          })
          .then(() => {})
          .catch(() => {});
      }

      return post;
    } catch (error) {
      console.log(error);

      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(
        'There was an error getting post...',
      );
    }
  }

  async getPosts(
    user: DecodedIdToken,
    limit: number,
    cursor: string | null = null,
  ) {
    try {
      const unseenPosts = user
        ? await this.fetchPosts(user, limit, cursor, null, null, true)
        : [];

      if (unseenPosts.length === limit) {
        if (user) {
          this.prisma.postView
            .createMany({
              data: unseenPosts.map((post) => ({
                user_id: user.uid,
                post_id: post.id,
              })),
              skipDuplicates: true,
            })
            .catch((err) => console.error('Error creating post views:', err));
        }

        return unseenPosts;
      }

      const remainingLimit = limit - unseenPosts.length;

      const lastUnseenPost =
        unseenPosts.length > 0
          ? unseenPosts[unseenPosts.length - 1].id
          : cursor;

      console.log(lastUnseenPost);

      const additionalPosts = await this.fetchPosts(
        user,
        remainingLimit,
        lastUnseenPost,
        null,
        null,
        false,
      );

      const combinedPosts = [...unseenPosts, ...additionalPosts];

      if (user) {
        this.prisma.postView
          .createMany({
            data: combinedPosts.map((post) => ({
              user_id: user.uid,
              post_id: post.id,
            })),
            skipDuplicates: true,
          })
          .catch((err) => console.error('Error creating post views:', err));
      }

      return combinedPosts;
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(
        'There was an error getting posts...',
      );
    }
  }

  async getUserPosts(username: string, user: DecodedIdToken) {
    try {
      const posts = await this.prisma.post.findMany({
        where: {
          user: {
            username,
          },
        },
        include: {
          user: true,
          hashtags: true,
          SubscribedPost: user
            ? {
                where: {
                  user_id: user.uid,
                },
              }
            : undefined,
          _count: {
            select: {
              comments: true,
            },
          },
        },
      });

      return posts;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('error getting posts');
    }
  }

  async getPostsBySearch(
    search: string,
    hashtags: string[] | [] | null,
    user: DecodedIdToken,
  ) {
    try {
      const posts = await this.fetchPosts(
        user,
        undefined,
        null,
        search,
        hashtags,
      );
      return posts;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('error getting posts');
    }
  }

  async createPost({ title, body, hashtags }, user) {
    try {
      const post = await this.prisma.post.create({
        data: {
          title,
          body,
          user: { connect: { id: user.uid } },
          hashtags: {
            connectOrCreate: hashtags.map((tag) => ({
              where: { value: tag },
              create: { value: tag },
            })),
          },
        },
      });

      return post;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('error creating post');
    }
  }

  async editPost({ title, body, hashtags, postId }, user) {
    try {
      const post = await this.prisma.post.update({
        where: { id: postId, user_id: user.uid },
        data: {
          title,
          body,
          hashtags: {
            connectOrCreate: hashtags.map((tag) => ({
              where: { value: tag },
              create: { value: tag },
            })),
          },
        },
      });

      return post;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('error editing post');
    }
  }

  async deletePost(pid, user: DecodedIdToken) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id: pid },
        include: { user: true },
      });

      if (!post) throw new NotFoundException('Post not found');

      if (post.user.id !== user.uid)
        throw new ImATeapotException('Unauthorized');

      await this.prisma.post.delete({ where: { id: pid, user_id: user.uid } });

      return { message: 'Post deleted successfully' };
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error deleting post...');
    }
  }

  async subscribePost(id: string, user) {
    if (!id) throw new BadRequestException('No id provided');

    try {
      const [subscribedPosts, post] = await Promise.all([
        this.prisma.subscribedPost.count({
          where: { user_id: user.uid },
        }),
        this.prisma.post.findUnique({
          where: { id },
          include: { user: true },
        }),
      ]);

      if (!post) throw new NotFoundException('Post not found');

      if (post.user.id === user.uid)
        throw new ImATeapotException('Cannot subscribe to your own post');

      const alreadySubscribed = await this.prisma.subscribedPost.findFirst({
        where: {
          user_id: user.uid,
          post_id: id,
        },
      });

      if (!alreadySubscribed && subscribedPosts >= 5)
        throw new ImATeapotException('You can only subscribe to 5 posts');

      if (alreadySubscribed) {
        await this.prisma.subscribedPost.delete({
          where: {
            id: alreadySubscribed.id,
          },
        });

        return [];
      } else {
        const subscribedPost = await this.prisma.subscribedPost.create({
          data: {
            user_id: user.uid,
            post_id: id,
          },
        });

        return [subscribedPost];
      }
    } catch (error) {
      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException('error subscribing to post');
    }
  }

  async getSubscribedPosts(username: string, user) {
    try {
      const posts = await this.prisma.post.findMany({
        where: {
          SubscribedPost: {
            some: {
              user: {
                username,
              },
            },
          },
        },
        include: {
          user: true,
          hashtags: true,
          SubscribedPost: user
            ? {
                where: {
                  user_id: user.uid,
                },
              }
            : undefined,
          _count: {
            select: {
              comments: true,
            },
          },
        },
      });

      return posts;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException('Error getting subscribed posts');
    }
  }
}
