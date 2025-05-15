
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model PostVote
 * 
 */
export type PostVote = $Result.DefaultSelection<Prisma.$PostVotePayload>
/**
 * Model CommentVote
 * 
 */
export type CommentVote = $Result.DefaultSelection<Prisma.$CommentVotePayload>
/**
 * Model PostView
 * 
 */
export type PostView = $Result.DefaultSelection<Prisma.$PostViewPayload>
/**
 * Model Hashtag
 * 
 */
export type Hashtag = $Result.DefaultSelection<Prisma.$HashtagPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model SubscribedPost
 * 
 */
export type SubscribedPost = $Result.DefaultSelection<Prisma.$SubscribedPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postVote`: Exposes CRUD operations for the **PostVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostVotes
    * const postVotes = await prisma.postVote.findMany()
    * ```
    */
  get postVote(): Prisma.PostVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentVote`: Exposes CRUD operations for the **CommentVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentVotes
    * const commentVotes = await prisma.commentVote.findMany()
    * ```
    */
  get commentVote(): Prisma.CommentVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postView`: Exposes CRUD operations for the **PostView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostViews
    * const postViews = await prisma.postView.findMany()
    * ```
    */
  get postView(): Prisma.PostViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hashtag`: Exposes CRUD operations for the **Hashtag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hashtags
    * const hashtags = await prisma.hashtag.findMany()
    * ```
    */
  get hashtag(): Prisma.HashtagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscribedPost`: Exposes CRUD operations for the **SubscribedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscribedPosts
    * const subscribedPosts = await prisma.subscribedPost.findMany()
    * ```
    */
  get subscribedPost(): Prisma.SubscribedPostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Comment: 'Comment',
    PostVote: 'PostVote',
    CommentVote: 'CommentVote',
    PostView: 'PostView',
    Hashtag: 'Hashtag',
    Notification: 'Notification',
    SubscribedPost: 'SubscribedPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "comment" | "postVote" | "commentVote" | "postView" | "hashtag" | "notification" | "subscribedPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      PostVote: {
        payload: Prisma.$PostVotePayload<ExtArgs>
        fields: Prisma.PostVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          findFirst: {
            args: Prisma.PostVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          findMany: {
            args: Prisma.PostVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>[]
          }
          create: {
            args: Prisma.PostVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          createMany: {
            args: Prisma.PostVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          update: {
            args: Prisma.PostVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          deleteMany: {
            args: Prisma.PostVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          aggregate: {
            args: Prisma.PostVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostVote>
          }
          groupBy: {
            args: Prisma.PostVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostVoteCountArgs<ExtArgs>
            result: $Utils.Optional<PostVoteCountAggregateOutputType> | number
          }
        }
      }
      CommentVote: {
        payload: Prisma.$CommentVotePayload<ExtArgs>
        fields: Prisma.CommentVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          findFirst: {
            args: Prisma.CommentVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          findMany: {
            args: Prisma.CommentVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>[]
          }
          create: {
            args: Prisma.CommentVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          createMany: {
            args: Prisma.CommentVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          update: {
            args: Prisma.CommentVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          deleteMany: {
            args: Prisma.CommentVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          aggregate: {
            args: Prisma.CommentVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentVote>
          }
          groupBy: {
            args: Prisma.CommentVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentVoteCountArgs<ExtArgs>
            result: $Utils.Optional<CommentVoteCountAggregateOutputType> | number
          }
        }
      }
      PostView: {
        payload: Prisma.$PostViewPayload<ExtArgs>
        fields: Prisma.PostViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          findFirst: {
            args: Prisma.PostViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          findMany: {
            args: Prisma.PostViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>[]
          }
          create: {
            args: Prisma.PostViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          createMany: {
            args: Prisma.PostViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          update: {
            args: Prisma.PostViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          deleteMany: {
            args: Prisma.PostViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          aggregate: {
            args: Prisma.PostViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostView>
          }
          groupBy: {
            args: Prisma.PostViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostViewCountArgs<ExtArgs>
            result: $Utils.Optional<PostViewCountAggregateOutputType> | number
          }
        }
      }
      Hashtag: {
        payload: Prisma.$HashtagPayload<ExtArgs>
        fields: Prisma.HashtagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HashtagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HashtagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findFirst: {
            args: Prisma.HashtagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HashtagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          findMany: {
            args: Prisma.HashtagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>[]
          }
          create: {
            args: Prisma.HashtagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          createMany: {
            args: Prisma.HashtagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HashtagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          update: {
            args: Prisma.HashtagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          deleteMany: {
            args: Prisma.HashtagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HashtagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HashtagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HashtagPayload>
          }
          aggregate: {
            args: Prisma.HashtagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHashtag>
          }
          groupBy: {
            args: Prisma.HashtagGroupByArgs<ExtArgs>
            result: $Utils.Optional<HashtagGroupByOutputType>[]
          }
          count: {
            args: Prisma.HashtagCountArgs<ExtArgs>
            result: $Utils.Optional<HashtagCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      SubscribedPost: {
        payload: Prisma.$SubscribedPostPayload<ExtArgs>
        fields: Prisma.SubscribedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscribedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscribedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload>
          }
          findFirst: {
            args: Prisma.SubscribedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscribedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload>
          }
          findMany: {
            args: Prisma.SubscribedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload>[]
          }
          create: {
            args: Prisma.SubscribedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload>
          }
          createMany: {
            args: Prisma.SubscribedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscribedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload>
          }
          update: {
            args: Prisma.SubscribedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload>
          }
          deleteMany: {
            args: Prisma.SubscribedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscribedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscribedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscribedPostPayload>
          }
          aggregate: {
            args: Prisma.SubscribedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscribedPost>
          }
          groupBy: {
            args: Prisma.SubscribedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscribedPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscribedPostCountArgs<ExtArgs>
            result: $Utils.Optional<SubscribedPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    comment?: CommentOmit
    postVote?: PostVoteOmit
    commentVote?: CommentVoteOmit
    postView?: PostViewOmit
    hashtag?: HashtagOmit
    notification?: NotificationOmit
    subscribedPost?: SubscribedPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    comments: number
    PostView: number
    Notification: number
    SubscribedPost: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    PostView?: boolean | UserCountOutputTypeCountPostViewArgs
    Notification?: boolean | UserCountOutputTypeCountNotificationArgs
    SubscribedPost?: boolean | UserCountOutputTypeCountSubscribedPostArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscribedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscribedPostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    hashtags: number
    comments: number
    PostView: number
    Notification: number
    SubscribedPost: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hashtags?: boolean | PostCountOutputTypeCountHashtagsArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    PostView?: boolean | PostCountOutputTypeCountPostViewArgs
    Notification?: boolean | PostCountOutputTypeCountNotificationArgs
    SubscribedPost?: boolean | PostCountOutputTypeCountSubscribedPostArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountHashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HashtagWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSubscribedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscribedPostWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    comments: number
    Notification: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | CommentCountOutputTypeCountCommentsArgs
    Notification?: boolean | CommentCountOutputTypeCountNotificationArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountNotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type HashtagCountOutputType
   */

  export type HashtagCountOutputType = {
    posts: number
  }

  export type HashtagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | HashtagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HashtagCountOutputType
     */
    select?: HashtagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HashtagCountOutputType without action
   */
  export type HashtagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    bio: string | null
    timestamp: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    bio: string | null
    timestamp: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    bio: number
    timestamp: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    bio?: true
    timestamp?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    bio?: true
    timestamp?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    bio?: true
    timestamp?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    bio: string | null
    timestamp: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    bio?: boolean
    timestamp?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    PostView?: boolean | User$PostViewArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    SubscribedPost?: boolean | User$SubscribedPostArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    bio?: boolean
    timestamp?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "bio" | "timestamp", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    PostView?: boolean | User$PostViewArgs<ExtArgs>
    Notification?: boolean | User$NotificationArgs<ExtArgs>
    SubscribedPost?: boolean | User$SubscribedPostArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      PostView: Prisma.$PostViewPayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      SubscribedPost: Prisma.$SubscribedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      bio: string | null
      timestamp: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostView<T extends User$PostViewArgs<ExtArgs> = {}>(args?: Subset<T, User$PostViewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification<T extends User$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, User$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SubscribedPost<T extends User$SubscribedPostArgs<ExtArgs> = {}>(args?: Subset<T, User$SubscribedPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly timestamp: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.PostView
   */
  export type User$PostViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    where?: PostViewWhereInput
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    cursor?: PostViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * User.Notification
   */
  export type User$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.SubscribedPost
   */
  export type User$SubscribedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    where?: SubscribedPostWhereInput
    orderBy?: SubscribedPostOrderByWithRelationInput | SubscribedPostOrderByWithRelationInput[]
    cursor?: SubscribedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscribedPostScalarFieldEnum | SubscribedPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    body: string | null
    timestamp: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    body: string | null
    timestamp: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    body: number
    timestamp: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    body?: true
    timestamp?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    body?: true
    timestamp?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    body?: true
    timestamp?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    user_id: string
    title: string
    body: string
    timestamp: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    body?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hashtags?: boolean | Post$hashtagsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    PostView?: boolean | Post$PostViewArgs<ExtArgs>
    Notification?: boolean | Post$NotificationArgs<ExtArgs>
    SubscribedPost?: boolean | Post$SubscribedPostArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    body?: boolean
    timestamp?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "body" | "timestamp", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hashtags?: boolean | Post$hashtagsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    PostView?: boolean | Post$PostViewArgs<ExtArgs>
    Notification?: boolean | Post$NotificationArgs<ExtArgs>
    SubscribedPost?: boolean | Post$SubscribedPostArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hashtags: Prisma.$HashtagPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      PostView: Prisma.$PostViewPayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
      SubscribedPost: Prisma.$SubscribedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      title: string
      body: string
      timestamp: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hashtags<T extends Post$hashtagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$hashtagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PostView<T extends Post$PostViewArgs<ExtArgs> = {}>(args?: Subset<T, Post$PostViewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification<T extends Post$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, Post$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SubscribedPost<T extends Post$SubscribedPostArgs<ExtArgs> = {}>(args?: Subset<T, Post$SubscribedPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly user_id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly body: FieldRef<"Post", 'String'>
    readonly timestamp: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.hashtags
   */
  export type Post$hashtagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    where?: HashtagWhereInput
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    cursor?: HashtagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.PostView
   */
  export type Post$PostViewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    where?: PostViewWhereInput
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    cursor?: PostViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * Post.Notification
   */
  export type Post$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Post.SubscribedPost
   */
  export type Post$SubscribedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    where?: SubscribedPostWhereInput
    orderBy?: SubscribedPostOrderByWithRelationInput | SubscribedPostOrderByWithRelationInput[]
    cursor?: SubscribedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscribedPostScalarFieldEnum | SubscribedPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    parent_comment_id: string | null
    content: string | null
    timestamp: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    parent_comment_id: string | null
    content: string | null
    timestamp: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    user_id: number
    post_id: number
    parent_comment_id: number
    content: number
    timestamp: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    parent_comment_id?: true
    content?: true
    timestamp?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    parent_comment_id?: true
    content?: true
    timestamp?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    parent_comment_id?: true
    content?: true
    timestamp?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    user_id: string
    post_id: string
    parent_comment_id: string | null
    content: string
    timestamp: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    parent_comment_id?: boolean
    content?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
    comments?: boolean | Comment$commentsArgs<ExtArgs>
    Notification?: boolean | Comment$NotificationArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    parent_comment_id?: boolean
    content?: boolean
    timestamp?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "post_id" | "parent_comment_id" | "content" | "timestamp", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
    comments?: boolean | Comment$commentsArgs<ExtArgs>
    Notification?: boolean | Comment$NotificationArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
      parentComment: Prisma.$CommentPayload<ExtArgs> | null
      comments: Prisma.$CommentPayload<ExtArgs>[]
      Notification: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      post_id: string
      parent_comment_id: string | null
      content: string
      timestamp: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parentComment<T extends Comment$parentCommentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentCommentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Comment$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notification<T extends Comment$NotificationArgs<ExtArgs> = {}>(args?: Subset<T, Comment$NotificationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly user_id: FieldRef<"Comment", 'String'>
    readonly post_id: FieldRef<"Comment", 'String'>
    readonly parent_comment_id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly timestamp: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parentComment
   */
  export type Comment$parentCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.comments
   */
  export type Comment$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment.Notification
   */
  export type Comment$NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model PostVote
   */

  export type AggregatePostVote = {
    _count: PostVoteCountAggregateOutputType | null
    _min: PostVoteMinAggregateOutputType | null
    _max: PostVoteMaxAggregateOutputType | null
  }

  export type PostVoteMinAggregateOutputType = {
    post_id: string | null
    user_id: string | null
    vote_type: string | null
  }

  export type PostVoteMaxAggregateOutputType = {
    post_id: string | null
    user_id: string | null
    vote_type: string | null
  }

  export type PostVoteCountAggregateOutputType = {
    post_id: number
    user_id: number
    vote_type: number
    _all: number
  }


  export type PostVoteMinAggregateInputType = {
    post_id?: true
    user_id?: true
    vote_type?: true
  }

  export type PostVoteMaxAggregateInputType = {
    post_id?: true
    user_id?: true
    vote_type?: true
  }

  export type PostVoteCountAggregateInputType = {
    post_id?: true
    user_id?: true
    vote_type?: true
    _all?: true
  }

  export type PostVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostVote to aggregate.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostVotes
    **/
    _count?: true | PostVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostVoteMaxAggregateInputType
  }

  export type GetPostVoteAggregateType<T extends PostVoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePostVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostVote[P]>
      : GetScalarType<T[P], AggregatePostVote[P]>
  }




  export type PostVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithAggregationInput | PostVoteOrderByWithAggregationInput[]
    by: PostVoteScalarFieldEnum[] | PostVoteScalarFieldEnum
    having?: PostVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostVoteCountAggregateInputType | true
    _min?: PostVoteMinAggregateInputType
    _max?: PostVoteMaxAggregateInputType
  }

  export type PostVoteGroupByOutputType = {
    post_id: string
    user_id: string
    vote_type: string
    _count: PostVoteCountAggregateOutputType | null
    _min: PostVoteMinAggregateOutputType | null
    _max: PostVoteMaxAggregateOutputType | null
  }

  type GetPostVoteGroupByPayload<T extends PostVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostVoteGroupByOutputType[P]>
            : GetScalarType<T[P], PostVoteGroupByOutputType[P]>
        }
      >
    >


  export type PostVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    user_id?: boolean
    vote_type?: boolean
  }, ExtArgs["result"]["postVote"]>



  export type PostVoteSelectScalar = {
    post_id?: boolean
    user_id?: boolean
    vote_type?: boolean
  }

  export type PostVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "user_id" | "vote_type", ExtArgs["result"]["postVote"]>

  export type $PostVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostVote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      post_id: string
      user_id: string
      vote_type: string
    }, ExtArgs["result"]["postVote"]>
    composites: {}
  }

  type PostVoteGetPayload<S extends boolean | null | undefined | PostVoteDefaultArgs> = $Result.GetResult<Prisma.$PostVotePayload, S>

  type PostVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostVoteCountAggregateInputType | true
    }

  export interface PostVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostVote'], meta: { name: 'PostVote' } }
    /**
     * Find zero or one PostVote that matches the filter.
     * @param {PostVoteFindUniqueArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostVoteFindUniqueArgs>(args: SelectSubset<T, PostVoteFindUniqueArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostVoteFindUniqueOrThrowArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, PostVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindFirstArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostVoteFindFirstArgs>(args?: SelectSubset<T, PostVoteFindFirstArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindFirstOrThrowArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, PostVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostVotes
     * const postVotes = await prisma.postVote.findMany()
     * 
     * // Get first 10 PostVotes
     * const postVotes = await prisma.postVote.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postVoteWithPost_idOnly = await prisma.postVote.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends PostVoteFindManyArgs>(args?: SelectSubset<T, PostVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostVote.
     * @param {PostVoteCreateArgs} args - Arguments to create a PostVote.
     * @example
     * // Create one PostVote
     * const PostVote = await prisma.postVote.create({
     *   data: {
     *     // ... data to create a PostVote
     *   }
     * })
     * 
     */
    create<T extends PostVoteCreateArgs>(args: SelectSubset<T, PostVoteCreateArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostVotes.
     * @param {PostVoteCreateManyArgs} args - Arguments to create many PostVotes.
     * @example
     * // Create many PostVotes
     * const postVote = await prisma.postVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostVoteCreateManyArgs>(args?: SelectSubset<T, PostVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostVote.
     * @param {PostVoteDeleteArgs} args - Arguments to delete one PostVote.
     * @example
     * // Delete one PostVote
     * const PostVote = await prisma.postVote.delete({
     *   where: {
     *     // ... filter to delete one PostVote
     *   }
     * })
     * 
     */
    delete<T extends PostVoteDeleteArgs>(args: SelectSubset<T, PostVoteDeleteArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostVote.
     * @param {PostVoteUpdateArgs} args - Arguments to update one PostVote.
     * @example
     * // Update one PostVote
     * const postVote = await prisma.postVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostVoteUpdateArgs>(args: SelectSubset<T, PostVoteUpdateArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostVotes.
     * @param {PostVoteDeleteManyArgs} args - Arguments to filter PostVotes to delete.
     * @example
     * // Delete a few PostVotes
     * const { count } = await prisma.postVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostVoteDeleteManyArgs>(args?: SelectSubset<T, PostVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostVotes
     * const postVote = await prisma.postVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostVoteUpdateManyArgs>(args: SelectSubset<T, PostVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostVote.
     * @param {PostVoteUpsertArgs} args - Arguments to update or create a PostVote.
     * @example
     * // Update or create a PostVote
     * const postVote = await prisma.postVote.upsert({
     *   create: {
     *     // ... data to create a PostVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostVote we want to update
     *   }
     * })
     */
    upsert<T extends PostVoteUpsertArgs>(args: SelectSubset<T, PostVoteUpsertArgs<ExtArgs>>): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteCountArgs} args - Arguments to filter PostVotes to count.
     * @example
     * // Count the number of PostVotes
     * const count = await prisma.postVote.count({
     *   where: {
     *     // ... the filter for the PostVotes we want to count
     *   }
     * })
    **/
    count<T extends PostVoteCountArgs>(
      args?: Subset<T, PostVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostVoteAggregateArgs>(args: Subset<T, PostVoteAggregateArgs>): Prisma.PrismaPromise<GetPostVoteAggregateType<T>>

    /**
     * Group by PostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostVoteGroupByArgs['orderBy'] }
        : { orderBy?: PostVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostVote model
   */
  readonly fields: PostVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostVote model
   */
  interface PostVoteFieldRefs {
    readonly post_id: FieldRef<"PostVote", 'String'>
    readonly user_id: FieldRef<"PostVote", 'String'>
    readonly vote_type: FieldRef<"PostVote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostVote findUnique
   */
  export type PostVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote findUniqueOrThrow
   */
  export type PostVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote findFirst
   */
  export type PostVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostVotes.
     */
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote findFirstOrThrow
   */
  export type PostVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostVotes.
     */
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote findMany
   */
  export type PostVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Filter, which PostVotes to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }

  /**
   * PostVote create
   */
  export type PostVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * The data needed to create a PostVote.
     */
    data: XOR<PostVoteCreateInput, PostVoteUncheckedCreateInput>
  }

  /**
   * PostVote createMany
   */
  export type PostVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostVotes.
     */
    data: PostVoteCreateManyInput | PostVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostVote update
   */
  export type PostVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * The data needed to update a PostVote.
     */
    data: XOR<PostVoteUpdateInput, PostVoteUncheckedUpdateInput>
    /**
     * Choose, which PostVote to update.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote updateMany
   */
  export type PostVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostVotes.
     */
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyInput>
    /**
     * Filter which PostVotes to update
     */
    where?: PostVoteWhereInput
    /**
     * Limit how many PostVotes to update.
     */
    limit?: number
  }

  /**
   * PostVote upsert
   */
  export type PostVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * The filter to search for the PostVote to update in case it exists.
     */
    where: PostVoteWhereUniqueInput
    /**
     * In case the PostVote found by the `where` argument doesn't exist, create a new PostVote with this data.
     */
    create: XOR<PostVoteCreateInput, PostVoteUncheckedCreateInput>
    /**
     * In case the PostVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostVoteUpdateInput, PostVoteUncheckedUpdateInput>
  }

  /**
   * PostVote delete
   */
  export type PostVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
    /**
     * Filter which PostVote to delete.
     */
    where: PostVoteWhereUniqueInput
  }

  /**
   * PostVote deleteMany
   */
  export type PostVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostVotes to delete
     */
    where?: PostVoteWhereInput
    /**
     * Limit how many PostVotes to delete.
     */
    limit?: number
  }

  /**
   * PostVote without action
   */
  export type PostVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostVote
     */
    omit?: PostVoteOmit<ExtArgs> | null
  }


  /**
   * Model CommentVote
   */

  export type AggregateCommentVote = {
    _count: CommentVoteCountAggregateOutputType | null
    _min: CommentVoteMinAggregateOutputType | null
    _max: CommentVoteMaxAggregateOutputType | null
  }

  export type CommentVoteMinAggregateOutputType = {
    comment_id: string | null
    user_id: string | null
    vote_type: string | null
  }

  export type CommentVoteMaxAggregateOutputType = {
    comment_id: string | null
    user_id: string | null
    vote_type: string | null
  }

  export type CommentVoteCountAggregateOutputType = {
    comment_id: number
    user_id: number
    vote_type: number
    _all: number
  }


  export type CommentVoteMinAggregateInputType = {
    comment_id?: true
    user_id?: true
    vote_type?: true
  }

  export type CommentVoteMaxAggregateInputType = {
    comment_id?: true
    user_id?: true
    vote_type?: true
  }

  export type CommentVoteCountAggregateInputType = {
    comment_id?: true
    user_id?: true
    vote_type?: true
    _all?: true
  }

  export type CommentVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentVote to aggregate.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentVotes
    **/
    _count?: true | CommentVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentVoteMaxAggregateInputType
  }

  export type GetCommentVoteAggregateType<T extends CommentVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentVote[P]>
      : GetScalarType<T[P], AggregateCommentVote[P]>
  }




  export type CommentVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithAggregationInput | CommentVoteOrderByWithAggregationInput[]
    by: CommentVoteScalarFieldEnum[] | CommentVoteScalarFieldEnum
    having?: CommentVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentVoteCountAggregateInputType | true
    _min?: CommentVoteMinAggregateInputType
    _max?: CommentVoteMaxAggregateInputType
  }

  export type CommentVoteGroupByOutputType = {
    comment_id: string
    user_id: string
    vote_type: string
    _count: CommentVoteCountAggregateOutputType | null
    _min: CommentVoteMinAggregateOutputType | null
    _max: CommentVoteMaxAggregateOutputType | null
  }

  type GetCommentVoteGroupByPayload<T extends CommentVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentVoteGroupByOutputType[P]>
            : GetScalarType<T[P], CommentVoteGroupByOutputType[P]>
        }
      >
    >


  export type CommentVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comment_id?: boolean
    user_id?: boolean
    vote_type?: boolean
  }, ExtArgs["result"]["commentVote"]>



  export type CommentVoteSelectScalar = {
    comment_id?: boolean
    user_id?: boolean
    vote_type?: boolean
  }

  export type CommentVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comment_id" | "user_id" | "vote_type", ExtArgs["result"]["commentVote"]>

  export type $CommentVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentVote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      comment_id: string
      user_id: string
      vote_type: string
    }, ExtArgs["result"]["commentVote"]>
    composites: {}
  }

  type CommentVoteGetPayload<S extends boolean | null | undefined | CommentVoteDefaultArgs> = $Result.GetResult<Prisma.$CommentVotePayload, S>

  type CommentVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentVoteCountAggregateInputType | true
    }

  export interface CommentVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentVote'], meta: { name: 'CommentVote' } }
    /**
     * Find zero or one CommentVote that matches the filter.
     * @param {CommentVoteFindUniqueArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentVoteFindUniqueArgs>(args: SelectSubset<T, CommentVoteFindUniqueArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentVoteFindUniqueOrThrowArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindFirstArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentVoteFindFirstArgs>(args?: SelectSubset<T, CommentVoteFindFirstArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindFirstOrThrowArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentVotes
     * const commentVotes = await prisma.commentVote.findMany()
     * 
     * // Get first 10 CommentVotes
     * const commentVotes = await prisma.commentVote.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentVoteWithComment_idOnly = await prisma.commentVote.findMany({ select: { comment_id: true } })
     * 
     */
    findMany<T extends CommentVoteFindManyArgs>(args?: SelectSubset<T, CommentVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentVote.
     * @param {CommentVoteCreateArgs} args - Arguments to create a CommentVote.
     * @example
     * // Create one CommentVote
     * const CommentVote = await prisma.commentVote.create({
     *   data: {
     *     // ... data to create a CommentVote
     *   }
     * })
     * 
     */
    create<T extends CommentVoteCreateArgs>(args: SelectSubset<T, CommentVoteCreateArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentVotes.
     * @param {CommentVoteCreateManyArgs} args - Arguments to create many CommentVotes.
     * @example
     * // Create many CommentVotes
     * const commentVote = await prisma.commentVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentVoteCreateManyArgs>(args?: SelectSubset<T, CommentVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommentVote.
     * @param {CommentVoteDeleteArgs} args - Arguments to delete one CommentVote.
     * @example
     * // Delete one CommentVote
     * const CommentVote = await prisma.commentVote.delete({
     *   where: {
     *     // ... filter to delete one CommentVote
     *   }
     * })
     * 
     */
    delete<T extends CommentVoteDeleteArgs>(args: SelectSubset<T, CommentVoteDeleteArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentVote.
     * @param {CommentVoteUpdateArgs} args - Arguments to update one CommentVote.
     * @example
     * // Update one CommentVote
     * const commentVote = await prisma.commentVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentVoteUpdateArgs>(args: SelectSubset<T, CommentVoteUpdateArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentVotes.
     * @param {CommentVoteDeleteManyArgs} args - Arguments to filter CommentVotes to delete.
     * @example
     * // Delete a few CommentVotes
     * const { count } = await prisma.commentVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentVoteDeleteManyArgs>(args?: SelectSubset<T, CommentVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentVotes
     * const commentVote = await prisma.commentVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentVoteUpdateManyArgs>(args: SelectSubset<T, CommentVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommentVote.
     * @param {CommentVoteUpsertArgs} args - Arguments to update or create a CommentVote.
     * @example
     * // Update or create a CommentVote
     * const commentVote = await prisma.commentVote.upsert({
     *   create: {
     *     // ... data to create a CommentVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentVote we want to update
     *   }
     * })
     */
    upsert<T extends CommentVoteUpsertArgs>(args: SelectSubset<T, CommentVoteUpsertArgs<ExtArgs>>): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteCountArgs} args - Arguments to filter CommentVotes to count.
     * @example
     * // Count the number of CommentVotes
     * const count = await prisma.commentVote.count({
     *   where: {
     *     // ... the filter for the CommentVotes we want to count
     *   }
     * })
    **/
    count<T extends CommentVoteCountArgs>(
      args?: Subset<T, CommentVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentVoteAggregateArgs>(args: Subset<T, CommentVoteAggregateArgs>): Prisma.PrismaPromise<GetCommentVoteAggregateType<T>>

    /**
     * Group by CommentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentVoteGroupByArgs['orderBy'] }
        : { orderBy?: CommentVoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentVote model
   */
  readonly fields: CommentVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommentVote model
   */
  interface CommentVoteFieldRefs {
    readonly comment_id: FieldRef<"CommentVote", 'String'>
    readonly user_id: FieldRef<"CommentVote", 'String'>
    readonly vote_type: FieldRef<"CommentVote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CommentVote findUnique
   */
  export type CommentVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote findUniqueOrThrow
   */
  export type CommentVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote findFirst
   */
  export type CommentVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentVotes.
     */
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote findFirstOrThrow
   */
  export type CommentVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentVotes.
     */
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote findMany
   */
  export type CommentVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Filter, which CommentVotes to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }

  /**
   * CommentVote create
   */
  export type CommentVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * The data needed to create a CommentVote.
     */
    data: XOR<CommentVoteCreateInput, CommentVoteUncheckedCreateInput>
  }

  /**
   * CommentVote createMany
   */
  export type CommentVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentVotes.
     */
    data: CommentVoteCreateManyInput | CommentVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentVote update
   */
  export type CommentVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * The data needed to update a CommentVote.
     */
    data: XOR<CommentVoteUpdateInput, CommentVoteUncheckedUpdateInput>
    /**
     * Choose, which CommentVote to update.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote updateMany
   */
  export type CommentVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentVotes.
     */
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentVotes to update
     */
    where?: CommentVoteWhereInput
    /**
     * Limit how many CommentVotes to update.
     */
    limit?: number
  }

  /**
   * CommentVote upsert
   */
  export type CommentVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * The filter to search for the CommentVote to update in case it exists.
     */
    where: CommentVoteWhereUniqueInput
    /**
     * In case the CommentVote found by the `where` argument doesn't exist, create a new CommentVote with this data.
     */
    create: XOR<CommentVoteCreateInput, CommentVoteUncheckedCreateInput>
    /**
     * In case the CommentVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentVoteUpdateInput, CommentVoteUncheckedUpdateInput>
  }

  /**
   * CommentVote delete
   */
  export type CommentVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
    /**
     * Filter which CommentVote to delete.
     */
    where: CommentVoteWhereUniqueInput
  }

  /**
   * CommentVote deleteMany
   */
  export type CommentVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentVotes to delete
     */
    where?: CommentVoteWhereInput
    /**
     * Limit how many CommentVotes to delete.
     */
    limit?: number
  }

  /**
   * CommentVote without action
   */
  export type CommentVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentVote
     */
    omit?: CommentVoteOmit<ExtArgs> | null
  }


  /**
   * Model PostView
   */

  export type AggregatePostView = {
    _count: PostViewCountAggregateOutputType | null
    _min: PostViewMinAggregateOutputType | null
    _max: PostViewMaxAggregateOutputType | null
  }

  export type PostViewMinAggregateOutputType = {
    post_id: string | null
    user_id: string | null
  }

  export type PostViewMaxAggregateOutputType = {
    post_id: string | null
    user_id: string | null
  }

  export type PostViewCountAggregateOutputType = {
    post_id: number
    user_id: number
    _all: number
  }


  export type PostViewMinAggregateInputType = {
    post_id?: true
    user_id?: true
  }

  export type PostViewMaxAggregateInputType = {
    post_id?: true
    user_id?: true
  }

  export type PostViewCountAggregateInputType = {
    post_id?: true
    user_id?: true
    _all?: true
  }

  export type PostViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostView to aggregate.
     */
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostViews
    **/
    _count?: true | PostViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostViewMaxAggregateInputType
  }

  export type GetPostViewAggregateType<T extends PostViewAggregateArgs> = {
        [P in keyof T & keyof AggregatePostView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostView[P]>
      : GetScalarType<T[P], AggregatePostView[P]>
  }




  export type PostViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewWhereInput
    orderBy?: PostViewOrderByWithAggregationInput | PostViewOrderByWithAggregationInput[]
    by: PostViewScalarFieldEnum[] | PostViewScalarFieldEnum
    having?: PostViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostViewCountAggregateInputType | true
    _min?: PostViewMinAggregateInputType
    _max?: PostViewMaxAggregateInputType
  }

  export type PostViewGroupByOutputType = {
    post_id: string
    user_id: string
    _count: PostViewCountAggregateOutputType | null
    _min: PostViewMinAggregateOutputType | null
    _max: PostViewMaxAggregateOutputType | null
  }

  type GetPostViewGroupByPayload<T extends PostViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostViewGroupByOutputType[P]>
            : GetScalarType<T[P], PostViewGroupByOutputType[P]>
        }
      >
    >


  export type PostViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    user_id?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postView"]>



  export type PostViewSelectScalar = {
    post_id?: boolean
    user_id?: boolean
  }

  export type PostViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "user_id", ExtArgs["result"]["postView"]>
  export type PostViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostView"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: string
      user_id: string
    }, ExtArgs["result"]["postView"]>
    composites: {}
  }

  type PostViewGetPayload<S extends boolean | null | undefined | PostViewDefaultArgs> = $Result.GetResult<Prisma.$PostViewPayload, S>

  type PostViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostViewCountAggregateInputType | true
    }

  export interface PostViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostView'], meta: { name: 'PostView' } }
    /**
     * Find zero or one PostView that matches the filter.
     * @param {PostViewFindUniqueArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostViewFindUniqueArgs>(args: SelectSubset<T, PostViewFindUniqueArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostViewFindUniqueOrThrowArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostViewFindUniqueOrThrowArgs>(args: SelectSubset<T, PostViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewFindFirstArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostViewFindFirstArgs>(args?: SelectSubset<T, PostViewFindFirstArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewFindFirstOrThrowArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostViewFindFirstOrThrowArgs>(args?: SelectSubset<T, PostViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostViews
     * const postViews = await prisma.postView.findMany()
     * 
     * // Get first 10 PostViews
     * const postViews = await prisma.postView.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postViewWithPost_idOnly = await prisma.postView.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends PostViewFindManyArgs>(args?: SelectSubset<T, PostViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostView.
     * @param {PostViewCreateArgs} args - Arguments to create a PostView.
     * @example
     * // Create one PostView
     * const PostView = await prisma.postView.create({
     *   data: {
     *     // ... data to create a PostView
     *   }
     * })
     * 
     */
    create<T extends PostViewCreateArgs>(args: SelectSubset<T, PostViewCreateArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostViews.
     * @param {PostViewCreateManyArgs} args - Arguments to create many PostViews.
     * @example
     * // Create many PostViews
     * const postView = await prisma.postView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostViewCreateManyArgs>(args?: SelectSubset<T, PostViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostView.
     * @param {PostViewDeleteArgs} args - Arguments to delete one PostView.
     * @example
     * // Delete one PostView
     * const PostView = await prisma.postView.delete({
     *   where: {
     *     // ... filter to delete one PostView
     *   }
     * })
     * 
     */
    delete<T extends PostViewDeleteArgs>(args: SelectSubset<T, PostViewDeleteArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostView.
     * @param {PostViewUpdateArgs} args - Arguments to update one PostView.
     * @example
     * // Update one PostView
     * const postView = await prisma.postView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostViewUpdateArgs>(args: SelectSubset<T, PostViewUpdateArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostViews.
     * @param {PostViewDeleteManyArgs} args - Arguments to filter PostViews to delete.
     * @example
     * // Delete a few PostViews
     * const { count } = await prisma.postView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostViewDeleteManyArgs>(args?: SelectSubset<T, PostViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostViews
     * const postView = await prisma.postView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostViewUpdateManyArgs>(args: SelectSubset<T, PostViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostView.
     * @param {PostViewUpsertArgs} args - Arguments to update or create a PostView.
     * @example
     * // Update or create a PostView
     * const postView = await prisma.postView.upsert({
     *   create: {
     *     // ... data to create a PostView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostView we want to update
     *   }
     * })
     */
    upsert<T extends PostViewUpsertArgs>(args: SelectSubset<T, PostViewUpsertArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountArgs} args - Arguments to filter PostViews to count.
     * @example
     * // Count the number of PostViews
     * const count = await prisma.postView.count({
     *   where: {
     *     // ... the filter for the PostViews we want to count
     *   }
     * })
    **/
    count<T extends PostViewCountArgs>(
      args?: Subset<T, PostViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostViewAggregateArgs>(args: Subset<T, PostViewAggregateArgs>): Prisma.PrismaPromise<GetPostViewAggregateType<T>>

    /**
     * Group by PostView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostViewGroupByArgs['orderBy'] }
        : { orderBy?: PostViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostView model
   */
  readonly fields: PostViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostView model
   */
  interface PostViewFieldRefs {
    readonly post_id: FieldRef<"PostView", 'String'>
    readonly user_id: FieldRef<"PostView", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostView findUnique
   */
  export type PostViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostView to fetch.
     */
    where: PostViewWhereUniqueInput
  }

  /**
   * PostView findUniqueOrThrow
   */
  export type PostViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostView to fetch.
     */
    where: PostViewWhereUniqueInput
  }

  /**
   * PostView findFirst
   */
  export type PostViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostView to fetch.
     */
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViews.
     */
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViews.
     */
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * PostView findFirstOrThrow
   */
  export type PostViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostView to fetch.
     */
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViews.
     */
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViews.
     */
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * PostView findMany
   */
  export type PostViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostViews to fetch.
     */
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostViews.
     */
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * PostView create
   */
  export type PostViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * The data needed to create a PostView.
     */
    data: XOR<PostViewCreateInput, PostViewUncheckedCreateInput>
  }

  /**
   * PostView createMany
   */
  export type PostViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostViews.
     */
    data: PostViewCreateManyInput | PostViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostView update
   */
  export type PostViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * The data needed to update a PostView.
     */
    data: XOR<PostViewUpdateInput, PostViewUncheckedUpdateInput>
    /**
     * Choose, which PostView to update.
     */
    where: PostViewWhereUniqueInput
  }

  /**
   * PostView updateMany
   */
  export type PostViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostViews.
     */
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyInput>
    /**
     * Filter which PostViews to update
     */
    where?: PostViewWhereInput
    /**
     * Limit how many PostViews to update.
     */
    limit?: number
  }

  /**
   * PostView upsert
   */
  export type PostViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * The filter to search for the PostView to update in case it exists.
     */
    where: PostViewWhereUniqueInput
    /**
     * In case the PostView found by the `where` argument doesn't exist, create a new PostView with this data.
     */
    create: XOR<PostViewCreateInput, PostViewUncheckedCreateInput>
    /**
     * In case the PostView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostViewUpdateInput, PostViewUncheckedUpdateInput>
  }

  /**
   * PostView delete
   */
  export type PostViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter which PostView to delete.
     */
    where: PostViewWhereUniqueInput
  }

  /**
   * PostView deleteMany
   */
  export type PostViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostViews to delete
     */
    where?: PostViewWhereInput
    /**
     * Limit how many PostViews to delete.
     */
    limit?: number
  }

  /**
   * PostView without action
   */
  export type PostViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
  }


  /**
   * Model Hashtag
   */

  export type AggregateHashtag = {
    _count: HashtagCountAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  export type HashtagMinAggregateOutputType = {
    value: string | null
  }

  export type HashtagMaxAggregateOutputType = {
    value: string | null
  }

  export type HashtagCountAggregateOutputType = {
    value: number
    _all: number
  }


  export type HashtagMinAggregateInputType = {
    value?: true
  }

  export type HashtagMaxAggregateInputType = {
    value?: true
  }

  export type HashtagCountAggregateInputType = {
    value?: true
    _all?: true
  }

  export type HashtagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtag to aggregate.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hashtags
    **/
    _count?: true | HashtagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HashtagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HashtagMaxAggregateInputType
  }

  export type GetHashtagAggregateType<T extends HashtagAggregateArgs> = {
        [P in keyof T & keyof AggregateHashtag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHashtag[P]>
      : GetScalarType<T[P], AggregateHashtag[P]>
  }




  export type HashtagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HashtagWhereInput
    orderBy?: HashtagOrderByWithAggregationInput | HashtagOrderByWithAggregationInput[]
    by: HashtagScalarFieldEnum[] | HashtagScalarFieldEnum
    having?: HashtagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HashtagCountAggregateInputType | true
    _min?: HashtagMinAggregateInputType
    _max?: HashtagMaxAggregateInputType
  }

  export type HashtagGroupByOutputType = {
    value: string
    _count: HashtagCountAggregateOutputType | null
    _min: HashtagMinAggregateOutputType | null
    _max: HashtagMaxAggregateOutputType | null
  }

  type GetHashtagGroupByPayload<T extends HashtagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HashtagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HashtagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HashtagGroupByOutputType[P]>
            : GetScalarType<T[P], HashtagGroupByOutputType[P]>
        }
      >
    >


  export type HashtagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    value?: boolean
    posts?: boolean | Hashtag$postsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hashtag"]>



  export type HashtagSelectScalar = {
    value?: boolean
  }

  export type HashtagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"value", ExtArgs["result"]["hashtag"]>
  export type HashtagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Hashtag$postsArgs<ExtArgs>
    _count?: boolean | HashtagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HashtagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hashtag"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      value: string
    }, ExtArgs["result"]["hashtag"]>
    composites: {}
  }

  type HashtagGetPayload<S extends boolean | null | undefined | HashtagDefaultArgs> = $Result.GetResult<Prisma.$HashtagPayload, S>

  type HashtagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HashtagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HashtagCountAggregateInputType | true
    }

  export interface HashtagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hashtag'], meta: { name: 'Hashtag' } }
    /**
     * Find zero or one Hashtag that matches the filter.
     * @param {HashtagFindUniqueArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HashtagFindUniqueArgs>(args: SelectSubset<T, HashtagFindUniqueArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hashtag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HashtagFindUniqueOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HashtagFindUniqueOrThrowArgs>(args: SelectSubset<T, HashtagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hashtag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HashtagFindFirstArgs>(args?: SelectSubset<T, HashtagFindFirstArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hashtag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindFirstOrThrowArgs} args - Arguments to find a Hashtag
     * @example
     * // Get one Hashtag
     * const hashtag = await prisma.hashtag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HashtagFindFirstOrThrowArgs>(args?: SelectSubset<T, HashtagFindFirstOrThrowArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hashtags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hashtags
     * const hashtags = await prisma.hashtag.findMany()
     * 
     * // Get first 10 Hashtags
     * const hashtags = await prisma.hashtag.findMany({ take: 10 })
     * 
     * // Only select the `value`
     * const hashtagWithValueOnly = await prisma.hashtag.findMany({ select: { value: true } })
     * 
     */
    findMany<T extends HashtagFindManyArgs>(args?: SelectSubset<T, HashtagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hashtag.
     * @param {HashtagCreateArgs} args - Arguments to create a Hashtag.
     * @example
     * // Create one Hashtag
     * const Hashtag = await prisma.hashtag.create({
     *   data: {
     *     // ... data to create a Hashtag
     *   }
     * })
     * 
     */
    create<T extends HashtagCreateArgs>(args: SelectSubset<T, HashtagCreateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hashtags.
     * @param {HashtagCreateManyArgs} args - Arguments to create many Hashtags.
     * @example
     * // Create many Hashtags
     * const hashtag = await prisma.hashtag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HashtagCreateManyArgs>(args?: SelectSubset<T, HashtagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hashtag.
     * @param {HashtagDeleteArgs} args - Arguments to delete one Hashtag.
     * @example
     * // Delete one Hashtag
     * const Hashtag = await prisma.hashtag.delete({
     *   where: {
     *     // ... filter to delete one Hashtag
     *   }
     * })
     * 
     */
    delete<T extends HashtagDeleteArgs>(args: SelectSubset<T, HashtagDeleteArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hashtag.
     * @param {HashtagUpdateArgs} args - Arguments to update one Hashtag.
     * @example
     * // Update one Hashtag
     * const hashtag = await prisma.hashtag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HashtagUpdateArgs>(args: SelectSubset<T, HashtagUpdateArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hashtags.
     * @param {HashtagDeleteManyArgs} args - Arguments to filter Hashtags to delete.
     * @example
     * // Delete a few Hashtags
     * const { count } = await prisma.hashtag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HashtagDeleteManyArgs>(args?: SelectSubset<T, HashtagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hashtags
     * const hashtag = await prisma.hashtag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HashtagUpdateManyArgs>(args: SelectSubset<T, HashtagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hashtag.
     * @param {HashtagUpsertArgs} args - Arguments to update or create a Hashtag.
     * @example
     * // Update or create a Hashtag
     * const hashtag = await prisma.hashtag.upsert({
     *   create: {
     *     // ... data to create a Hashtag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hashtag we want to update
     *   }
     * })
     */
    upsert<T extends HashtagUpsertArgs>(args: SelectSubset<T, HashtagUpsertArgs<ExtArgs>>): Prisma__HashtagClient<$Result.GetResult<Prisma.$HashtagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hashtags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagCountArgs} args - Arguments to filter Hashtags to count.
     * @example
     * // Count the number of Hashtags
     * const count = await prisma.hashtag.count({
     *   where: {
     *     // ... the filter for the Hashtags we want to count
     *   }
     * })
    **/
    count<T extends HashtagCountArgs>(
      args?: Subset<T, HashtagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HashtagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HashtagAggregateArgs>(args: Subset<T, HashtagAggregateArgs>): Prisma.PrismaPromise<GetHashtagAggregateType<T>>

    /**
     * Group by Hashtag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HashtagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HashtagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HashtagGroupByArgs['orderBy'] }
        : { orderBy?: HashtagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HashtagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHashtagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hashtag model
   */
  readonly fields: HashtagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hashtag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HashtagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Hashtag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Hashtag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hashtag model
   */
  interface HashtagFieldRefs {
    readonly value: FieldRef<"Hashtag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Hashtag findUnique
   */
  export type HashtagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findUniqueOrThrow
   */
  export type HashtagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag findFirst
   */
  export type HashtagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findFirstOrThrow
   */
  export type HashtagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtag to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hashtags.
     */
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag findMany
   */
  export type HashtagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter, which Hashtags to fetch.
     */
    where?: HashtagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hashtags to fetch.
     */
    orderBy?: HashtagOrderByWithRelationInput | HashtagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hashtags.
     */
    cursor?: HashtagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hashtags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hashtags.
     */
    skip?: number
    distinct?: HashtagScalarFieldEnum | HashtagScalarFieldEnum[]
  }

  /**
   * Hashtag create
   */
  export type HashtagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to create a Hashtag.
     */
    data: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
  }

  /**
   * Hashtag createMany
   */
  export type HashtagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hashtags.
     */
    data: HashtagCreateManyInput | HashtagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hashtag update
   */
  export type HashtagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The data needed to update a Hashtag.
     */
    data: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
    /**
     * Choose, which Hashtag to update.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag updateMany
   */
  export type HashtagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hashtags.
     */
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyInput>
    /**
     * Filter which Hashtags to update
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to update.
     */
    limit?: number
  }

  /**
   * Hashtag upsert
   */
  export type HashtagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * The filter to search for the Hashtag to update in case it exists.
     */
    where: HashtagWhereUniqueInput
    /**
     * In case the Hashtag found by the `where` argument doesn't exist, create a new Hashtag with this data.
     */
    create: XOR<HashtagCreateInput, HashtagUncheckedCreateInput>
    /**
     * In case the Hashtag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HashtagUpdateInput, HashtagUncheckedUpdateInput>
  }

  /**
   * Hashtag delete
   */
  export type HashtagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
    /**
     * Filter which Hashtag to delete.
     */
    where: HashtagWhereUniqueInput
  }

  /**
   * Hashtag deleteMany
   */
  export type HashtagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hashtags to delete
     */
    where?: HashtagWhereInput
    /**
     * Limit how many Hashtags to delete.
     */
    limit?: number
  }

  /**
   * Hashtag.posts
   */
  export type Hashtag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Hashtag without action
   */
  export type HashtagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hashtag
     */
    select?: HashtagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hashtag
     */
    omit?: HashtagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HashtagInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    comment_id: string | null
    message: string | null
    viewed: boolean | null
    timestamp: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    comment_id: string | null
    message: string | null
    viewed: boolean | null
    timestamp: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    user_id: number
    post_id: number
    comment_id: number
    message: number
    viewed: number
    timestamp: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_id?: true
    message?: true
    viewed?: true
    timestamp?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_id?: true
    message?: true
    viewed?: true
    timestamp?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_id?: true
    message?: true
    viewed?: true
    timestamp?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    user_id: string
    post_id: string | null
    comment_id: string | null
    message: string
    viewed: boolean
    timestamp: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    comment_id?: boolean
    message?: boolean
    viewed?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Notification$postArgs<ExtArgs>
    comment?: boolean | Notification$commentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    comment_id?: boolean
    message?: boolean
    viewed?: boolean
    timestamp?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "post_id" | "comment_id" | "message" | "viewed" | "timestamp", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Notification$postArgs<ExtArgs>
    comment?: boolean | Notification$commentArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      post_id: string | null
      comment_id: string | null
      message: string
      viewed: boolean
      timestamp: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Notification$postArgs<ExtArgs> = {}>(args?: Subset<T, Notification$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Notification$commentArgs<ExtArgs> = {}>(args?: Subset<T, Notification$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly user_id: FieldRef<"Notification", 'String'>
    readonly post_id: FieldRef<"Notification", 'String'>
    readonly comment_id: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly viewed: FieldRef<"Notification", 'Boolean'>
    readonly timestamp: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.post
   */
  export type Notification$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Notification.comment
   */
  export type Notification$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model SubscribedPost
   */

  export type AggregateSubscribedPost = {
    _count: SubscribedPostCountAggregateOutputType | null
    _min: SubscribedPostMinAggregateOutputType | null
    _max: SubscribedPostMaxAggregateOutputType | null
  }

  export type SubscribedPostMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    timestamp: Date | null
  }

  export type SubscribedPostMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    timestamp: Date | null
  }

  export type SubscribedPostCountAggregateOutputType = {
    id: number
    user_id: number
    post_id: number
    timestamp: number
    _all: number
  }


  export type SubscribedPostMinAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    timestamp?: true
  }

  export type SubscribedPostMaxAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    timestamp?: true
  }

  export type SubscribedPostCountAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    timestamp?: true
    _all?: true
  }

  export type SubscribedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscribedPost to aggregate.
     */
    where?: SubscribedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscribedPosts to fetch.
     */
    orderBy?: SubscribedPostOrderByWithRelationInput | SubscribedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscribedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscribedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscribedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscribedPosts
    **/
    _count?: true | SubscribedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscribedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscribedPostMaxAggregateInputType
  }

  export type GetSubscribedPostAggregateType<T extends SubscribedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscribedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscribedPost[P]>
      : GetScalarType<T[P], AggregateSubscribedPost[P]>
  }




  export type SubscribedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscribedPostWhereInput
    orderBy?: SubscribedPostOrderByWithAggregationInput | SubscribedPostOrderByWithAggregationInput[]
    by: SubscribedPostScalarFieldEnum[] | SubscribedPostScalarFieldEnum
    having?: SubscribedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscribedPostCountAggregateInputType | true
    _min?: SubscribedPostMinAggregateInputType
    _max?: SubscribedPostMaxAggregateInputType
  }

  export type SubscribedPostGroupByOutputType = {
    id: string
    user_id: string
    post_id: string
    timestamp: Date
    _count: SubscribedPostCountAggregateOutputType | null
    _min: SubscribedPostMinAggregateOutputType | null
    _max: SubscribedPostMaxAggregateOutputType | null
  }

  type GetSubscribedPostGroupByPayload<T extends SubscribedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscribedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscribedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscribedPostGroupByOutputType[P]>
            : GetScalarType<T[P], SubscribedPostGroupByOutputType[P]>
        }
      >
    >


  export type SubscribedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscribedPost"]>



  export type SubscribedPostSelectScalar = {
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    timestamp?: boolean
  }

  export type SubscribedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "post_id" | "timestamp", ExtArgs["result"]["subscribedPost"]>
  export type SubscribedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $SubscribedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscribedPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      post_id: string
      timestamp: Date
    }, ExtArgs["result"]["subscribedPost"]>
    composites: {}
  }

  type SubscribedPostGetPayload<S extends boolean | null | undefined | SubscribedPostDefaultArgs> = $Result.GetResult<Prisma.$SubscribedPostPayload, S>

  type SubscribedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscribedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscribedPostCountAggregateInputType | true
    }

  export interface SubscribedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscribedPost'], meta: { name: 'SubscribedPost' } }
    /**
     * Find zero or one SubscribedPost that matches the filter.
     * @param {SubscribedPostFindUniqueArgs} args - Arguments to find a SubscribedPost
     * @example
     * // Get one SubscribedPost
     * const subscribedPost = await prisma.subscribedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscribedPostFindUniqueArgs>(args: SelectSubset<T, SubscribedPostFindUniqueArgs<ExtArgs>>): Prisma__SubscribedPostClient<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscribedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscribedPostFindUniqueOrThrowArgs} args - Arguments to find a SubscribedPost
     * @example
     * // Get one SubscribedPost
     * const subscribedPost = await prisma.subscribedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscribedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscribedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscribedPostClient<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscribedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribedPostFindFirstArgs} args - Arguments to find a SubscribedPost
     * @example
     * // Get one SubscribedPost
     * const subscribedPost = await prisma.subscribedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscribedPostFindFirstArgs>(args?: SelectSubset<T, SubscribedPostFindFirstArgs<ExtArgs>>): Prisma__SubscribedPostClient<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscribedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribedPostFindFirstOrThrowArgs} args - Arguments to find a SubscribedPost
     * @example
     * // Get one SubscribedPost
     * const subscribedPost = await prisma.subscribedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscribedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscribedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscribedPostClient<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscribedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscribedPosts
     * const subscribedPosts = await prisma.subscribedPost.findMany()
     * 
     * // Get first 10 SubscribedPosts
     * const subscribedPosts = await prisma.subscribedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscribedPostWithIdOnly = await prisma.subscribedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscribedPostFindManyArgs>(args?: SelectSubset<T, SubscribedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscribedPost.
     * @param {SubscribedPostCreateArgs} args - Arguments to create a SubscribedPost.
     * @example
     * // Create one SubscribedPost
     * const SubscribedPost = await prisma.subscribedPost.create({
     *   data: {
     *     // ... data to create a SubscribedPost
     *   }
     * })
     * 
     */
    create<T extends SubscribedPostCreateArgs>(args: SelectSubset<T, SubscribedPostCreateArgs<ExtArgs>>): Prisma__SubscribedPostClient<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscribedPosts.
     * @param {SubscribedPostCreateManyArgs} args - Arguments to create many SubscribedPosts.
     * @example
     * // Create many SubscribedPosts
     * const subscribedPost = await prisma.subscribedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscribedPostCreateManyArgs>(args?: SelectSubset<T, SubscribedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubscribedPost.
     * @param {SubscribedPostDeleteArgs} args - Arguments to delete one SubscribedPost.
     * @example
     * // Delete one SubscribedPost
     * const SubscribedPost = await prisma.subscribedPost.delete({
     *   where: {
     *     // ... filter to delete one SubscribedPost
     *   }
     * })
     * 
     */
    delete<T extends SubscribedPostDeleteArgs>(args: SelectSubset<T, SubscribedPostDeleteArgs<ExtArgs>>): Prisma__SubscribedPostClient<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscribedPost.
     * @param {SubscribedPostUpdateArgs} args - Arguments to update one SubscribedPost.
     * @example
     * // Update one SubscribedPost
     * const subscribedPost = await prisma.subscribedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscribedPostUpdateArgs>(args: SelectSubset<T, SubscribedPostUpdateArgs<ExtArgs>>): Prisma__SubscribedPostClient<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscribedPosts.
     * @param {SubscribedPostDeleteManyArgs} args - Arguments to filter SubscribedPosts to delete.
     * @example
     * // Delete a few SubscribedPosts
     * const { count } = await prisma.subscribedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscribedPostDeleteManyArgs>(args?: SelectSubset<T, SubscribedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscribedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscribedPosts
     * const subscribedPost = await prisma.subscribedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscribedPostUpdateManyArgs>(args: SelectSubset<T, SubscribedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscribedPost.
     * @param {SubscribedPostUpsertArgs} args - Arguments to update or create a SubscribedPost.
     * @example
     * // Update or create a SubscribedPost
     * const subscribedPost = await prisma.subscribedPost.upsert({
     *   create: {
     *     // ... data to create a SubscribedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscribedPost we want to update
     *   }
     * })
     */
    upsert<T extends SubscribedPostUpsertArgs>(args: SelectSubset<T, SubscribedPostUpsertArgs<ExtArgs>>): Prisma__SubscribedPostClient<$Result.GetResult<Prisma.$SubscribedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscribedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribedPostCountArgs} args - Arguments to filter SubscribedPosts to count.
     * @example
     * // Count the number of SubscribedPosts
     * const count = await prisma.subscribedPost.count({
     *   where: {
     *     // ... the filter for the SubscribedPosts we want to count
     *   }
     * })
    **/
    count<T extends SubscribedPostCountArgs>(
      args?: Subset<T, SubscribedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscribedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscribedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscribedPostAggregateArgs>(args: Subset<T, SubscribedPostAggregateArgs>): Prisma.PrismaPromise<GetSubscribedPostAggregateType<T>>

    /**
     * Group by SubscribedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscribedPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscribedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscribedPostGroupByArgs['orderBy'] }
        : { orderBy?: SubscribedPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscribedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscribedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscribedPost model
   */
  readonly fields: SubscribedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscribedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscribedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscribedPost model
   */
  interface SubscribedPostFieldRefs {
    readonly id: FieldRef<"SubscribedPost", 'String'>
    readonly user_id: FieldRef<"SubscribedPost", 'String'>
    readonly post_id: FieldRef<"SubscribedPost", 'String'>
    readonly timestamp: FieldRef<"SubscribedPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscribedPost findUnique
   */
  export type SubscribedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * Filter, which SubscribedPost to fetch.
     */
    where: SubscribedPostWhereUniqueInput
  }

  /**
   * SubscribedPost findUniqueOrThrow
   */
  export type SubscribedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * Filter, which SubscribedPost to fetch.
     */
    where: SubscribedPostWhereUniqueInput
  }

  /**
   * SubscribedPost findFirst
   */
  export type SubscribedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * Filter, which SubscribedPost to fetch.
     */
    where?: SubscribedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscribedPosts to fetch.
     */
    orderBy?: SubscribedPostOrderByWithRelationInput | SubscribedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscribedPosts.
     */
    cursor?: SubscribedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscribedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscribedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscribedPosts.
     */
    distinct?: SubscribedPostScalarFieldEnum | SubscribedPostScalarFieldEnum[]
  }

  /**
   * SubscribedPost findFirstOrThrow
   */
  export type SubscribedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * Filter, which SubscribedPost to fetch.
     */
    where?: SubscribedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscribedPosts to fetch.
     */
    orderBy?: SubscribedPostOrderByWithRelationInput | SubscribedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscribedPosts.
     */
    cursor?: SubscribedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscribedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscribedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscribedPosts.
     */
    distinct?: SubscribedPostScalarFieldEnum | SubscribedPostScalarFieldEnum[]
  }

  /**
   * SubscribedPost findMany
   */
  export type SubscribedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * Filter, which SubscribedPosts to fetch.
     */
    where?: SubscribedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscribedPosts to fetch.
     */
    orderBy?: SubscribedPostOrderByWithRelationInput | SubscribedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscribedPosts.
     */
    cursor?: SubscribedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscribedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscribedPosts.
     */
    skip?: number
    distinct?: SubscribedPostScalarFieldEnum | SubscribedPostScalarFieldEnum[]
  }

  /**
   * SubscribedPost create
   */
  export type SubscribedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscribedPost.
     */
    data: XOR<SubscribedPostCreateInput, SubscribedPostUncheckedCreateInput>
  }

  /**
   * SubscribedPost createMany
   */
  export type SubscribedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscribedPosts.
     */
    data: SubscribedPostCreateManyInput | SubscribedPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscribedPost update
   */
  export type SubscribedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscribedPost.
     */
    data: XOR<SubscribedPostUpdateInput, SubscribedPostUncheckedUpdateInput>
    /**
     * Choose, which SubscribedPost to update.
     */
    where: SubscribedPostWhereUniqueInput
  }

  /**
   * SubscribedPost updateMany
   */
  export type SubscribedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscribedPosts.
     */
    data: XOR<SubscribedPostUpdateManyMutationInput, SubscribedPostUncheckedUpdateManyInput>
    /**
     * Filter which SubscribedPosts to update
     */
    where?: SubscribedPostWhereInput
    /**
     * Limit how many SubscribedPosts to update.
     */
    limit?: number
  }

  /**
   * SubscribedPost upsert
   */
  export type SubscribedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscribedPost to update in case it exists.
     */
    where: SubscribedPostWhereUniqueInput
    /**
     * In case the SubscribedPost found by the `where` argument doesn't exist, create a new SubscribedPost with this data.
     */
    create: XOR<SubscribedPostCreateInput, SubscribedPostUncheckedCreateInput>
    /**
     * In case the SubscribedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscribedPostUpdateInput, SubscribedPostUncheckedUpdateInput>
  }

  /**
   * SubscribedPost delete
   */
  export type SubscribedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
    /**
     * Filter which SubscribedPost to delete.
     */
    where: SubscribedPostWhereUniqueInput
  }

  /**
   * SubscribedPost deleteMany
   */
  export type SubscribedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscribedPosts to delete
     */
    where?: SubscribedPostWhereInput
    /**
     * Limit how many SubscribedPosts to delete.
     */
    limit?: number
  }

  /**
   * SubscribedPost without action
   */
  export type SubscribedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscribedPost
     */
    select?: SubscribedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscribedPost
     */
    omit?: SubscribedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscribedPostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    bio: 'bio',
    timestamp: 'timestamp'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    body: 'body',
    timestamp: 'timestamp'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    parent_comment_id: 'parent_comment_id',
    content: 'content',
    timestamp: 'timestamp'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PostVoteScalarFieldEnum: {
    post_id: 'post_id',
    user_id: 'user_id',
    vote_type: 'vote_type'
  };

  export type PostVoteScalarFieldEnum = (typeof PostVoteScalarFieldEnum)[keyof typeof PostVoteScalarFieldEnum]


  export const CommentVoteScalarFieldEnum: {
    comment_id: 'comment_id',
    user_id: 'user_id',
    vote_type: 'vote_type'
  };

  export type CommentVoteScalarFieldEnum = (typeof CommentVoteScalarFieldEnum)[keyof typeof CommentVoteScalarFieldEnum]


  export const PostViewScalarFieldEnum: {
    post_id: 'post_id',
    user_id: 'user_id'
  };

  export type PostViewScalarFieldEnum = (typeof PostViewScalarFieldEnum)[keyof typeof PostViewScalarFieldEnum]


  export const HashtagScalarFieldEnum: {
    value: 'value'
  };

  export type HashtagScalarFieldEnum = (typeof HashtagScalarFieldEnum)[keyof typeof HashtagScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    comment_id: 'comment_id',
    message: 'message',
    viewed: 'viewed',
    timestamp: 'timestamp'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SubscribedPostScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    timestamp: 'timestamp'
  };

  export type SubscribedPostScalarFieldEnum = (typeof SubscribedPostScalarFieldEnum)[keyof typeof SubscribedPostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    bio: 'bio'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    body: 'body'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    parent_comment_id: 'parent_comment_id',
    content: 'content'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const PostVoteOrderByRelevanceFieldEnum: {
    post_id: 'post_id',
    user_id: 'user_id',
    vote_type: 'vote_type'
  };

  export type PostVoteOrderByRelevanceFieldEnum = (typeof PostVoteOrderByRelevanceFieldEnum)[keyof typeof PostVoteOrderByRelevanceFieldEnum]


  export const CommentVoteOrderByRelevanceFieldEnum: {
    comment_id: 'comment_id',
    user_id: 'user_id',
    vote_type: 'vote_type'
  };

  export type CommentVoteOrderByRelevanceFieldEnum = (typeof CommentVoteOrderByRelevanceFieldEnum)[keyof typeof CommentVoteOrderByRelevanceFieldEnum]


  export const PostViewOrderByRelevanceFieldEnum: {
    post_id: 'post_id',
    user_id: 'user_id'
  };

  export type PostViewOrderByRelevanceFieldEnum = (typeof PostViewOrderByRelevanceFieldEnum)[keyof typeof PostViewOrderByRelevanceFieldEnum]


  export const HashtagOrderByRelevanceFieldEnum: {
    value: 'value'
  };

  export type HashtagOrderByRelevanceFieldEnum = (typeof HashtagOrderByRelevanceFieldEnum)[keyof typeof HashtagOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    comment_id: 'comment_id',
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const SubscribedPostOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id'
  };

  export type SubscribedPostOrderByRelevanceFieldEnum = (typeof SubscribedPostOrderByRelevanceFieldEnum)[keyof typeof SubscribedPostOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    timestamp?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    PostView?: PostViewListRelationFilter
    Notification?: NotificationListRelationFilter
    SubscribedPost?: SubscribedPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    PostView?: PostViewOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
    SubscribedPost?: SubscribedPostOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    bio?: StringNullableFilter<"User"> | string | null
    timestamp?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    PostView?: PostViewListRelationFilter
    Notification?: NotificationListRelationFilter
    SubscribedPost?: SubscribedPostListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    user_id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    timestamp?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hashtags?: HashtagListRelationFilter
    comments?: CommentListRelationFilter
    PostView?: PostViewListRelationFilter
    Notification?: NotificationListRelationFilter
    SubscribedPost?: SubscribedPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    hashtags?: HashtagOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    PostView?: PostViewOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
    SubscribedPost?: SubscribedPostOrderByRelationAggregateInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    user_id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    timestamp?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    hashtags?: HashtagListRelationFilter
    comments?: CommentListRelationFilter
    PostView?: PostViewListRelationFilter
    Notification?: NotificationListRelationFilter
    SubscribedPost?: SubscribedPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    user_id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    body?: StringWithAggregatesFilter<"Post"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    user_id?: StringFilter<"Comment"> | string
    post_id?: StringFilter<"Comment"> | string
    parent_comment_id?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parentComment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    comments?: CommentListRelationFilter
    Notification?: NotificationListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    parent_comment_id?: SortOrderInput | SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    parentComment?: CommentOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    Notification?: NotificationOrderByRelationAggregateInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    user_id?: StringFilter<"Comment"> | string
    post_id?: StringFilter<"Comment"> | string
    parent_comment_id?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parentComment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    comments?: CommentListRelationFilter
    Notification?: NotificationListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    parent_comment_id?: SortOrderInput | SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    user_id?: StringWithAggregatesFilter<"Comment"> | string
    post_id?: StringWithAggregatesFilter<"Comment"> | string
    parent_comment_id?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    content?: StringWithAggregatesFilter<"Comment"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type PostVoteWhereInput = {
    AND?: PostVoteWhereInput | PostVoteWhereInput[]
    OR?: PostVoteWhereInput[]
    NOT?: PostVoteWhereInput | PostVoteWhereInput[]
    post_id?: StringFilter<"PostVote"> | string
    user_id?: StringFilter<"PostVote"> | string
    vote_type?: StringFilter<"PostVote"> | string
  }

  export type PostVoteOrderByWithRelationInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
    _relevance?: PostVoteOrderByRelevanceInput
  }

  export type PostVoteWhereUniqueInput = Prisma.AtLeast<{
    post_id_user_id?: PostVotePost_idUser_idCompoundUniqueInput
    AND?: PostVoteWhereInput | PostVoteWhereInput[]
    OR?: PostVoteWhereInput[]
    NOT?: PostVoteWhereInput | PostVoteWhereInput[]
    post_id?: StringFilter<"PostVote"> | string
    user_id?: StringFilter<"PostVote"> | string
    vote_type?: StringFilter<"PostVote"> | string
  }, "post_id_user_id">

  export type PostVoteOrderByWithAggregationInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
    _count?: PostVoteCountOrderByAggregateInput
    _max?: PostVoteMaxOrderByAggregateInput
    _min?: PostVoteMinOrderByAggregateInput
  }

  export type PostVoteScalarWhereWithAggregatesInput = {
    AND?: PostVoteScalarWhereWithAggregatesInput | PostVoteScalarWhereWithAggregatesInput[]
    OR?: PostVoteScalarWhereWithAggregatesInput[]
    NOT?: PostVoteScalarWhereWithAggregatesInput | PostVoteScalarWhereWithAggregatesInput[]
    post_id?: StringWithAggregatesFilter<"PostVote"> | string
    user_id?: StringWithAggregatesFilter<"PostVote"> | string
    vote_type?: StringWithAggregatesFilter<"PostVote"> | string
  }

  export type CommentVoteWhereInput = {
    AND?: CommentVoteWhereInput | CommentVoteWhereInput[]
    OR?: CommentVoteWhereInput[]
    NOT?: CommentVoteWhereInput | CommentVoteWhereInput[]
    comment_id?: StringFilter<"CommentVote"> | string
    user_id?: StringFilter<"CommentVote"> | string
    vote_type?: StringFilter<"CommentVote"> | string
  }

  export type CommentVoteOrderByWithRelationInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
    _relevance?: CommentVoteOrderByRelevanceInput
  }

  export type CommentVoteWhereUniqueInput = Prisma.AtLeast<{
    comment_id_user_id?: CommentVoteComment_idUser_idCompoundUniqueInput
    AND?: CommentVoteWhereInput | CommentVoteWhereInput[]
    OR?: CommentVoteWhereInput[]
    NOT?: CommentVoteWhereInput | CommentVoteWhereInput[]
    comment_id?: StringFilter<"CommentVote"> | string
    user_id?: StringFilter<"CommentVote"> | string
    vote_type?: StringFilter<"CommentVote"> | string
  }, "comment_id_user_id">

  export type CommentVoteOrderByWithAggregationInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
    _count?: CommentVoteCountOrderByAggregateInput
    _max?: CommentVoteMaxOrderByAggregateInput
    _min?: CommentVoteMinOrderByAggregateInput
  }

  export type CommentVoteScalarWhereWithAggregatesInput = {
    AND?: CommentVoteScalarWhereWithAggregatesInput | CommentVoteScalarWhereWithAggregatesInput[]
    OR?: CommentVoteScalarWhereWithAggregatesInput[]
    NOT?: CommentVoteScalarWhereWithAggregatesInput | CommentVoteScalarWhereWithAggregatesInput[]
    comment_id?: StringWithAggregatesFilter<"CommentVote"> | string
    user_id?: StringWithAggregatesFilter<"CommentVote"> | string
    vote_type?: StringWithAggregatesFilter<"CommentVote"> | string
  }

  export type PostViewWhereInput = {
    AND?: PostViewWhereInput | PostViewWhereInput[]
    OR?: PostViewWhereInput[]
    NOT?: PostViewWhereInput | PostViewWhereInput[]
    post_id?: StringFilter<"PostView"> | string
    user_id?: StringFilter<"PostView"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostViewOrderByWithRelationInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PostViewOrderByRelevanceInput
  }

  export type PostViewWhereUniqueInput = Prisma.AtLeast<{
    post_id_user_id?: PostViewPost_idUser_idCompoundUniqueInput
    AND?: PostViewWhereInput | PostViewWhereInput[]
    OR?: PostViewWhereInput[]
    NOT?: PostViewWhereInput | PostViewWhereInput[]
    post_id?: StringFilter<"PostView"> | string
    user_id?: StringFilter<"PostView"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "post_id_user_id">

  export type PostViewOrderByWithAggregationInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    _count?: PostViewCountOrderByAggregateInput
    _max?: PostViewMaxOrderByAggregateInput
    _min?: PostViewMinOrderByAggregateInput
  }

  export type PostViewScalarWhereWithAggregatesInput = {
    AND?: PostViewScalarWhereWithAggregatesInput | PostViewScalarWhereWithAggregatesInput[]
    OR?: PostViewScalarWhereWithAggregatesInput[]
    NOT?: PostViewScalarWhereWithAggregatesInput | PostViewScalarWhereWithAggregatesInput[]
    post_id?: StringWithAggregatesFilter<"PostView"> | string
    user_id?: StringWithAggregatesFilter<"PostView"> | string
  }

  export type HashtagWhereInput = {
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    value?: StringFilter<"Hashtag"> | string
    posts?: PostListRelationFilter
  }

  export type HashtagOrderByWithRelationInput = {
    value?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    _relevance?: HashtagOrderByRelevanceInput
  }

  export type HashtagWhereUniqueInput = Prisma.AtLeast<{
    value?: string
    AND?: HashtagWhereInput | HashtagWhereInput[]
    OR?: HashtagWhereInput[]
    NOT?: HashtagWhereInput | HashtagWhereInput[]
    posts?: PostListRelationFilter
  }, "value">

  export type HashtagOrderByWithAggregationInput = {
    value?: SortOrder
    _count?: HashtagCountOrderByAggregateInput
    _max?: HashtagMaxOrderByAggregateInput
    _min?: HashtagMinOrderByAggregateInput
  }

  export type HashtagScalarWhereWithAggregatesInput = {
    AND?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    OR?: HashtagScalarWhereWithAggregatesInput[]
    NOT?: HashtagScalarWhereWithAggregatesInput | HashtagScalarWhereWithAggregatesInput[]
    value?: StringWithAggregatesFilter<"Hashtag"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    user_id?: StringFilter<"Notification"> | string
    post_id?: StringNullableFilter<"Notification"> | string | null
    comment_id?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    viewed?: BoolFilter<"Notification"> | boolean
    timestamp?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    comment_id?: SortOrderInput | SortOrder
    message?: SortOrder
    viewed?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    user_id?: StringFilter<"Notification"> | string
    post_id?: StringNullableFilter<"Notification"> | string | null
    comment_id?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    viewed?: BoolFilter<"Notification"> | boolean
    timestamp?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    comment_id?: SortOrderInput | SortOrder
    message?: SortOrder
    viewed?: SortOrder
    timestamp?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    user_id?: StringWithAggregatesFilter<"Notification"> | string
    post_id?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    comment_id?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    viewed?: BoolWithAggregatesFilter<"Notification"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type SubscribedPostWhereInput = {
    AND?: SubscribedPostWhereInput | SubscribedPostWhereInput[]
    OR?: SubscribedPostWhereInput[]
    NOT?: SubscribedPostWhereInput | SubscribedPostWhereInput[]
    id?: StringFilter<"SubscribedPost"> | string
    user_id?: StringFilter<"SubscribedPost"> | string
    post_id?: StringFilter<"SubscribedPost"> | string
    timestamp?: DateTimeFilter<"SubscribedPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type SubscribedPostOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    _relevance?: SubscribedPostOrderByRelevanceInput
  }

  export type SubscribedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_post_id?: SubscribedPostUser_idPost_idCompoundUniqueInput
    AND?: SubscribedPostWhereInput | SubscribedPostWhereInput[]
    OR?: SubscribedPostWhereInput[]
    NOT?: SubscribedPostWhereInput | SubscribedPostWhereInput[]
    user_id?: StringFilter<"SubscribedPost"> | string
    post_id?: StringFilter<"SubscribedPost"> | string
    timestamp?: DateTimeFilter<"SubscribedPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "user_id_post_id">

  export type SubscribedPostOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    timestamp?: SortOrder
    _count?: SubscribedPostCountOrderByAggregateInput
    _max?: SubscribedPostMaxOrderByAggregateInput
    _min?: SubscribedPostMinOrderByAggregateInput
  }

  export type SubscribedPostScalarWhereWithAggregatesInput = {
    AND?: SubscribedPostScalarWhereWithAggregatesInput | SubscribedPostScalarWhereWithAggregatesInput[]
    OR?: SubscribedPostScalarWhereWithAggregatesInput[]
    NOT?: SubscribedPostScalarWhereWithAggregatesInput | SubscribedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscribedPost"> | string
    user_id?: StringWithAggregatesFilter<"SubscribedPost"> | string
    post_id?: StringWithAggregatesFilter<"SubscribedPost"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SubscribedPost"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    PostView?: PostViewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    PostView?: PostViewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    hashtags?: HashtagCreateNestedManyWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    PostView?: PostViewCreateNestedManyWithoutPostInput
    Notification?: NotificationCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    user_id: string
    title: string
    body: string
    timestamp?: Date | string
    hashtags?: HashtagUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutPostInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: HashtagUpdateManyWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    PostView?: PostViewUpdateManyWithoutPostNestedInput
    Notification?: NotificationUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: HashtagUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    user_id: string
    title: string
    body: string
    timestamp?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutParentCommentInput
    Notification?: NotificationCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    user_id: string
    post_id: string
    parent_comment_id?: string | null
    content: string
    timestamp?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutCommentsNestedInput
    comments?: CommentUpdateManyWithoutParentCommentNestedInput
    Notification?: NotificationUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    user_id: string
    post_id: string
    parent_comment_id?: string | null
    content: string
    timestamp?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteCreateInput = {
    post_id: string
    user_id: string
    vote_type: string
  }

  export type PostVoteUncheckedCreateInput = {
    post_id: string
    user_id: string
    vote_type: string
  }

  export type PostVoteUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vote_type?: StringFieldUpdateOperationsInput | string
  }

  export type PostVoteUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vote_type?: StringFieldUpdateOperationsInput | string
  }

  export type PostVoteCreateManyInput = {
    post_id: string
    user_id: string
    vote_type: string
  }

  export type PostVoteUpdateManyMutationInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vote_type?: StringFieldUpdateOperationsInput | string
  }

  export type PostVoteUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vote_type?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteCreateInput = {
    comment_id: string
    user_id: string
    vote_type: string
  }

  export type CommentVoteUncheckedCreateInput = {
    comment_id: string
    user_id: string
    vote_type: string
  }

  export type CommentVoteUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vote_type?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteUncheckedUpdateInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vote_type?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteCreateManyInput = {
    comment_id: string
    user_id: string
    vote_type: string
  }

  export type CommentVoteUpdateManyMutationInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vote_type?: StringFieldUpdateOperationsInput | string
  }

  export type CommentVoteUncheckedUpdateManyInput = {
    comment_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    vote_type?: StringFieldUpdateOperationsInput | string
  }

  export type PostViewCreateInput = {
    post: PostCreateNestedOneWithoutPostViewInput
    user: UserCreateNestedOneWithoutPostViewInput
  }

  export type PostViewUncheckedCreateInput = {
    post_id: string
    user_id: string
  }

  export type PostViewUpdateInput = {
    post?: PostUpdateOneRequiredWithoutPostViewNestedInput
    user?: UserUpdateOneRequiredWithoutPostViewNestedInput
  }

  export type PostViewUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostViewCreateManyInput = {
    post_id: string
    user_id: string
  }

  export type PostViewUpdateManyMutationInput = {

  }

  export type PostViewUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagCreateInput = {
    value: string
    posts?: PostCreateNestedManyWithoutHashtagsInput
  }

  export type HashtagUncheckedCreateInput = {
    value: string
    posts?: PostUncheckedCreateNestedManyWithoutHashtagsInput
  }

  export type HashtagUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutHashtagsNestedInput
  }

  export type HashtagUncheckedUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutHashtagsNestedInput
  }

  export type HashtagCreateManyInput = {
    value: string
  }

  export type HashtagUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagUncheckedUpdateManyInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    viewed?: boolean
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutNotificationInput
    post?: PostCreateNestedOneWithoutNotificationInput
    comment?: CommentCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    user_id: string
    post_id?: string | null
    comment_id?: string | null
    message: string
    viewed?: boolean
    timestamp?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
    post?: PostUpdateOneWithoutNotificationNestedInput
    comment?: CommentUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    user_id: string
    post_id?: string | null
    comment_id?: string | null
    message: string
    viewed?: boolean
    timestamp?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribedPostCreateInput = {
    id?: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutSubscribedPostInput
    post: PostCreateNestedOneWithoutSubscribedPostInput
  }

  export type SubscribedPostUncheckedCreateInput = {
    id?: string
    user_id: string
    post_id: string
    timestamp?: Date | string
  }

  export type SubscribedPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscribedPostNestedInput
    post?: PostUpdateOneRequiredWithoutSubscribedPostNestedInput
  }

  export type SubscribedPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribedPostCreateManyInput = {
    id?: string
    user_id: string
    post_id: string
    timestamp?: Date | string
  }

  export type SubscribedPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribedPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type PostViewListRelationFilter = {
    every?: PostViewWhereInput
    some?: PostViewWhereInput
    none?: PostViewWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SubscribedPostListRelationFilter = {
    every?: SubscribedPostWhereInput
    some?: SubscribedPostWhereInput
    none?: SubscribedPostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscribedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    timestamp?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    timestamp?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    timestamp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HashtagListRelationFilter = {
    every?: HashtagWhereInput
    some?: HashtagWhereInput
    none?: HashtagWhereInput
  }

  export type HashtagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    parent_comment_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    parent_comment_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    parent_comment_id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type PostVoteOrderByRelevanceInput = {
    fields: PostVoteOrderByRelevanceFieldEnum | PostVoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostVotePost_idUser_idCompoundUniqueInput = {
    post_id: string
    user_id: string
  }

  export type PostVoteCountOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
  }

  export type PostVoteMaxOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
  }

  export type PostVoteMinOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
  }

  export type CommentVoteOrderByRelevanceInput = {
    fields: CommentVoteOrderByRelevanceFieldEnum | CommentVoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentVoteComment_idUser_idCompoundUniqueInput = {
    comment_id: string
    user_id: string
  }

  export type CommentVoteCountOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
  }

  export type CommentVoteMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
  }

  export type CommentVoteMinOrderByAggregateInput = {
    comment_id?: SortOrder
    user_id?: SortOrder
    vote_type?: SortOrder
  }

  export type PostViewOrderByRelevanceInput = {
    fields: PostViewOrderByRelevanceFieldEnum | PostViewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostViewPost_idUser_idCompoundUniqueInput = {
    post_id: string
    user_id: string
  }

  export type PostViewCountOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type PostViewMaxOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type PostViewMinOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type HashtagOrderByRelevanceInput = {
    fields: HashtagOrderByRelevanceFieldEnum | HashtagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HashtagCountOrderByAggregateInput = {
    value?: SortOrder
  }

  export type HashtagMaxOrderByAggregateInput = {
    value?: SortOrder
  }

  export type HashtagMinOrderByAggregateInput = {
    value?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_id?: SortOrder
    message?: SortOrder
    viewed?: SortOrder
    timestamp?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_id?: SortOrder
    message?: SortOrder
    viewed?: SortOrder
    timestamp?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_id?: SortOrder
    message?: SortOrder
    viewed?: SortOrder
    timestamp?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubscribedPostOrderByRelevanceInput = {
    fields: SubscribedPostOrderByRelevanceFieldEnum | SubscribedPostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscribedPostUser_idPost_idCompoundUniqueInput = {
    user_id: string
    post_id: string
  }

  export type SubscribedPostCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    timestamp?: SortOrder
  }

  export type SubscribedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    timestamp?: SortOrder
  }

  export type SubscribedPostMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    timestamp?: SortOrder
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostViewCreateNestedManyWithoutUserInput = {
    create?: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput> | PostViewCreateWithoutUserInput[] | PostViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutUserInput | PostViewCreateOrConnectWithoutUserInput[]
    createMany?: PostViewCreateManyUserInputEnvelope
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SubscribedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscribedPostCreateWithoutUserInput, SubscribedPostUncheckedCreateWithoutUserInput> | SubscribedPostCreateWithoutUserInput[] | SubscribedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscribedPostCreateOrConnectWithoutUserInput | SubscribedPostCreateOrConnectWithoutUserInput[]
    createMany?: SubscribedPostCreateManyUserInputEnvelope
    connect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput> | PostViewCreateWithoutUserInput[] | PostViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutUserInput | PostViewCreateOrConnectWithoutUserInput[]
    createMany?: PostViewCreateManyUserInputEnvelope
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SubscribedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscribedPostCreateWithoutUserInput, SubscribedPostUncheckedCreateWithoutUserInput> | SubscribedPostCreateWithoutUserInput[] | SubscribedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscribedPostCreateOrConnectWithoutUserInput | SubscribedPostCreateOrConnectWithoutUserInput[]
    createMany?: SubscribedPostCreateManyUserInputEnvelope
    connect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostViewUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput> | PostViewCreateWithoutUserInput[] | PostViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutUserInput | PostViewCreateOrConnectWithoutUserInput[]
    upsert?: PostViewUpsertWithWhereUniqueWithoutUserInput | PostViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostViewCreateManyUserInputEnvelope
    set?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    disconnect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    delete?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    update?: PostViewUpdateWithWhereUniqueWithoutUserInput | PostViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostViewUpdateManyWithWhereWithoutUserInput | PostViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SubscribedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscribedPostCreateWithoutUserInput, SubscribedPostUncheckedCreateWithoutUserInput> | SubscribedPostCreateWithoutUserInput[] | SubscribedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscribedPostCreateOrConnectWithoutUserInput | SubscribedPostCreateOrConnectWithoutUserInput[]
    upsert?: SubscribedPostUpsertWithWhereUniqueWithoutUserInput | SubscribedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscribedPostCreateManyUserInputEnvelope
    set?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    disconnect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    delete?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    connect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    update?: SubscribedPostUpdateWithWhereUniqueWithoutUserInput | SubscribedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscribedPostUpdateManyWithWhereWithoutUserInput | SubscribedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscribedPostScalarWhereInput | SubscribedPostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput> | PostViewCreateWithoutUserInput[] | PostViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutUserInput | PostViewCreateOrConnectWithoutUserInput[]
    upsert?: PostViewUpsertWithWhereUniqueWithoutUserInput | PostViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostViewCreateManyUserInputEnvelope
    set?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    disconnect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    delete?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    update?: PostViewUpdateWithWhereUniqueWithoutUserInput | PostViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostViewUpdateManyWithWhereWithoutUserInput | PostViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SubscribedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscribedPostCreateWithoutUserInput, SubscribedPostUncheckedCreateWithoutUserInput> | SubscribedPostCreateWithoutUserInput[] | SubscribedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscribedPostCreateOrConnectWithoutUserInput | SubscribedPostCreateOrConnectWithoutUserInput[]
    upsert?: SubscribedPostUpsertWithWhereUniqueWithoutUserInput | SubscribedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscribedPostCreateManyUserInputEnvelope
    set?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    disconnect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    delete?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    connect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    update?: SubscribedPostUpdateWithWhereUniqueWithoutUserInput | SubscribedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscribedPostUpdateManyWithWhereWithoutUserInput | SubscribedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscribedPostScalarWhereInput | SubscribedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type HashtagCreateNestedManyWithoutPostsInput = {
    create?: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput> | HashtagCreateWithoutPostsInput[] | HashtagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput | HashtagCreateOrConnectWithoutPostsInput[]
    connect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostViewCreateNestedManyWithoutPostInput = {
    create?: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput> | PostViewCreateWithoutPostInput[] | PostViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutPostInput | PostViewCreateOrConnectWithoutPostInput[]
    createMany?: PostViewCreateManyPostInputEnvelope
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutPostInput = {
    create?: XOR<NotificationCreateWithoutPostInput, NotificationUncheckedCreateWithoutPostInput> | NotificationCreateWithoutPostInput[] | NotificationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPostInput | NotificationCreateOrConnectWithoutPostInput[]
    createMany?: NotificationCreateManyPostInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SubscribedPostCreateNestedManyWithoutPostInput = {
    create?: XOR<SubscribedPostCreateWithoutPostInput, SubscribedPostUncheckedCreateWithoutPostInput> | SubscribedPostCreateWithoutPostInput[] | SubscribedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SubscribedPostCreateOrConnectWithoutPostInput | SubscribedPostCreateOrConnectWithoutPostInput[]
    createMany?: SubscribedPostCreateManyPostInputEnvelope
    connect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
  }

  export type HashtagUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput> | HashtagCreateWithoutPostsInput[] | HashtagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput | HashtagCreateOrConnectWithoutPostsInput[]
    connect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostViewUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput> | PostViewCreateWithoutPostInput[] | PostViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutPostInput | PostViewCreateOrConnectWithoutPostInput[]
    createMany?: PostViewCreateManyPostInputEnvelope
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<NotificationCreateWithoutPostInput, NotificationUncheckedCreateWithoutPostInput> | NotificationCreateWithoutPostInput[] | NotificationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPostInput | NotificationCreateOrConnectWithoutPostInput[]
    createMany?: NotificationCreateManyPostInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type SubscribedPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SubscribedPostCreateWithoutPostInput, SubscribedPostUncheckedCreateWithoutPostInput> | SubscribedPostCreateWithoutPostInput[] | SubscribedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SubscribedPostCreateOrConnectWithoutPostInput | SubscribedPostCreateOrConnectWithoutPostInput[]
    createMany?: SubscribedPostCreateManyPostInputEnvelope
    connect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type HashtagUpdateManyWithoutPostsNestedInput = {
    create?: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput> | HashtagCreateWithoutPostsInput[] | HashtagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput | HashtagCreateOrConnectWithoutPostsInput[]
    upsert?: HashtagUpsertWithWhereUniqueWithoutPostsInput | HashtagUpsertWithWhereUniqueWithoutPostsInput[]
    set?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    disconnect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    delete?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    connect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    update?: HashtagUpdateWithWhereUniqueWithoutPostsInput | HashtagUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: HashtagUpdateManyWithWhereWithoutPostsInput | HashtagUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: HashtagScalarWhereInput | HashtagScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostViewUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput> | PostViewCreateWithoutPostInput[] | PostViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutPostInput | PostViewCreateOrConnectWithoutPostInput[]
    upsert?: PostViewUpsertWithWhereUniqueWithoutPostInput | PostViewUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostViewCreateManyPostInputEnvelope
    set?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    disconnect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    delete?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    update?: PostViewUpdateWithWhereUniqueWithoutPostInput | PostViewUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostViewUpdateManyWithWhereWithoutPostInput | PostViewUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutPostNestedInput = {
    create?: XOR<NotificationCreateWithoutPostInput, NotificationUncheckedCreateWithoutPostInput> | NotificationCreateWithoutPostInput[] | NotificationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPostInput | NotificationCreateOrConnectWithoutPostInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPostInput | NotificationUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: NotificationCreateManyPostInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPostInput | NotificationUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPostInput | NotificationUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SubscribedPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<SubscribedPostCreateWithoutPostInput, SubscribedPostUncheckedCreateWithoutPostInput> | SubscribedPostCreateWithoutPostInput[] | SubscribedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SubscribedPostCreateOrConnectWithoutPostInput | SubscribedPostCreateOrConnectWithoutPostInput[]
    upsert?: SubscribedPostUpsertWithWhereUniqueWithoutPostInput | SubscribedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SubscribedPostCreateManyPostInputEnvelope
    set?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    disconnect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    delete?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    connect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    update?: SubscribedPostUpdateWithWhereUniqueWithoutPostInput | SubscribedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SubscribedPostUpdateManyWithWhereWithoutPostInput | SubscribedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SubscribedPostScalarWhereInput | SubscribedPostScalarWhereInput[]
  }

  export type HashtagUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput> | HashtagCreateWithoutPostsInput[] | HashtagUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: HashtagCreateOrConnectWithoutPostsInput | HashtagCreateOrConnectWithoutPostsInput[]
    upsert?: HashtagUpsertWithWhereUniqueWithoutPostsInput | HashtagUpsertWithWhereUniqueWithoutPostsInput[]
    set?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    disconnect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    delete?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    connect?: HashtagWhereUniqueInput | HashtagWhereUniqueInput[]
    update?: HashtagUpdateWithWhereUniqueWithoutPostsInput | HashtagUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: HashtagUpdateManyWithWhereWithoutPostsInput | HashtagUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: HashtagScalarWhereInput | HashtagScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostViewUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput> | PostViewCreateWithoutPostInput[] | PostViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutPostInput | PostViewCreateOrConnectWithoutPostInput[]
    upsert?: PostViewUpsertWithWhereUniqueWithoutPostInput | PostViewUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostViewCreateManyPostInputEnvelope
    set?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    disconnect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    delete?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    update?: PostViewUpdateWithWhereUniqueWithoutPostInput | PostViewUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostViewUpdateManyWithWhereWithoutPostInput | PostViewUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<NotificationCreateWithoutPostInput, NotificationUncheckedCreateWithoutPostInput> | NotificationCreateWithoutPostInput[] | NotificationUncheckedCreateWithoutPostInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPostInput | NotificationCreateOrConnectWithoutPostInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPostInput | NotificationUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: NotificationCreateManyPostInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPostInput | NotificationUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPostInput | NotificationUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type SubscribedPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SubscribedPostCreateWithoutPostInput, SubscribedPostUncheckedCreateWithoutPostInput> | SubscribedPostCreateWithoutPostInput[] | SubscribedPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SubscribedPostCreateOrConnectWithoutPostInput | SubscribedPostCreateOrConnectWithoutPostInput[]
    upsert?: SubscribedPostUpsertWithWhereUniqueWithoutPostInput | SubscribedPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SubscribedPostCreateManyPostInputEnvelope
    set?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    disconnect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    delete?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    connect?: SubscribedPostWhereUniqueInput | SubscribedPostWhereUniqueInput[]
    update?: SubscribedPostUpdateWithWhereUniqueWithoutPostInput | SubscribedPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SubscribedPostUpdateManyWithWhereWithoutPostInput | SubscribedPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SubscribedPostScalarWhereInput | SubscribedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<CommentCreateWithoutCommentsInput, CommentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentsInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutCommentInput = {
    create?: XOR<NotificationCreateWithoutCommentInput, NotificationUncheckedCreateWithoutCommentInput> | NotificationCreateWithoutCommentInput[] | NotificationUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCommentInput | NotificationCreateOrConnectWithoutCommentInput[]
    createMany?: NotificationCreateManyCommentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<NotificationCreateWithoutCommentInput, NotificationUncheckedCreateWithoutCommentInput> | NotificationCreateWithoutCommentInput[] | NotificationUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCommentInput | NotificationCreateOrConnectWithoutCommentInput[]
    createMany?: NotificationCreateManyCommentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<CommentCreateWithoutCommentsInput, CommentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentsInput
    upsert?: CommentUpsertWithoutCommentsInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutCommentsInput, CommentUpdateWithoutCommentsInput>, CommentUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentCommentInput | CommentUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentCommentInput | CommentUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentCommentInput | CommentUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutCommentNestedInput = {
    create?: XOR<NotificationCreateWithoutCommentInput, NotificationUncheckedCreateWithoutCommentInput> | NotificationCreateWithoutCommentInput[] | NotificationUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCommentInput | NotificationCreateOrConnectWithoutCommentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCommentInput | NotificationUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: NotificationCreateManyCommentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCommentInput | NotificationUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCommentInput | NotificationUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentCommentInput | CommentUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentCommentInput | CommentUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentCommentInput | CommentUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<NotificationCreateWithoutCommentInput, NotificationUncheckedCreateWithoutCommentInput> | NotificationCreateWithoutCommentInput[] | NotificationUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCommentInput | NotificationCreateOrConnectWithoutCommentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCommentInput | NotificationUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: NotificationCreateManyCommentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCommentInput | NotificationUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCommentInput | NotificationUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutPostViewInput = {
    create?: XOR<PostCreateWithoutPostViewInput, PostUncheckedCreateWithoutPostViewInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostViewInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostViewInput = {
    create?: XOR<UserCreateWithoutPostViewInput, UserUncheckedCreateWithoutPostViewInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostViewInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutPostViewNestedInput = {
    create?: XOR<PostCreateWithoutPostViewInput, PostUncheckedCreateWithoutPostViewInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostViewInput
    upsert?: PostUpsertWithoutPostViewInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostViewInput, PostUpdateWithoutPostViewInput>, PostUncheckedUpdateWithoutPostViewInput>
  }

  export type UserUpdateOneRequiredWithoutPostViewNestedInput = {
    create?: XOR<UserCreateWithoutPostViewInput, UserUncheckedCreateWithoutPostViewInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostViewInput
    upsert?: UserUpsertWithoutPostViewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostViewInput, UserUpdateWithoutPostViewInput>, UserUncheckedUpdateWithoutPostViewInput>
  }

  export type PostCreateNestedManyWithoutHashtagsInput = {
    create?: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput> | PostCreateWithoutHashtagsInput[] | PostUncheckedCreateWithoutHashtagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutHashtagsInput | PostCreateOrConnectWithoutHashtagsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutHashtagsInput = {
    create?: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput> | PostCreateWithoutHashtagsInput[] | PostUncheckedCreateWithoutHashtagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutHashtagsInput | PostCreateOrConnectWithoutHashtagsInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUpdateManyWithoutHashtagsNestedInput = {
    create?: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput> | PostCreateWithoutHashtagsInput[] | PostUncheckedCreateWithoutHashtagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutHashtagsInput | PostCreateOrConnectWithoutHashtagsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutHashtagsInput | PostUpsertWithWhereUniqueWithoutHashtagsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutHashtagsInput | PostUpdateWithWhereUniqueWithoutHashtagsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutHashtagsInput | PostUpdateManyWithWhereWithoutHashtagsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutHashtagsNestedInput = {
    create?: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput> | PostCreateWithoutHashtagsInput[] | PostUncheckedCreateWithoutHashtagsInput[]
    connectOrCreate?: PostCreateOrConnectWithoutHashtagsInput | PostCreateOrConnectWithoutHashtagsInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutHashtagsInput | PostUpsertWithWhereUniqueWithoutHashtagsInput[]
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutHashtagsInput | PostUpdateWithWhereUniqueWithoutHashtagsInput[]
    updateMany?: PostUpdateManyWithWhereWithoutHashtagsInput | PostUpdateManyWithWhereWithoutHashtagsInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutNotificationInput = {
    create?: XOR<PostCreateWithoutNotificationInput, PostUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: PostCreateOrConnectWithoutNotificationInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutNotificationInput = {
    create?: XOR<CommentCreateWithoutNotificationInput, CommentUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: CommentCreateOrConnectWithoutNotificationInput
    connect?: CommentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationInput
    upsert?: UserUpsertWithoutNotificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationInput, UserUpdateWithoutNotificationInput>, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type PostUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<PostCreateWithoutNotificationInput, PostUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: PostCreateOrConnectWithoutNotificationInput
    upsert?: PostUpsertWithoutNotificationInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutNotificationInput, PostUpdateWithoutNotificationInput>, PostUncheckedUpdateWithoutNotificationInput>
  }

  export type CommentUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<CommentCreateWithoutNotificationInput, CommentUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: CommentCreateOrConnectWithoutNotificationInput
    upsert?: CommentUpsertWithoutNotificationInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutNotificationInput, CommentUpdateWithoutNotificationInput>, CommentUncheckedUpdateWithoutNotificationInput>
  }

  export type UserCreateNestedOneWithoutSubscribedPostInput = {
    create?: XOR<UserCreateWithoutSubscribedPostInput, UserUncheckedCreateWithoutSubscribedPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribedPostInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutSubscribedPostInput = {
    create?: XOR<PostCreateWithoutSubscribedPostInput, PostUncheckedCreateWithoutSubscribedPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutSubscribedPostInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscribedPostNestedInput = {
    create?: XOR<UserCreateWithoutSubscribedPostInput, UserUncheckedCreateWithoutSubscribedPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscribedPostInput
    upsert?: UserUpsertWithoutSubscribedPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscribedPostInput, UserUpdateWithoutSubscribedPostInput>, UserUncheckedUpdateWithoutSubscribedPostInput>
  }

  export type PostUpdateOneRequiredWithoutSubscribedPostNestedInput = {
    create?: XOR<PostCreateWithoutSubscribedPostInput, PostUncheckedCreateWithoutSubscribedPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutSubscribedPostInput
    upsert?: PostUpsertWithoutSubscribedPostInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutSubscribedPostInput, PostUpdateWithoutSubscribedPostInput>, PostUncheckedUpdateWithoutSubscribedPostInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
    hashtags?: HashtagCreateNestedManyWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    PostView?: PostViewCreateNestedManyWithoutPostInput
    Notification?: NotificationCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
    hashtags?: HashtagUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutPostInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    timestamp?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutParentCommentInput
    Notification?: NotificationCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    post_id: string
    parent_comment_id?: string | null
    content: string
    timestamp?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostViewCreateWithoutUserInput = {
    post: PostCreateNestedOneWithoutPostViewInput
  }

  export type PostViewUncheckedCreateWithoutUserInput = {
    post_id: string
  }

  export type PostViewCreateOrConnectWithoutUserInput = {
    where: PostViewWhereUniqueInput
    create: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput>
  }

  export type PostViewCreateManyUserInputEnvelope = {
    data: PostViewCreateManyUserInput | PostViewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    message: string
    viewed?: boolean
    timestamp?: Date | string
    post?: PostCreateNestedOneWithoutNotificationInput
    comment?: CommentCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    post_id?: string | null
    comment_id?: string | null
    message: string
    viewed?: boolean
    timestamp?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscribedPostCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    post: PostCreateNestedOneWithoutSubscribedPostInput
  }

  export type SubscribedPostUncheckedCreateWithoutUserInput = {
    id?: string
    post_id: string
    timestamp?: Date | string
  }

  export type SubscribedPostCreateOrConnectWithoutUserInput = {
    where: SubscribedPostWhereUniqueInput
    create: XOR<SubscribedPostCreateWithoutUserInput, SubscribedPostUncheckedCreateWithoutUserInput>
  }

  export type SubscribedPostCreateManyUserInputEnvelope = {
    data: SubscribedPostCreateManyUserInput | SubscribedPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    user_id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    timestamp?: DateTimeFilter<"Post"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    user_id?: StringFilter<"Comment"> | string
    post_id?: StringFilter<"Comment"> | string
    parent_comment_id?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
  }

  export type PostViewUpsertWithWhereUniqueWithoutUserInput = {
    where: PostViewWhereUniqueInput
    update: XOR<PostViewUpdateWithoutUserInput, PostViewUncheckedUpdateWithoutUserInput>
    create: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput>
  }

  export type PostViewUpdateWithWhereUniqueWithoutUserInput = {
    where: PostViewWhereUniqueInput
    data: XOR<PostViewUpdateWithoutUserInput, PostViewUncheckedUpdateWithoutUserInput>
  }

  export type PostViewUpdateManyWithWhereWithoutUserInput = {
    where: PostViewScalarWhereInput
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyWithoutUserInput>
  }

  export type PostViewScalarWhereInput = {
    AND?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
    OR?: PostViewScalarWhereInput[]
    NOT?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
    post_id?: StringFilter<"PostView"> | string
    user_id?: StringFilter<"PostView"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    user_id?: StringFilter<"Notification"> | string
    post_id?: StringNullableFilter<"Notification"> | string | null
    comment_id?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    viewed?: BoolFilter<"Notification"> | boolean
    timestamp?: DateTimeFilter<"Notification"> | Date | string
  }

  export type SubscribedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscribedPostWhereUniqueInput
    update: XOR<SubscribedPostUpdateWithoutUserInput, SubscribedPostUncheckedUpdateWithoutUserInput>
    create: XOR<SubscribedPostCreateWithoutUserInput, SubscribedPostUncheckedCreateWithoutUserInput>
  }

  export type SubscribedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscribedPostWhereUniqueInput
    data: XOR<SubscribedPostUpdateWithoutUserInput, SubscribedPostUncheckedUpdateWithoutUserInput>
  }

  export type SubscribedPostUpdateManyWithWhereWithoutUserInput = {
    where: SubscribedPostScalarWhereInput
    data: XOR<SubscribedPostUpdateManyMutationInput, SubscribedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscribedPostScalarWhereInput = {
    AND?: SubscribedPostScalarWhereInput | SubscribedPostScalarWhereInput[]
    OR?: SubscribedPostScalarWhereInput[]
    NOT?: SubscribedPostScalarWhereInput | SubscribedPostScalarWhereInput[]
    id?: StringFilter<"SubscribedPost"> | string
    user_id?: StringFilter<"SubscribedPost"> | string
    post_id?: StringFilter<"SubscribedPost"> | string
    timestamp?: DateTimeFilter<"SubscribedPost"> | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    PostView?: PostViewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type HashtagCreateWithoutPostsInput = {
    value: string
  }

  export type HashtagUncheckedCreateWithoutPostsInput = {
    value: string
  }

  export type HashtagCreateOrConnectWithoutPostsInput = {
    where: HashtagWhereUniqueInput
    create: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutParentCommentInput
    Notification?: NotificationCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    user_id: string
    parent_comment_id?: string | null
    content: string
    timestamp?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostViewCreateWithoutPostInput = {
    user: UserCreateNestedOneWithoutPostViewInput
  }

  export type PostViewUncheckedCreateWithoutPostInput = {
    user_id: string
  }

  export type PostViewCreateOrConnectWithoutPostInput = {
    where: PostViewWhereUniqueInput
    create: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput>
  }

  export type PostViewCreateManyPostInputEnvelope = {
    data: PostViewCreateManyPostInput | PostViewCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutPostInput = {
    id?: string
    message: string
    viewed?: boolean
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutNotificationInput
    comment?: CommentCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutPostInput = {
    id?: string
    user_id: string
    comment_id?: string | null
    message: string
    viewed?: boolean
    timestamp?: Date | string
  }

  export type NotificationCreateOrConnectWithoutPostInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutPostInput, NotificationUncheckedCreateWithoutPostInput>
  }

  export type NotificationCreateManyPostInputEnvelope = {
    data: NotificationCreateManyPostInput | NotificationCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SubscribedPostCreateWithoutPostInput = {
    id?: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutSubscribedPostInput
  }

  export type SubscribedPostUncheckedCreateWithoutPostInput = {
    id?: string
    user_id: string
    timestamp?: Date | string
  }

  export type SubscribedPostCreateOrConnectWithoutPostInput = {
    where: SubscribedPostWhereUniqueInput
    create: XOR<SubscribedPostCreateWithoutPostInput, SubscribedPostUncheckedCreateWithoutPostInput>
  }

  export type SubscribedPostCreateManyPostInputEnvelope = {
    data: SubscribedPostCreateManyPostInput | SubscribedPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    PostView?: PostViewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HashtagUpsertWithWhereUniqueWithoutPostsInput = {
    where: HashtagWhereUniqueInput
    update: XOR<HashtagUpdateWithoutPostsInput, HashtagUncheckedUpdateWithoutPostsInput>
    create: XOR<HashtagCreateWithoutPostsInput, HashtagUncheckedCreateWithoutPostsInput>
  }

  export type HashtagUpdateWithWhereUniqueWithoutPostsInput = {
    where: HashtagWhereUniqueInput
    data: XOR<HashtagUpdateWithoutPostsInput, HashtagUncheckedUpdateWithoutPostsInput>
  }

  export type HashtagUpdateManyWithWhereWithoutPostsInput = {
    where: HashtagScalarWhereInput
    data: XOR<HashtagUpdateManyMutationInput, HashtagUncheckedUpdateManyWithoutPostsInput>
  }

  export type HashtagScalarWhereInput = {
    AND?: HashtagScalarWhereInput | HashtagScalarWhereInput[]
    OR?: HashtagScalarWhereInput[]
    NOT?: HashtagScalarWhereInput | HashtagScalarWhereInput[]
    value?: StringFilter<"Hashtag"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostViewUpsertWithWhereUniqueWithoutPostInput = {
    where: PostViewWhereUniqueInput
    update: XOR<PostViewUpdateWithoutPostInput, PostViewUncheckedUpdateWithoutPostInput>
    create: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput>
  }

  export type PostViewUpdateWithWhereUniqueWithoutPostInput = {
    where: PostViewWhereUniqueInput
    data: XOR<PostViewUpdateWithoutPostInput, PostViewUncheckedUpdateWithoutPostInput>
  }

  export type PostViewUpdateManyWithWhereWithoutPostInput = {
    where: PostViewScalarWhereInput
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyWithoutPostInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutPostInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutPostInput, NotificationUncheckedUpdateWithoutPostInput>
    create: XOR<NotificationCreateWithoutPostInput, NotificationUncheckedCreateWithoutPostInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutPostInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutPostInput, NotificationUncheckedUpdateWithoutPostInput>
  }

  export type NotificationUpdateManyWithWhereWithoutPostInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutPostInput>
  }

  export type SubscribedPostUpsertWithWhereUniqueWithoutPostInput = {
    where: SubscribedPostWhereUniqueInput
    update: XOR<SubscribedPostUpdateWithoutPostInput, SubscribedPostUncheckedUpdateWithoutPostInput>
    create: XOR<SubscribedPostCreateWithoutPostInput, SubscribedPostUncheckedCreateWithoutPostInput>
  }

  export type SubscribedPostUpdateWithWhereUniqueWithoutPostInput = {
    where: SubscribedPostWhereUniqueInput
    data: XOR<SubscribedPostUpdateWithoutPostInput, SubscribedPostUncheckedUpdateWithoutPostInput>
  }

  export type SubscribedPostUpdateManyWithWhereWithoutPostInput = {
    where: SubscribedPostScalarWhereInput
    data: XOR<SubscribedPostUpdateManyMutationInput, SubscribedPostUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    PostView?: PostViewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    hashtags?: HashtagCreateNestedManyWithoutPostsInput
    PostView?: PostViewCreateNestedManyWithoutPostInput
    Notification?: NotificationCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    user_id: string
    title: string
    body: string
    timestamp?: Date | string
    hashtags?: HashtagUncheckedCreateNestedManyWithoutPostsInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutPostInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutCommentsInput = {
    id?: string
    content: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutCommentsInput
    Notification?: NotificationCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutCommentsInput = {
    id?: string
    user_id: string
    post_id: string
    parent_comment_id?: string | null
    content: string
    timestamp?: Date | string
    Notification?: NotificationUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutCommentsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentsInput, CommentUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutParentCommentInput = {
    id?: string
    content: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutParentCommentInput
    Notification?: NotificationCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentCommentInput = {
    id?: string
    user_id: string
    post_id: string
    content: string
    timestamp?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentCommentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentCreateManyParentCommentInputEnvelope = {
    data: CommentCreateManyParentCommentInput | CommentCreateManyParentCommentInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutCommentInput = {
    id?: string
    message: string
    viewed?: boolean
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutNotificationInput
    post?: PostCreateNestedOneWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutCommentInput = {
    id?: string
    user_id: string
    post_id?: string | null
    message: string
    viewed?: boolean
    timestamp?: Date | string
  }

  export type NotificationCreateOrConnectWithoutCommentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutCommentInput, NotificationUncheckedCreateWithoutCommentInput>
  }

  export type NotificationCreateManyCommentInputEnvelope = {
    data: NotificationCreateManyCommentInput | NotificationCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    PostView?: PostViewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: HashtagUpdateManyWithoutPostsNestedInput
    PostView?: PostViewUpdateManyWithoutPostNestedInput
    Notification?: NotificationUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: HashtagUncheckedUpdateManyWithoutPostsNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutCommentsInput = {
    update: XOR<CommentUpdateWithoutCommentsInput, CommentUncheckedUpdateWithoutCommentsInput>
    create: XOR<CommentCreateWithoutCommentsInput, CommentUncheckedCreateWithoutCommentsInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutCommentsInput, CommentUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutCommentsNestedInput
    Notification?: NotificationUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Notification?: NotificationUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutParentCommentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentCommentInput, CommentUncheckedUpdateWithoutParentCommentInput>
    create: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentCommentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentCommentInput, CommentUncheckedUpdateWithoutParentCommentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentCommentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentCommentInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutCommentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutCommentInput, NotificationUncheckedUpdateWithoutCommentInput>
    create: XOR<NotificationCreateWithoutCommentInput, NotificationUncheckedCreateWithoutCommentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutCommentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutCommentInput, NotificationUncheckedUpdateWithoutCommentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutCommentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutCommentInput>
  }

  export type PostCreateWithoutPostViewInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    hashtags?: HashtagCreateNestedManyWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    Notification?: NotificationCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPostViewInput = {
    id?: string
    user_id: string
    title: string
    body: string
    timestamp?: Date | string
    hashtags?: HashtagUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPostViewInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostViewInput, PostUncheckedCreateWithoutPostViewInput>
  }

  export type UserCreateWithoutPostViewInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostViewInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostViewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostViewInput, UserUncheckedCreateWithoutPostViewInput>
  }

  export type PostUpsertWithoutPostViewInput = {
    update: XOR<PostUpdateWithoutPostViewInput, PostUncheckedUpdateWithoutPostViewInput>
    create: XOR<PostCreateWithoutPostViewInput, PostUncheckedCreateWithoutPostViewInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostViewInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostViewInput, PostUncheckedUpdateWithoutPostViewInput>
  }

  export type PostUpdateWithoutPostViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: HashtagUpdateManyWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    Notification?: NotificationUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPostViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: HashtagUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutPostViewInput = {
    update: XOR<UserUpdateWithoutPostViewInput, UserUncheckedUpdateWithoutPostViewInput>
    create: XOR<UserCreateWithoutPostViewInput, UserUncheckedCreateWithoutPostViewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostViewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostViewInput, UserUncheckedUpdateWithoutPostViewInput>
  }

  export type UserUpdateWithoutPostViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateWithoutHashtagsInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    PostView?: PostViewCreateNestedManyWithoutPostInput
    Notification?: NotificationCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutHashtagsInput = {
    id?: string
    user_id: string
    title: string
    body: string
    timestamp?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutPostInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutHashtagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput>
  }

  export type PostUpsertWithWhereUniqueWithoutHashtagsInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutHashtagsInput, PostUncheckedUpdateWithoutHashtagsInput>
    create: XOR<PostCreateWithoutHashtagsInput, PostUncheckedCreateWithoutHashtagsInput>
  }

  export type PostUpdateWithWhereUniqueWithoutHashtagsInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutHashtagsInput, PostUncheckedUpdateWithoutHashtagsInput>
  }

  export type PostUpdateManyWithWhereWithoutHashtagsInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutHashtagsInput>
  }

  export type UserCreateWithoutNotificationInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    PostView?: PostViewCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutUserInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
  }

  export type PostCreateWithoutNotificationInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    hashtags?: HashtagCreateNestedManyWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    PostView?: PostViewCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutNotificationInput = {
    id?: string
    user_id: string
    title: string
    body: string
    timestamp?: Date | string
    hashtags?: HashtagUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutPostInput
    SubscribedPost?: SubscribedPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutNotificationInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutNotificationInput, PostUncheckedCreateWithoutNotificationInput>
  }

  export type CommentCreateWithoutNotificationInput = {
    id?: string
    content: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutCommentsInput
    comments?: CommentCreateNestedManyWithoutParentCommentInput
  }

  export type CommentUncheckedCreateWithoutNotificationInput = {
    id?: string
    user_id: string
    post_id: string
    parent_comment_id?: string | null
    content: string
    timestamp?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type CommentCreateOrConnectWithoutNotificationInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutNotificationInput, CommentUncheckedCreateWithoutNotificationInput>
  }

  export type UserUpsertWithoutNotificationInput = {
    update: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
    create: XOR<UserCreateWithoutNotificationInput, UserUncheckedCreateWithoutNotificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationInput, UserUncheckedUpdateWithoutNotificationInput>
  }

  export type UserUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    PostView?: PostViewUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutUserNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutNotificationInput = {
    update: XOR<PostUpdateWithoutNotificationInput, PostUncheckedUpdateWithoutNotificationInput>
    create: XOR<PostCreateWithoutNotificationInput, PostUncheckedCreateWithoutNotificationInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutNotificationInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutNotificationInput, PostUncheckedUpdateWithoutNotificationInput>
  }

  export type PostUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: HashtagUpdateManyWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    PostView?: PostViewUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: HashtagUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutNotificationInput = {
    update: XOR<CommentUpdateWithoutNotificationInput, CommentUncheckedUpdateWithoutNotificationInput>
    create: XOR<CommentCreateWithoutNotificationInput, CommentUncheckedCreateWithoutNotificationInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutNotificationInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutNotificationInput, CommentUncheckedUpdateWithoutNotificationInput>
  }

  export type CommentUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutCommentsNestedInput
    comments?: CommentUpdateManyWithoutParentCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type UserCreateWithoutSubscribedPostInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    PostView?: PostViewCreateNestedManyWithoutUserInput
    Notification?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscribedPostInput = {
    id?: string
    username: string
    email: string
    bio?: string | null
    timestamp?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutUserInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscribedPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscribedPostInput, UserUncheckedCreateWithoutSubscribedPostInput>
  }

  export type PostCreateWithoutSubscribedPostInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    hashtags?: HashtagCreateNestedManyWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    PostView?: PostViewCreateNestedManyWithoutPostInput
    Notification?: NotificationCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutSubscribedPostInput = {
    id?: string
    user_id: string
    title: string
    body: string
    timestamp?: Date | string
    hashtags?: HashtagUncheckedCreateNestedManyWithoutPostsInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    PostView?: PostViewUncheckedCreateNestedManyWithoutPostInput
    Notification?: NotificationUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSubscribedPostInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSubscribedPostInput, PostUncheckedCreateWithoutSubscribedPostInput>
  }

  export type UserUpsertWithoutSubscribedPostInput = {
    update: XOR<UserUpdateWithoutSubscribedPostInput, UserUncheckedUpdateWithoutSubscribedPostInput>
    create: XOR<UserCreateWithoutSubscribedPostInput, UserUncheckedCreateWithoutSubscribedPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscribedPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscribedPostInput, UserUncheckedUpdateWithoutSubscribedPostInput>
  }

  export type UserUpdateWithoutSubscribedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    PostView?: PostViewUpdateManyWithoutUserNestedInput
    Notification?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscribedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutUserNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutSubscribedPostInput = {
    update: XOR<PostUpdateWithoutSubscribedPostInput, PostUncheckedUpdateWithoutSubscribedPostInput>
    create: XOR<PostCreateWithoutSubscribedPostInput, PostUncheckedCreateWithoutSubscribedPostInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutSubscribedPostInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutSubscribedPostInput, PostUncheckedUpdateWithoutSubscribedPostInput>
  }

  export type PostUpdateWithoutSubscribedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    hashtags?: HashtagUpdateManyWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    PostView?: PostViewUpdateManyWithoutPostNestedInput
    Notification?: NotificationUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutSubscribedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: HashtagUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyUserInput = {
    id?: string
    title: string
    body: string
    timestamp?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    post_id: string
    parent_comment_id?: string | null
    content: string
    timestamp?: Date | string
  }

  export type PostViewCreateManyUserInput = {
    post_id: string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    post_id?: string | null
    comment_id?: string | null
    message: string
    viewed?: boolean
    timestamp?: Date | string
  }

  export type SubscribedPostCreateManyUserInput = {
    id?: string
    post_id: string
    timestamp?: Date | string
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: HashtagUpdateManyWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    PostView?: PostViewUpdateManyWithoutPostNestedInput
    Notification?: NotificationUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    hashtags?: HashtagUncheckedUpdateManyWithoutPostsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutCommentsNestedInput
    comments?: CommentUpdateManyWithoutParentCommentNestedInput
    Notification?: NotificationUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewUpdateWithoutUserInput = {
    post?: PostUpdateOneRequiredWithoutPostViewNestedInput
  }

  export type PostViewUncheckedUpdateWithoutUserInput = {
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostViewUncheckedUpdateManyWithoutUserInput = {
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutNotificationNestedInput
    comment?: CommentUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribedPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutSubscribedPostNestedInput
  }

  export type SubscribedPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribedPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    user_id: string
    parent_comment_id?: string | null
    content: string
    timestamp?: Date | string
  }

  export type PostViewCreateManyPostInput = {
    user_id: string
  }

  export type NotificationCreateManyPostInput = {
    id?: string
    user_id: string
    comment_id?: string | null
    message: string
    viewed?: boolean
    timestamp?: Date | string
  }

  export type SubscribedPostCreateManyPostInput = {
    id?: string
    user_id: string
    timestamp?: Date | string
  }

  export type HashtagUpdateWithoutPostsInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagUncheckedUpdateWithoutPostsInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type HashtagUncheckedUpdateManyWithoutPostsInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutCommentsNestedInput
    comments?: CommentUpdateManyWithoutParentCommentNestedInput
    Notification?: NotificationUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    parent_comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewUpdateWithoutPostInput = {
    user?: UserUpdateOneRequiredWithoutPostViewNestedInput
  }

  export type PostViewUncheckedUpdateWithoutPostInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PostViewUncheckedUpdateManyWithoutPostInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
    comment?: CommentUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribedPostUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscribedPostNestedInput
  }

  export type SubscribedPostUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscribedPostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentCommentInput = {
    id?: string
    user_id: string
    post_id: string
    content: string
    timestamp?: Date | string
  }

  export type NotificationCreateManyCommentInput = {
    id?: string
    user_id: string
    post_id?: string | null
    message: string
    viewed?: boolean
    timestamp?: Date | string
  }

  export type CommentUpdateWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    comments?: CommentUpdateManyWithoutParentCommentNestedInput
    Notification?: NotificationUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationNestedInput
    post?: PostUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    viewed?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    PostView?: PostViewUpdateManyWithoutPostNestedInput
    Notification?: NotificationUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    PostView?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    Notification?: NotificationUncheckedUpdateManyWithoutPostNestedInput
    SubscribedPost?: SubscribedPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutHashtagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}