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

  async getPost(pid: string, user?: DecodedIdToken) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id: pid },
        include: {
          user: true,
          hashtags: true,
        },
      });

      if (!post) {
        throw new NotFoundException('Post not found');
      }

      const [comments, subscribed] = await Promise.all([
        this.comment.getComments(pid),
        (user &&
          this.prisma.subscribedPost.findFirst({
            where: {
              user_id: user.uid,
              post_id: pid,
            },
          })) ||
          Promise.resolve(false),
      ]);

      post['comments'] = comments;
      post['subscribed'] = subscribed ? true : false;

      console.log(post['comments'], 'comments length');
      if (user) {
        this.prisma.postView
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

  async getUserPosts(username: string) {
    try {
      const posts = await this.prisma.post.findMany({
        where: { user: { username } },
        include: {
          user: true,
          hashtags: true,
        },
      });

      const subscribedPosts = await this.prisma.subscribedPost.findMany({
        where: { user: { username } },
        include: {
          post: {
            include: {
              user: true,
              hashtags: true,
            },
          },
        },
      });

      const subscribedPostIds = subscribedPosts.map(
        (subscribedPost) => subscribedPost.post.id,
      );

      const postsWithSubscribed = posts.map((post) => ({
        ...post,
        subscribed: subscribedPostIds.includes(post.id),
      }));

      return postsWithSubscribed;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('error getting posts');
    }
  }

  async getPostsBySearch(search: string, user) {
    try {
      const posts = await this.prisma.post.findMany({
        where: {
          OR: [{ title: { contains: search } }, { body: { contains: search } }],
        },
        include: {
          user: true,
          hashtags: true,
        },
      });

      if (!user) return posts;

      const subscribedPosts = await this.prisma.subscribedPost.findMany({
        where: { user_id: user.uid }, // Replace 'userId' with the actual user ID
        include: {
          post: {
            include: {
              user: true,
              hashtags: true,
            },
          },
        },
      });

      const subscribedPostIds = subscribedPosts.map(
        (subscribedPost) => subscribedPost.post.id,
      );

      const postsWithSubscribed = posts.map((post) => ({
        ...post,
        subscribed: subscribedPostIds.includes(post.id),
      }));

      return postsWithSubscribed;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('error getting posts');
    }
  }

  async getPosts(user) {
    try {
      if (!user) {
        const postsCount = await this.prisma.post.count();
        const skipCount = Math.max(
          0,
          Math.floor(Math.random() * Math.max(0, postsCount - 10)),
        );

        const posts = await this.prisma.post.findMany({
          include: {
            user: true,
            hashtags: true,
          },
          take: 10,
          skip: skipCount,
        });
        return posts;
      }

      const viewedPosts = await this.prisma.postView.findMany({
        where: { user_id: user.uid },
        include: {
          post: {
            include: {
              user: true,
              hashtags: true,
            },
          },
        },
        orderBy: {},
      });

      const count = await this.prisma.post.count({
        where: {
          NOT: { id: { in: viewedPosts.map((post) => post.post.id) } },
        },
      });
      const skipCount = Math.max(
        0,
        Math.floor(Math.random() * Math.max(0, count - 10)),
      );

      const posts = await this.prisma.post.findMany({
        where: {
          NOT: { id: { in: viewedPosts.map((post) => post.post.id) } },
        },
        include: {
          user: true,
          hashtags: true,
        },
        take: 10,
        skip: skipCount,
      });

      console.log(posts.length, 'posts length');

      let reShowPosts: any[] = [];
      if (posts.length < 10) {
        console.log('No posts found, showing previously viewed posts');

        const count = await this.prisma.post.count({
          where: { id: { in: viewedPosts.map((post) => post.post.id) } },
        });
        const skipCount = Math.max(
          0,
          Math.floor(Math.random() * Math.max(0, count - 10)),
        );

        reShowPosts = await this.prisma.post.findMany({
          where: { id: { in: viewedPosts.map((post) => post.post.id) } },
          include: {
            user: true,
            hashtags: true,
          },
          take: 10 - posts.length,
          skip: skipCount,
        });

        reShowPosts = [...posts, ...reShowPosts];
        console.log(
          reShowPosts.map((post) => post.title),
          'reshow posts',
        );
        console.log(reShowPosts.length, 'reshow posts length');
      }

      if (!user) return posts || reShowPosts;

      const subscribedPosts = await this.prisma.subscribedPost.findMany({
        where: { user_id: user.uid }, // Replace 'userId' with the actual user ID
        include: {
          post: {
            include: {
              user: true,
              hashtags: true,
            },
          },
        },
      });

      const subscribedPostIds = subscribedPosts.map(
        (subscribedPost) => subscribedPost.post.id,
      );

      const postsWithSubscribed = (
        (posts.length >= 10 && posts) ||
        reShowPosts
      ).map((post) => ({
        ...post,
        subscribed: subscribedPostIds.includes(post.id),
      }));

      if (posts) {
        this.prisma.postView
          .createMany({
            data: posts.map((post) => ({
              user_id: user.uid,
              post_id: post.id,
            })),
          })
          .catch((error) => {
            console.log(error);
          });
      }

      return postsWithSubscribed;
    } catch (error) {
      console.error(error);
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
      console.log(post.id);

      return post;
    } catch (error) {
      console.error(error);
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

  async deletePost(id, user) {
    try {
      const post = await this.prisma.post.findUnique({
        where: { id },
        include: { user: true },
      });

      if (!post) throw new NotFoundException('Post not found');

      if (post.user.id !== user.uid)
        throw new ImATeapotException('Unauthorized');

      await this.prisma.post.delete({ where: { id } });

      return { message: 'Post deleted successfully' };
    } catch (error) {
      console.error(error);

      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException('error deleting post');
    }
  }

  async subscribePost(id: string, user) {
    if (!id) throw new BadRequestException('No id provided');

    try {
      const subscribedPosts = await this.prisma.subscribedPost.findMany({
        where: { user_id: user.uid },
      });

      const post = await this.prisma.post.findUnique({
        where: { id },
        include: { user: true },
      });

      if (!post) throw new NotFoundException('Post not found');

      if (post.user.id === user.uid)
        throw new ImATeapotException('Cannot subscribe to your own post');

      const alreadySubscribed = await this.prisma.subscribedPost.findFirst({
        where: {
          user_id: user.uid,
          post_id: id,
        },
      });

      if (!alreadySubscribed && subscribedPosts.length >= 5)
        throw new ImATeapotException('You can only subscribe to 5 posts');

      if (alreadySubscribed) {
        await this.prisma.subscribedPost.delete({
          where: {
            id: alreadySubscribed.id,
          },
        });
      } else {
        await this.prisma.subscribedPost.create({
          data: {
            user_id: user.uid,
            post_id: id,
          },
        });
      }

      return { message: 'Subscribed to post successfully' };
    } catch (error) {
      // console.error(error);

      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException('error subscribing to post');
    }
  }

  async getSubscribedPosts(username: string, user) {
    try {
      const usernameSubscribedPosts = await this.prisma.subscribedPost.findMany(
        {
          where: {
            user: { username },
          },
          include: {
            post: {
              include: {
                user: true,
                hashtags: true,
              },
            },
          },
        },
      );

      const userSubscribedPosts = await this.prisma.subscribedPost.findMany({
        where: {
          user_id: user.uid,
        },
        include: {
          post: {
            include: {
              user: true,
              hashtags: true,
            },
          },
        },
      });

      const subscribedPostIds = userSubscribedPosts.map(
        (subscribedPost) => subscribedPost.post.id,
      );

      const postsWithSubscribed = usernameSubscribedPosts.map((post) => ({
        ...post.post,
        subscribed: subscribedPostIds.includes(post.post.id),
      }));

      return postsWithSubscribed;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('error getting subscribed posts');
    }
  }
}
