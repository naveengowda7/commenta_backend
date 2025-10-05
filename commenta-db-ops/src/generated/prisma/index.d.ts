
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
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model McpConversation
 * 
 */
export type McpConversation = $Result.DefaultSelection<Prisma.$McpConversationPayload>
/**
 * Model CommentReply
 * 
 */
export type CommentReply = $Result.DefaultSelection<Prisma.$CommentReplyPayload>
/**
 * Model AnalysisJob
 * 
 */
export type AnalysisJob = $Result.DefaultSelection<Prisma.$AnalysisJobPayload>
/**
 * Model SentimentAnalysis
 * 
 */
export type SentimentAnalysis = $Result.DefaultSelection<Prisma.$SentimentAnalysisPayload>
/**
 * Model VideoAnalysisSummary
 * 
 */
export type VideoAnalysisSummary = $Result.DefaultSelection<Prisma.$VideoAnalysisSummaryPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.mcpConversation`: Exposes CRUD operations for the **McpConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more McpConversations
    * const mcpConversations = await prisma.mcpConversation.findMany()
    * ```
    */
  get mcpConversation(): Prisma.McpConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentReply`: Exposes CRUD operations for the **CommentReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentReplies
    * const commentReplies = await prisma.commentReply.findMany()
    * ```
    */
  get commentReply(): Prisma.CommentReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisJob`: Exposes CRUD operations for the **AnalysisJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisJobs
    * const analysisJobs = await prisma.analysisJob.findMany()
    * ```
    */
  get analysisJob(): Prisma.AnalysisJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sentimentAnalysis`: Exposes CRUD operations for the **SentimentAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SentimentAnalyses
    * const sentimentAnalyses = await prisma.sentimentAnalysis.findMany()
    * ```
    */
  get sentimentAnalysis(): Prisma.SentimentAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoAnalysisSummary`: Exposes CRUD operations for the **VideoAnalysisSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoAnalysisSummaries
    * const videoAnalysisSummaries = await prisma.videoAnalysisSummary.findMany()
    * ```
    */
  get videoAnalysisSummary(): Prisma.VideoAnalysisSummaryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Video: 'Video',
    Comment: 'Comment',
    McpConversation: 'McpConversation',
    CommentReply: 'CommentReply',
    AnalysisJob: 'AnalysisJob',
    SentimentAnalysis: 'SentimentAnalysis',
    VideoAnalysisSummary: 'VideoAnalysisSummary'
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
      modelProps: "user" | "video" | "comment" | "mcpConversation" | "commentReply" | "analysisJob" | "sentimentAnalysis" | "videoAnalysisSummary"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
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
      McpConversation: {
        payload: Prisma.$McpConversationPayload<ExtArgs>
        fields: Prisma.McpConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.McpConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.McpConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>
          }
          findFirst: {
            args: Prisma.McpConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.McpConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>
          }
          findMany: {
            args: Prisma.McpConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>[]
          }
          create: {
            args: Prisma.McpConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>
          }
          createMany: {
            args: Prisma.McpConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.McpConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>[]
          }
          delete: {
            args: Prisma.McpConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>
          }
          update: {
            args: Prisma.McpConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>
          }
          deleteMany: {
            args: Prisma.McpConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.McpConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.McpConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>[]
          }
          upsert: {
            args: Prisma.McpConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$McpConversationPayload>
          }
          aggregate: {
            args: Prisma.McpConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMcpConversation>
          }
          groupBy: {
            args: Prisma.McpConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<McpConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.McpConversationCountArgs<ExtArgs>
            result: $Utils.Optional<McpConversationCountAggregateOutputType> | number
          }
        }
      }
      CommentReply: {
        payload: Prisma.$CommentReplyPayload<ExtArgs>
        fields: Prisma.CommentReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>
          }
          findFirst: {
            args: Prisma.CommentReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>
          }
          findMany: {
            args: Prisma.CommentReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>[]
          }
          create: {
            args: Prisma.CommentReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>
          }
          createMany: {
            args: Prisma.CommentReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>[]
          }
          delete: {
            args: Prisma.CommentReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>
          }
          update: {
            args: Prisma.CommentReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>
          }
          deleteMany: {
            args: Prisma.CommentReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>[]
          }
          upsert: {
            args: Prisma.CommentReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReplyPayload>
          }
          aggregate: {
            args: Prisma.CommentReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentReply>
          }
          groupBy: {
            args: Prisma.CommentReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentReplyCountArgs<ExtArgs>
            result: $Utils.Optional<CommentReplyCountAggregateOutputType> | number
          }
        }
      }
      AnalysisJob: {
        payload: Prisma.$AnalysisJobPayload<ExtArgs>
        fields: Prisma.AnalysisJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          findFirst: {
            args: Prisma.AnalysisJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          findMany: {
            args: Prisma.AnalysisJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>[]
          }
          create: {
            args: Prisma.AnalysisJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          createMany: {
            args: Prisma.AnalysisJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>[]
          }
          delete: {
            args: Prisma.AnalysisJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          update: {
            args: Prisma.AnalysisJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisJobPayload>
          }
          aggregate: {
            args: Prisma.AnalysisJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisJob>
          }
          groupBy: {
            args: Prisma.AnalysisJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisJobCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisJobCountAggregateOutputType> | number
          }
        }
      }
      SentimentAnalysis: {
        payload: Prisma.$SentimentAnalysisPayload<ExtArgs>
        fields: Prisma.SentimentAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SentimentAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentimentAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>
          }
          findFirst: {
            args: Prisma.SentimentAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentimentAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>
          }
          findMany: {
            args: Prisma.SentimentAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>[]
          }
          create: {
            args: Prisma.SentimentAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>
          }
          createMany: {
            args: Prisma.SentimentAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SentimentAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>[]
          }
          delete: {
            args: Prisma.SentimentAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>
          }
          update: {
            args: Prisma.SentimentAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.SentimentAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SentimentAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SentimentAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.SentimentAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentAnalysisPayload>
          }
          aggregate: {
            args: Prisma.SentimentAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSentimentAnalysis>
          }
          groupBy: {
            args: Prisma.SentimentAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<SentimentAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentimentAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<SentimentAnalysisCountAggregateOutputType> | number
          }
        }
      }
      VideoAnalysisSummary: {
        payload: Prisma.$VideoAnalysisSummaryPayload<ExtArgs>
        fields: Prisma.VideoAnalysisSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoAnalysisSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoAnalysisSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>
          }
          findFirst: {
            args: Prisma.VideoAnalysisSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoAnalysisSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>
          }
          findMany: {
            args: Prisma.VideoAnalysisSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>[]
          }
          create: {
            args: Prisma.VideoAnalysisSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>
          }
          createMany: {
            args: Prisma.VideoAnalysisSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoAnalysisSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>[]
          }
          delete: {
            args: Prisma.VideoAnalysisSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>
          }
          update: {
            args: Prisma.VideoAnalysisSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>
          }
          deleteMany: {
            args: Prisma.VideoAnalysisSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoAnalysisSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoAnalysisSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>[]
          }
          upsert: {
            args: Prisma.VideoAnalysisSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAnalysisSummaryPayload>
          }
          aggregate: {
            args: Prisma.VideoAnalysisSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoAnalysisSummary>
          }
          groupBy: {
            args: Prisma.VideoAnalysisSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoAnalysisSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoAnalysisSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<VideoAnalysisSummaryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    video?: VideoOmit
    comment?: CommentOmit
    mcpConversation?: McpConversationOmit
    commentReply?: CommentReplyOmit
    analysisJob?: AnalysisJobOmit
    sentimentAnalysis?: SentimentAnalysisOmit
    videoAnalysisSummary?: VideoAnalysisSummaryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    videos: number
    comments: number
    commentReplies: number
    mcpConvos: number
    analysisJobs: number
    sentimentAnalysis: number
    videoSummaries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | UserCountOutputTypeCountVideosArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    commentReplies?: boolean | UserCountOutputTypeCountCommentRepliesArgs
    mcpConvos?: boolean | UserCountOutputTypeCountMcpConvosArgs
    analysisJobs?: boolean | UserCountOutputTypeCountAnalysisJobsArgs
    sentimentAnalysis?: boolean | UserCountOutputTypeCountSentimentAnalysisArgs
    videoSummaries?: boolean | UserCountOutputTypeCountVideoSummariesArgs
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
  export type UserCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
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
  export type UserCountOutputTypeCountCommentRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReplyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMcpConvosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McpConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalysisJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisJobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentimentAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentAnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideoSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoAnalysisSummaryWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    comments: number
    mcpConvos: number
    analysisJobs: number
    sentimentAnalysis: number
    videoSummaries: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | VideoCountOutputTypeCountCommentsArgs
    mcpConvos?: boolean | VideoCountOutputTypeCountMcpConvosArgs
    analysisJobs?: boolean | VideoCountOutputTypeCountAnalysisJobsArgs
    sentimentAnalysis?: boolean | VideoCountOutputTypeCountSentimentAnalysisArgs
    videoSummaries?: boolean | VideoCountOutputTypeCountVideoSummariesArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountMcpConvosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McpConversationWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountAnalysisJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisJobWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountSentimentAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentAnalysisWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountVideoSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoAnalysisSummaryWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
    commentReplies: number
    sentimentAnalysis: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
    commentReplies?: boolean | CommentCountOutputTypeCountCommentRepliesArgs
    sentimentAnalysis?: boolean | CommentCountOutputTypeCountSentimentAnalysisArgs
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
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountCommentRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReplyWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountSentimentAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentAnalysisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    subscriberCount: number | null
  }

  export type UserSumAggregateOutputType = {
    subscriberCount: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    username: string | null
    email: string | null
    channelId: string | null
    channelName: string | null
    channelThumbnailUrl: string | null
    subscriberCount: number | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    username: string | null
    email: string | null
    channelId: string | null
    channelName: string | null
    channelThumbnailUrl: string | null
    subscriberCount: number | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    email: number
    channelId: number
    channelName: number
    channelThumbnailUrl: number
    subscriberCount: number
    accessToken: number
    refreshToken: number
    tokenExpiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    subscriberCount?: true
  }

  export type UserSumAggregateInputType = {
    subscriberCount?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    channelId?: true
    channelName?: true
    channelThumbnailUrl?: true
    subscriberCount?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    channelId?: true
    channelName?: true
    channelThumbnailUrl?: true
    subscriberCount?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    channelId?: true
    channelName?: true
    channelThumbnailUrl?: true
    subscriberCount?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    username: string
    email: string
    channelId: string | null
    channelName: string | null
    channelThumbnailUrl: string | null
    subscriberCount: number
    accessToken: string | null
    refreshToken: string | null
    tokenExpiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    userId?: boolean
    username?: boolean
    email?: boolean
    channelId?: boolean
    channelName?: boolean
    channelThumbnailUrl?: boolean
    subscriberCount?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videos?: boolean | User$videosArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    commentReplies?: boolean | User$commentRepliesArgs<ExtArgs>
    mcpConvos?: boolean | User$mcpConvosArgs<ExtArgs>
    analysisJobs?: boolean | User$analysisJobsArgs<ExtArgs>
    sentimentAnalysis?: boolean | User$sentimentAnalysisArgs<ExtArgs>
    videoSummaries?: boolean | User$videoSummariesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    channelId?: boolean
    channelName?: boolean
    channelThumbnailUrl?: boolean
    subscriberCount?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    channelId?: boolean
    channelName?: boolean
    channelThumbnailUrl?: boolean
    subscriberCount?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    email?: boolean
    channelId?: boolean
    channelName?: boolean
    channelThumbnailUrl?: boolean
    subscriberCount?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "email" | "channelId" | "channelName" | "channelThumbnailUrl" | "subscriberCount" | "accessToken" | "refreshToken" | "tokenExpiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | User$videosArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    commentReplies?: boolean | User$commentRepliesArgs<ExtArgs>
    mcpConvos?: boolean | User$mcpConvosArgs<ExtArgs>
    analysisJobs?: boolean | User$analysisJobsArgs<ExtArgs>
    sentimentAnalysis?: boolean | User$sentimentAnalysisArgs<ExtArgs>
    videoSummaries?: boolean | User$videoSummariesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      commentReplies: Prisma.$CommentReplyPayload<ExtArgs>[]
      mcpConvos: Prisma.$McpConversationPayload<ExtArgs>[]
      analysisJobs: Prisma.$AnalysisJobPayload<ExtArgs>[]
      sentimentAnalysis: Prisma.$SentimentAnalysisPayload<ExtArgs>[]
      videoSummaries: Prisma.$VideoAnalysisSummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      username: string
      email: string
      channelId: string | null
      channelName: string | null
      channelThumbnailUrl: string | null
      subscriberCount: number
      accessToken: string | null
      refreshToken: string | null
      tokenExpiresAt: Date | null
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    videos<T extends User$videosArgs<ExtArgs> = {}>(args?: Subset<T, User$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentReplies<T extends User$commentRepliesArgs<ExtArgs> = {}>(args?: Subset<T, User$commentRepliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mcpConvos<T extends User$mcpConvosArgs<ExtArgs> = {}>(args?: Subset<T, User$mcpConvosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analysisJobs<T extends User$analysisJobsArgs<ExtArgs> = {}>(args?: Subset<T, User$analysisJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentimentAnalysis<T extends User$sentimentAnalysisArgs<ExtArgs> = {}>(args?: Subset<T, User$sentimentAnalysisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videoSummaries<T extends User$videoSummariesArgs<ExtArgs> = {}>(args?: Subset<T, User$videoSummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly channelId: FieldRef<"User", 'String'>
    readonly channelName: FieldRef<"User", 'String'>
    readonly channelThumbnailUrl: FieldRef<"User", 'String'>
    readonly subscriberCount: FieldRef<"User", 'Int'>
    readonly accessToken: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly tokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.videos
   */
  export type User$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
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
   * User.commentReplies
   */
  export type User$commentRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    where?: CommentReplyWhereInput
    orderBy?: CommentReplyOrderByWithRelationInput | CommentReplyOrderByWithRelationInput[]
    cursor?: CommentReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentReplyScalarFieldEnum | CommentReplyScalarFieldEnum[]
  }

  /**
   * User.mcpConvos
   */
  export type User$mcpConvosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    where?: McpConversationWhereInput
    orderBy?: McpConversationOrderByWithRelationInput | McpConversationOrderByWithRelationInput[]
    cursor?: McpConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: McpConversationScalarFieldEnum | McpConversationScalarFieldEnum[]
  }

  /**
   * User.analysisJobs
   */
  export type User$analysisJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    where?: AnalysisJobWhereInput
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    cursor?: AnalysisJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * User.sentimentAnalysis
   */
  export type User$sentimentAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    where?: SentimentAnalysisWhereInput
    orderBy?: SentimentAnalysisOrderByWithRelationInput | SentimentAnalysisOrderByWithRelationInput[]
    cursor?: SentimentAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentimentAnalysisScalarFieldEnum | SentimentAnalysisScalarFieldEnum[]
  }

  /**
   * User.videoSummaries
   */
  export type User$videoSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    where?: VideoAnalysisSummaryWhereInput
    orderBy?: VideoAnalysisSummaryOrderByWithRelationInput | VideoAnalysisSummaryOrderByWithRelationInput[]
    cursor?: VideoAnalysisSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoAnalysisSummaryScalarFieldEnum | VideoAnalysisSummaryScalarFieldEnum[]
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
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoMinAggregateOutputType = {
    videoId: string | null
    userId: string | null
    title: string | null
    description: string | null
    thumbnailUrl: string | null
    publishedAt: Date | null
    analysisStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    videoId: string | null
    userId: string | null
    title: string | null
    description: string | null
    thumbnailUrl: string | null
    publishedAt: Date | null
    analysisStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    videoId: number
    userId: number
    title: number
    description: number
    thumbnailUrl: number
    publishedAt: number
    analysisStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoMinAggregateInputType = {
    videoId?: true
    userId?: true
    title?: true
    description?: true
    thumbnailUrl?: true
    publishedAt?: true
    analysisStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    videoId?: true
    userId?: true
    title?: true
    description?: true
    thumbnailUrl?: true
    publishedAt?: true
    analysisStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    videoId?: true
    userId?: true
    title?: true
    description?: true
    thumbnailUrl?: true
    publishedAt?: true
    analysisStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    videoId: string
    userId: string
    title: string
    description: string | null
    thumbnailUrl: string | null
    publishedAt: Date | null
    analysisStatus: string
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    analysisStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Video$commentsArgs<ExtArgs>
    mcpConvos?: boolean | Video$mcpConvosArgs<ExtArgs>
    analysisJobs?: boolean | Video$analysisJobsArgs<ExtArgs>
    sentimentAnalysis?: boolean | Video$sentimentAnalysisArgs<ExtArgs>
    videoSummaries?: boolean | Video$videoSummariesArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    analysisStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    videoId?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    analysisStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    videoId?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    publishedAt?: boolean
    analysisStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"videoId" | "userId" | "title" | "description" | "thumbnailUrl" | "publishedAt" | "analysisStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Video$commentsArgs<ExtArgs>
    mcpConvos?: boolean | Video$mcpConvosArgs<ExtArgs>
    analysisJobs?: boolean | Video$analysisJobsArgs<ExtArgs>
    sentimentAnalysis?: boolean | Video$sentimentAnalysisArgs<ExtArgs>
    videoSummaries?: boolean | Video$videoSummariesArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      mcpConvos: Prisma.$McpConversationPayload<ExtArgs>[]
      analysisJobs: Prisma.$AnalysisJobPayload<ExtArgs>[]
      sentimentAnalysis: Prisma.$SentimentAnalysisPayload<ExtArgs>[]
      videoSummaries: Prisma.$VideoAnalysisSummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      videoId: string
      userId: string
      title: string
      description: string | null
      thumbnailUrl: string | null
      publishedAt: Date | null
      analysisStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `videoId`
     * const videoWithVideoIdOnly = await prisma.video.findMany({ select: { videoId: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `videoId`
     * const videoWithVideoIdOnly = await prisma.video.createManyAndReturn({
     *   select: { videoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `videoId`
     * const videoWithVideoIdOnly = await prisma.video.updateManyAndReturn({
     *   select: { videoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Video$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Video$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mcpConvos<T extends Video$mcpConvosArgs<ExtArgs> = {}>(args?: Subset<T, Video$mcpConvosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analysisJobs<T extends Video$analysisJobsArgs<ExtArgs> = {}>(args?: Subset<T, Video$analysisJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentimentAnalysis<T extends Video$sentimentAnalysisArgs<ExtArgs> = {}>(args?: Subset<T, Video$sentimentAnalysisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videoSummaries<T extends Video$videoSummariesArgs<ExtArgs> = {}>(args?: Subset<T, Video$videoSummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly videoId: FieldRef<"Video", 'String'>
    readonly userId: FieldRef<"Video", 'String'>
    readonly title: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly thumbnailUrl: FieldRef<"Video", 'String'>
    readonly publishedAt: FieldRef<"Video", 'DateTime'>
    readonly analysisStatus: FieldRef<"Video", 'String'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.comments
   */
  export type Video$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Video.mcpConvos
   */
  export type Video$mcpConvosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    where?: McpConversationWhereInput
    orderBy?: McpConversationOrderByWithRelationInput | McpConversationOrderByWithRelationInput[]
    cursor?: McpConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: McpConversationScalarFieldEnum | McpConversationScalarFieldEnum[]
  }

  /**
   * Video.analysisJobs
   */
  export type Video$analysisJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    where?: AnalysisJobWhereInput
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    cursor?: AnalysisJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * Video.sentimentAnalysis
   */
  export type Video$sentimentAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    where?: SentimentAnalysisWhereInput
    orderBy?: SentimentAnalysisOrderByWithRelationInput | SentimentAnalysisOrderByWithRelationInput[]
    cursor?: SentimentAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentimentAnalysisScalarFieldEnum | SentimentAnalysisScalarFieldEnum[]
  }

  /**
   * Video.videoSummaries
   */
  export type Video$videoSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    where?: VideoAnalysisSummaryWhereInput
    orderBy?: VideoAnalysisSummaryOrderByWithRelationInput | VideoAnalysisSummaryOrderByWithRelationInput[]
    cursor?: VideoAnalysisSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoAnalysisSummaryScalarFieldEnum | VideoAnalysisSummaryScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    replyCount: number | null
    likeCount: number | null
  }

  export type CommentSumAggregateOutputType = {
    replyCount: number | null
    likeCount: number | null
  }

  export type CommentMinAggregateOutputType = {
    commentId: string | null
    videoId: string | null
    userId: string | null
    authorName: string | null
    authorChannelId: string | null
    commentText: string | null
    publishedAt: Date | null
    parentCommentId: string | null
    isReply: boolean | null
    replyCount: number | null
    likeCount: number | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    commentId: string | null
    videoId: string | null
    userId: string | null
    authorName: string | null
    authorChannelId: string | null
    commentText: string | null
    publishedAt: Date | null
    parentCommentId: string | null
    isReply: boolean | null
    replyCount: number | null
    likeCount: number | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    commentId: number
    videoId: number
    userId: number
    authorName: number
    authorChannelId: number
    commentText: number
    publishedAt: number
    parentCommentId: number
    isReply: number
    replyCount: number
    likeCount: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    replyCount?: true
    likeCount?: true
  }

  export type CommentSumAggregateInputType = {
    replyCount?: true
    likeCount?: true
  }

  export type CommentMinAggregateInputType = {
    commentId?: true
    videoId?: true
    userId?: true
    authorName?: true
    authorChannelId?: true
    commentText?: true
    publishedAt?: true
    parentCommentId?: true
    isReply?: true
    replyCount?: true
    likeCount?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    commentId?: true
    videoId?: true
    userId?: true
    authorName?: true
    authorChannelId?: true
    commentText?: true
    publishedAt?: true
    parentCommentId?: true
    isReply?: true
    replyCount?: true
    likeCount?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    commentId?: true
    videoId?: true
    userId?: true
    authorName?: true
    authorChannelId?: true
    commentText?: true
    publishedAt?: true
    parentCommentId?: true
    isReply?: true
    replyCount?: true
    likeCount?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
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
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    commentId: string
    videoId: string
    userId: string
    authorName: string | null
    authorChannelId: string | null
    commentText: string
    publishedAt: Date | null
    parentCommentId: string | null
    isReply: boolean
    replyCount: number
    likeCount: number
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
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
    commentId?: boolean
    videoId?: boolean
    userId?: boolean
    authorName?: boolean
    authorChannelId?: boolean
    commentText?: boolean
    publishedAt?: boolean
    parentCommentId?: boolean
    isReply?: boolean
    replyCount?: boolean
    likeCount?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    commentReplies?: boolean | Comment$commentRepliesArgs<ExtArgs>
    sentimentAnalysis?: boolean | Comment$sentimentAnalysisArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    videoId?: boolean
    userId?: boolean
    authorName?: boolean
    authorChannelId?: boolean
    commentText?: boolean
    publishedAt?: boolean
    parentCommentId?: boolean
    isReply?: boolean
    replyCount?: boolean
    likeCount?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commentId?: boolean
    videoId?: boolean
    userId?: boolean
    authorName?: boolean
    authorChannelId?: boolean
    commentText?: boolean
    publishedAt?: boolean
    parentCommentId?: boolean
    isReply?: boolean
    replyCount?: boolean
    likeCount?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    commentId?: boolean
    videoId?: boolean
    userId?: boolean
    authorName?: boolean
    authorChannelId?: boolean
    commentText?: boolean
    publishedAt?: boolean
    parentCommentId?: boolean
    isReply?: boolean
    replyCount?: boolean
    likeCount?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"commentId" | "videoId" | "userId" | "authorName" | "authorChannelId" | "commentText" | "publishedAt" | "parentCommentId" | "isReply" | "replyCount" | "likeCount" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    commentReplies?: boolean | Comment$commentRepliesArgs<ExtArgs>
    sentimentAnalysis?: boolean | Comment$sentimentAnalysisArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | Comment$parentCommentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      parentComment: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
      commentReplies: Prisma.$CommentReplyPayload<ExtArgs>[]
      sentimentAnalysis: Prisma.$SentimentAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      commentId: string
      videoId: string
      userId: string
      authorName: string | null
      authorChannelId: string | null
      commentText: string
      publishedAt: Date | null
      parentCommentId: string | null
      isReply: boolean
      replyCount: number
      likeCount: number
      createdAt: Date
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
     * // Only select the `commentId`
     * const commentWithCommentIdOnly = await prisma.comment.findMany({ select: { commentId: true } })
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
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `commentId`
     * const commentWithCommentIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { commentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `commentId`
     * const commentWithCommentIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { commentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parentComment<T extends Comment$parentCommentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentCommentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentReplies<T extends Comment$commentRepliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$commentRepliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentimentAnalysis<T extends Comment$sentimentAnalysisArgs<ExtArgs> = {}>(args?: Subset<T, Comment$sentimentAnalysisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly commentId: FieldRef<"Comment", 'String'>
    readonly videoId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly authorName: FieldRef<"Comment", 'String'>
    readonly authorChannelId: FieldRef<"Comment", 'String'>
    readonly commentText: FieldRef<"Comment", 'String'>
    readonly publishedAt: FieldRef<"Comment", 'DateTime'>
    readonly parentCommentId: FieldRef<"Comment", 'String'>
    readonly isReply: FieldRef<"Comment", 'Boolean'>
    readonly replyCount: FieldRef<"Comment", 'Int'>
    readonly likeCount: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
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
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
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
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Comment.commentReplies
   */
  export type Comment$commentRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    where?: CommentReplyWhereInput
    orderBy?: CommentReplyOrderByWithRelationInput | CommentReplyOrderByWithRelationInput[]
    cursor?: CommentReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentReplyScalarFieldEnum | CommentReplyScalarFieldEnum[]
  }

  /**
   * Comment.sentimentAnalysis
   */
  export type Comment$sentimentAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    where?: SentimentAnalysisWhereInput
    orderBy?: SentimentAnalysisOrderByWithRelationInput | SentimentAnalysisOrderByWithRelationInput[]
    cursor?: SentimentAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentimentAnalysisScalarFieldEnum | SentimentAnalysisScalarFieldEnum[]
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
   * Model McpConversation
   */

  export type AggregateMcpConversation = {
    _count: McpConversationCountAggregateOutputType | null
    _min: McpConversationMinAggregateOutputType | null
    _max: McpConversationMaxAggregateOutputType | null
  }

  export type McpConversationMinAggregateOutputType = {
    conversationId: string | null
    videoId: string | null
    userId: string | null
    userQuery: string | null
    aiResponse: string | null
    createdAt: Date | null
  }

  export type McpConversationMaxAggregateOutputType = {
    conversationId: string | null
    videoId: string | null
    userId: string | null
    userQuery: string | null
    aiResponse: string | null
    createdAt: Date | null
  }

  export type McpConversationCountAggregateOutputType = {
    conversationId: number
    videoId: number
    userId: number
    userQuery: number
    aiResponse: number
    createdAt: number
    _all: number
  }


  export type McpConversationMinAggregateInputType = {
    conversationId?: true
    videoId?: true
    userId?: true
    userQuery?: true
    aiResponse?: true
    createdAt?: true
  }

  export type McpConversationMaxAggregateInputType = {
    conversationId?: true
    videoId?: true
    userId?: true
    userQuery?: true
    aiResponse?: true
    createdAt?: true
  }

  export type McpConversationCountAggregateInputType = {
    conversationId?: true
    videoId?: true
    userId?: true
    userQuery?: true
    aiResponse?: true
    createdAt?: true
    _all?: true
  }

  export type McpConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which McpConversation to aggregate.
     */
    where?: McpConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McpConversations to fetch.
     */
    orderBy?: McpConversationOrderByWithRelationInput | McpConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: McpConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McpConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McpConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned McpConversations
    **/
    _count?: true | McpConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: McpConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: McpConversationMaxAggregateInputType
  }

  export type GetMcpConversationAggregateType<T extends McpConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateMcpConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMcpConversation[P]>
      : GetScalarType<T[P], AggregateMcpConversation[P]>
  }




  export type McpConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: McpConversationWhereInput
    orderBy?: McpConversationOrderByWithAggregationInput | McpConversationOrderByWithAggregationInput[]
    by: McpConversationScalarFieldEnum[] | McpConversationScalarFieldEnum
    having?: McpConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: McpConversationCountAggregateInputType | true
    _min?: McpConversationMinAggregateInputType
    _max?: McpConversationMaxAggregateInputType
  }

  export type McpConversationGroupByOutputType = {
    conversationId: string
    videoId: string
    userId: string
    userQuery: string
    aiResponse: string
    createdAt: Date
    _count: McpConversationCountAggregateOutputType | null
    _min: McpConversationMinAggregateOutputType | null
    _max: McpConversationMaxAggregateOutputType | null
  }

  type GetMcpConversationGroupByPayload<T extends McpConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<McpConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof McpConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], McpConversationGroupByOutputType[P]>
            : GetScalarType<T[P], McpConversationGroupByOutputType[P]>
        }
      >
    >


  export type McpConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversationId?: boolean
    videoId?: boolean
    userId?: boolean
    userQuery?: boolean
    aiResponse?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcpConversation"]>

  export type McpConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversationId?: boolean
    videoId?: boolean
    userId?: boolean
    userQuery?: boolean
    aiResponse?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcpConversation"]>

  export type McpConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    conversationId?: boolean
    videoId?: boolean
    userId?: boolean
    userQuery?: boolean
    aiResponse?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mcpConversation"]>

  export type McpConversationSelectScalar = {
    conversationId?: boolean
    videoId?: boolean
    userId?: boolean
    userQuery?: boolean
    aiResponse?: boolean
    createdAt?: boolean
  }

  export type McpConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"conversationId" | "videoId" | "userId" | "userQuery" | "aiResponse" | "createdAt", ExtArgs["result"]["mcpConversation"]>
  export type McpConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type McpConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type McpConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $McpConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "McpConversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      conversationId: string
      videoId: string
      userId: string
      userQuery: string
      aiResponse: string
      createdAt: Date
    }, ExtArgs["result"]["mcpConversation"]>
    composites: {}
  }

  type McpConversationGetPayload<S extends boolean | null | undefined | McpConversationDefaultArgs> = $Result.GetResult<Prisma.$McpConversationPayload, S>

  type McpConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<McpConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: McpConversationCountAggregateInputType | true
    }

  export interface McpConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['McpConversation'], meta: { name: 'McpConversation' } }
    /**
     * Find zero or one McpConversation that matches the filter.
     * @param {McpConversationFindUniqueArgs} args - Arguments to find a McpConversation
     * @example
     * // Get one McpConversation
     * const mcpConversation = await prisma.mcpConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends McpConversationFindUniqueArgs>(args: SelectSubset<T, McpConversationFindUniqueArgs<ExtArgs>>): Prisma__McpConversationClient<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one McpConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {McpConversationFindUniqueOrThrowArgs} args - Arguments to find a McpConversation
     * @example
     * // Get one McpConversation
     * const mcpConversation = await prisma.mcpConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends McpConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, McpConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__McpConversationClient<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first McpConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpConversationFindFirstArgs} args - Arguments to find a McpConversation
     * @example
     * // Get one McpConversation
     * const mcpConversation = await prisma.mcpConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends McpConversationFindFirstArgs>(args?: SelectSubset<T, McpConversationFindFirstArgs<ExtArgs>>): Prisma__McpConversationClient<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first McpConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpConversationFindFirstOrThrowArgs} args - Arguments to find a McpConversation
     * @example
     * // Get one McpConversation
     * const mcpConversation = await prisma.mcpConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends McpConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, McpConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__McpConversationClient<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more McpConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all McpConversations
     * const mcpConversations = await prisma.mcpConversation.findMany()
     * 
     * // Get first 10 McpConversations
     * const mcpConversations = await prisma.mcpConversation.findMany({ take: 10 })
     * 
     * // Only select the `conversationId`
     * const mcpConversationWithConversationIdOnly = await prisma.mcpConversation.findMany({ select: { conversationId: true } })
     * 
     */
    findMany<T extends McpConversationFindManyArgs>(args?: SelectSubset<T, McpConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a McpConversation.
     * @param {McpConversationCreateArgs} args - Arguments to create a McpConversation.
     * @example
     * // Create one McpConversation
     * const McpConversation = await prisma.mcpConversation.create({
     *   data: {
     *     // ... data to create a McpConversation
     *   }
     * })
     * 
     */
    create<T extends McpConversationCreateArgs>(args: SelectSubset<T, McpConversationCreateArgs<ExtArgs>>): Prisma__McpConversationClient<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many McpConversations.
     * @param {McpConversationCreateManyArgs} args - Arguments to create many McpConversations.
     * @example
     * // Create many McpConversations
     * const mcpConversation = await prisma.mcpConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends McpConversationCreateManyArgs>(args?: SelectSubset<T, McpConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many McpConversations and returns the data saved in the database.
     * @param {McpConversationCreateManyAndReturnArgs} args - Arguments to create many McpConversations.
     * @example
     * // Create many McpConversations
     * const mcpConversation = await prisma.mcpConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many McpConversations and only return the `conversationId`
     * const mcpConversationWithConversationIdOnly = await prisma.mcpConversation.createManyAndReturn({
     *   select: { conversationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends McpConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, McpConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a McpConversation.
     * @param {McpConversationDeleteArgs} args - Arguments to delete one McpConversation.
     * @example
     * // Delete one McpConversation
     * const McpConversation = await prisma.mcpConversation.delete({
     *   where: {
     *     // ... filter to delete one McpConversation
     *   }
     * })
     * 
     */
    delete<T extends McpConversationDeleteArgs>(args: SelectSubset<T, McpConversationDeleteArgs<ExtArgs>>): Prisma__McpConversationClient<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one McpConversation.
     * @param {McpConversationUpdateArgs} args - Arguments to update one McpConversation.
     * @example
     * // Update one McpConversation
     * const mcpConversation = await prisma.mcpConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends McpConversationUpdateArgs>(args: SelectSubset<T, McpConversationUpdateArgs<ExtArgs>>): Prisma__McpConversationClient<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more McpConversations.
     * @param {McpConversationDeleteManyArgs} args - Arguments to filter McpConversations to delete.
     * @example
     * // Delete a few McpConversations
     * const { count } = await prisma.mcpConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends McpConversationDeleteManyArgs>(args?: SelectSubset<T, McpConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more McpConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many McpConversations
     * const mcpConversation = await prisma.mcpConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends McpConversationUpdateManyArgs>(args: SelectSubset<T, McpConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more McpConversations and returns the data updated in the database.
     * @param {McpConversationUpdateManyAndReturnArgs} args - Arguments to update many McpConversations.
     * @example
     * // Update many McpConversations
     * const mcpConversation = await prisma.mcpConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more McpConversations and only return the `conversationId`
     * const mcpConversationWithConversationIdOnly = await prisma.mcpConversation.updateManyAndReturn({
     *   select: { conversationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends McpConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, McpConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one McpConversation.
     * @param {McpConversationUpsertArgs} args - Arguments to update or create a McpConversation.
     * @example
     * // Update or create a McpConversation
     * const mcpConversation = await prisma.mcpConversation.upsert({
     *   create: {
     *     // ... data to create a McpConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the McpConversation we want to update
     *   }
     * })
     */
    upsert<T extends McpConversationUpsertArgs>(args: SelectSubset<T, McpConversationUpsertArgs<ExtArgs>>): Prisma__McpConversationClient<$Result.GetResult<Prisma.$McpConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of McpConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpConversationCountArgs} args - Arguments to filter McpConversations to count.
     * @example
     * // Count the number of McpConversations
     * const count = await prisma.mcpConversation.count({
     *   where: {
     *     // ... the filter for the McpConversations we want to count
     *   }
     * })
    **/
    count<T extends McpConversationCountArgs>(
      args?: Subset<T, McpConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], McpConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a McpConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends McpConversationAggregateArgs>(args: Subset<T, McpConversationAggregateArgs>): Prisma.PrismaPromise<GetMcpConversationAggregateType<T>>

    /**
     * Group by McpConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {McpConversationGroupByArgs} args - Group by arguments.
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
      T extends McpConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: McpConversationGroupByArgs['orderBy'] }
        : { orderBy?: McpConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, McpConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMcpConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the McpConversation model
   */
  readonly fields: McpConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for McpConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__McpConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the McpConversation model
   */
  interface McpConversationFieldRefs {
    readonly conversationId: FieldRef<"McpConversation", 'String'>
    readonly videoId: FieldRef<"McpConversation", 'String'>
    readonly userId: FieldRef<"McpConversation", 'String'>
    readonly userQuery: FieldRef<"McpConversation", 'String'>
    readonly aiResponse: FieldRef<"McpConversation", 'String'>
    readonly createdAt: FieldRef<"McpConversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * McpConversation findUnique
   */
  export type McpConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * Filter, which McpConversation to fetch.
     */
    where: McpConversationWhereUniqueInput
  }

  /**
   * McpConversation findUniqueOrThrow
   */
  export type McpConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * Filter, which McpConversation to fetch.
     */
    where: McpConversationWhereUniqueInput
  }

  /**
   * McpConversation findFirst
   */
  export type McpConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * Filter, which McpConversation to fetch.
     */
    where?: McpConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McpConversations to fetch.
     */
    orderBy?: McpConversationOrderByWithRelationInput | McpConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for McpConversations.
     */
    cursor?: McpConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McpConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McpConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of McpConversations.
     */
    distinct?: McpConversationScalarFieldEnum | McpConversationScalarFieldEnum[]
  }

  /**
   * McpConversation findFirstOrThrow
   */
  export type McpConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * Filter, which McpConversation to fetch.
     */
    where?: McpConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McpConversations to fetch.
     */
    orderBy?: McpConversationOrderByWithRelationInput | McpConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for McpConversations.
     */
    cursor?: McpConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McpConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McpConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of McpConversations.
     */
    distinct?: McpConversationScalarFieldEnum | McpConversationScalarFieldEnum[]
  }

  /**
   * McpConversation findMany
   */
  export type McpConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * Filter, which McpConversations to fetch.
     */
    where?: McpConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of McpConversations to fetch.
     */
    orderBy?: McpConversationOrderByWithRelationInput | McpConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing McpConversations.
     */
    cursor?: McpConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` McpConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` McpConversations.
     */
    skip?: number
    distinct?: McpConversationScalarFieldEnum | McpConversationScalarFieldEnum[]
  }

  /**
   * McpConversation create
   */
  export type McpConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a McpConversation.
     */
    data: XOR<McpConversationCreateInput, McpConversationUncheckedCreateInput>
  }

  /**
   * McpConversation createMany
   */
  export type McpConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many McpConversations.
     */
    data: McpConversationCreateManyInput | McpConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * McpConversation createManyAndReturn
   */
  export type McpConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * The data used to create many McpConversations.
     */
    data: McpConversationCreateManyInput | McpConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * McpConversation update
   */
  export type McpConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a McpConversation.
     */
    data: XOR<McpConversationUpdateInput, McpConversationUncheckedUpdateInput>
    /**
     * Choose, which McpConversation to update.
     */
    where: McpConversationWhereUniqueInput
  }

  /**
   * McpConversation updateMany
   */
  export type McpConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update McpConversations.
     */
    data: XOR<McpConversationUpdateManyMutationInput, McpConversationUncheckedUpdateManyInput>
    /**
     * Filter which McpConversations to update
     */
    where?: McpConversationWhereInput
    /**
     * Limit how many McpConversations to update.
     */
    limit?: number
  }

  /**
   * McpConversation updateManyAndReturn
   */
  export type McpConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * The data used to update McpConversations.
     */
    data: XOR<McpConversationUpdateManyMutationInput, McpConversationUncheckedUpdateManyInput>
    /**
     * Filter which McpConversations to update
     */
    where?: McpConversationWhereInput
    /**
     * Limit how many McpConversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * McpConversation upsert
   */
  export type McpConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the McpConversation to update in case it exists.
     */
    where: McpConversationWhereUniqueInput
    /**
     * In case the McpConversation found by the `where` argument doesn't exist, create a new McpConversation with this data.
     */
    create: XOR<McpConversationCreateInput, McpConversationUncheckedCreateInput>
    /**
     * In case the McpConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<McpConversationUpdateInput, McpConversationUncheckedUpdateInput>
  }

  /**
   * McpConversation delete
   */
  export type McpConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
    /**
     * Filter which McpConversation to delete.
     */
    where: McpConversationWhereUniqueInput
  }

  /**
   * McpConversation deleteMany
   */
  export type McpConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which McpConversations to delete
     */
    where?: McpConversationWhereInput
    /**
     * Limit how many McpConversations to delete.
     */
    limit?: number
  }

  /**
   * McpConversation without action
   */
  export type McpConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the McpConversation
     */
    select?: McpConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the McpConversation
     */
    omit?: McpConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: McpConversationInclude<ExtArgs> | null
  }


  /**
   * Model CommentReply
   */

  export type AggregateCommentReply = {
    _count: CommentReplyCountAggregateOutputType | null
    _min: CommentReplyMinAggregateOutputType | null
    _max: CommentReplyMaxAggregateOutputType | null
  }

  export type CommentReplyMinAggregateOutputType = {
    replyId: string | null
    commentId: string | null
    userId: string | null
    replyText: string | null
    replyStatus: string | null
    youtubeReplyId: string | null
    createdAt: Date | null
    postedAt: Date | null
  }

  export type CommentReplyMaxAggregateOutputType = {
    replyId: string | null
    commentId: string | null
    userId: string | null
    replyText: string | null
    replyStatus: string | null
    youtubeReplyId: string | null
    createdAt: Date | null
    postedAt: Date | null
  }

  export type CommentReplyCountAggregateOutputType = {
    replyId: number
    commentId: number
    userId: number
    replyText: number
    replyStatus: number
    youtubeReplyId: number
    createdAt: number
    postedAt: number
    _all: number
  }


  export type CommentReplyMinAggregateInputType = {
    replyId?: true
    commentId?: true
    userId?: true
    replyText?: true
    replyStatus?: true
    youtubeReplyId?: true
    createdAt?: true
    postedAt?: true
  }

  export type CommentReplyMaxAggregateInputType = {
    replyId?: true
    commentId?: true
    userId?: true
    replyText?: true
    replyStatus?: true
    youtubeReplyId?: true
    createdAt?: true
    postedAt?: true
  }

  export type CommentReplyCountAggregateInputType = {
    replyId?: true
    commentId?: true
    userId?: true
    replyText?: true
    replyStatus?: true
    youtubeReplyId?: true
    createdAt?: true
    postedAt?: true
    _all?: true
  }

  export type CommentReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReply to aggregate.
     */
    where?: CommentReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReplies to fetch.
     */
    orderBy?: CommentReplyOrderByWithRelationInput | CommentReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentReplies
    **/
    _count?: true | CommentReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentReplyMaxAggregateInputType
  }

  export type GetCommentReplyAggregateType<T extends CommentReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentReply[P]>
      : GetScalarType<T[P], AggregateCommentReply[P]>
  }




  export type CommentReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReplyWhereInput
    orderBy?: CommentReplyOrderByWithAggregationInput | CommentReplyOrderByWithAggregationInput[]
    by: CommentReplyScalarFieldEnum[] | CommentReplyScalarFieldEnum
    having?: CommentReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentReplyCountAggregateInputType | true
    _min?: CommentReplyMinAggregateInputType
    _max?: CommentReplyMaxAggregateInputType
  }

  export type CommentReplyGroupByOutputType = {
    replyId: string
    commentId: string
    userId: string
    replyText: string
    replyStatus: string
    youtubeReplyId: string | null
    createdAt: Date
    postedAt: Date | null
    _count: CommentReplyCountAggregateOutputType | null
    _min: CommentReplyMinAggregateOutputType | null
    _max: CommentReplyMaxAggregateOutputType | null
  }

  type GetCommentReplyGroupByPayload<T extends CommentReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentReplyGroupByOutputType[P]>
            : GetScalarType<T[P], CommentReplyGroupByOutputType[P]>
        }
      >
    >


  export type CommentReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    replyId?: boolean
    commentId?: boolean
    userId?: boolean
    replyText?: boolean
    replyStatus?: boolean
    youtubeReplyId?: boolean
    createdAt?: boolean
    postedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReply"]>

  export type CommentReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    replyId?: boolean
    commentId?: boolean
    userId?: boolean
    replyText?: boolean
    replyStatus?: boolean
    youtubeReplyId?: boolean
    createdAt?: boolean
    postedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReply"]>

  export type CommentReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    replyId?: boolean
    commentId?: boolean
    userId?: boolean
    replyText?: boolean
    replyStatus?: boolean
    youtubeReplyId?: boolean
    createdAt?: boolean
    postedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReply"]>

  export type CommentReplySelectScalar = {
    replyId?: boolean
    commentId?: boolean
    userId?: boolean
    replyText?: boolean
    replyStatus?: boolean
    youtubeReplyId?: boolean
    createdAt?: boolean
    postedAt?: boolean
  }

  export type CommentReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"replyId" | "commentId" | "userId" | "replyText" | "replyStatus" | "youtubeReplyId" | "createdAt" | "postedAt", ExtArgs["result"]["commentReply"]>
  export type CommentReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $CommentReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentReply"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      replyId: string
      commentId: string
      userId: string
      replyText: string
      replyStatus: string
      youtubeReplyId: string | null
      createdAt: Date
      postedAt: Date | null
    }, ExtArgs["result"]["commentReply"]>
    composites: {}
  }

  type CommentReplyGetPayload<S extends boolean | null | undefined | CommentReplyDefaultArgs> = $Result.GetResult<Prisma.$CommentReplyPayload, S>

  type CommentReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentReplyCountAggregateInputType | true
    }

  export interface CommentReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentReply'], meta: { name: 'CommentReply' } }
    /**
     * Find zero or one CommentReply that matches the filter.
     * @param {CommentReplyFindUniqueArgs} args - Arguments to find a CommentReply
     * @example
     * // Get one CommentReply
     * const commentReply = await prisma.commentReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentReplyFindUniqueArgs>(args: SelectSubset<T, CommentReplyFindUniqueArgs<ExtArgs>>): Prisma__CommentReplyClient<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentReply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentReplyFindUniqueOrThrowArgs} args - Arguments to find a CommentReply
     * @example
     * // Get one CommentReply
     * const commentReply = await prisma.commentReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentReplyClient<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReplyFindFirstArgs} args - Arguments to find a CommentReply
     * @example
     * // Get one CommentReply
     * const commentReply = await prisma.commentReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentReplyFindFirstArgs>(args?: SelectSubset<T, CommentReplyFindFirstArgs<ExtArgs>>): Prisma__CommentReplyClient<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReplyFindFirstOrThrowArgs} args - Arguments to find a CommentReply
     * @example
     * // Get one CommentReply
     * const commentReply = await prisma.commentReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentReplyClient<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentReplies
     * const commentReplies = await prisma.commentReply.findMany()
     * 
     * // Get first 10 CommentReplies
     * const commentReplies = await prisma.commentReply.findMany({ take: 10 })
     * 
     * // Only select the `replyId`
     * const commentReplyWithReplyIdOnly = await prisma.commentReply.findMany({ select: { replyId: true } })
     * 
     */
    findMany<T extends CommentReplyFindManyArgs>(args?: SelectSubset<T, CommentReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentReply.
     * @param {CommentReplyCreateArgs} args - Arguments to create a CommentReply.
     * @example
     * // Create one CommentReply
     * const CommentReply = await prisma.commentReply.create({
     *   data: {
     *     // ... data to create a CommentReply
     *   }
     * })
     * 
     */
    create<T extends CommentReplyCreateArgs>(args: SelectSubset<T, CommentReplyCreateArgs<ExtArgs>>): Prisma__CommentReplyClient<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentReplies.
     * @param {CommentReplyCreateManyArgs} args - Arguments to create many CommentReplies.
     * @example
     * // Create many CommentReplies
     * const commentReply = await prisma.commentReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentReplyCreateManyArgs>(args?: SelectSubset<T, CommentReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentReplies and returns the data saved in the database.
     * @param {CommentReplyCreateManyAndReturnArgs} args - Arguments to create many CommentReplies.
     * @example
     * // Create many CommentReplies
     * const commentReply = await prisma.commentReply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentReplies and only return the `replyId`
     * const commentReplyWithReplyIdOnly = await prisma.commentReply.createManyAndReturn({
     *   select: { replyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentReply.
     * @param {CommentReplyDeleteArgs} args - Arguments to delete one CommentReply.
     * @example
     * // Delete one CommentReply
     * const CommentReply = await prisma.commentReply.delete({
     *   where: {
     *     // ... filter to delete one CommentReply
     *   }
     * })
     * 
     */
    delete<T extends CommentReplyDeleteArgs>(args: SelectSubset<T, CommentReplyDeleteArgs<ExtArgs>>): Prisma__CommentReplyClient<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentReply.
     * @param {CommentReplyUpdateArgs} args - Arguments to update one CommentReply.
     * @example
     * // Update one CommentReply
     * const commentReply = await prisma.commentReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentReplyUpdateArgs>(args: SelectSubset<T, CommentReplyUpdateArgs<ExtArgs>>): Prisma__CommentReplyClient<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentReplies.
     * @param {CommentReplyDeleteManyArgs} args - Arguments to filter CommentReplies to delete.
     * @example
     * // Delete a few CommentReplies
     * const { count } = await prisma.commentReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentReplyDeleteManyArgs>(args?: SelectSubset<T, CommentReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentReplies
     * const commentReply = await prisma.commentReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentReplyUpdateManyArgs>(args: SelectSubset<T, CommentReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentReplies and returns the data updated in the database.
     * @param {CommentReplyUpdateManyAndReturnArgs} args - Arguments to update many CommentReplies.
     * @example
     * // Update many CommentReplies
     * const commentReply = await prisma.commentReply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentReplies and only return the `replyId`
     * const commentReplyWithReplyIdOnly = await prisma.commentReply.updateManyAndReturn({
     *   select: { replyId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentReply.
     * @param {CommentReplyUpsertArgs} args - Arguments to update or create a CommentReply.
     * @example
     * // Update or create a CommentReply
     * const commentReply = await prisma.commentReply.upsert({
     *   create: {
     *     // ... data to create a CommentReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentReply we want to update
     *   }
     * })
     */
    upsert<T extends CommentReplyUpsertArgs>(args: SelectSubset<T, CommentReplyUpsertArgs<ExtArgs>>): Prisma__CommentReplyClient<$Result.GetResult<Prisma.$CommentReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReplyCountArgs} args - Arguments to filter CommentReplies to count.
     * @example
     * // Count the number of CommentReplies
     * const count = await prisma.commentReply.count({
     *   where: {
     *     // ... the filter for the CommentReplies we want to count
     *   }
     * })
    **/
    count<T extends CommentReplyCountArgs>(
      args?: Subset<T, CommentReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentReplyAggregateArgs>(args: Subset<T, CommentReplyAggregateArgs>): Prisma.PrismaPromise<GetCommentReplyAggregateType<T>>

    /**
     * Group by CommentReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReplyGroupByArgs} args - Group by arguments.
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
      T extends CommentReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentReplyGroupByArgs['orderBy'] }
        : { orderBy?: CommentReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentReply model
   */
  readonly fields: CommentReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommentReply model
   */
  interface CommentReplyFieldRefs {
    readonly replyId: FieldRef<"CommentReply", 'String'>
    readonly commentId: FieldRef<"CommentReply", 'String'>
    readonly userId: FieldRef<"CommentReply", 'String'>
    readonly replyText: FieldRef<"CommentReply", 'String'>
    readonly replyStatus: FieldRef<"CommentReply", 'String'>
    readonly youtubeReplyId: FieldRef<"CommentReply", 'String'>
    readonly createdAt: FieldRef<"CommentReply", 'DateTime'>
    readonly postedAt: FieldRef<"CommentReply", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommentReply findUnique
   */
  export type CommentReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * Filter, which CommentReply to fetch.
     */
    where: CommentReplyWhereUniqueInput
  }

  /**
   * CommentReply findUniqueOrThrow
   */
  export type CommentReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * Filter, which CommentReply to fetch.
     */
    where: CommentReplyWhereUniqueInput
  }

  /**
   * CommentReply findFirst
   */
  export type CommentReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * Filter, which CommentReply to fetch.
     */
    where?: CommentReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReplies to fetch.
     */
    orderBy?: CommentReplyOrderByWithRelationInput | CommentReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentReplies.
     */
    cursor?: CommentReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentReplies.
     */
    distinct?: CommentReplyScalarFieldEnum | CommentReplyScalarFieldEnum[]
  }

  /**
   * CommentReply findFirstOrThrow
   */
  export type CommentReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * Filter, which CommentReply to fetch.
     */
    where?: CommentReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReplies to fetch.
     */
    orderBy?: CommentReplyOrderByWithRelationInput | CommentReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentReplies.
     */
    cursor?: CommentReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentReplies.
     */
    distinct?: CommentReplyScalarFieldEnum | CommentReplyScalarFieldEnum[]
  }

  /**
   * CommentReply findMany
   */
  export type CommentReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * Filter, which CommentReplies to fetch.
     */
    where?: CommentReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReplies to fetch.
     */
    orderBy?: CommentReplyOrderByWithRelationInput | CommentReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentReplies.
     */
    cursor?: CommentReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReplies.
     */
    skip?: number
    distinct?: CommentReplyScalarFieldEnum | CommentReplyScalarFieldEnum[]
  }

  /**
   * CommentReply create
   */
  export type CommentReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentReply.
     */
    data: XOR<CommentReplyCreateInput, CommentReplyUncheckedCreateInput>
  }

  /**
   * CommentReply createMany
   */
  export type CommentReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentReplies.
     */
    data: CommentReplyCreateManyInput | CommentReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentReply createManyAndReturn
   */
  export type CommentReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * The data used to create many CommentReplies.
     */
    data: CommentReplyCreateManyInput | CommentReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentReply update
   */
  export type CommentReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentReply.
     */
    data: XOR<CommentReplyUpdateInput, CommentReplyUncheckedUpdateInput>
    /**
     * Choose, which CommentReply to update.
     */
    where: CommentReplyWhereUniqueInput
  }

  /**
   * CommentReply updateMany
   */
  export type CommentReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentReplies.
     */
    data: XOR<CommentReplyUpdateManyMutationInput, CommentReplyUncheckedUpdateManyInput>
    /**
     * Filter which CommentReplies to update
     */
    where?: CommentReplyWhereInput
    /**
     * Limit how many CommentReplies to update.
     */
    limit?: number
  }

  /**
   * CommentReply updateManyAndReturn
   */
  export type CommentReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * The data used to update CommentReplies.
     */
    data: XOR<CommentReplyUpdateManyMutationInput, CommentReplyUncheckedUpdateManyInput>
    /**
     * Filter which CommentReplies to update
     */
    where?: CommentReplyWhereInput
    /**
     * Limit how many CommentReplies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentReply upsert
   */
  export type CommentReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentReply to update in case it exists.
     */
    where: CommentReplyWhereUniqueInput
    /**
     * In case the CommentReply found by the `where` argument doesn't exist, create a new CommentReply with this data.
     */
    create: XOR<CommentReplyCreateInput, CommentReplyUncheckedCreateInput>
    /**
     * In case the CommentReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentReplyUpdateInput, CommentReplyUncheckedUpdateInput>
  }

  /**
   * CommentReply delete
   */
  export type CommentReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
    /**
     * Filter which CommentReply to delete.
     */
    where: CommentReplyWhereUniqueInput
  }

  /**
   * CommentReply deleteMany
   */
  export type CommentReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReplies to delete
     */
    where?: CommentReplyWhereInput
    /**
     * Limit how many CommentReplies to delete.
     */
    limit?: number
  }

  /**
   * CommentReply without action
   */
  export type CommentReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReply
     */
    select?: CommentReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReply
     */
    omit?: CommentReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReplyInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisJob
   */

  export type AggregateAnalysisJob = {
    _count: AnalysisJobCountAggregateOutputType | null
    _avg: AnalysisJobAvgAggregateOutputType | null
    _sum: AnalysisJobSumAggregateOutputType | null
    _min: AnalysisJobMinAggregateOutputType | null
    _max: AnalysisJobMaxAggregateOutputType | null
  }

  export type AnalysisJobAvgAggregateOutputType = {
    commentsFetched: number | null
    commentsAnalyzed: number | null
    currentBatch: number | null
  }

  export type AnalysisJobSumAggregateOutputType = {
    commentsFetched: number | null
    commentsAnalyzed: number | null
    currentBatch: number | null
  }

  export type AnalysisJobMinAggregateOutputType = {
    jobId: string | null
    videoId: string | null
    userId: string | null
    jobStatus: string | null
    commentsFetched: number | null
    commentsAnalyzed: number | null
    currentBatch: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type AnalysisJobMaxAggregateOutputType = {
    jobId: string | null
    videoId: string | null
    userId: string | null
    jobStatus: string | null
    commentsFetched: number | null
    commentsAnalyzed: number | null
    currentBatch: number | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type AnalysisJobCountAggregateOutputType = {
    jobId: number
    videoId: number
    userId: number
    jobStatus: number
    commentsFetched: number
    commentsAnalyzed: number
    currentBatch: number
    startedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type AnalysisJobAvgAggregateInputType = {
    commentsFetched?: true
    commentsAnalyzed?: true
    currentBatch?: true
  }

  export type AnalysisJobSumAggregateInputType = {
    commentsFetched?: true
    commentsAnalyzed?: true
    currentBatch?: true
  }

  export type AnalysisJobMinAggregateInputType = {
    jobId?: true
    videoId?: true
    userId?: true
    jobStatus?: true
    commentsFetched?: true
    commentsAnalyzed?: true
    currentBatch?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type AnalysisJobMaxAggregateInputType = {
    jobId?: true
    videoId?: true
    userId?: true
    jobStatus?: true
    commentsFetched?: true
    commentsAnalyzed?: true
    currentBatch?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type AnalysisJobCountAggregateInputType = {
    jobId?: true
    videoId?: true
    userId?: true
    jobStatus?: true
    commentsFetched?: true
    commentsAnalyzed?: true
    currentBatch?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AnalysisJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisJob to aggregate.
     */
    where?: AnalysisJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisJobs to fetch.
     */
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisJobs
    **/
    _count?: true | AnalysisJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisJobMaxAggregateInputType
  }

  export type GetAnalysisJobAggregateType<T extends AnalysisJobAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisJob[P]>
      : GetScalarType<T[P], AggregateAnalysisJob[P]>
  }




  export type AnalysisJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisJobWhereInput
    orderBy?: AnalysisJobOrderByWithAggregationInput | AnalysisJobOrderByWithAggregationInput[]
    by: AnalysisJobScalarFieldEnum[] | AnalysisJobScalarFieldEnum
    having?: AnalysisJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisJobCountAggregateInputType | true
    _avg?: AnalysisJobAvgAggregateInputType
    _sum?: AnalysisJobSumAggregateInputType
    _min?: AnalysisJobMinAggregateInputType
    _max?: AnalysisJobMaxAggregateInputType
  }

  export type AnalysisJobGroupByOutputType = {
    jobId: string
    videoId: string
    userId: string
    jobStatus: string
    commentsFetched: number
    commentsAnalyzed: number
    currentBatch: number
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    _count: AnalysisJobCountAggregateOutputType | null
    _avg: AnalysisJobAvgAggregateOutputType | null
    _sum: AnalysisJobSumAggregateOutputType | null
    _min: AnalysisJobMinAggregateOutputType | null
    _max: AnalysisJobMaxAggregateOutputType | null
  }

  type GetAnalysisJobGroupByPayload<T extends AnalysisJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisJobGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisJobGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jobId?: boolean
    videoId?: boolean
    userId?: boolean
    jobStatus?: boolean
    commentsFetched?: boolean
    commentsAnalyzed?: boolean
    currentBatch?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisJob"]>

  export type AnalysisJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jobId?: boolean
    videoId?: boolean
    userId?: boolean
    jobStatus?: boolean
    commentsFetched?: boolean
    commentsAnalyzed?: boolean
    currentBatch?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisJob"]>

  export type AnalysisJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jobId?: boolean
    videoId?: boolean
    userId?: boolean
    jobStatus?: boolean
    commentsFetched?: boolean
    commentsAnalyzed?: boolean
    currentBatch?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisJob"]>

  export type AnalysisJobSelectScalar = {
    jobId?: boolean
    videoId?: boolean
    userId?: boolean
    jobStatus?: boolean
    commentsFetched?: boolean
    commentsAnalyzed?: boolean
    currentBatch?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type AnalysisJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"jobId" | "videoId" | "userId" | "jobStatus" | "commentsFetched" | "commentsAnalyzed" | "currentBatch" | "startedAt" | "completedAt" | "createdAt", ExtArgs["result"]["analysisJob"]>
  export type AnalysisJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnalysisJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisJob"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      jobId: string
      videoId: string
      userId: string
      jobStatus: string
      commentsFetched: number
      commentsAnalyzed: number
      currentBatch: number
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["analysisJob"]>
    composites: {}
  }

  type AnalysisJobGetPayload<S extends boolean | null | undefined | AnalysisJobDefaultArgs> = $Result.GetResult<Prisma.$AnalysisJobPayload, S>

  type AnalysisJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisJobCountAggregateInputType | true
    }

  export interface AnalysisJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisJob'], meta: { name: 'AnalysisJob' } }
    /**
     * Find zero or one AnalysisJob that matches the filter.
     * @param {AnalysisJobFindUniqueArgs} args - Arguments to find a AnalysisJob
     * @example
     * // Get one AnalysisJob
     * const analysisJob = await prisma.analysisJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisJobFindUniqueArgs>(args: SelectSubset<T, AnalysisJobFindUniqueArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisJobFindUniqueOrThrowArgs} args - Arguments to find a AnalysisJob
     * @example
     * // Get one AnalysisJob
     * const analysisJob = await prisma.analysisJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisJobFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobFindFirstArgs} args - Arguments to find a AnalysisJob
     * @example
     * // Get one AnalysisJob
     * const analysisJob = await prisma.analysisJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisJobFindFirstArgs>(args?: SelectSubset<T, AnalysisJobFindFirstArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobFindFirstOrThrowArgs} args - Arguments to find a AnalysisJob
     * @example
     * // Get one AnalysisJob
     * const analysisJob = await prisma.analysisJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisJobFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisJobs
     * const analysisJobs = await prisma.analysisJob.findMany()
     * 
     * // Get first 10 AnalysisJobs
     * const analysisJobs = await prisma.analysisJob.findMany({ take: 10 })
     * 
     * // Only select the `jobId`
     * const analysisJobWithJobIdOnly = await prisma.analysisJob.findMany({ select: { jobId: true } })
     * 
     */
    findMany<T extends AnalysisJobFindManyArgs>(args?: SelectSubset<T, AnalysisJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisJob.
     * @param {AnalysisJobCreateArgs} args - Arguments to create a AnalysisJob.
     * @example
     * // Create one AnalysisJob
     * const AnalysisJob = await prisma.analysisJob.create({
     *   data: {
     *     // ... data to create a AnalysisJob
     *   }
     * })
     * 
     */
    create<T extends AnalysisJobCreateArgs>(args: SelectSubset<T, AnalysisJobCreateArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisJobs.
     * @param {AnalysisJobCreateManyArgs} args - Arguments to create many AnalysisJobs.
     * @example
     * // Create many AnalysisJobs
     * const analysisJob = await prisma.analysisJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisJobCreateManyArgs>(args?: SelectSubset<T, AnalysisJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisJobs and returns the data saved in the database.
     * @param {AnalysisJobCreateManyAndReturnArgs} args - Arguments to create many AnalysisJobs.
     * @example
     * // Create many AnalysisJobs
     * const analysisJob = await prisma.analysisJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisJobs and only return the `jobId`
     * const analysisJobWithJobIdOnly = await prisma.analysisJob.createManyAndReturn({
     *   select: { jobId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisJobCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisJob.
     * @param {AnalysisJobDeleteArgs} args - Arguments to delete one AnalysisJob.
     * @example
     * // Delete one AnalysisJob
     * const AnalysisJob = await prisma.analysisJob.delete({
     *   where: {
     *     // ... filter to delete one AnalysisJob
     *   }
     * })
     * 
     */
    delete<T extends AnalysisJobDeleteArgs>(args: SelectSubset<T, AnalysisJobDeleteArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisJob.
     * @param {AnalysisJobUpdateArgs} args - Arguments to update one AnalysisJob.
     * @example
     * // Update one AnalysisJob
     * const analysisJob = await prisma.analysisJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisJobUpdateArgs>(args: SelectSubset<T, AnalysisJobUpdateArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisJobs.
     * @param {AnalysisJobDeleteManyArgs} args - Arguments to filter AnalysisJobs to delete.
     * @example
     * // Delete a few AnalysisJobs
     * const { count } = await prisma.analysisJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisJobDeleteManyArgs>(args?: SelectSubset<T, AnalysisJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisJobs
     * const analysisJob = await prisma.analysisJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisJobUpdateManyArgs>(args: SelectSubset<T, AnalysisJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisJobs and returns the data updated in the database.
     * @param {AnalysisJobUpdateManyAndReturnArgs} args - Arguments to update many AnalysisJobs.
     * @example
     * // Update many AnalysisJobs
     * const analysisJob = await prisma.analysisJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisJobs and only return the `jobId`
     * const analysisJobWithJobIdOnly = await prisma.analysisJob.updateManyAndReturn({
     *   select: { jobId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisJobUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisJob.
     * @param {AnalysisJobUpsertArgs} args - Arguments to update or create a AnalysisJob.
     * @example
     * // Update or create a AnalysisJob
     * const analysisJob = await prisma.analysisJob.upsert({
     *   create: {
     *     // ... data to create a AnalysisJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisJob we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisJobUpsertArgs>(args: SelectSubset<T, AnalysisJobUpsertArgs<ExtArgs>>): Prisma__AnalysisJobClient<$Result.GetResult<Prisma.$AnalysisJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobCountArgs} args - Arguments to filter AnalysisJobs to count.
     * @example
     * // Count the number of AnalysisJobs
     * const count = await prisma.analysisJob.count({
     *   where: {
     *     // ... the filter for the AnalysisJobs we want to count
     *   }
     * })
    **/
    count<T extends AnalysisJobCountArgs>(
      args?: Subset<T, AnalysisJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisJobAggregateArgs>(args: Subset<T, AnalysisJobAggregateArgs>): Prisma.PrismaPromise<GetAnalysisJobAggregateType<T>>

    /**
     * Group by AnalysisJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisJobGroupByArgs} args - Group by arguments.
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
      T extends AnalysisJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisJobGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisJob model
   */
  readonly fields: AnalysisJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnalysisJob model
   */
  interface AnalysisJobFieldRefs {
    readonly jobId: FieldRef<"AnalysisJob", 'String'>
    readonly videoId: FieldRef<"AnalysisJob", 'String'>
    readonly userId: FieldRef<"AnalysisJob", 'String'>
    readonly jobStatus: FieldRef<"AnalysisJob", 'String'>
    readonly commentsFetched: FieldRef<"AnalysisJob", 'Int'>
    readonly commentsAnalyzed: FieldRef<"AnalysisJob", 'Int'>
    readonly currentBatch: FieldRef<"AnalysisJob", 'Int'>
    readonly startedAt: FieldRef<"AnalysisJob", 'DateTime'>
    readonly completedAt: FieldRef<"AnalysisJob", 'DateTime'>
    readonly createdAt: FieldRef<"AnalysisJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisJob findUnique
   */
  export type AnalysisJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJob to fetch.
     */
    where: AnalysisJobWhereUniqueInput
  }

  /**
   * AnalysisJob findUniqueOrThrow
   */
  export type AnalysisJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJob to fetch.
     */
    where: AnalysisJobWhereUniqueInput
  }

  /**
   * AnalysisJob findFirst
   */
  export type AnalysisJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJob to fetch.
     */
    where?: AnalysisJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisJobs to fetch.
     */
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisJobs.
     */
    cursor?: AnalysisJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisJobs.
     */
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * AnalysisJob findFirstOrThrow
   */
  export type AnalysisJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJob to fetch.
     */
    where?: AnalysisJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisJobs to fetch.
     */
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisJobs.
     */
    cursor?: AnalysisJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisJobs.
     */
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * AnalysisJob findMany
   */
  export type AnalysisJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisJobs to fetch.
     */
    where?: AnalysisJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisJobs to fetch.
     */
    orderBy?: AnalysisJobOrderByWithRelationInput | AnalysisJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisJobs.
     */
    cursor?: AnalysisJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisJobs.
     */
    skip?: number
    distinct?: AnalysisJobScalarFieldEnum | AnalysisJobScalarFieldEnum[]
  }

  /**
   * AnalysisJob create
   */
  export type AnalysisJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisJob.
     */
    data: XOR<AnalysisJobCreateInput, AnalysisJobUncheckedCreateInput>
  }

  /**
   * AnalysisJob createMany
   */
  export type AnalysisJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisJobs.
     */
    data: AnalysisJobCreateManyInput | AnalysisJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisJob createManyAndReturn
   */
  export type AnalysisJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisJobs.
     */
    data: AnalysisJobCreateManyInput | AnalysisJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisJob update
   */
  export type AnalysisJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisJob.
     */
    data: XOR<AnalysisJobUpdateInput, AnalysisJobUncheckedUpdateInput>
    /**
     * Choose, which AnalysisJob to update.
     */
    where: AnalysisJobWhereUniqueInput
  }

  /**
   * AnalysisJob updateMany
   */
  export type AnalysisJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisJobs.
     */
    data: XOR<AnalysisJobUpdateManyMutationInput, AnalysisJobUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisJobs to update
     */
    where?: AnalysisJobWhereInput
    /**
     * Limit how many AnalysisJobs to update.
     */
    limit?: number
  }

  /**
   * AnalysisJob updateManyAndReturn
   */
  export type AnalysisJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisJobs.
     */
    data: XOR<AnalysisJobUpdateManyMutationInput, AnalysisJobUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisJobs to update
     */
    where?: AnalysisJobWhereInput
    /**
     * Limit how many AnalysisJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisJob upsert
   */
  export type AnalysisJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisJob to update in case it exists.
     */
    where: AnalysisJobWhereUniqueInput
    /**
     * In case the AnalysisJob found by the `where` argument doesn't exist, create a new AnalysisJob with this data.
     */
    create: XOR<AnalysisJobCreateInput, AnalysisJobUncheckedCreateInput>
    /**
     * In case the AnalysisJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisJobUpdateInput, AnalysisJobUncheckedUpdateInput>
  }

  /**
   * AnalysisJob delete
   */
  export type AnalysisJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
    /**
     * Filter which AnalysisJob to delete.
     */
    where: AnalysisJobWhereUniqueInput
  }

  /**
   * AnalysisJob deleteMany
   */
  export type AnalysisJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisJobs to delete
     */
    where?: AnalysisJobWhereInput
    /**
     * Limit how many AnalysisJobs to delete.
     */
    limit?: number
  }

  /**
   * AnalysisJob without action
   */
  export type AnalysisJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisJob
     */
    select?: AnalysisJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisJob
     */
    omit?: AnalysisJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisJobInclude<ExtArgs> | null
  }


  /**
   * Model SentimentAnalysis
   */

  export type AggregateSentimentAnalysis = {
    _count: SentimentAnalysisCountAggregateOutputType | null
    _avg: SentimentAnalysisAvgAggregateOutputType | null
    _sum: SentimentAnalysisSumAggregateOutputType | null
    _min: SentimentAnalysisMinAggregateOutputType | null
    _max: SentimentAnalysisMaxAggregateOutputType | null
  }

  export type SentimentAnalysisAvgAggregateOutputType = {
    sentimentScore: number | null
    replyCount: number | null
    likeCount: number | null
  }

  export type SentimentAnalysisSumAggregateOutputType = {
    sentimentScore: number | null
    replyCount: number | null
    likeCount: number | null
  }

  export type SentimentAnalysisMinAggregateOutputType = {
    analysisId: string | null
    commentId: string | null
    userId: string | null
    videoId: string | null
    sentiment: string | null
    sentimentScore: number | null
    isControversial: boolean | null
    isHilarious: boolean | null
    isQuestion: boolean | null
    isAnswer: boolean | null
    isSuggestion: boolean | null
    analyzedAt: Date | null
    replyCount: number | null
    likeCount: number | null
  }

  export type SentimentAnalysisMaxAggregateOutputType = {
    analysisId: string | null
    commentId: string | null
    userId: string | null
    videoId: string | null
    sentiment: string | null
    sentimentScore: number | null
    isControversial: boolean | null
    isHilarious: boolean | null
    isQuestion: boolean | null
    isAnswer: boolean | null
    isSuggestion: boolean | null
    analyzedAt: Date | null
    replyCount: number | null
    likeCount: number | null
  }

  export type SentimentAnalysisCountAggregateOutputType = {
    analysisId: number
    commentId: number
    userId: number
    videoId: number
    sentiment: number
    sentimentScore: number
    isControversial: number
    isHilarious: number
    isQuestion: number
    isAnswer: number
    isSuggestion: number
    analyzedAt: number
    replyCount: number
    likeCount: number
    _all: number
  }


  export type SentimentAnalysisAvgAggregateInputType = {
    sentimentScore?: true
    replyCount?: true
    likeCount?: true
  }

  export type SentimentAnalysisSumAggregateInputType = {
    sentimentScore?: true
    replyCount?: true
    likeCount?: true
  }

  export type SentimentAnalysisMinAggregateInputType = {
    analysisId?: true
    commentId?: true
    userId?: true
    videoId?: true
    sentiment?: true
    sentimentScore?: true
    isControversial?: true
    isHilarious?: true
    isQuestion?: true
    isAnswer?: true
    isSuggestion?: true
    analyzedAt?: true
    replyCount?: true
    likeCount?: true
  }

  export type SentimentAnalysisMaxAggregateInputType = {
    analysisId?: true
    commentId?: true
    userId?: true
    videoId?: true
    sentiment?: true
    sentimentScore?: true
    isControversial?: true
    isHilarious?: true
    isQuestion?: true
    isAnswer?: true
    isSuggestion?: true
    analyzedAt?: true
    replyCount?: true
    likeCount?: true
  }

  export type SentimentAnalysisCountAggregateInputType = {
    analysisId?: true
    commentId?: true
    userId?: true
    videoId?: true
    sentiment?: true
    sentimentScore?: true
    isControversial?: true
    isHilarious?: true
    isQuestion?: true
    isAnswer?: true
    isSuggestion?: true
    analyzedAt?: true
    replyCount?: true
    likeCount?: true
    _all?: true
  }

  export type SentimentAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentimentAnalysis to aggregate.
     */
    where?: SentimentAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentAnalyses to fetch.
     */
    orderBy?: SentimentAnalysisOrderByWithRelationInput | SentimentAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentimentAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SentimentAnalyses
    **/
    _count?: true | SentimentAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentimentAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentimentAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentimentAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentimentAnalysisMaxAggregateInputType
  }

  export type GetSentimentAnalysisAggregateType<T extends SentimentAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateSentimentAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentimentAnalysis[P]>
      : GetScalarType<T[P], AggregateSentimentAnalysis[P]>
  }




  export type SentimentAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentAnalysisWhereInput
    orderBy?: SentimentAnalysisOrderByWithAggregationInput | SentimentAnalysisOrderByWithAggregationInput[]
    by: SentimentAnalysisScalarFieldEnum[] | SentimentAnalysisScalarFieldEnum
    having?: SentimentAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentimentAnalysisCountAggregateInputType | true
    _avg?: SentimentAnalysisAvgAggregateInputType
    _sum?: SentimentAnalysisSumAggregateInputType
    _min?: SentimentAnalysisMinAggregateInputType
    _max?: SentimentAnalysisMaxAggregateInputType
  }

  export type SentimentAnalysisGroupByOutputType = {
    analysisId: string
    commentId: string
    userId: string
    videoId: string
    sentiment: string
    sentimentScore: number | null
    isControversial: boolean
    isHilarious: boolean
    isQuestion: boolean
    isAnswer: boolean
    isSuggestion: boolean
    analyzedAt: Date
    replyCount: number
    likeCount: number
    _count: SentimentAnalysisCountAggregateOutputType | null
    _avg: SentimentAnalysisAvgAggregateOutputType | null
    _sum: SentimentAnalysisSumAggregateOutputType | null
    _min: SentimentAnalysisMinAggregateOutputType | null
    _max: SentimentAnalysisMaxAggregateOutputType | null
  }

  type GetSentimentAnalysisGroupByPayload<T extends SentimentAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SentimentAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentimentAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentimentAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], SentimentAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type SentimentAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    analysisId?: boolean
    commentId?: boolean
    userId?: boolean
    videoId?: boolean
    sentiment?: boolean
    sentimentScore?: boolean
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: boolean
    replyCount?: boolean
    likeCount?: boolean
    comment?: boolean | CommentDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentAnalysis"]>

  export type SentimentAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    analysisId?: boolean
    commentId?: boolean
    userId?: boolean
    videoId?: boolean
    sentiment?: boolean
    sentimentScore?: boolean
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: boolean
    replyCount?: boolean
    likeCount?: boolean
    comment?: boolean | CommentDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentAnalysis"]>

  export type SentimentAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    analysisId?: boolean
    commentId?: boolean
    userId?: boolean
    videoId?: boolean
    sentiment?: boolean
    sentimentScore?: boolean
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: boolean
    replyCount?: boolean
    likeCount?: boolean
    comment?: boolean | CommentDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentimentAnalysis"]>

  export type SentimentAnalysisSelectScalar = {
    analysisId?: boolean
    commentId?: boolean
    userId?: boolean
    videoId?: boolean
    sentiment?: boolean
    sentimentScore?: boolean
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: boolean
    replyCount?: boolean
    likeCount?: boolean
  }

  export type SentimentAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"analysisId" | "commentId" | "userId" | "videoId" | "sentiment" | "sentimentScore" | "isControversial" | "isHilarious" | "isQuestion" | "isAnswer" | "isSuggestion" | "analyzedAt" | "replyCount" | "likeCount", ExtArgs["result"]["sentimentAnalysis"]>
  export type SentimentAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | CommentDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SentimentAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | CommentDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SentimentAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | CommentDefaultArgs<ExtArgs>
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SentimentAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SentimentAnalysis"
    objects: {
      comment: Prisma.$CommentPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      analysisId: string
      commentId: string
      userId: string
      videoId: string
      sentiment: string
      sentimentScore: number | null
      isControversial: boolean
      isHilarious: boolean
      isQuestion: boolean
      isAnswer: boolean
      isSuggestion: boolean
      analyzedAt: Date
      replyCount: number
      likeCount: number
    }, ExtArgs["result"]["sentimentAnalysis"]>
    composites: {}
  }

  type SentimentAnalysisGetPayload<S extends boolean | null | undefined | SentimentAnalysisDefaultArgs> = $Result.GetResult<Prisma.$SentimentAnalysisPayload, S>

  type SentimentAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SentimentAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SentimentAnalysisCountAggregateInputType | true
    }

  export interface SentimentAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SentimentAnalysis'], meta: { name: 'SentimentAnalysis' } }
    /**
     * Find zero or one SentimentAnalysis that matches the filter.
     * @param {SentimentAnalysisFindUniqueArgs} args - Arguments to find a SentimentAnalysis
     * @example
     * // Get one SentimentAnalysis
     * const sentimentAnalysis = await prisma.sentimentAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SentimentAnalysisFindUniqueArgs>(args: SelectSubset<T, SentimentAnalysisFindUniqueArgs<ExtArgs>>): Prisma__SentimentAnalysisClient<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SentimentAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SentimentAnalysisFindUniqueOrThrowArgs} args - Arguments to find a SentimentAnalysis
     * @example
     * // Get one SentimentAnalysis
     * const sentimentAnalysis = await prisma.sentimentAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SentimentAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, SentimentAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SentimentAnalysisClient<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentimentAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentAnalysisFindFirstArgs} args - Arguments to find a SentimentAnalysis
     * @example
     * // Get one SentimentAnalysis
     * const sentimentAnalysis = await prisma.sentimentAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SentimentAnalysisFindFirstArgs>(args?: SelectSubset<T, SentimentAnalysisFindFirstArgs<ExtArgs>>): Prisma__SentimentAnalysisClient<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentimentAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentAnalysisFindFirstOrThrowArgs} args - Arguments to find a SentimentAnalysis
     * @example
     * // Get one SentimentAnalysis
     * const sentimentAnalysis = await prisma.sentimentAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SentimentAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, SentimentAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__SentimentAnalysisClient<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SentimentAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SentimentAnalyses
     * const sentimentAnalyses = await prisma.sentimentAnalysis.findMany()
     * 
     * // Get first 10 SentimentAnalyses
     * const sentimentAnalyses = await prisma.sentimentAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `analysisId`
     * const sentimentAnalysisWithAnalysisIdOnly = await prisma.sentimentAnalysis.findMany({ select: { analysisId: true } })
     * 
     */
    findMany<T extends SentimentAnalysisFindManyArgs>(args?: SelectSubset<T, SentimentAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SentimentAnalysis.
     * @param {SentimentAnalysisCreateArgs} args - Arguments to create a SentimentAnalysis.
     * @example
     * // Create one SentimentAnalysis
     * const SentimentAnalysis = await prisma.sentimentAnalysis.create({
     *   data: {
     *     // ... data to create a SentimentAnalysis
     *   }
     * })
     * 
     */
    create<T extends SentimentAnalysisCreateArgs>(args: SelectSubset<T, SentimentAnalysisCreateArgs<ExtArgs>>): Prisma__SentimentAnalysisClient<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SentimentAnalyses.
     * @param {SentimentAnalysisCreateManyArgs} args - Arguments to create many SentimentAnalyses.
     * @example
     * // Create many SentimentAnalyses
     * const sentimentAnalysis = await prisma.sentimentAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SentimentAnalysisCreateManyArgs>(args?: SelectSubset<T, SentimentAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SentimentAnalyses and returns the data saved in the database.
     * @param {SentimentAnalysisCreateManyAndReturnArgs} args - Arguments to create many SentimentAnalyses.
     * @example
     * // Create many SentimentAnalyses
     * const sentimentAnalysis = await prisma.sentimentAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SentimentAnalyses and only return the `analysisId`
     * const sentimentAnalysisWithAnalysisIdOnly = await prisma.sentimentAnalysis.createManyAndReturn({
     *   select: { analysisId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SentimentAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, SentimentAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SentimentAnalysis.
     * @param {SentimentAnalysisDeleteArgs} args - Arguments to delete one SentimentAnalysis.
     * @example
     * // Delete one SentimentAnalysis
     * const SentimentAnalysis = await prisma.sentimentAnalysis.delete({
     *   where: {
     *     // ... filter to delete one SentimentAnalysis
     *   }
     * })
     * 
     */
    delete<T extends SentimentAnalysisDeleteArgs>(args: SelectSubset<T, SentimentAnalysisDeleteArgs<ExtArgs>>): Prisma__SentimentAnalysisClient<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SentimentAnalysis.
     * @param {SentimentAnalysisUpdateArgs} args - Arguments to update one SentimentAnalysis.
     * @example
     * // Update one SentimentAnalysis
     * const sentimentAnalysis = await prisma.sentimentAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SentimentAnalysisUpdateArgs>(args: SelectSubset<T, SentimentAnalysisUpdateArgs<ExtArgs>>): Prisma__SentimentAnalysisClient<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SentimentAnalyses.
     * @param {SentimentAnalysisDeleteManyArgs} args - Arguments to filter SentimentAnalyses to delete.
     * @example
     * // Delete a few SentimentAnalyses
     * const { count } = await prisma.sentimentAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SentimentAnalysisDeleteManyArgs>(args?: SelectSubset<T, SentimentAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentimentAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SentimentAnalyses
     * const sentimentAnalysis = await prisma.sentimentAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SentimentAnalysisUpdateManyArgs>(args: SelectSubset<T, SentimentAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentimentAnalyses and returns the data updated in the database.
     * @param {SentimentAnalysisUpdateManyAndReturnArgs} args - Arguments to update many SentimentAnalyses.
     * @example
     * // Update many SentimentAnalyses
     * const sentimentAnalysis = await prisma.sentimentAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SentimentAnalyses and only return the `analysisId`
     * const sentimentAnalysisWithAnalysisIdOnly = await prisma.sentimentAnalysis.updateManyAndReturn({
     *   select: { analysisId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SentimentAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, SentimentAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SentimentAnalysis.
     * @param {SentimentAnalysisUpsertArgs} args - Arguments to update or create a SentimentAnalysis.
     * @example
     * // Update or create a SentimentAnalysis
     * const sentimentAnalysis = await prisma.sentimentAnalysis.upsert({
     *   create: {
     *     // ... data to create a SentimentAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SentimentAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends SentimentAnalysisUpsertArgs>(args: SelectSubset<T, SentimentAnalysisUpsertArgs<ExtArgs>>): Prisma__SentimentAnalysisClient<$Result.GetResult<Prisma.$SentimentAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SentimentAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentAnalysisCountArgs} args - Arguments to filter SentimentAnalyses to count.
     * @example
     * // Count the number of SentimentAnalyses
     * const count = await prisma.sentimentAnalysis.count({
     *   where: {
     *     // ... the filter for the SentimentAnalyses we want to count
     *   }
     * })
    **/
    count<T extends SentimentAnalysisCountArgs>(
      args?: Subset<T, SentimentAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentimentAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SentimentAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SentimentAnalysisAggregateArgs>(args: Subset<T, SentimentAnalysisAggregateArgs>): Prisma.PrismaPromise<GetSentimentAnalysisAggregateType<T>>

    /**
     * Group by SentimentAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentAnalysisGroupByArgs} args - Group by arguments.
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
      T extends SentimentAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentimentAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: SentimentAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SentimentAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentimentAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SentimentAnalysis model
   */
  readonly fields: SentimentAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SentimentAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SentimentAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SentimentAnalysis model
   */
  interface SentimentAnalysisFieldRefs {
    readonly analysisId: FieldRef<"SentimentAnalysis", 'String'>
    readonly commentId: FieldRef<"SentimentAnalysis", 'String'>
    readonly userId: FieldRef<"SentimentAnalysis", 'String'>
    readonly videoId: FieldRef<"SentimentAnalysis", 'String'>
    readonly sentiment: FieldRef<"SentimentAnalysis", 'String'>
    readonly sentimentScore: FieldRef<"SentimentAnalysis", 'Float'>
    readonly isControversial: FieldRef<"SentimentAnalysis", 'Boolean'>
    readonly isHilarious: FieldRef<"SentimentAnalysis", 'Boolean'>
    readonly isQuestion: FieldRef<"SentimentAnalysis", 'Boolean'>
    readonly isAnswer: FieldRef<"SentimentAnalysis", 'Boolean'>
    readonly isSuggestion: FieldRef<"SentimentAnalysis", 'Boolean'>
    readonly analyzedAt: FieldRef<"SentimentAnalysis", 'DateTime'>
    readonly replyCount: FieldRef<"SentimentAnalysis", 'Int'>
    readonly likeCount: FieldRef<"SentimentAnalysis", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SentimentAnalysis findUnique
   */
  export type SentimentAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SentimentAnalysis to fetch.
     */
    where: SentimentAnalysisWhereUniqueInput
  }

  /**
   * SentimentAnalysis findUniqueOrThrow
   */
  export type SentimentAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SentimentAnalysis to fetch.
     */
    where: SentimentAnalysisWhereUniqueInput
  }

  /**
   * SentimentAnalysis findFirst
   */
  export type SentimentAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SentimentAnalysis to fetch.
     */
    where?: SentimentAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentAnalyses to fetch.
     */
    orderBy?: SentimentAnalysisOrderByWithRelationInput | SentimentAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentimentAnalyses.
     */
    cursor?: SentimentAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentimentAnalyses.
     */
    distinct?: SentimentAnalysisScalarFieldEnum | SentimentAnalysisScalarFieldEnum[]
  }

  /**
   * SentimentAnalysis findFirstOrThrow
   */
  export type SentimentAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SentimentAnalysis to fetch.
     */
    where?: SentimentAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentAnalyses to fetch.
     */
    orderBy?: SentimentAnalysisOrderByWithRelationInput | SentimentAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentimentAnalyses.
     */
    cursor?: SentimentAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentimentAnalyses.
     */
    distinct?: SentimentAnalysisScalarFieldEnum | SentimentAnalysisScalarFieldEnum[]
  }

  /**
   * SentimentAnalysis findMany
   */
  export type SentimentAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SentimentAnalyses to fetch.
     */
    where?: SentimentAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentimentAnalyses to fetch.
     */
    orderBy?: SentimentAnalysisOrderByWithRelationInput | SentimentAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SentimentAnalyses.
     */
    cursor?: SentimentAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentimentAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentimentAnalyses.
     */
    skip?: number
    distinct?: SentimentAnalysisScalarFieldEnum | SentimentAnalysisScalarFieldEnum[]
  }

  /**
   * SentimentAnalysis create
   */
  export type SentimentAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a SentimentAnalysis.
     */
    data: XOR<SentimentAnalysisCreateInput, SentimentAnalysisUncheckedCreateInput>
  }

  /**
   * SentimentAnalysis createMany
   */
  export type SentimentAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SentimentAnalyses.
     */
    data: SentimentAnalysisCreateManyInput | SentimentAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SentimentAnalysis createManyAndReturn
   */
  export type SentimentAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many SentimentAnalyses.
     */
    data: SentimentAnalysisCreateManyInput | SentimentAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentimentAnalysis update
   */
  export type SentimentAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a SentimentAnalysis.
     */
    data: XOR<SentimentAnalysisUpdateInput, SentimentAnalysisUncheckedUpdateInput>
    /**
     * Choose, which SentimentAnalysis to update.
     */
    where: SentimentAnalysisWhereUniqueInput
  }

  /**
   * SentimentAnalysis updateMany
   */
  export type SentimentAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SentimentAnalyses.
     */
    data: XOR<SentimentAnalysisUpdateManyMutationInput, SentimentAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which SentimentAnalyses to update
     */
    where?: SentimentAnalysisWhereInput
    /**
     * Limit how many SentimentAnalyses to update.
     */
    limit?: number
  }

  /**
   * SentimentAnalysis updateManyAndReturn
   */
  export type SentimentAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update SentimentAnalyses.
     */
    data: XOR<SentimentAnalysisUpdateManyMutationInput, SentimentAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which SentimentAnalyses to update
     */
    where?: SentimentAnalysisWhereInput
    /**
     * Limit how many SentimentAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentimentAnalysis upsert
   */
  export type SentimentAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the SentimentAnalysis to update in case it exists.
     */
    where: SentimentAnalysisWhereUniqueInput
    /**
     * In case the SentimentAnalysis found by the `where` argument doesn't exist, create a new SentimentAnalysis with this data.
     */
    create: XOR<SentimentAnalysisCreateInput, SentimentAnalysisUncheckedCreateInput>
    /**
     * In case the SentimentAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentimentAnalysisUpdateInput, SentimentAnalysisUncheckedUpdateInput>
  }

  /**
   * SentimentAnalysis delete
   */
  export type SentimentAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
    /**
     * Filter which SentimentAnalysis to delete.
     */
    where: SentimentAnalysisWhereUniqueInput
  }

  /**
   * SentimentAnalysis deleteMany
   */
  export type SentimentAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentimentAnalyses to delete
     */
    where?: SentimentAnalysisWhereInput
    /**
     * Limit how many SentimentAnalyses to delete.
     */
    limit?: number
  }

  /**
   * SentimentAnalysis without action
   */
  export type SentimentAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentimentAnalysis
     */
    select?: SentimentAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentimentAnalysis
     */
    omit?: SentimentAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model VideoAnalysisSummary
   */

  export type AggregateVideoAnalysisSummary = {
    _count: VideoAnalysisSummaryCountAggregateOutputType | null
    _avg: VideoAnalysisSummaryAvgAggregateOutputType | null
    _sum: VideoAnalysisSummarySumAggregateOutputType | null
    _min: VideoAnalysisSummaryMinAggregateOutputType | null
    _max: VideoAnalysisSummaryMaxAggregateOutputType | null
  }

  export type VideoAnalysisSummaryAvgAggregateOutputType = {
    totalComments: number | null
    positiveCount: number | null
    negativeCount: number | null
    neutralCount: number | null
    controversialCount: number | null
    hilariousCount: number | null
    questionCount: number | null
    answerCount: number | null
    suggestionCount: number | null
  }

  export type VideoAnalysisSummarySumAggregateOutputType = {
    totalComments: number | null
    positiveCount: number | null
    negativeCount: number | null
    neutralCount: number | null
    controversialCount: number | null
    hilariousCount: number | null
    questionCount: number | null
    answerCount: number | null
    suggestionCount: number | null
  }

  export type VideoAnalysisSummaryMinAggregateOutputType = {
    summaryId: string | null
    videoId: string | null
    userId: string | null
    totalComments: number | null
    positiveCount: number | null
    negativeCount: number | null
    neutralCount: number | null
    controversialCount: number | null
    hilariousCount: number | null
    questionCount: number | null
    answerCount: number | null
    suggestionCount: number | null
    summaryText: string | null
    createdAt: Date | null
  }

  export type VideoAnalysisSummaryMaxAggregateOutputType = {
    summaryId: string | null
    videoId: string | null
    userId: string | null
    totalComments: number | null
    positiveCount: number | null
    negativeCount: number | null
    neutralCount: number | null
    controversialCount: number | null
    hilariousCount: number | null
    questionCount: number | null
    answerCount: number | null
    suggestionCount: number | null
    summaryText: string | null
    createdAt: Date | null
  }

  export type VideoAnalysisSummaryCountAggregateOutputType = {
    summaryId: number
    videoId: number
    userId: number
    totalComments: number
    positiveCount: number
    negativeCount: number
    neutralCount: number
    controversialCount: number
    hilariousCount: number
    questionCount: number
    answerCount: number
    suggestionCount: number
    summaryText: number
    createdAt: number
    _all: number
  }


  export type VideoAnalysisSummaryAvgAggregateInputType = {
    totalComments?: true
    positiveCount?: true
    negativeCount?: true
    neutralCount?: true
    controversialCount?: true
    hilariousCount?: true
    questionCount?: true
    answerCount?: true
    suggestionCount?: true
  }

  export type VideoAnalysisSummarySumAggregateInputType = {
    totalComments?: true
    positiveCount?: true
    negativeCount?: true
    neutralCount?: true
    controversialCount?: true
    hilariousCount?: true
    questionCount?: true
    answerCount?: true
    suggestionCount?: true
  }

  export type VideoAnalysisSummaryMinAggregateInputType = {
    summaryId?: true
    videoId?: true
    userId?: true
    totalComments?: true
    positiveCount?: true
    negativeCount?: true
    neutralCount?: true
    controversialCount?: true
    hilariousCount?: true
    questionCount?: true
    answerCount?: true
    suggestionCount?: true
    summaryText?: true
    createdAt?: true
  }

  export type VideoAnalysisSummaryMaxAggregateInputType = {
    summaryId?: true
    videoId?: true
    userId?: true
    totalComments?: true
    positiveCount?: true
    negativeCount?: true
    neutralCount?: true
    controversialCount?: true
    hilariousCount?: true
    questionCount?: true
    answerCount?: true
    suggestionCount?: true
    summaryText?: true
    createdAt?: true
  }

  export type VideoAnalysisSummaryCountAggregateInputType = {
    summaryId?: true
    videoId?: true
    userId?: true
    totalComments?: true
    positiveCount?: true
    negativeCount?: true
    neutralCount?: true
    controversialCount?: true
    hilariousCount?: true
    questionCount?: true
    answerCount?: true
    suggestionCount?: true
    summaryText?: true
    createdAt?: true
    _all?: true
  }

  export type VideoAnalysisSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoAnalysisSummary to aggregate.
     */
    where?: VideoAnalysisSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoAnalysisSummaries to fetch.
     */
    orderBy?: VideoAnalysisSummaryOrderByWithRelationInput | VideoAnalysisSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoAnalysisSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoAnalysisSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoAnalysisSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoAnalysisSummaries
    **/
    _count?: true | VideoAnalysisSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAnalysisSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoAnalysisSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoAnalysisSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoAnalysisSummaryMaxAggregateInputType
  }

  export type GetVideoAnalysisSummaryAggregateType<T extends VideoAnalysisSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoAnalysisSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoAnalysisSummary[P]>
      : GetScalarType<T[P], AggregateVideoAnalysisSummary[P]>
  }




  export type VideoAnalysisSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoAnalysisSummaryWhereInput
    orderBy?: VideoAnalysisSummaryOrderByWithAggregationInput | VideoAnalysisSummaryOrderByWithAggregationInput[]
    by: VideoAnalysisSummaryScalarFieldEnum[] | VideoAnalysisSummaryScalarFieldEnum
    having?: VideoAnalysisSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoAnalysisSummaryCountAggregateInputType | true
    _avg?: VideoAnalysisSummaryAvgAggregateInputType
    _sum?: VideoAnalysisSummarySumAggregateInputType
    _min?: VideoAnalysisSummaryMinAggregateInputType
    _max?: VideoAnalysisSummaryMaxAggregateInputType
  }

  export type VideoAnalysisSummaryGroupByOutputType = {
    summaryId: string
    videoId: string
    userId: string
    totalComments: number
    positiveCount: number
    negativeCount: number
    neutralCount: number
    controversialCount: number
    hilariousCount: number
    questionCount: number
    answerCount: number
    suggestionCount: number
    summaryText: string | null
    createdAt: Date
    _count: VideoAnalysisSummaryCountAggregateOutputType | null
    _avg: VideoAnalysisSummaryAvgAggregateOutputType | null
    _sum: VideoAnalysisSummarySumAggregateOutputType | null
    _min: VideoAnalysisSummaryMinAggregateOutputType | null
    _max: VideoAnalysisSummaryMaxAggregateOutputType | null
  }

  type GetVideoAnalysisSummaryGroupByPayload<T extends VideoAnalysisSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoAnalysisSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoAnalysisSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoAnalysisSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], VideoAnalysisSummaryGroupByOutputType[P]>
        }
      >
    >


  export type VideoAnalysisSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    summaryId?: boolean
    videoId?: boolean
    userId?: boolean
    totalComments?: boolean
    positiveCount?: boolean
    negativeCount?: boolean
    neutralCount?: boolean
    controversialCount?: boolean
    hilariousCount?: boolean
    questionCount?: boolean
    answerCount?: boolean
    suggestionCount?: boolean
    summaryText?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoAnalysisSummary"]>

  export type VideoAnalysisSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    summaryId?: boolean
    videoId?: boolean
    userId?: boolean
    totalComments?: boolean
    positiveCount?: boolean
    negativeCount?: boolean
    neutralCount?: boolean
    controversialCount?: boolean
    hilariousCount?: boolean
    questionCount?: boolean
    answerCount?: boolean
    suggestionCount?: boolean
    summaryText?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoAnalysisSummary"]>

  export type VideoAnalysisSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    summaryId?: boolean
    videoId?: boolean
    userId?: boolean
    totalComments?: boolean
    positiveCount?: boolean
    negativeCount?: boolean
    neutralCount?: boolean
    controversialCount?: boolean
    hilariousCount?: boolean
    questionCount?: boolean
    answerCount?: boolean
    suggestionCount?: boolean
    summaryText?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoAnalysisSummary"]>

  export type VideoAnalysisSummarySelectScalar = {
    summaryId?: boolean
    videoId?: boolean
    userId?: boolean
    totalComments?: boolean
    positiveCount?: boolean
    negativeCount?: boolean
    neutralCount?: boolean
    controversialCount?: boolean
    hilariousCount?: boolean
    questionCount?: boolean
    answerCount?: boolean
    suggestionCount?: boolean
    summaryText?: boolean
    createdAt?: boolean
  }

  export type VideoAnalysisSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"summaryId" | "videoId" | "userId" | "totalComments" | "positiveCount" | "negativeCount" | "neutralCount" | "controversialCount" | "hilariousCount" | "questionCount" | "answerCount" | "suggestionCount" | "summaryText" | "createdAt", ExtArgs["result"]["videoAnalysisSummary"]>
  export type VideoAnalysisSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoAnalysisSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoAnalysisSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VideoAnalysisSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoAnalysisSummary"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      summaryId: string
      videoId: string
      userId: string
      totalComments: number
      positiveCount: number
      negativeCount: number
      neutralCount: number
      controversialCount: number
      hilariousCount: number
      questionCount: number
      answerCount: number
      suggestionCount: number
      summaryText: string | null
      createdAt: Date
    }, ExtArgs["result"]["videoAnalysisSummary"]>
    composites: {}
  }

  type VideoAnalysisSummaryGetPayload<S extends boolean | null | undefined | VideoAnalysisSummaryDefaultArgs> = $Result.GetResult<Prisma.$VideoAnalysisSummaryPayload, S>

  type VideoAnalysisSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoAnalysisSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoAnalysisSummaryCountAggregateInputType | true
    }

  export interface VideoAnalysisSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoAnalysisSummary'], meta: { name: 'VideoAnalysisSummary' } }
    /**
     * Find zero or one VideoAnalysisSummary that matches the filter.
     * @param {VideoAnalysisSummaryFindUniqueArgs} args - Arguments to find a VideoAnalysisSummary
     * @example
     * // Get one VideoAnalysisSummary
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoAnalysisSummaryFindUniqueArgs>(args: SelectSubset<T, VideoAnalysisSummaryFindUniqueArgs<ExtArgs>>): Prisma__VideoAnalysisSummaryClient<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoAnalysisSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoAnalysisSummaryFindUniqueOrThrowArgs} args - Arguments to find a VideoAnalysisSummary
     * @example
     * // Get one VideoAnalysisSummary
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoAnalysisSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoAnalysisSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoAnalysisSummaryClient<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoAnalysisSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAnalysisSummaryFindFirstArgs} args - Arguments to find a VideoAnalysisSummary
     * @example
     * // Get one VideoAnalysisSummary
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoAnalysisSummaryFindFirstArgs>(args?: SelectSubset<T, VideoAnalysisSummaryFindFirstArgs<ExtArgs>>): Prisma__VideoAnalysisSummaryClient<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoAnalysisSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAnalysisSummaryFindFirstOrThrowArgs} args - Arguments to find a VideoAnalysisSummary
     * @example
     * // Get one VideoAnalysisSummary
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoAnalysisSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoAnalysisSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoAnalysisSummaryClient<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoAnalysisSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAnalysisSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoAnalysisSummaries
     * const videoAnalysisSummaries = await prisma.videoAnalysisSummary.findMany()
     * 
     * // Get first 10 VideoAnalysisSummaries
     * const videoAnalysisSummaries = await prisma.videoAnalysisSummary.findMany({ take: 10 })
     * 
     * // Only select the `summaryId`
     * const videoAnalysisSummaryWithSummaryIdOnly = await prisma.videoAnalysisSummary.findMany({ select: { summaryId: true } })
     * 
     */
    findMany<T extends VideoAnalysisSummaryFindManyArgs>(args?: SelectSubset<T, VideoAnalysisSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoAnalysisSummary.
     * @param {VideoAnalysisSummaryCreateArgs} args - Arguments to create a VideoAnalysisSummary.
     * @example
     * // Create one VideoAnalysisSummary
     * const VideoAnalysisSummary = await prisma.videoAnalysisSummary.create({
     *   data: {
     *     // ... data to create a VideoAnalysisSummary
     *   }
     * })
     * 
     */
    create<T extends VideoAnalysisSummaryCreateArgs>(args: SelectSubset<T, VideoAnalysisSummaryCreateArgs<ExtArgs>>): Prisma__VideoAnalysisSummaryClient<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoAnalysisSummaries.
     * @param {VideoAnalysisSummaryCreateManyArgs} args - Arguments to create many VideoAnalysisSummaries.
     * @example
     * // Create many VideoAnalysisSummaries
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoAnalysisSummaryCreateManyArgs>(args?: SelectSubset<T, VideoAnalysisSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoAnalysisSummaries and returns the data saved in the database.
     * @param {VideoAnalysisSummaryCreateManyAndReturnArgs} args - Arguments to create many VideoAnalysisSummaries.
     * @example
     * // Create many VideoAnalysisSummaries
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoAnalysisSummaries and only return the `summaryId`
     * const videoAnalysisSummaryWithSummaryIdOnly = await prisma.videoAnalysisSummary.createManyAndReturn({
     *   select: { summaryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoAnalysisSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoAnalysisSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoAnalysisSummary.
     * @param {VideoAnalysisSummaryDeleteArgs} args - Arguments to delete one VideoAnalysisSummary.
     * @example
     * // Delete one VideoAnalysisSummary
     * const VideoAnalysisSummary = await prisma.videoAnalysisSummary.delete({
     *   where: {
     *     // ... filter to delete one VideoAnalysisSummary
     *   }
     * })
     * 
     */
    delete<T extends VideoAnalysisSummaryDeleteArgs>(args: SelectSubset<T, VideoAnalysisSummaryDeleteArgs<ExtArgs>>): Prisma__VideoAnalysisSummaryClient<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoAnalysisSummary.
     * @param {VideoAnalysisSummaryUpdateArgs} args - Arguments to update one VideoAnalysisSummary.
     * @example
     * // Update one VideoAnalysisSummary
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoAnalysisSummaryUpdateArgs>(args: SelectSubset<T, VideoAnalysisSummaryUpdateArgs<ExtArgs>>): Prisma__VideoAnalysisSummaryClient<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoAnalysisSummaries.
     * @param {VideoAnalysisSummaryDeleteManyArgs} args - Arguments to filter VideoAnalysisSummaries to delete.
     * @example
     * // Delete a few VideoAnalysisSummaries
     * const { count } = await prisma.videoAnalysisSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoAnalysisSummaryDeleteManyArgs>(args?: SelectSubset<T, VideoAnalysisSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoAnalysisSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAnalysisSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoAnalysisSummaries
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoAnalysisSummaryUpdateManyArgs>(args: SelectSubset<T, VideoAnalysisSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoAnalysisSummaries and returns the data updated in the database.
     * @param {VideoAnalysisSummaryUpdateManyAndReturnArgs} args - Arguments to update many VideoAnalysisSummaries.
     * @example
     * // Update many VideoAnalysisSummaries
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoAnalysisSummaries and only return the `summaryId`
     * const videoAnalysisSummaryWithSummaryIdOnly = await prisma.videoAnalysisSummary.updateManyAndReturn({
     *   select: { summaryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoAnalysisSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoAnalysisSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoAnalysisSummary.
     * @param {VideoAnalysisSummaryUpsertArgs} args - Arguments to update or create a VideoAnalysisSummary.
     * @example
     * // Update or create a VideoAnalysisSummary
     * const videoAnalysisSummary = await prisma.videoAnalysisSummary.upsert({
     *   create: {
     *     // ... data to create a VideoAnalysisSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoAnalysisSummary we want to update
     *   }
     * })
     */
    upsert<T extends VideoAnalysisSummaryUpsertArgs>(args: SelectSubset<T, VideoAnalysisSummaryUpsertArgs<ExtArgs>>): Prisma__VideoAnalysisSummaryClient<$Result.GetResult<Prisma.$VideoAnalysisSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoAnalysisSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAnalysisSummaryCountArgs} args - Arguments to filter VideoAnalysisSummaries to count.
     * @example
     * // Count the number of VideoAnalysisSummaries
     * const count = await prisma.videoAnalysisSummary.count({
     *   where: {
     *     // ... the filter for the VideoAnalysisSummaries we want to count
     *   }
     * })
    **/
    count<T extends VideoAnalysisSummaryCountArgs>(
      args?: Subset<T, VideoAnalysisSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoAnalysisSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoAnalysisSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAnalysisSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAnalysisSummaryAggregateArgs>(args: Subset<T, VideoAnalysisSummaryAggregateArgs>): Prisma.PrismaPromise<GetVideoAnalysisSummaryAggregateType<T>>

    /**
     * Group by VideoAnalysisSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAnalysisSummaryGroupByArgs} args - Group by arguments.
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
      T extends VideoAnalysisSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoAnalysisSummaryGroupByArgs['orderBy'] }
        : { orderBy?: VideoAnalysisSummaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoAnalysisSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoAnalysisSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoAnalysisSummary model
   */
  readonly fields: VideoAnalysisSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoAnalysisSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoAnalysisSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoAnalysisSummary model
   */
  interface VideoAnalysisSummaryFieldRefs {
    readonly summaryId: FieldRef<"VideoAnalysisSummary", 'String'>
    readonly videoId: FieldRef<"VideoAnalysisSummary", 'String'>
    readonly userId: FieldRef<"VideoAnalysisSummary", 'String'>
    readonly totalComments: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly positiveCount: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly negativeCount: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly neutralCount: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly controversialCount: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly hilariousCount: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly questionCount: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly answerCount: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly suggestionCount: FieldRef<"VideoAnalysisSummary", 'Int'>
    readonly summaryText: FieldRef<"VideoAnalysisSummary", 'String'>
    readonly createdAt: FieldRef<"VideoAnalysisSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoAnalysisSummary findUnique
   */
  export type VideoAnalysisSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * Filter, which VideoAnalysisSummary to fetch.
     */
    where: VideoAnalysisSummaryWhereUniqueInput
  }

  /**
   * VideoAnalysisSummary findUniqueOrThrow
   */
  export type VideoAnalysisSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * Filter, which VideoAnalysisSummary to fetch.
     */
    where: VideoAnalysisSummaryWhereUniqueInput
  }

  /**
   * VideoAnalysisSummary findFirst
   */
  export type VideoAnalysisSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * Filter, which VideoAnalysisSummary to fetch.
     */
    where?: VideoAnalysisSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoAnalysisSummaries to fetch.
     */
    orderBy?: VideoAnalysisSummaryOrderByWithRelationInput | VideoAnalysisSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoAnalysisSummaries.
     */
    cursor?: VideoAnalysisSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoAnalysisSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoAnalysisSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoAnalysisSummaries.
     */
    distinct?: VideoAnalysisSummaryScalarFieldEnum | VideoAnalysisSummaryScalarFieldEnum[]
  }

  /**
   * VideoAnalysisSummary findFirstOrThrow
   */
  export type VideoAnalysisSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * Filter, which VideoAnalysisSummary to fetch.
     */
    where?: VideoAnalysisSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoAnalysisSummaries to fetch.
     */
    orderBy?: VideoAnalysisSummaryOrderByWithRelationInput | VideoAnalysisSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoAnalysisSummaries.
     */
    cursor?: VideoAnalysisSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoAnalysisSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoAnalysisSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoAnalysisSummaries.
     */
    distinct?: VideoAnalysisSummaryScalarFieldEnum | VideoAnalysisSummaryScalarFieldEnum[]
  }

  /**
   * VideoAnalysisSummary findMany
   */
  export type VideoAnalysisSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * Filter, which VideoAnalysisSummaries to fetch.
     */
    where?: VideoAnalysisSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoAnalysisSummaries to fetch.
     */
    orderBy?: VideoAnalysisSummaryOrderByWithRelationInput | VideoAnalysisSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoAnalysisSummaries.
     */
    cursor?: VideoAnalysisSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoAnalysisSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoAnalysisSummaries.
     */
    skip?: number
    distinct?: VideoAnalysisSummaryScalarFieldEnum | VideoAnalysisSummaryScalarFieldEnum[]
  }

  /**
   * VideoAnalysisSummary create
   */
  export type VideoAnalysisSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoAnalysisSummary.
     */
    data: XOR<VideoAnalysisSummaryCreateInput, VideoAnalysisSummaryUncheckedCreateInput>
  }

  /**
   * VideoAnalysisSummary createMany
   */
  export type VideoAnalysisSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoAnalysisSummaries.
     */
    data: VideoAnalysisSummaryCreateManyInput | VideoAnalysisSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoAnalysisSummary createManyAndReturn
   */
  export type VideoAnalysisSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many VideoAnalysisSummaries.
     */
    data: VideoAnalysisSummaryCreateManyInput | VideoAnalysisSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoAnalysisSummary update
   */
  export type VideoAnalysisSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoAnalysisSummary.
     */
    data: XOR<VideoAnalysisSummaryUpdateInput, VideoAnalysisSummaryUncheckedUpdateInput>
    /**
     * Choose, which VideoAnalysisSummary to update.
     */
    where: VideoAnalysisSummaryWhereUniqueInput
  }

  /**
   * VideoAnalysisSummary updateMany
   */
  export type VideoAnalysisSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoAnalysisSummaries.
     */
    data: XOR<VideoAnalysisSummaryUpdateManyMutationInput, VideoAnalysisSummaryUncheckedUpdateManyInput>
    /**
     * Filter which VideoAnalysisSummaries to update
     */
    where?: VideoAnalysisSummaryWhereInput
    /**
     * Limit how many VideoAnalysisSummaries to update.
     */
    limit?: number
  }

  /**
   * VideoAnalysisSummary updateManyAndReturn
   */
  export type VideoAnalysisSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * The data used to update VideoAnalysisSummaries.
     */
    data: XOR<VideoAnalysisSummaryUpdateManyMutationInput, VideoAnalysisSummaryUncheckedUpdateManyInput>
    /**
     * Filter which VideoAnalysisSummaries to update
     */
    where?: VideoAnalysisSummaryWhereInput
    /**
     * Limit how many VideoAnalysisSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoAnalysisSummary upsert
   */
  export type VideoAnalysisSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoAnalysisSummary to update in case it exists.
     */
    where: VideoAnalysisSummaryWhereUniqueInput
    /**
     * In case the VideoAnalysisSummary found by the `where` argument doesn't exist, create a new VideoAnalysisSummary with this data.
     */
    create: XOR<VideoAnalysisSummaryCreateInput, VideoAnalysisSummaryUncheckedCreateInput>
    /**
     * In case the VideoAnalysisSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoAnalysisSummaryUpdateInput, VideoAnalysisSummaryUncheckedUpdateInput>
  }

  /**
   * VideoAnalysisSummary delete
   */
  export type VideoAnalysisSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
    /**
     * Filter which VideoAnalysisSummary to delete.
     */
    where: VideoAnalysisSummaryWhereUniqueInput
  }

  /**
   * VideoAnalysisSummary deleteMany
   */
  export type VideoAnalysisSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoAnalysisSummaries to delete
     */
    where?: VideoAnalysisSummaryWhereInput
    /**
     * Limit how many VideoAnalysisSummaries to delete.
     */
    limit?: number
  }

  /**
   * VideoAnalysisSummary without action
   */
  export type VideoAnalysisSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAnalysisSummary
     */
    select?: VideoAnalysisSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAnalysisSummary
     */
    omit?: VideoAnalysisSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAnalysisSummaryInclude<ExtArgs> | null
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
    userId: 'userId',
    username: 'username',
    email: 'email',
    channelId: 'channelId',
    channelName: 'channelName',
    channelThumbnailUrl: 'channelThumbnailUrl',
    subscriberCount: 'subscriberCount',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiresAt: 'tokenExpiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    videoId: 'videoId',
    userId: 'userId',
    title: 'title',
    description: 'description',
    thumbnailUrl: 'thumbnailUrl',
    publishedAt: 'publishedAt',
    analysisStatus: 'analysisStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    commentId: 'commentId',
    videoId: 'videoId',
    userId: 'userId',
    authorName: 'authorName',
    authorChannelId: 'authorChannelId',
    commentText: 'commentText',
    publishedAt: 'publishedAt',
    parentCommentId: 'parentCommentId',
    isReply: 'isReply',
    replyCount: 'replyCount',
    likeCount: 'likeCount',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const McpConversationScalarFieldEnum: {
    conversationId: 'conversationId',
    videoId: 'videoId',
    userId: 'userId',
    userQuery: 'userQuery',
    aiResponse: 'aiResponse',
    createdAt: 'createdAt'
  };

  export type McpConversationScalarFieldEnum = (typeof McpConversationScalarFieldEnum)[keyof typeof McpConversationScalarFieldEnum]


  export const CommentReplyScalarFieldEnum: {
    replyId: 'replyId',
    commentId: 'commentId',
    userId: 'userId',
    replyText: 'replyText',
    replyStatus: 'replyStatus',
    youtubeReplyId: 'youtubeReplyId',
    createdAt: 'createdAt',
    postedAt: 'postedAt'
  };

  export type CommentReplyScalarFieldEnum = (typeof CommentReplyScalarFieldEnum)[keyof typeof CommentReplyScalarFieldEnum]


  export const AnalysisJobScalarFieldEnum: {
    jobId: 'jobId',
    videoId: 'videoId',
    userId: 'userId',
    jobStatus: 'jobStatus',
    commentsFetched: 'commentsFetched',
    commentsAnalyzed: 'commentsAnalyzed',
    currentBatch: 'currentBatch',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type AnalysisJobScalarFieldEnum = (typeof AnalysisJobScalarFieldEnum)[keyof typeof AnalysisJobScalarFieldEnum]


  export const SentimentAnalysisScalarFieldEnum: {
    analysisId: 'analysisId',
    commentId: 'commentId',
    userId: 'userId',
    videoId: 'videoId',
    sentiment: 'sentiment',
    sentimentScore: 'sentimentScore',
    isControversial: 'isControversial',
    isHilarious: 'isHilarious',
    isQuestion: 'isQuestion',
    isAnswer: 'isAnswer',
    isSuggestion: 'isSuggestion',
    analyzedAt: 'analyzedAt',
    replyCount: 'replyCount',
    likeCount: 'likeCount'
  };

  export type SentimentAnalysisScalarFieldEnum = (typeof SentimentAnalysisScalarFieldEnum)[keyof typeof SentimentAnalysisScalarFieldEnum]


  export const VideoAnalysisSummaryScalarFieldEnum: {
    summaryId: 'summaryId',
    videoId: 'videoId',
    userId: 'userId',
    totalComments: 'totalComments',
    positiveCount: 'positiveCount',
    negativeCount: 'negativeCount',
    neutralCount: 'neutralCount',
    controversialCount: 'controversialCount',
    hilariousCount: 'hilariousCount',
    questionCount: 'questionCount',
    answerCount: 'answerCount',
    suggestionCount: 'suggestionCount',
    summaryText: 'summaryText',
    createdAt: 'createdAt'
  };

  export type VideoAnalysisSummaryScalarFieldEnum = (typeof VideoAnalysisSummaryScalarFieldEnum)[keyof typeof VideoAnalysisSummaryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    channelId?: StringNullableFilter<"User"> | string | null
    channelName?: StringNullableFilter<"User"> | string | null
    channelThumbnailUrl?: StringNullableFilter<"User"> | string | null
    subscriberCount?: IntFilter<"User"> | number
    accessToken?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    videos?: VideoListRelationFilter
    comments?: CommentListRelationFilter
    commentReplies?: CommentReplyListRelationFilter
    mcpConvos?: McpConversationListRelationFilter
    analysisJobs?: AnalysisJobListRelationFilter
    sentimentAnalysis?: SentimentAnalysisListRelationFilter
    videoSummaries?: VideoAnalysisSummaryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    channelId?: SortOrderInput | SortOrder
    channelName?: SortOrderInput | SortOrder
    channelThumbnailUrl?: SortOrderInput | SortOrder
    subscriberCount?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    commentReplies?: CommentReplyOrderByRelationAggregateInput
    mcpConvos?: McpConversationOrderByRelationAggregateInput
    analysisJobs?: AnalysisJobOrderByRelationAggregateInput
    sentimentAnalysis?: SentimentAnalysisOrderByRelationAggregateInput
    videoSummaries?: VideoAnalysisSummaryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    username?: string
    email?: string
    channelId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    channelName?: StringNullableFilter<"User"> | string | null
    channelThumbnailUrl?: StringNullableFilter<"User"> | string | null
    subscriberCount?: IntFilter<"User"> | number
    accessToken?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    tokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    videos?: VideoListRelationFilter
    comments?: CommentListRelationFilter
    commentReplies?: CommentReplyListRelationFilter
    mcpConvos?: McpConversationListRelationFilter
    analysisJobs?: AnalysisJobListRelationFilter
    sentimentAnalysis?: SentimentAnalysisListRelationFilter
    videoSummaries?: VideoAnalysisSummaryListRelationFilter
  }, "userId" | "username" | "email" | "channelId">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    channelId?: SortOrderInput | SortOrder
    channelName?: SortOrderInput | SortOrder
    channelThumbnailUrl?: SortOrderInput | SortOrder
    subscriberCount?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    channelId?: StringNullableWithAggregatesFilter<"User"> | string | null
    channelName?: StringNullableWithAggregatesFilter<"User"> | string | null
    channelThumbnailUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscriberCount?: IntWithAggregatesFilter<"User"> | number
    accessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    tokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    videoId?: StringFilter<"Video"> | string
    userId?: UuidFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    thumbnailUrl?: StringNullableFilter<"Video"> | string | null
    publishedAt?: DateTimeNullableFilter<"Video"> | Date | string | null
    analysisStatus?: StringFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    mcpConvos?: McpConversationListRelationFilter
    analysisJobs?: AnalysisJobListRelationFilter
    sentimentAnalysis?: SentimentAnalysisListRelationFilter
    videoSummaries?: VideoAnalysisSummaryListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    videoId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    analysisStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    mcpConvos?: McpConversationOrderByRelationAggregateInput
    analysisJobs?: AnalysisJobOrderByRelationAggregateInput
    sentimentAnalysis?: SentimentAnalysisOrderByRelationAggregateInput
    videoSummaries?: VideoAnalysisSummaryOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    videoId?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    userId?: UuidFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    thumbnailUrl?: StringNullableFilter<"Video"> | string | null
    publishedAt?: DateTimeNullableFilter<"Video"> | Date | string | null
    analysisStatus?: StringFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    mcpConvos?: McpConversationListRelationFilter
    analysisJobs?: AnalysisJobListRelationFilter
    sentimentAnalysis?: SentimentAnalysisListRelationFilter
    videoSummaries?: VideoAnalysisSummaryListRelationFilter
  }, "videoId">

  export type VideoOrderByWithAggregationInput = {
    videoId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    analysisStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    videoId?: StringWithAggregatesFilter<"Video"> | string
    userId?: UuidWithAggregatesFilter<"Video"> | string
    title?: StringWithAggregatesFilter<"Video"> | string
    description?: StringNullableWithAggregatesFilter<"Video"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Video"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Video"> | Date | string | null
    analysisStatus?: StringWithAggregatesFilter<"Video"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    commentId?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    authorName?: StringNullableFilter<"Comment"> | string | null
    authorChannelId?: StringNullableFilter<"Comment"> | string | null
    commentText?: StringFilter<"Comment"> | string
    publishedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    parentCommentId?: StringNullableFilter<"Comment"> | string | null
    isReply?: BoolFilter<"Comment"> | boolean
    replyCount?: IntFilter<"Comment"> | number
    likeCount?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parentComment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    commentReplies?: CommentReplyListRelationFilter
    sentimentAnalysis?: SentimentAnalysisListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    commentId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    authorName?: SortOrderInput | SortOrder
    authorChannelId?: SortOrderInput | SortOrder
    commentText?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    isReply?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
    video?: VideoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parentComment?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    commentReplies?: CommentReplyOrderByRelationAggregateInput
    sentimentAnalysis?: SentimentAnalysisOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    commentId?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    videoId?: StringFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    authorName?: StringNullableFilter<"Comment"> | string | null
    authorChannelId?: StringNullableFilter<"Comment"> | string | null
    commentText?: StringFilter<"Comment"> | string
    publishedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    parentCommentId?: StringNullableFilter<"Comment"> | string | null
    isReply?: BoolFilter<"Comment"> | boolean
    replyCount?: IntFilter<"Comment"> | number
    likeCount?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parentComment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    commentReplies?: CommentReplyListRelationFilter
    sentimentAnalysis?: SentimentAnalysisListRelationFilter
  }, "commentId">

  export type CommentOrderByWithAggregationInput = {
    commentId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    authorName?: SortOrderInput | SortOrder
    authorChannelId?: SortOrderInput | SortOrder
    commentText?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    isReply?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    commentId?: StringWithAggregatesFilter<"Comment"> | string
    videoId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: UuidWithAggregatesFilter<"Comment"> | string
    authorName?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    authorChannelId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    commentText?: StringWithAggregatesFilter<"Comment"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
    parentCommentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    isReply?: BoolWithAggregatesFilter<"Comment"> | boolean
    replyCount?: IntWithAggregatesFilter<"Comment"> | number
    likeCount?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type McpConversationWhereInput = {
    AND?: McpConversationWhereInput | McpConversationWhereInput[]
    OR?: McpConversationWhereInput[]
    NOT?: McpConversationWhereInput | McpConversationWhereInput[]
    conversationId?: UuidFilter<"McpConversation"> | string
    videoId?: StringFilter<"McpConversation"> | string
    userId?: UuidFilter<"McpConversation"> | string
    userQuery?: StringFilter<"McpConversation"> | string
    aiResponse?: StringFilter<"McpConversation"> | string
    createdAt?: DateTimeFilter<"McpConversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type McpConversationOrderByWithRelationInput = {
    conversationId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
  }

  export type McpConversationWhereUniqueInput = Prisma.AtLeast<{
    conversationId?: string
    AND?: McpConversationWhereInput | McpConversationWhereInput[]
    OR?: McpConversationWhereInput[]
    NOT?: McpConversationWhereInput | McpConversationWhereInput[]
    videoId?: StringFilter<"McpConversation"> | string
    userId?: UuidFilter<"McpConversation"> | string
    userQuery?: StringFilter<"McpConversation"> | string
    aiResponse?: StringFilter<"McpConversation"> | string
    createdAt?: DateTimeFilter<"McpConversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "conversationId">

  export type McpConversationOrderByWithAggregationInput = {
    conversationId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
    _count?: McpConversationCountOrderByAggregateInput
    _max?: McpConversationMaxOrderByAggregateInput
    _min?: McpConversationMinOrderByAggregateInput
  }

  export type McpConversationScalarWhereWithAggregatesInput = {
    AND?: McpConversationScalarWhereWithAggregatesInput | McpConversationScalarWhereWithAggregatesInput[]
    OR?: McpConversationScalarWhereWithAggregatesInput[]
    NOT?: McpConversationScalarWhereWithAggregatesInput | McpConversationScalarWhereWithAggregatesInput[]
    conversationId?: UuidWithAggregatesFilter<"McpConversation"> | string
    videoId?: StringWithAggregatesFilter<"McpConversation"> | string
    userId?: UuidWithAggregatesFilter<"McpConversation"> | string
    userQuery?: StringWithAggregatesFilter<"McpConversation"> | string
    aiResponse?: StringWithAggregatesFilter<"McpConversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"McpConversation"> | Date | string
  }

  export type CommentReplyWhereInput = {
    AND?: CommentReplyWhereInput | CommentReplyWhereInput[]
    OR?: CommentReplyWhereInput[]
    NOT?: CommentReplyWhereInput | CommentReplyWhereInput[]
    replyId?: UuidFilter<"CommentReply"> | string
    commentId?: StringFilter<"CommentReply"> | string
    userId?: UuidFilter<"CommentReply"> | string
    replyText?: StringFilter<"CommentReply"> | string
    replyStatus?: StringFilter<"CommentReply"> | string
    youtubeReplyId?: StringNullableFilter<"CommentReply"> | string | null
    createdAt?: DateTimeFilter<"CommentReply"> | Date | string
    postedAt?: DateTimeNullableFilter<"CommentReply"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type CommentReplyOrderByWithRelationInput = {
    replyId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    replyText?: SortOrder
    replyStatus?: SortOrder
    youtubeReplyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    postedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type CommentReplyWhereUniqueInput = Prisma.AtLeast<{
    replyId?: string
    AND?: CommentReplyWhereInput | CommentReplyWhereInput[]
    OR?: CommentReplyWhereInput[]
    NOT?: CommentReplyWhereInput | CommentReplyWhereInput[]
    commentId?: StringFilter<"CommentReply"> | string
    userId?: UuidFilter<"CommentReply"> | string
    replyText?: StringFilter<"CommentReply"> | string
    replyStatus?: StringFilter<"CommentReply"> | string
    youtubeReplyId?: StringNullableFilter<"CommentReply"> | string | null
    createdAt?: DateTimeFilter<"CommentReply"> | Date | string
    postedAt?: DateTimeNullableFilter<"CommentReply"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "replyId">

  export type CommentReplyOrderByWithAggregationInput = {
    replyId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    replyText?: SortOrder
    replyStatus?: SortOrder
    youtubeReplyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    postedAt?: SortOrderInput | SortOrder
    _count?: CommentReplyCountOrderByAggregateInput
    _max?: CommentReplyMaxOrderByAggregateInput
    _min?: CommentReplyMinOrderByAggregateInput
  }

  export type CommentReplyScalarWhereWithAggregatesInput = {
    AND?: CommentReplyScalarWhereWithAggregatesInput | CommentReplyScalarWhereWithAggregatesInput[]
    OR?: CommentReplyScalarWhereWithAggregatesInput[]
    NOT?: CommentReplyScalarWhereWithAggregatesInput | CommentReplyScalarWhereWithAggregatesInput[]
    replyId?: UuidWithAggregatesFilter<"CommentReply"> | string
    commentId?: StringWithAggregatesFilter<"CommentReply"> | string
    userId?: UuidWithAggregatesFilter<"CommentReply"> | string
    replyText?: StringWithAggregatesFilter<"CommentReply"> | string
    replyStatus?: StringWithAggregatesFilter<"CommentReply"> | string
    youtubeReplyId?: StringNullableWithAggregatesFilter<"CommentReply"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommentReply"> | Date | string
    postedAt?: DateTimeNullableWithAggregatesFilter<"CommentReply"> | Date | string | null
  }

  export type AnalysisJobWhereInput = {
    AND?: AnalysisJobWhereInput | AnalysisJobWhereInput[]
    OR?: AnalysisJobWhereInput[]
    NOT?: AnalysisJobWhereInput | AnalysisJobWhereInput[]
    jobId?: UuidFilter<"AnalysisJob"> | string
    videoId?: StringFilter<"AnalysisJob"> | string
    userId?: UuidFilter<"AnalysisJob"> | string
    jobStatus?: StringFilter<"AnalysisJob"> | string
    commentsFetched?: IntFilter<"AnalysisJob"> | number
    commentsAnalyzed?: IntFilter<"AnalysisJob"> | number
    currentBatch?: IntFilter<"AnalysisJob"> | number
    startedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    createdAt?: DateTimeFilter<"AnalysisJob"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnalysisJobOrderByWithRelationInput = {
    jobId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    jobStatus?: SortOrder
    commentsFetched?: SortOrder
    commentsAnalyzed?: SortOrder
    currentBatch?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    video?: VideoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AnalysisJobWhereUniqueInput = Prisma.AtLeast<{
    jobId?: string
    AND?: AnalysisJobWhereInput | AnalysisJobWhereInput[]
    OR?: AnalysisJobWhereInput[]
    NOT?: AnalysisJobWhereInput | AnalysisJobWhereInput[]
    videoId?: StringFilter<"AnalysisJob"> | string
    userId?: UuidFilter<"AnalysisJob"> | string
    jobStatus?: StringFilter<"AnalysisJob"> | string
    commentsFetched?: IntFilter<"AnalysisJob"> | number
    commentsAnalyzed?: IntFilter<"AnalysisJob"> | number
    currentBatch?: IntFilter<"AnalysisJob"> | number
    startedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    createdAt?: DateTimeFilter<"AnalysisJob"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "jobId">

  export type AnalysisJobOrderByWithAggregationInput = {
    jobId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    jobStatus?: SortOrder
    commentsFetched?: SortOrder
    commentsAnalyzed?: SortOrder
    currentBatch?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalysisJobCountOrderByAggregateInput
    _avg?: AnalysisJobAvgOrderByAggregateInput
    _max?: AnalysisJobMaxOrderByAggregateInput
    _min?: AnalysisJobMinOrderByAggregateInput
    _sum?: AnalysisJobSumOrderByAggregateInput
  }

  export type AnalysisJobScalarWhereWithAggregatesInput = {
    AND?: AnalysisJobScalarWhereWithAggregatesInput | AnalysisJobScalarWhereWithAggregatesInput[]
    OR?: AnalysisJobScalarWhereWithAggregatesInput[]
    NOT?: AnalysisJobScalarWhereWithAggregatesInput | AnalysisJobScalarWhereWithAggregatesInput[]
    jobId?: UuidWithAggregatesFilter<"AnalysisJob"> | string
    videoId?: StringWithAggregatesFilter<"AnalysisJob"> | string
    userId?: UuidWithAggregatesFilter<"AnalysisJob"> | string
    jobStatus?: StringWithAggregatesFilter<"AnalysisJob"> | string
    commentsFetched?: IntWithAggregatesFilter<"AnalysisJob"> | number
    commentsAnalyzed?: IntWithAggregatesFilter<"AnalysisJob"> | number
    currentBatch?: IntWithAggregatesFilter<"AnalysisJob"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"AnalysisJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"AnalysisJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisJob"> | Date | string
  }

  export type SentimentAnalysisWhereInput = {
    AND?: SentimentAnalysisWhereInput | SentimentAnalysisWhereInput[]
    OR?: SentimentAnalysisWhereInput[]
    NOT?: SentimentAnalysisWhereInput | SentimentAnalysisWhereInput[]
    analysisId?: UuidFilter<"SentimentAnalysis"> | string
    commentId?: StringFilter<"SentimentAnalysis"> | string
    userId?: UuidFilter<"SentimentAnalysis"> | string
    videoId?: StringFilter<"SentimentAnalysis"> | string
    sentiment?: StringFilter<"SentimentAnalysis"> | string
    sentimentScore?: FloatNullableFilter<"SentimentAnalysis"> | number | null
    isControversial?: BoolFilter<"SentimentAnalysis"> | boolean
    isHilarious?: BoolFilter<"SentimentAnalysis"> | boolean
    isQuestion?: BoolFilter<"SentimentAnalysis"> | boolean
    isAnswer?: BoolFilter<"SentimentAnalysis"> | boolean
    isSuggestion?: BoolFilter<"SentimentAnalysis"> | boolean
    analyzedAt?: DateTimeFilter<"SentimentAnalysis"> | Date | string
    replyCount?: IntFilter<"SentimentAnalysis"> | number
    likeCount?: IntFilter<"SentimentAnalysis"> | number
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SentimentAnalysisOrderByWithRelationInput = {
    analysisId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    sentiment?: SortOrder
    sentimentScore?: SortOrderInput | SortOrder
    isControversial?: SortOrder
    isHilarious?: SortOrder
    isQuestion?: SortOrder
    isAnswer?: SortOrder
    isSuggestion?: SortOrder
    analyzedAt?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    comment?: CommentOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SentimentAnalysisWhereUniqueInput = Prisma.AtLeast<{
    analysisId?: string
    AND?: SentimentAnalysisWhereInput | SentimentAnalysisWhereInput[]
    OR?: SentimentAnalysisWhereInput[]
    NOT?: SentimentAnalysisWhereInput | SentimentAnalysisWhereInput[]
    commentId?: StringFilter<"SentimentAnalysis"> | string
    userId?: UuidFilter<"SentimentAnalysis"> | string
    videoId?: StringFilter<"SentimentAnalysis"> | string
    sentiment?: StringFilter<"SentimentAnalysis"> | string
    sentimentScore?: FloatNullableFilter<"SentimentAnalysis"> | number | null
    isControversial?: BoolFilter<"SentimentAnalysis"> | boolean
    isHilarious?: BoolFilter<"SentimentAnalysis"> | boolean
    isQuestion?: BoolFilter<"SentimentAnalysis"> | boolean
    isAnswer?: BoolFilter<"SentimentAnalysis"> | boolean
    isSuggestion?: BoolFilter<"SentimentAnalysis"> | boolean
    analyzedAt?: DateTimeFilter<"SentimentAnalysis"> | Date | string
    replyCount?: IntFilter<"SentimentAnalysis"> | number
    likeCount?: IntFilter<"SentimentAnalysis"> | number
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "analysisId">

  export type SentimentAnalysisOrderByWithAggregationInput = {
    analysisId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    sentiment?: SortOrder
    sentimentScore?: SortOrderInput | SortOrder
    isControversial?: SortOrder
    isHilarious?: SortOrder
    isQuestion?: SortOrder
    isAnswer?: SortOrder
    isSuggestion?: SortOrder
    analyzedAt?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    _count?: SentimentAnalysisCountOrderByAggregateInput
    _avg?: SentimentAnalysisAvgOrderByAggregateInput
    _max?: SentimentAnalysisMaxOrderByAggregateInput
    _min?: SentimentAnalysisMinOrderByAggregateInput
    _sum?: SentimentAnalysisSumOrderByAggregateInput
  }

  export type SentimentAnalysisScalarWhereWithAggregatesInput = {
    AND?: SentimentAnalysisScalarWhereWithAggregatesInput | SentimentAnalysisScalarWhereWithAggregatesInput[]
    OR?: SentimentAnalysisScalarWhereWithAggregatesInput[]
    NOT?: SentimentAnalysisScalarWhereWithAggregatesInput | SentimentAnalysisScalarWhereWithAggregatesInput[]
    analysisId?: UuidWithAggregatesFilter<"SentimentAnalysis"> | string
    commentId?: StringWithAggregatesFilter<"SentimentAnalysis"> | string
    userId?: UuidWithAggregatesFilter<"SentimentAnalysis"> | string
    videoId?: StringWithAggregatesFilter<"SentimentAnalysis"> | string
    sentiment?: StringWithAggregatesFilter<"SentimentAnalysis"> | string
    sentimentScore?: FloatNullableWithAggregatesFilter<"SentimentAnalysis"> | number | null
    isControversial?: BoolWithAggregatesFilter<"SentimentAnalysis"> | boolean
    isHilarious?: BoolWithAggregatesFilter<"SentimentAnalysis"> | boolean
    isQuestion?: BoolWithAggregatesFilter<"SentimentAnalysis"> | boolean
    isAnswer?: BoolWithAggregatesFilter<"SentimentAnalysis"> | boolean
    isSuggestion?: BoolWithAggregatesFilter<"SentimentAnalysis"> | boolean
    analyzedAt?: DateTimeWithAggregatesFilter<"SentimentAnalysis"> | Date | string
    replyCount?: IntWithAggregatesFilter<"SentimentAnalysis"> | number
    likeCount?: IntWithAggregatesFilter<"SentimentAnalysis"> | number
  }

  export type VideoAnalysisSummaryWhereInput = {
    AND?: VideoAnalysisSummaryWhereInput | VideoAnalysisSummaryWhereInput[]
    OR?: VideoAnalysisSummaryWhereInput[]
    NOT?: VideoAnalysisSummaryWhereInput | VideoAnalysisSummaryWhereInput[]
    summaryId?: UuidFilter<"VideoAnalysisSummary"> | string
    videoId?: StringFilter<"VideoAnalysisSummary"> | string
    userId?: UuidFilter<"VideoAnalysisSummary"> | string
    totalComments?: IntFilter<"VideoAnalysisSummary"> | number
    positiveCount?: IntFilter<"VideoAnalysisSummary"> | number
    negativeCount?: IntFilter<"VideoAnalysisSummary"> | number
    neutralCount?: IntFilter<"VideoAnalysisSummary"> | number
    controversialCount?: IntFilter<"VideoAnalysisSummary"> | number
    hilariousCount?: IntFilter<"VideoAnalysisSummary"> | number
    questionCount?: IntFilter<"VideoAnalysisSummary"> | number
    answerCount?: IntFilter<"VideoAnalysisSummary"> | number
    suggestionCount?: IntFilter<"VideoAnalysisSummary"> | number
    summaryText?: StringNullableFilter<"VideoAnalysisSummary"> | string | null
    createdAt?: DateTimeFilter<"VideoAnalysisSummary"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VideoAnalysisSummaryOrderByWithRelationInput = {
    summaryId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    totalComments?: SortOrder
    positiveCount?: SortOrder
    negativeCount?: SortOrder
    neutralCount?: SortOrder
    controversialCount?: SortOrder
    hilariousCount?: SortOrder
    questionCount?: SortOrder
    answerCount?: SortOrder
    suggestionCount?: SortOrder
    summaryText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    video?: VideoOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type VideoAnalysisSummaryWhereUniqueInput = Prisma.AtLeast<{
    summaryId?: string
    videoId?: string
    AND?: VideoAnalysisSummaryWhereInput | VideoAnalysisSummaryWhereInput[]
    OR?: VideoAnalysisSummaryWhereInput[]
    NOT?: VideoAnalysisSummaryWhereInput | VideoAnalysisSummaryWhereInput[]
    userId?: UuidFilter<"VideoAnalysisSummary"> | string
    totalComments?: IntFilter<"VideoAnalysisSummary"> | number
    positiveCount?: IntFilter<"VideoAnalysisSummary"> | number
    negativeCount?: IntFilter<"VideoAnalysisSummary"> | number
    neutralCount?: IntFilter<"VideoAnalysisSummary"> | number
    controversialCount?: IntFilter<"VideoAnalysisSummary"> | number
    hilariousCount?: IntFilter<"VideoAnalysisSummary"> | number
    questionCount?: IntFilter<"VideoAnalysisSummary"> | number
    answerCount?: IntFilter<"VideoAnalysisSummary"> | number
    suggestionCount?: IntFilter<"VideoAnalysisSummary"> | number
    summaryText?: StringNullableFilter<"VideoAnalysisSummary"> | string | null
    createdAt?: DateTimeFilter<"VideoAnalysisSummary"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "summaryId" | "videoId">

  export type VideoAnalysisSummaryOrderByWithAggregationInput = {
    summaryId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    totalComments?: SortOrder
    positiveCount?: SortOrder
    negativeCount?: SortOrder
    neutralCount?: SortOrder
    controversialCount?: SortOrder
    hilariousCount?: SortOrder
    questionCount?: SortOrder
    answerCount?: SortOrder
    suggestionCount?: SortOrder
    summaryText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VideoAnalysisSummaryCountOrderByAggregateInput
    _avg?: VideoAnalysisSummaryAvgOrderByAggregateInput
    _max?: VideoAnalysisSummaryMaxOrderByAggregateInput
    _min?: VideoAnalysisSummaryMinOrderByAggregateInput
    _sum?: VideoAnalysisSummarySumOrderByAggregateInput
  }

  export type VideoAnalysisSummaryScalarWhereWithAggregatesInput = {
    AND?: VideoAnalysisSummaryScalarWhereWithAggregatesInput | VideoAnalysisSummaryScalarWhereWithAggregatesInput[]
    OR?: VideoAnalysisSummaryScalarWhereWithAggregatesInput[]
    NOT?: VideoAnalysisSummaryScalarWhereWithAggregatesInput | VideoAnalysisSummaryScalarWhereWithAggregatesInput[]
    summaryId?: UuidWithAggregatesFilter<"VideoAnalysisSummary"> | string
    videoId?: StringWithAggregatesFilter<"VideoAnalysisSummary"> | string
    userId?: UuidWithAggregatesFilter<"VideoAnalysisSummary"> | string
    totalComments?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    positiveCount?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    negativeCount?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    neutralCount?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    controversialCount?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    hilariousCount?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    questionCount?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    answerCount?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    suggestionCount?: IntWithAggregatesFilter<"VideoAnalysisSummary"> | number
    summaryText?: StringNullableWithAggregatesFilter<"VideoAnalysisSummary"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VideoAnalysisSummary"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    videoId: string
    userId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoUpdateInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoCreateManyInput = {
    videoId: string
    userId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    commentId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    commentId: string
    videoId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    commentId: string
    videoId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McpConversationCreateInput = {
    conversationId?: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMcpConvosInput
    video: VideoCreateNestedOneWithoutMcpConvosInput
  }

  export type McpConversationUncheckedCreateInput = {
    conversationId?: string
    videoId: string
    userId: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
  }

  export type McpConversationUpdateInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMcpConvosNestedInput
    video?: VideoUpdateOneRequiredWithoutMcpConvosNestedInput
  }

  export type McpConversationUncheckedUpdateInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McpConversationCreateManyInput = {
    conversationId?: string
    videoId: string
    userId: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
  }

  export type McpConversationUpdateManyMutationInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McpConversationUncheckedUpdateManyInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReplyCreateInput = {
    replyId?: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommentRepliesInput
    comment: CommentCreateNestedOneWithoutCommentRepliesInput
  }

  export type CommentReplyUncheckedCreateInput = {
    replyId?: string
    commentId: string
    userId: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
  }

  export type CommentReplyUpdateInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommentRepliesNestedInput
    comment?: CommentUpdateOneRequiredWithoutCommentRepliesNestedInput
  }

  export type CommentReplyUncheckedUpdateInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentReplyCreateManyInput = {
    replyId?: string
    commentId: string
    userId: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
  }

  export type CommentReplyUpdateManyMutationInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentReplyUncheckedUpdateManyInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalysisJobCreateInput = {
    jobId?: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutAnalysisJobsInput
    user: UserCreateNestedOneWithoutAnalysisJobsInput
  }

  export type AnalysisJobUncheckedCreateInput = {
    jobId?: string
    videoId: string
    userId: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnalysisJobUpdateInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutAnalysisJobsNestedInput
    user?: UserUpdateOneRequiredWithoutAnalysisJobsNestedInput
  }

  export type AnalysisJobUncheckedUpdateInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobCreateManyInput = {
    jobId?: string
    videoId: string
    userId: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnalysisJobUpdateManyMutationInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobUncheckedUpdateManyInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentAnalysisCreateInput = {
    analysisId?: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
    comment: CommentCreateNestedOneWithoutSentimentAnalysisInput
    video: VideoCreateNestedOneWithoutSentimentAnalysisInput
    user: UserCreateNestedOneWithoutSentimentAnalysisInput
  }

  export type SentimentAnalysisUncheckedCreateInput = {
    analysisId?: string
    commentId: string
    userId: string
    videoId: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
  }

  export type SentimentAnalysisUpdateInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    comment?: CommentUpdateOneRequiredWithoutSentimentAnalysisNestedInput
    video?: VideoUpdateOneRequiredWithoutSentimentAnalysisNestedInput
    user?: UserUpdateOneRequiredWithoutSentimentAnalysisNestedInput
  }

  export type SentimentAnalysisUncheckedUpdateInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentAnalysisCreateManyInput = {
    analysisId?: string
    commentId: string
    userId: string
    videoId: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
  }

  export type SentimentAnalysisUpdateManyMutationInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentAnalysisUncheckedUpdateManyInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type VideoAnalysisSummaryCreateInput = {
    summaryId?: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutVideoSummariesInput
    user: UserCreateNestedOneWithoutVideoSummariesInput
  }

  export type VideoAnalysisSummaryUncheckedCreateInput = {
    summaryId?: string
    videoId: string
    userId: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
  }

  export type VideoAnalysisSummaryUpdateInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutVideoSummariesNestedInput
    user?: UserUpdateOneRequiredWithoutVideoSummariesNestedInput
  }

  export type VideoAnalysisSummaryUncheckedUpdateInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoAnalysisSummaryCreateManyInput = {
    summaryId?: string
    videoId: string
    userId: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
  }

  export type VideoAnalysisSummaryUpdateManyMutationInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoAnalysisSummaryUncheckedUpdateManyInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CommentReplyListRelationFilter = {
    every?: CommentReplyWhereInput
    some?: CommentReplyWhereInput
    none?: CommentReplyWhereInput
  }

  export type McpConversationListRelationFilter = {
    every?: McpConversationWhereInput
    some?: McpConversationWhereInput
    none?: McpConversationWhereInput
  }

  export type AnalysisJobListRelationFilter = {
    every?: AnalysisJobWhereInput
    some?: AnalysisJobWhereInput
    none?: AnalysisJobWhereInput
  }

  export type SentimentAnalysisListRelationFilter = {
    every?: SentimentAnalysisWhereInput
    some?: SentimentAnalysisWhereInput
    none?: SentimentAnalysisWhereInput
  }

  export type VideoAnalysisSummaryListRelationFilter = {
    every?: VideoAnalysisSummaryWhereInput
    some?: VideoAnalysisSummaryWhereInput
    none?: VideoAnalysisSummaryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type McpConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SentimentAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoAnalysisSummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    channelThumbnailUrl?: SortOrder
    subscriberCount?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    subscriberCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    channelThumbnailUrl?: SortOrder
    subscriberCount?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    channelId?: SortOrder
    channelName?: SortOrder
    channelThumbnailUrl?: SortOrder
    subscriberCount?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    subscriberCount?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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

  export type VideoCountOrderByAggregateInput = {
    videoId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    analysisStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    videoId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    analysisStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    videoId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    publishedAt?: SortOrder
    analysisStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    commentId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    authorName?: SortOrder
    authorChannelId?: SortOrder
    commentText?: SortOrder
    publishedAt?: SortOrder
    parentCommentId?: SortOrder
    isReply?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    replyCount?: SortOrder
    likeCount?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    commentId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    authorName?: SortOrder
    authorChannelId?: SortOrder
    commentText?: SortOrder
    publishedAt?: SortOrder
    parentCommentId?: SortOrder
    isReply?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    commentId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    authorName?: SortOrder
    authorChannelId?: SortOrder
    commentText?: SortOrder
    publishedAt?: SortOrder
    parentCommentId?: SortOrder
    isReply?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    replyCount?: SortOrder
    likeCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type McpConversationCountOrderByAggregateInput = {
    conversationId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type McpConversationMaxOrderByAggregateInput = {
    conversationId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type McpConversationMinOrderByAggregateInput = {
    conversationId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type CommentReplyCountOrderByAggregateInput = {
    replyId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    replyText?: SortOrder
    replyStatus?: SortOrder
    youtubeReplyId?: SortOrder
    createdAt?: SortOrder
    postedAt?: SortOrder
  }

  export type CommentReplyMaxOrderByAggregateInput = {
    replyId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    replyText?: SortOrder
    replyStatus?: SortOrder
    youtubeReplyId?: SortOrder
    createdAt?: SortOrder
    postedAt?: SortOrder
  }

  export type CommentReplyMinOrderByAggregateInput = {
    replyId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    replyText?: SortOrder
    replyStatus?: SortOrder
    youtubeReplyId?: SortOrder
    createdAt?: SortOrder
    postedAt?: SortOrder
  }

  export type AnalysisJobCountOrderByAggregateInput = {
    jobId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    jobStatus?: SortOrder
    commentsFetched?: SortOrder
    commentsAnalyzed?: SortOrder
    currentBatch?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisJobAvgOrderByAggregateInput = {
    commentsFetched?: SortOrder
    commentsAnalyzed?: SortOrder
    currentBatch?: SortOrder
  }

  export type AnalysisJobMaxOrderByAggregateInput = {
    jobId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    jobStatus?: SortOrder
    commentsFetched?: SortOrder
    commentsAnalyzed?: SortOrder
    currentBatch?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisJobMinOrderByAggregateInput = {
    jobId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    jobStatus?: SortOrder
    commentsFetched?: SortOrder
    commentsAnalyzed?: SortOrder
    currentBatch?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisJobSumOrderByAggregateInput = {
    commentsFetched?: SortOrder
    commentsAnalyzed?: SortOrder
    currentBatch?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SentimentAnalysisCountOrderByAggregateInput = {
    analysisId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    sentiment?: SortOrder
    sentimentScore?: SortOrder
    isControversial?: SortOrder
    isHilarious?: SortOrder
    isQuestion?: SortOrder
    isAnswer?: SortOrder
    isSuggestion?: SortOrder
    analyzedAt?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
  }

  export type SentimentAnalysisAvgOrderByAggregateInput = {
    sentimentScore?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
  }

  export type SentimentAnalysisMaxOrderByAggregateInput = {
    analysisId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    sentiment?: SortOrder
    sentimentScore?: SortOrder
    isControversial?: SortOrder
    isHilarious?: SortOrder
    isQuestion?: SortOrder
    isAnswer?: SortOrder
    isSuggestion?: SortOrder
    analyzedAt?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
  }

  export type SentimentAnalysisMinOrderByAggregateInput = {
    analysisId?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    videoId?: SortOrder
    sentiment?: SortOrder
    sentimentScore?: SortOrder
    isControversial?: SortOrder
    isHilarious?: SortOrder
    isQuestion?: SortOrder
    isAnswer?: SortOrder
    isSuggestion?: SortOrder
    analyzedAt?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
  }

  export type SentimentAnalysisSumOrderByAggregateInput = {
    sentimentScore?: SortOrder
    replyCount?: SortOrder
    likeCount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VideoAnalysisSummaryCountOrderByAggregateInput = {
    summaryId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    totalComments?: SortOrder
    positiveCount?: SortOrder
    negativeCount?: SortOrder
    neutralCount?: SortOrder
    controversialCount?: SortOrder
    hilariousCount?: SortOrder
    questionCount?: SortOrder
    answerCount?: SortOrder
    suggestionCount?: SortOrder
    summaryText?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoAnalysisSummaryAvgOrderByAggregateInput = {
    totalComments?: SortOrder
    positiveCount?: SortOrder
    negativeCount?: SortOrder
    neutralCount?: SortOrder
    controversialCount?: SortOrder
    hilariousCount?: SortOrder
    questionCount?: SortOrder
    answerCount?: SortOrder
    suggestionCount?: SortOrder
  }

  export type VideoAnalysisSummaryMaxOrderByAggregateInput = {
    summaryId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    totalComments?: SortOrder
    positiveCount?: SortOrder
    negativeCount?: SortOrder
    neutralCount?: SortOrder
    controversialCount?: SortOrder
    hilariousCount?: SortOrder
    questionCount?: SortOrder
    answerCount?: SortOrder
    suggestionCount?: SortOrder
    summaryText?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoAnalysisSummaryMinOrderByAggregateInput = {
    summaryId?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    totalComments?: SortOrder
    positiveCount?: SortOrder
    negativeCount?: SortOrder
    neutralCount?: SortOrder
    controversialCount?: SortOrder
    hilariousCount?: SortOrder
    questionCount?: SortOrder
    answerCount?: SortOrder
    suggestionCount?: SortOrder
    summaryText?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoAnalysisSummarySumOrderByAggregateInput = {
    totalComments?: SortOrder
    positiveCount?: SortOrder
    negativeCount?: SortOrder
    neutralCount?: SortOrder
    controversialCount?: SortOrder
    hilariousCount?: SortOrder
    questionCount?: SortOrder
    answerCount?: SortOrder
    suggestionCount?: SortOrder
  }

  export type VideoCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentReplyCreateWithoutUserInput, CommentReplyUncheckedCreateWithoutUserInput> | CommentReplyCreateWithoutUserInput[] | CommentReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReplyCreateOrConnectWithoutUserInput | CommentReplyCreateOrConnectWithoutUserInput[]
    createMany?: CommentReplyCreateManyUserInputEnvelope
    connect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
  }

  export type McpConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<McpConversationCreateWithoutUserInput, McpConversationUncheckedCreateWithoutUserInput> | McpConversationCreateWithoutUserInput[] | McpConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: McpConversationCreateOrConnectWithoutUserInput | McpConversationCreateOrConnectWithoutUserInput[]
    createMany?: McpConversationCreateManyUserInputEnvelope
    connect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
  }

  export type AnalysisJobCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisJobCreateWithoutUserInput, AnalysisJobUncheckedCreateWithoutUserInput> | AnalysisJobCreateWithoutUserInput[] | AnalysisJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutUserInput | AnalysisJobCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisJobCreateManyUserInputEnvelope
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
  }

  export type SentimentAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<SentimentAnalysisCreateWithoutUserInput, SentimentAnalysisUncheckedCreateWithoutUserInput> | SentimentAnalysisCreateWithoutUserInput[] | SentimentAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutUserInput | SentimentAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: SentimentAnalysisCreateManyUserInputEnvelope
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
  }

  export type VideoAnalysisSummaryCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoAnalysisSummaryCreateWithoutUserInput, VideoAnalysisSummaryUncheckedCreateWithoutUserInput> | VideoAnalysisSummaryCreateWithoutUserInput[] | VideoAnalysisSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoAnalysisSummaryCreateOrConnectWithoutUserInput | VideoAnalysisSummaryCreateOrConnectWithoutUserInput[]
    createMany?: VideoAnalysisSummaryCreateManyUserInputEnvelope
    connect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentReplyCreateWithoutUserInput, CommentReplyUncheckedCreateWithoutUserInput> | CommentReplyCreateWithoutUserInput[] | CommentReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReplyCreateOrConnectWithoutUserInput | CommentReplyCreateOrConnectWithoutUserInput[]
    createMany?: CommentReplyCreateManyUserInputEnvelope
    connect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
  }

  export type McpConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<McpConversationCreateWithoutUserInput, McpConversationUncheckedCreateWithoutUserInput> | McpConversationCreateWithoutUserInput[] | McpConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: McpConversationCreateOrConnectWithoutUserInput | McpConversationCreateOrConnectWithoutUserInput[]
    createMany?: McpConversationCreateManyUserInputEnvelope
    connect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
  }

  export type AnalysisJobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisJobCreateWithoutUserInput, AnalysisJobUncheckedCreateWithoutUserInput> | AnalysisJobCreateWithoutUserInput[] | AnalysisJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutUserInput | AnalysisJobCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisJobCreateManyUserInputEnvelope
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
  }

  export type SentimentAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SentimentAnalysisCreateWithoutUserInput, SentimentAnalysisUncheckedCreateWithoutUserInput> | SentimentAnalysisCreateWithoutUserInput[] | SentimentAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutUserInput | SentimentAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: SentimentAnalysisCreateManyUserInputEnvelope
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
  }

  export type VideoAnalysisSummaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoAnalysisSummaryCreateWithoutUserInput, VideoAnalysisSummaryUncheckedCreateWithoutUserInput> | VideoAnalysisSummaryCreateWithoutUserInput[] | VideoAnalysisSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoAnalysisSummaryCreateOrConnectWithoutUserInput | VideoAnalysisSummaryCreateOrConnectWithoutUserInput[]
    createMany?: VideoAnalysisSummaryCreateManyUserInputEnvelope
    connect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VideoUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUserInput | VideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUserInput | VideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUserInput | VideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
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

  export type CommentReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentReplyCreateWithoutUserInput, CommentReplyUncheckedCreateWithoutUserInput> | CommentReplyCreateWithoutUserInput[] | CommentReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReplyCreateOrConnectWithoutUserInput | CommentReplyCreateOrConnectWithoutUserInput[]
    upsert?: CommentReplyUpsertWithWhereUniqueWithoutUserInput | CommentReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentReplyCreateManyUserInputEnvelope
    set?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    disconnect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    delete?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    connect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    update?: CommentReplyUpdateWithWhereUniqueWithoutUserInput | CommentReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentReplyUpdateManyWithWhereWithoutUserInput | CommentReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentReplyScalarWhereInput | CommentReplyScalarWhereInput[]
  }

  export type McpConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<McpConversationCreateWithoutUserInput, McpConversationUncheckedCreateWithoutUserInput> | McpConversationCreateWithoutUserInput[] | McpConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: McpConversationCreateOrConnectWithoutUserInput | McpConversationCreateOrConnectWithoutUserInput[]
    upsert?: McpConversationUpsertWithWhereUniqueWithoutUserInput | McpConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: McpConversationCreateManyUserInputEnvelope
    set?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    disconnect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    delete?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    connect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    update?: McpConversationUpdateWithWhereUniqueWithoutUserInput | McpConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: McpConversationUpdateManyWithWhereWithoutUserInput | McpConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: McpConversationScalarWhereInput | McpConversationScalarWhereInput[]
  }

  export type AnalysisJobUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisJobCreateWithoutUserInput, AnalysisJobUncheckedCreateWithoutUserInput> | AnalysisJobCreateWithoutUserInput[] | AnalysisJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutUserInput | AnalysisJobCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisJobUpsertWithWhereUniqueWithoutUserInput | AnalysisJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisJobCreateManyUserInputEnvelope
    set?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    disconnect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    delete?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    update?: AnalysisJobUpdateWithWhereUniqueWithoutUserInput | AnalysisJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisJobUpdateManyWithWhereWithoutUserInput | AnalysisJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
  }

  export type SentimentAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<SentimentAnalysisCreateWithoutUserInput, SentimentAnalysisUncheckedCreateWithoutUserInput> | SentimentAnalysisCreateWithoutUserInput[] | SentimentAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutUserInput | SentimentAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: SentimentAnalysisUpsertWithWhereUniqueWithoutUserInput | SentimentAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SentimentAnalysisCreateManyUserInputEnvelope
    set?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    disconnect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    delete?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    update?: SentimentAnalysisUpdateWithWhereUniqueWithoutUserInput | SentimentAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SentimentAnalysisUpdateManyWithWhereWithoutUserInput | SentimentAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SentimentAnalysisScalarWhereInput | SentimentAnalysisScalarWhereInput[]
  }

  export type VideoAnalysisSummaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoAnalysisSummaryCreateWithoutUserInput, VideoAnalysisSummaryUncheckedCreateWithoutUserInput> | VideoAnalysisSummaryCreateWithoutUserInput[] | VideoAnalysisSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoAnalysisSummaryCreateOrConnectWithoutUserInput | VideoAnalysisSummaryCreateOrConnectWithoutUserInput[]
    upsert?: VideoAnalysisSummaryUpsertWithWhereUniqueWithoutUserInput | VideoAnalysisSummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoAnalysisSummaryCreateManyUserInputEnvelope
    set?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    disconnect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    delete?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    connect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    update?: VideoAnalysisSummaryUpdateWithWhereUniqueWithoutUserInput | VideoAnalysisSummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoAnalysisSummaryUpdateManyWithWhereWithoutUserInput | VideoAnalysisSummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoAnalysisSummaryScalarWhereInput | VideoAnalysisSummaryScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUserInput | VideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUserInput | VideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUserInput | VideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
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

  export type CommentReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentReplyCreateWithoutUserInput, CommentReplyUncheckedCreateWithoutUserInput> | CommentReplyCreateWithoutUserInput[] | CommentReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReplyCreateOrConnectWithoutUserInput | CommentReplyCreateOrConnectWithoutUserInput[]
    upsert?: CommentReplyUpsertWithWhereUniqueWithoutUserInput | CommentReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentReplyCreateManyUserInputEnvelope
    set?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    disconnect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    delete?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    connect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    update?: CommentReplyUpdateWithWhereUniqueWithoutUserInput | CommentReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentReplyUpdateManyWithWhereWithoutUserInput | CommentReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentReplyScalarWhereInput | CommentReplyScalarWhereInput[]
  }

  export type McpConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<McpConversationCreateWithoutUserInput, McpConversationUncheckedCreateWithoutUserInput> | McpConversationCreateWithoutUserInput[] | McpConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: McpConversationCreateOrConnectWithoutUserInput | McpConversationCreateOrConnectWithoutUserInput[]
    upsert?: McpConversationUpsertWithWhereUniqueWithoutUserInput | McpConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: McpConversationCreateManyUserInputEnvelope
    set?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    disconnect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    delete?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    connect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    update?: McpConversationUpdateWithWhereUniqueWithoutUserInput | McpConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: McpConversationUpdateManyWithWhereWithoutUserInput | McpConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: McpConversationScalarWhereInput | McpConversationScalarWhereInput[]
  }

  export type AnalysisJobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisJobCreateWithoutUserInput, AnalysisJobUncheckedCreateWithoutUserInput> | AnalysisJobCreateWithoutUserInput[] | AnalysisJobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutUserInput | AnalysisJobCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisJobUpsertWithWhereUniqueWithoutUserInput | AnalysisJobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisJobCreateManyUserInputEnvelope
    set?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    disconnect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    delete?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    update?: AnalysisJobUpdateWithWhereUniqueWithoutUserInput | AnalysisJobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisJobUpdateManyWithWhereWithoutUserInput | AnalysisJobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
  }

  export type SentimentAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SentimentAnalysisCreateWithoutUserInput, SentimentAnalysisUncheckedCreateWithoutUserInput> | SentimentAnalysisCreateWithoutUserInput[] | SentimentAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutUserInput | SentimentAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: SentimentAnalysisUpsertWithWhereUniqueWithoutUserInput | SentimentAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SentimentAnalysisCreateManyUserInputEnvelope
    set?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    disconnect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    delete?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    update?: SentimentAnalysisUpdateWithWhereUniqueWithoutUserInput | SentimentAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SentimentAnalysisUpdateManyWithWhereWithoutUserInput | SentimentAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SentimentAnalysisScalarWhereInput | SentimentAnalysisScalarWhereInput[]
  }

  export type VideoAnalysisSummaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoAnalysisSummaryCreateWithoutUserInput, VideoAnalysisSummaryUncheckedCreateWithoutUserInput> | VideoAnalysisSummaryCreateWithoutUserInput[] | VideoAnalysisSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoAnalysisSummaryCreateOrConnectWithoutUserInput | VideoAnalysisSummaryCreateOrConnectWithoutUserInput[]
    upsert?: VideoAnalysisSummaryUpsertWithWhereUniqueWithoutUserInput | VideoAnalysisSummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoAnalysisSummaryCreateManyUserInputEnvelope
    set?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    disconnect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    delete?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    connect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    update?: VideoAnalysisSummaryUpdateWithWhereUniqueWithoutUserInput | VideoAnalysisSummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoAnalysisSummaryUpdateManyWithWhereWithoutUserInput | VideoAnalysisSummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoAnalysisSummaryScalarWhereInput | VideoAnalysisSummaryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVideosInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutVideoInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type McpConversationCreateNestedManyWithoutVideoInput = {
    create?: XOR<McpConversationCreateWithoutVideoInput, McpConversationUncheckedCreateWithoutVideoInput> | McpConversationCreateWithoutVideoInput[] | McpConversationUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: McpConversationCreateOrConnectWithoutVideoInput | McpConversationCreateOrConnectWithoutVideoInput[]
    createMany?: McpConversationCreateManyVideoInputEnvelope
    connect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
  }

  export type AnalysisJobCreateNestedManyWithoutVideoInput = {
    create?: XOR<AnalysisJobCreateWithoutVideoInput, AnalysisJobUncheckedCreateWithoutVideoInput> | AnalysisJobCreateWithoutVideoInput[] | AnalysisJobUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutVideoInput | AnalysisJobCreateOrConnectWithoutVideoInput[]
    createMany?: AnalysisJobCreateManyVideoInputEnvelope
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
  }

  export type SentimentAnalysisCreateNestedManyWithoutVideoInput = {
    create?: XOR<SentimentAnalysisCreateWithoutVideoInput, SentimentAnalysisUncheckedCreateWithoutVideoInput> | SentimentAnalysisCreateWithoutVideoInput[] | SentimentAnalysisUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutVideoInput | SentimentAnalysisCreateOrConnectWithoutVideoInput[]
    createMany?: SentimentAnalysisCreateManyVideoInputEnvelope
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
  }

  export type VideoAnalysisSummaryCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoAnalysisSummaryCreateWithoutVideoInput, VideoAnalysisSummaryUncheckedCreateWithoutVideoInput> | VideoAnalysisSummaryCreateWithoutVideoInput[] | VideoAnalysisSummaryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoAnalysisSummaryCreateOrConnectWithoutVideoInput | VideoAnalysisSummaryCreateOrConnectWithoutVideoInput[]
    createMany?: VideoAnalysisSummaryCreateManyVideoInputEnvelope
    connect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type McpConversationUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<McpConversationCreateWithoutVideoInput, McpConversationUncheckedCreateWithoutVideoInput> | McpConversationCreateWithoutVideoInput[] | McpConversationUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: McpConversationCreateOrConnectWithoutVideoInput | McpConversationCreateOrConnectWithoutVideoInput[]
    createMany?: McpConversationCreateManyVideoInputEnvelope
    connect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
  }

  export type AnalysisJobUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<AnalysisJobCreateWithoutVideoInput, AnalysisJobUncheckedCreateWithoutVideoInput> | AnalysisJobCreateWithoutVideoInput[] | AnalysisJobUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutVideoInput | AnalysisJobCreateOrConnectWithoutVideoInput[]
    createMany?: AnalysisJobCreateManyVideoInputEnvelope
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
  }

  export type SentimentAnalysisUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<SentimentAnalysisCreateWithoutVideoInput, SentimentAnalysisUncheckedCreateWithoutVideoInput> | SentimentAnalysisCreateWithoutVideoInput[] | SentimentAnalysisUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutVideoInput | SentimentAnalysisCreateOrConnectWithoutVideoInput[]
    createMany?: SentimentAnalysisCreateManyVideoInputEnvelope
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
  }

  export type VideoAnalysisSummaryUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<VideoAnalysisSummaryCreateWithoutVideoInput, VideoAnalysisSummaryUncheckedCreateWithoutVideoInput> | VideoAnalysisSummaryCreateWithoutVideoInput[] | VideoAnalysisSummaryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoAnalysisSummaryCreateOrConnectWithoutVideoInput | VideoAnalysisSummaryCreateOrConnectWithoutVideoInput[]
    createMany?: VideoAnalysisSummaryCreateManyVideoInputEnvelope
    connect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    upsert?: UserUpsertWithoutVideosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideosInput, UserUpdateWithoutVideosInput>, UserUncheckedUpdateWithoutVideosInput>
  }

  export type CommentUpdateManyWithoutVideoNestedInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutVideoInput | CommentUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutVideoInput | CommentUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutVideoInput | CommentUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type McpConversationUpdateManyWithoutVideoNestedInput = {
    create?: XOR<McpConversationCreateWithoutVideoInput, McpConversationUncheckedCreateWithoutVideoInput> | McpConversationCreateWithoutVideoInput[] | McpConversationUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: McpConversationCreateOrConnectWithoutVideoInput | McpConversationCreateOrConnectWithoutVideoInput[]
    upsert?: McpConversationUpsertWithWhereUniqueWithoutVideoInput | McpConversationUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: McpConversationCreateManyVideoInputEnvelope
    set?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    disconnect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    delete?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    connect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    update?: McpConversationUpdateWithWhereUniqueWithoutVideoInput | McpConversationUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: McpConversationUpdateManyWithWhereWithoutVideoInput | McpConversationUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: McpConversationScalarWhereInput | McpConversationScalarWhereInput[]
  }

  export type AnalysisJobUpdateManyWithoutVideoNestedInput = {
    create?: XOR<AnalysisJobCreateWithoutVideoInput, AnalysisJobUncheckedCreateWithoutVideoInput> | AnalysisJobCreateWithoutVideoInput[] | AnalysisJobUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutVideoInput | AnalysisJobCreateOrConnectWithoutVideoInput[]
    upsert?: AnalysisJobUpsertWithWhereUniqueWithoutVideoInput | AnalysisJobUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: AnalysisJobCreateManyVideoInputEnvelope
    set?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    disconnect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    delete?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    update?: AnalysisJobUpdateWithWhereUniqueWithoutVideoInput | AnalysisJobUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: AnalysisJobUpdateManyWithWhereWithoutVideoInput | AnalysisJobUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
  }

  export type SentimentAnalysisUpdateManyWithoutVideoNestedInput = {
    create?: XOR<SentimentAnalysisCreateWithoutVideoInput, SentimentAnalysisUncheckedCreateWithoutVideoInput> | SentimentAnalysisCreateWithoutVideoInput[] | SentimentAnalysisUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutVideoInput | SentimentAnalysisCreateOrConnectWithoutVideoInput[]
    upsert?: SentimentAnalysisUpsertWithWhereUniqueWithoutVideoInput | SentimentAnalysisUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: SentimentAnalysisCreateManyVideoInputEnvelope
    set?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    disconnect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    delete?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    update?: SentimentAnalysisUpdateWithWhereUniqueWithoutVideoInput | SentimentAnalysisUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: SentimentAnalysisUpdateManyWithWhereWithoutVideoInput | SentimentAnalysisUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: SentimentAnalysisScalarWhereInput | SentimentAnalysisScalarWhereInput[]
  }

  export type VideoAnalysisSummaryUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoAnalysisSummaryCreateWithoutVideoInput, VideoAnalysisSummaryUncheckedCreateWithoutVideoInput> | VideoAnalysisSummaryCreateWithoutVideoInput[] | VideoAnalysisSummaryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoAnalysisSummaryCreateOrConnectWithoutVideoInput | VideoAnalysisSummaryCreateOrConnectWithoutVideoInput[]
    upsert?: VideoAnalysisSummaryUpsertWithWhereUniqueWithoutVideoInput | VideoAnalysisSummaryUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoAnalysisSummaryCreateManyVideoInputEnvelope
    set?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    disconnect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    delete?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    connect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    update?: VideoAnalysisSummaryUpdateWithWhereUniqueWithoutVideoInput | VideoAnalysisSummaryUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoAnalysisSummaryUpdateManyWithWhereWithoutVideoInput | VideoAnalysisSummaryUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoAnalysisSummaryScalarWhereInput | VideoAnalysisSummaryScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutVideoInput | CommentUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutVideoInput | CommentUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutVideoInput | CommentUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type McpConversationUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<McpConversationCreateWithoutVideoInput, McpConversationUncheckedCreateWithoutVideoInput> | McpConversationCreateWithoutVideoInput[] | McpConversationUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: McpConversationCreateOrConnectWithoutVideoInput | McpConversationCreateOrConnectWithoutVideoInput[]
    upsert?: McpConversationUpsertWithWhereUniqueWithoutVideoInput | McpConversationUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: McpConversationCreateManyVideoInputEnvelope
    set?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    disconnect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    delete?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    connect?: McpConversationWhereUniqueInput | McpConversationWhereUniqueInput[]
    update?: McpConversationUpdateWithWhereUniqueWithoutVideoInput | McpConversationUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: McpConversationUpdateManyWithWhereWithoutVideoInput | McpConversationUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: McpConversationScalarWhereInput | McpConversationScalarWhereInput[]
  }

  export type AnalysisJobUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<AnalysisJobCreateWithoutVideoInput, AnalysisJobUncheckedCreateWithoutVideoInput> | AnalysisJobCreateWithoutVideoInput[] | AnalysisJobUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: AnalysisJobCreateOrConnectWithoutVideoInput | AnalysisJobCreateOrConnectWithoutVideoInput[]
    upsert?: AnalysisJobUpsertWithWhereUniqueWithoutVideoInput | AnalysisJobUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: AnalysisJobCreateManyVideoInputEnvelope
    set?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    disconnect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    delete?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    connect?: AnalysisJobWhereUniqueInput | AnalysisJobWhereUniqueInput[]
    update?: AnalysisJobUpdateWithWhereUniqueWithoutVideoInput | AnalysisJobUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: AnalysisJobUpdateManyWithWhereWithoutVideoInput | AnalysisJobUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
  }

  export type SentimentAnalysisUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<SentimentAnalysisCreateWithoutVideoInput, SentimentAnalysisUncheckedCreateWithoutVideoInput> | SentimentAnalysisCreateWithoutVideoInput[] | SentimentAnalysisUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutVideoInput | SentimentAnalysisCreateOrConnectWithoutVideoInput[]
    upsert?: SentimentAnalysisUpsertWithWhereUniqueWithoutVideoInput | SentimentAnalysisUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: SentimentAnalysisCreateManyVideoInputEnvelope
    set?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    disconnect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    delete?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    update?: SentimentAnalysisUpdateWithWhereUniqueWithoutVideoInput | SentimentAnalysisUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: SentimentAnalysisUpdateManyWithWhereWithoutVideoInput | SentimentAnalysisUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: SentimentAnalysisScalarWhereInput | SentimentAnalysisScalarWhereInput[]
  }

  export type VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<VideoAnalysisSummaryCreateWithoutVideoInput, VideoAnalysisSummaryUncheckedCreateWithoutVideoInput> | VideoAnalysisSummaryCreateWithoutVideoInput[] | VideoAnalysisSummaryUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: VideoAnalysisSummaryCreateOrConnectWithoutVideoInput | VideoAnalysisSummaryCreateOrConnectWithoutVideoInput[]
    upsert?: VideoAnalysisSummaryUpsertWithWhereUniqueWithoutVideoInput | VideoAnalysisSummaryUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: VideoAnalysisSummaryCreateManyVideoInputEnvelope
    set?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    disconnect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    delete?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    connect?: VideoAnalysisSummaryWhereUniqueInput | VideoAnalysisSummaryWhereUniqueInput[]
    update?: VideoAnalysisSummaryUpdateWithWhereUniqueWithoutVideoInput | VideoAnalysisSummaryUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: VideoAnalysisSummaryUpdateManyWithWhereWithoutVideoInput | VideoAnalysisSummaryUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: VideoAnalysisSummaryScalarWhereInput | VideoAnalysisSummaryScalarWhereInput[]
  }

  export type VideoCreateNestedOneWithoutCommentsInput = {
    create?: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput
    connect?: VideoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentReplyCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentReplyCreateWithoutCommentInput, CommentReplyUncheckedCreateWithoutCommentInput> | CommentReplyCreateWithoutCommentInput[] | CommentReplyUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReplyCreateOrConnectWithoutCommentInput | CommentReplyCreateOrConnectWithoutCommentInput[]
    createMany?: CommentReplyCreateManyCommentInputEnvelope
    connect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
  }

  export type SentimentAnalysisCreateNestedManyWithoutCommentInput = {
    create?: XOR<SentimentAnalysisCreateWithoutCommentInput, SentimentAnalysisUncheckedCreateWithoutCommentInput> | SentimentAnalysisCreateWithoutCommentInput[] | SentimentAnalysisUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutCommentInput | SentimentAnalysisCreateOrConnectWithoutCommentInput[]
    createMany?: SentimentAnalysisCreateManyCommentInputEnvelope
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput> | CommentCreateWithoutParentCommentInput[] | CommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentCommentInput | CommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: CommentCreateManyParentCommentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentReplyUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentReplyCreateWithoutCommentInput, CommentReplyUncheckedCreateWithoutCommentInput> | CommentReplyCreateWithoutCommentInput[] | CommentReplyUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReplyCreateOrConnectWithoutCommentInput | CommentReplyCreateOrConnectWithoutCommentInput[]
    createMany?: CommentReplyCreateManyCommentInputEnvelope
    connect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
  }

  export type SentimentAnalysisUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<SentimentAnalysisCreateWithoutCommentInput, SentimentAnalysisUncheckedCreateWithoutCommentInput> | SentimentAnalysisCreateWithoutCommentInput[] | SentimentAnalysisUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutCommentInput | SentimentAnalysisCreateOrConnectWithoutCommentInput[]
    createMany?: SentimentAnalysisCreateManyCommentInputEnvelope
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VideoUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCommentsInput
    upsert?: VideoUpsertWithoutCommentsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutCommentsInput, VideoUpdateWithoutCommentsInput>, VideoUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
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

  export type CommentReplyUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentReplyCreateWithoutCommentInput, CommentReplyUncheckedCreateWithoutCommentInput> | CommentReplyCreateWithoutCommentInput[] | CommentReplyUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReplyCreateOrConnectWithoutCommentInput | CommentReplyCreateOrConnectWithoutCommentInput[]
    upsert?: CommentReplyUpsertWithWhereUniqueWithoutCommentInput | CommentReplyUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentReplyCreateManyCommentInputEnvelope
    set?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    disconnect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    delete?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    connect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    update?: CommentReplyUpdateWithWhereUniqueWithoutCommentInput | CommentReplyUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentReplyUpdateManyWithWhereWithoutCommentInput | CommentReplyUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentReplyScalarWhereInput | CommentReplyScalarWhereInput[]
  }

  export type SentimentAnalysisUpdateManyWithoutCommentNestedInput = {
    create?: XOR<SentimentAnalysisCreateWithoutCommentInput, SentimentAnalysisUncheckedCreateWithoutCommentInput> | SentimentAnalysisCreateWithoutCommentInput[] | SentimentAnalysisUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutCommentInput | SentimentAnalysisCreateOrConnectWithoutCommentInput[]
    upsert?: SentimentAnalysisUpsertWithWhereUniqueWithoutCommentInput | SentimentAnalysisUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: SentimentAnalysisCreateManyCommentInputEnvelope
    set?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    disconnect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    delete?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    update?: SentimentAnalysisUpdateWithWhereUniqueWithoutCommentInput | SentimentAnalysisUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: SentimentAnalysisUpdateManyWithWhereWithoutCommentInput | SentimentAnalysisUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: SentimentAnalysisScalarWhereInput | SentimentAnalysisScalarWhereInput[]
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

  export type CommentReplyUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentReplyCreateWithoutCommentInput, CommentReplyUncheckedCreateWithoutCommentInput> | CommentReplyCreateWithoutCommentInput[] | CommentReplyUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReplyCreateOrConnectWithoutCommentInput | CommentReplyCreateOrConnectWithoutCommentInput[]
    upsert?: CommentReplyUpsertWithWhereUniqueWithoutCommentInput | CommentReplyUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentReplyCreateManyCommentInputEnvelope
    set?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    disconnect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    delete?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    connect?: CommentReplyWhereUniqueInput | CommentReplyWhereUniqueInput[]
    update?: CommentReplyUpdateWithWhereUniqueWithoutCommentInput | CommentReplyUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentReplyUpdateManyWithWhereWithoutCommentInput | CommentReplyUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentReplyScalarWhereInput | CommentReplyScalarWhereInput[]
  }

  export type SentimentAnalysisUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<SentimentAnalysisCreateWithoutCommentInput, SentimentAnalysisUncheckedCreateWithoutCommentInput> | SentimentAnalysisCreateWithoutCommentInput[] | SentimentAnalysisUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: SentimentAnalysisCreateOrConnectWithoutCommentInput | SentimentAnalysisCreateOrConnectWithoutCommentInput[]
    upsert?: SentimentAnalysisUpsertWithWhereUniqueWithoutCommentInput | SentimentAnalysisUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: SentimentAnalysisCreateManyCommentInputEnvelope
    set?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    disconnect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    delete?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    connect?: SentimentAnalysisWhereUniqueInput | SentimentAnalysisWhereUniqueInput[]
    update?: SentimentAnalysisUpdateWithWhereUniqueWithoutCommentInput | SentimentAnalysisUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: SentimentAnalysisUpdateManyWithWhereWithoutCommentInput | SentimentAnalysisUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: SentimentAnalysisScalarWhereInput | SentimentAnalysisScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMcpConvosInput = {
    create?: XOR<UserCreateWithoutMcpConvosInput, UserUncheckedCreateWithoutMcpConvosInput>
    connectOrCreate?: UserCreateOrConnectWithoutMcpConvosInput
    connect?: UserWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutMcpConvosInput = {
    create?: XOR<VideoCreateWithoutMcpConvosInput, VideoUncheckedCreateWithoutMcpConvosInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMcpConvosInput
    connect?: VideoWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMcpConvosNestedInput = {
    create?: XOR<UserCreateWithoutMcpConvosInput, UserUncheckedCreateWithoutMcpConvosInput>
    connectOrCreate?: UserCreateOrConnectWithoutMcpConvosInput
    upsert?: UserUpsertWithoutMcpConvosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMcpConvosInput, UserUpdateWithoutMcpConvosInput>, UserUncheckedUpdateWithoutMcpConvosInput>
  }

  export type VideoUpdateOneRequiredWithoutMcpConvosNestedInput = {
    create?: XOR<VideoCreateWithoutMcpConvosInput, VideoUncheckedCreateWithoutMcpConvosInput>
    connectOrCreate?: VideoCreateOrConnectWithoutMcpConvosInput
    upsert?: VideoUpsertWithoutMcpConvosInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutMcpConvosInput, VideoUpdateWithoutMcpConvosInput>, VideoUncheckedUpdateWithoutMcpConvosInput>
  }

  export type UserCreateNestedOneWithoutCommentRepliesInput = {
    create?: XOR<UserCreateWithoutCommentRepliesInput, UserUncheckedCreateWithoutCommentRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutCommentRepliesInput = {
    create?: XOR<CommentCreateWithoutCommentRepliesInput, CommentUncheckedCreateWithoutCommentRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentRepliesNestedInput = {
    create?: XOR<UserCreateWithoutCommentRepliesInput, UserUncheckedCreateWithoutCommentRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentRepliesInput
    upsert?: UserUpsertWithoutCommentRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentRepliesInput, UserUpdateWithoutCommentRepliesInput>, UserUncheckedUpdateWithoutCommentRepliesInput>
  }

  export type CommentUpdateOneRequiredWithoutCommentRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutCommentRepliesInput, CommentUncheckedCreateWithoutCommentRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentRepliesInput
    upsert?: CommentUpsertWithoutCommentRepliesInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutCommentRepliesInput, CommentUpdateWithoutCommentRepliesInput>, CommentUncheckedUpdateWithoutCommentRepliesInput>
  }

  export type VideoCreateNestedOneWithoutAnalysisJobsInput = {
    create?: XOR<VideoCreateWithoutAnalysisJobsInput, VideoUncheckedCreateWithoutAnalysisJobsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutAnalysisJobsInput
    connect?: VideoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnalysisJobsInput = {
    create?: XOR<UserCreateWithoutAnalysisJobsInput, UserUncheckedCreateWithoutAnalysisJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysisJobsInput
    connect?: UserWhereUniqueInput
  }

  export type VideoUpdateOneRequiredWithoutAnalysisJobsNestedInput = {
    create?: XOR<VideoCreateWithoutAnalysisJobsInput, VideoUncheckedCreateWithoutAnalysisJobsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutAnalysisJobsInput
    upsert?: VideoUpsertWithoutAnalysisJobsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutAnalysisJobsInput, VideoUpdateWithoutAnalysisJobsInput>, VideoUncheckedUpdateWithoutAnalysisJobsInput>
  }

  export type UserUpdateOneRequiredWithoutAnalysisJobsNestedInput = {
    create?: XOR<UserCreateWithoutAnalysisJobsInput, UserUncheckedCreateWithoutAnalysisJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysisJobsInput
    upsert?: UserUpsertWithoutAnalysisJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalysisJobsInput, UserUpdateWithoutAnalysisJobsInput>, UserUncheckedUpdateWithoutAnalysisJobsInput>
  }

  export type CommentCreateNestedOneWithoutSentimentAnalysisInput = {
    create?: XOR<CommentCreateWithoutSentimentAnalysisInput, CommentUncheckedCreateWithoutSentimentAnalysisInput>
    connectOrCreate?: CommentCreateOrConnectWithoutSentimentAnalysisInput
    connect?: CommentWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutSentimentAnalysisInput = {
    create?: XOR<VideoCreateWithoutSentimentAnalysisInput, VideoUncheckedCreateWithoutSentimentAnalysisInput>
    connectOrCreate?: VideoCreateOrConnectWithoutSentimentAnalysisInput
    connect?: VideoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentimentAnalysisInput = {
    create?: XOR<UserCreateWithoutSentimentAnalysisInput, UserUncheckedCreateWithoutSentimentAnalysisInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentimentAnalysisInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentUpdateOneRequiredWithoutSentimentAnalysisNestedInput = {
    create?: XOR<CommentCreateWithoutSentimentAnalysisInput, CommentUncheckedCreateWithoutSentimentAnalysisInput>
    connectOrCreate?: CommentCreateOrConnectWithoutSentimentAnalysisInput
    upsert?: CommentUpsertWithoutSentimentAnalysisInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutSentimentAnalysisInput, CommentUpdateWithoutSentimentAnalysisInput>, CommentUncheckedUpdateWithoutSentimentAnalysisInput>
  }

  export type VideoUpdateOneRequiredWithoutSentimentAnalysisNestedInput = {
    create?: XOR<VideoCreateWithoutSentimentAnalysisInput, VideoUncheckedCreateWithoutSentimentAnalysisInput>
    connectOrCreate?: VideoCreateOrConnectWithoutSentimentAnalysisInput
    upsert?: VideoUpsertWithoutSentimentAnalysisInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutSentimentAnalysisInput, VideoUpdateWithoutSentimentAnalysisInput>, VideoUncheckedUpdateWithoutSentimentAnalysisInput>
  }

  export type UserUpdateOneRequiredWithoutSentimentAnalysisNestedInput = {
    create?: XOR<UserCreateWithoutSentimentAnalysisInput, UserUncheckedCreateWithoutSentimentAnalysisInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentimentAnalysisInput
    upsert?: UserUpsertWithoutSentimentAnalysisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentimentAnalysisInput, UserUpdateWithoutSentimentAnalysisInput>, UserUncheckedUpdateWithoutSentimentAnalysisInput>
  }

  export type VideoCreateNestedOneWithoutVideoSummariesInput = {
    create?: XOR<VideoCreateWithoutVideoSummariesInput, VideoUncheckedCreateWithoutVideoSummariesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutVideoSummariesInput
    connect?: VideoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVideoSummariesInput = {
    create?: XOR<UserCreateWithoutVideoSummariesInput, UserUncheckedCreateWithoutVideoSummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoSummariesInput
    connect?: UserWhereUniqueInput
  }

  export type VideoUpdateOneRequiredWithoutVideoSummariesNestedInput = {
    create?: XOR<VideoCreateWithoutVideoSummariesInput, VideoUncheckedCreateWithoutVideoSummariesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutVideoSummariesInput
    upsert?: VideoUpsertWithoutVideoSummariesInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutVideoSummariesInput, VideoUpdateWithoutVideoSummariesInput>, VideoUncheckedUpdateWithoutVideoSummariesInput>
  }

  export type UserUpdateOneRequiredWithoutVideoSummariesNestedInput = {
    create?: XOR<UserCreateWithoutVideoSummariesInput, UserUncheckedCreateWithoutVideoSummariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoSummariesInput
    upsert?: UserUpsertWithoutVideoSummariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideoSummariesInput, UserUpdateWithoutVideoSummariesInput>, UserUncheckedUpdateWithoutVideoSummariesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VideoCreateWithoutUserInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutUserInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutUserInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoCreateManyUserInputEnvelope = {
    data: VideoCreateManyUserInput | VideoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    commentId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    commentId: string
    videoId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentReplyCreateWithoutUserInput = {
    replyId?: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
    comment: CommentCreateNestedOneWithoutCommentRepliesInput
  }

  export type CommentReplyUncheckedCreateWithoutUserInput = {
    replyId?: string
    commentId: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
  }

  export type CommentReplyCreateOrConnectWithoutUserInput = {
    where: CommentReplyWhereUniqueInput
    create: XOR<CommentReplyCreateWithoutUserInput, CommentReplyUncheckedCreateWithoutUserInput>
  }

  export type CommentReplyCreateManyUserInputEnvelope = {
    data: CommentReplyCreateManyUserInput | CommentReplyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type McpConversationCreateWithoutUserInput = {
    conversationId?: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutMcpConvosInput
  }

  export type McpConversationUncheckedCreateWithoutUserInput = {
    conversationId?: string
    videoId: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
  }

  export type McpConversationCreateOrConnectWithoutUserInput = {
    where: McpConversationWhereUniqueInput
    create: XOR<McpConversationCreateWithoutUserInput, McpConversationUncheckedCreateWithoutUserInput>
  }

  export type McpConversationCreateManyUserInputEnvelope = {
    data: McpConversationCreateManyUserInput | McpConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisJobCreateWithoutUserInput = {
    jobId?: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutAnalysisJobsInput
  }

  export type AnalysisJobUncheckedCreateWithoutUserInput = {
    jobId?: string
    videoId: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnalysisJobCreateOrConnectWithoutUserInput = {
    where: AnalysisJobWhereUniqueInput
    create: XOR<AnalysisJobCreateWithoutUserInput, AnalysisJobUncheckedCreateWithoutUserInput>
  }

  export type AnalysisJobCreateManyUserInputEnvelope = {
    data: AnalysisJobCreateManyUserInput | AnalysisJobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SentimentAnalysisCreateWithoutUserInput = {
    analysisId?: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
    comment: CommentCreateNestedOneWithoutSentimentAnalysisInput
    video: VideoCreateNestedOneWithoutSentimentAnalysisInput
  }

  export type SentimentAnalysisUncheckedCreateWithoutUserInput = {
    analysisId?: string
    commentId: string
    videoId: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
  }

  export type SentimentAnalysisCreateOrConnectWithoutUserInput = {
    where: SentimentAnalysisWhereUniqueInput
    create: XOR<SentimentAnalysisCreateWithoutUserInput, SentimentAnalysisUncheckedCreateWithoutUserInput>
  }

  export type SentimentAnalysisCreateManyUserInputEnvelope = {
    data: SentimentAnalysisCreateManyUserInput | SentimentAnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoAnalysisSummaryCreateWithoutUserInput = {
    summaryId?: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutVideoSummariesInput
  }

  export type VideoAnalysisSummaryUncheckedCreateWithoutUserInput = {
    summaryId?: string
    videoId: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
  }

  export type VideoAnalysisSummaryCreateOrConnectWithoutUserInput = {
    where: VideoAnalysisSummaryWhereUniqueInput
    create: XOR<VideoAnalysisSummaryCreateWithoutUserInput, VideoAnalysisSummaryUncheckedCreateWithoutUserInput>
  }

  export type VideoAnalysisSummaryCreateManyUserInputEnvelope = {
    data: VideoAnalysisSummaryCreateManyUserInput | VideoAnalysisSummaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
  }

  export type VideoUpdateManyWithWhereWithoutUserInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    videoId?: StringFilter<"Video"> | string
    userId?: UuidFilter<"Video"> | string
    title?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    thumbnailUrl?: StringNullableFilter<"Video"> | string | null
    publishedAt?: DateTimeNullableFilter<"Video"> | Date | string | null
    analysisStatus?: StringFilter<"Video"> | string
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
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
    commentId?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    authorName?: StringNullableFilter<"Comment"> | string | null
    authorChannelId?: StringNullableFilter<"Comment"> | string | null
    commentText?: StringFilter<"Comment"> | string
    publishedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    parentCommentId?: StringNullableFilter<"Comment"> | string | null
    isReply?: BoolFilter<"Comment"> | boolean
    replyCount?: IntFilter<"Comment"> | number
    likeCount?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type CommentReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentReplyWhereUniqueInput
    update: XOR<CommentReplyUpdateWithoutUserInput, CommentReplyUncheckedUpdateWithoutUserInput>
    create: XOR<CommentReplyCreateWithoutUserInput, CommentReplyUncheckedCreateWithoutUserInput>
  }

  export type CommentReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentReplyWhereUniqueInput
    data: XOR<CommentReplyUpdateWithoutUserInput, CommentReplyUncheckedUpdateWithoutUserInput>
  }

  export type CommentReplyUpdateManyWithWhereWithoutUserInput = {
    where: CommentReplyScalarWhereInput
    data: XOR<CommentReplyUpdateManyMutationInput, CommentReplyUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentReplyScalarWhereInput = {
    AND?: CommentReplyScalarWhereInput | CommentReplyScalarWhereInput[]
    OR?: CommentReplyScalarWhereInput[]
    NOT?: CommentReplyScalarWhereInput | CommentReplyScalarWhereInput[]
    replyId?: UuidFilter<"CommentReply"> | string
    commentId?: StringFilter<"CommentReply"> | string
    userId?: UuidFilter<"CommentReply"> | string
    replyText?: StringFilter<"CommentReply"> | string
    replyStatus?: StringFilter<"CommentReply"> | string
    youtubeReplyId?: StringNullableFilter<"CommentReply"> | string | null
    createdAt?: DateTimeFilter<"CommentReply"> | Date | string
    postedAt?: DateTimeNullableFilter<"CommentReply"> | Date | string | null
  }

  export type McpConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: McpConversationWhereUniqueInput
    update: XOR<McpConversationUpdateWithoutUserInput, McpConversationUncheckedUpdateWithoutUserInput>
    create: XOR<McpConversationCreateWithoutUserInput, McpConversationUncheckedCreateWithoutUserInput>
  }

  export type McpConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: McpConversationWhereUniqueInput
    data: XOR<McpConversationUpdateWithoutUserInput, McpConversationUncheckedUpdateWithoutUserInput>
  }

  export type McpConversationUpdateManyWithWhereWithoutUserInput = {
    where: McpConversationScalarWhereInput
    data: XOR<McpConversationUpdateManyMutationInput, McpConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type McpConversationScalarWhereInput = {
    AND?: McpConversationScalarWhereInput | McpConversationScalarWhereInput[]
    OR?: McpConversationScalarWhereInput[]
    NOT?: McpConversationScalarWhereInput | McpConversationScalarWhereInput[]
    conversationId?: UuidFilter<"McpConversation"> | string
    videoId?: StringFilter<"McpConversation"> | string
    userId?: UuidFilter<"McpConversation"> | string
    userQuery?: StringFilter<"McpConversation"> | string
    aiResponse?: StringFilter<"McpConversation"> | string
    createdAt?: DateTimeFilter<"McpConversation"> | Date | string
  }

  export type AnalysisJobUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalysisJobWhereUniqueInput
    update: XOR<AnalysisJobUpdateWithoutUserInput, AnalysisJobUncheckedUpdateWithoutUserInput>
    create: XOR<AnalysisJobCreateWithoutUserInput, AnalysisJobUncheckedCreateWithoutUserInput>
  }

  export type AnalysisJobUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalysisJobWhereUniqueInput
    data: XOR<AnalysisJobUpdateWithoutUserInput, AnalysisJobUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisJobUpdateManyWithWhereWithoutUserInput = {
    where: AnalysisJobScalarWhereInput
    data: XOR<AnalysisJobUpdateManyMutationInput, AnalysisJobUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalysisJobScalarWhereInput = {
    AND?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
    OR?: AnalysisJobScalarWhereInput[]
    NOT?: AnalysisJobScalarWhereInput | AnalysisJobScalarWhereInput[]
    jobId?: UuidFilter<"AnalysisJob"> | string
    videoId?: StringFilter<"AnalysisJob"> | string
    userId?: UuidFilter<"AnalysisJob"> | string
    jobStatus?: StringFilter<"AnalysisJob"> | string
    commentsFetched?: IntFilter<"AnalysisJob"> | number
    commentsAnalyzed?: IntFilter<"AnalysisJob"> | number
    currentBatch?: IntFilter<"AnalysisJob"> | number
    startedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"AnalysisJob"> | Date | string | null
    createdAt?: DateTimeFilter<"AnalysisJob"> | Date | string
  }

  export type SentimentAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: SentimentAnalysisWhereUniqueInput
    update: XOR<SentimentAnalysisUpdateWithoutUserInput, SentimentAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<SentimentAnalysisCreateWithoutUserInput, SentimentAnalysisUncheckedCreateWithoutUserInput>
  }

  export type SentimentAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: SentimentAnalysisWhereUniqueInput
    data: XOR<SentimentAnalysisUpdateWithoutUserInput, SentimentAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type SentimentAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: SentimentAnalysisScalarWhereInput
    data: XOR<SentimentAnalysisUpdateManyMutationInput, SentimentAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type SentimentAnalysisScalarWhereInput = {
    AND?: SentimentAnalysisScalarWhereInput | SentimentAnalysisScalarWhereInput[]
    OR?: SentimentAnalysisScalarWhereInput[]
    NOT?: SentimentAnalysisScalarWhereInput | SentimentAnalysisScalarWhereInput[]
    analysisId?: UuidFilter<"SentimentAnalysis"> | string
    commentId?: StringFilter<"SentimentAnalysis"> | string
    userId?: UuidFilter<"SentimentAnalysis"> | string
    videoId?: StringFilter<"SentimentAnalysis"> | string
    sentiment?: StringFilter<"SentimentAnalysis"> | string
    sentimentScore?: FloatNullableFilter<"SentimentAnalysis"> | number | null
    isControversial?: BoolFilter<"SentimentAnalysis"> | boolean
    isHilarious?: BoolFilter<"SentimentAnalysis"> | boolean
    isQuestion?: BoolFilter<"SentimentAnalysis"> | boolean
    isAnswer?: BoolFilter<"SentimentAnalysis"> | boolean
    isSuggestion?: BoolFilter<"SentimentAnalysis"> | boolean
    analyzedAt?: DateTimeFilter<"SentimentAnalysis"> | Date | string
    replyCount?: IntFilter<"SentimentAnalysis"> | number
    likeCount?: IntFilter<"SentimentAnalysis"> | number
  }

  export type VideoAnalysisSummaryUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoAnalysisSummaryWhereUniqueInput
    update: XOR<VideoAnalysisSummaryUpdateWithoutUserInput, VideoAnalysisSummaryUncheckedUpdateWithoutUserInput>
    create: XOR<VideoAnalysisSummaryCreateWithoutUserInput, VideoAnalysisSummaryUncheckedCreateWithoutUserInput>
  }

  export type VideoAnalysisSummaryUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoAnalysisSummaryWhereUniqueInput
    data: XOR<VideoAnalysisSummaryUpdateWithoutUserInput, VideoAnalysisSummaryUncheckedUpdateWithoutUserInput>
  }

  export type VideoAnalysisSummaryUpdateManyWithWhereWithoutUserInput = {
    where: VideoAnalysisSummaryScalarWhereInput
    data: XOR<VideoAnalysisSummaryUpdateManyMutationInput, VideoAnalysisSummaryUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoAnalysisSummaryScalarWhereInput = {
    AND?: VideoAnalysisSummaryScalarWhereInput | VideoAnalysisSummaryScalarWhereInput[]
    OR?: VideoAnalysisSummaryScalarWhereInput[]
    NOT?: VideoAnalysisSummaryScalarWhereInput | VideoAnalysisSummaryScalarWhereInput[]
    summaryId?: UuidFilter<"VideoAnalysisSummary"> | string
    videoId?: StringFilter<"VideoAnalysisSummary"> | string
    userId?: UuidFilter<"VideoAnalysisSummary"> | string
    totalComments?: IntFilter<"VideoAnalysisSummary"> | number
    positiveCount?: IntFilter<"VideoAnalysisSummary"> | number
    negativeCount?: IntFilter<"VideoAnalysisSummary"> | number
    neutralCount?: IntFilter<"VideoAnalysisSummary"> | number
    controversialCount?: IntFilter<"VideoAnalysisSummary"> | number
    hilariousCount?: IntFilter<"VideoAnalysisSummary"> | number
    questionCount?: IntFilter<"VideoAnalysisSummary"> | number
    answerCount?: IntFilter<"VideoAnalysisSummary"> | number
    suggestionCount?: IntFilter<"VideoAnalysisSummary"> | number
    summaryText?: StringNullableFilter<"VideoAnalysisSummary"> | string | null
    createdAt?: DateTimeFilter<"VideoAnalysisSummary"> | Date | string
  }

  export type UserCreateWithoutVideosInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideosInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
  }

  export type CommentCreateWithoutVideoInput = {
    commentId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutVideoInput = {
    commentId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutVideoInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentCreateManyVideoInputEnvelope = {
    data: CommentCreateManyVideoInput | CommentCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type McpConversationCreateWithoutVideoInput = {
    conversationId?: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMcpConvosInput
  }

  export type McpConversationUncheckedCreateWithoutVideoInput = {
    conversationId?: string
    userId: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
  }

  export type McpConversationCreateOrConnectWithoutVideoInput = {
    where: McpConversationWhereUniqueInput
    create: XOR<McpConversationCreateWithoutVideoInput, McpConversationUncheckedCreateWithoutVideoInput>
  }

  export type McpConversationCreateManyVideoInputEnvelope = {
    data: McpConversationCreateManyVideoInput | McpConversationCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisJobCreateWithoutVideoInput = {
    jobId?: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAnalysisJobsInput
  }

  export type AnalysisJobUncheckedCreateWithoutVideoInput = {
    jobId?: string
    userId: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AnalysisJobCreateOrConnectWithoutVideoInput = {
    where: AnalysisJobWhereUniqueInput
    create: XOR<AnalysisJobCreateWithoutVideoInput, AnalysisJobUncheckedCreateWithoutVideoInput>
  }

  export type AnalysisJobCreateManyVideoInputEnvelope = {
    data: AnalysisJobCreateManyVideoInput | AnalysisJobCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type SentimentAnalysisCreateWithoutVideoInput = {
    analysisId?: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
    comment: CommentCreateNestedOneWithoutSentimentAnalysisInput
    user: UserCreateNestedOneWithoutSentimentAnalysisInput
  }

  export type SentimentAnalysisUncheckedCreateWithoutVideoInput = {
    analysisId?: string
    commentId: string
    userId: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
  }

  export type SentimentAnalysisCreateOrConnectWithoutVideoInput = {
    where: SentimentAnalysisWhereUniqueInput
    create: XOR<SentimentAnalysisCreateWithoutVideoInput, SentimentAnalysisUncheckedCreateWithoutVideoInput>
  }

  export type SentimentAnalysisCreateManyVideoInputEnvelope = {
    data: SentimentAnalysisCreateManyVideoInput | SentimentAnalysisCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type VideoAnalysisSummaryCreateWithoutVideoInput = {
    summaryId?: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVideoSummariesInput
  }

  export type VideoAnalysisSummaryUncheckedCreateWithoutVideoInput = {
    summaryId?: string
    userId: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
  }

  export type VideoAnalysisSummaryCreateOrConnectWithoutVideoInput = {
    where: VideoAnalysisSummaryWhereUniqueInput
    create: XOR<VideoAnalysisSummaryCreateWithoutVideoInput, VideoAnalysisSummaryUncheckedCreateWithoutVideoInput>
  }

  export type VideoAnalysisSummaryCreateManyVideoInputEnvelope = {
    data: VideoAnalysisSummaryCreateManyVideoInput | VideoAnalysisSummaryCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVideosInput = {
    update: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
  }

  export type UserUpdateWithoutVideosInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideosInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
  }

  export type CommentUpdateManyWithWhereWithoutVideoInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutVideoInput>
  }

  export type McpConversationUpsertWithWhereUniqueWithoutVideoInput = {
    where: McpConversationWhereUniqueInput
    update: XOR<McpConversationUpdateWithoutVideoInput, McpConversationUncheckedUpdateWithoutVideoInput>
    create: XOR<McpConversationCreateWithoutVideoInput, McpConversationUncheckedCreateWithoutVideoInput>
  }

  export type McpConversationUpdateWithWhereUniqueWithoutVideoInput = {
    where: McpConversationWhereUniqueInput
    data: XOR<McpConversationUpdateWithoutVideoInput, McpConversationUncheckedUpdateWithoutVideoInput>
  }

  export type McpConversationUpdateManyWithWhereWithoutVideoInput = {
    where: McpConversationScalarWhereInput
    data: XOR<McpConversationUpdateManyMutationInput, McpConversationUncheckedUpdateManyWithoutVideoInput>
  }

  export type AnalysisJobUpsertWithWhereUniqueWithoutVideoInput = {
    where: AnalysisJobWhereUniqueInput
    update: XOR<AnalysisJobUpdateWithoutVideoInput, AnalysisJobUncheckedUpdateWithoutVideoInput>
    create: XOR<AnalysisJobCreateWithoutVideoInput, AnalysisJobUncheckedCreateWithoutVideoInput>
  }

  export type AnalysisJobUpdateWithWhereUniqueWithoutVideoInput = {
    where: AnalysisJobWhereUniqueInput
    data: XOR<AnalysisJobUpdateWithoutVideoInput, AnalysisJobUncheckedUpdateWithoutVideoInput>
  }

  export type AnalysisJobUpdateManyWithWhereWithoutVideoInput = {
    where: AnalysisJobScalarWhereInput
    data: XOR<AnalysisJobUpdateManyMutationInput, AnalysisJobUncheckedUpdateManyWithoutVideoInput>
  }

  export type SentimentAnalysisUpsertWithWhereUniqueWithoutVideoInput = {
    where: SentimentAnalysisWhereUniqueInput
    update: XOR<SentimentAnalysisUpdateWithoutVideoInput, SentimentAnalysisUncheckedUpdateWithoutVideoInput>
    create: XOR<SentimentAnalysisCreateWithoutVideoInput, SentimentAnalysisUncheckedCreateWithoutVideoInput>
  }

  export type SentimentAnalysisUpdateWithWhereUniqueWithoutVideoInput = {
    where: SentimentAnalysisWhereUniqueInput
    data: XOR<SentimentAnalysisUpdateWithoutVideoInput, SentimentAnalysisUncheckedUpdateWithoutVideoInput>
  }

  export type SentimentAnalysisUpdateManyWithWhereWithoutVideoInput = {
    where: SentimentAnalysisScalarWhereInput
    data: XOR<SentimentAnalysisUpdateManyMutationInput, SentimentAnalysisUncheckedUpdateManyWithoutVideoInput>
  }

  export type VideoAnalysisSummaryUpsertWithWhereUniqueWithoutVideoInput = {
    where: VideoAnalysisSummaryWhereUniqueInput
    update: XOR<VideoAnalysisSummaryUpdateWithoutVideoInput, VideoAnalysisSummaryUncheckedUpdateWithoutVideoInput>
    create: XOR<VideoAnalysisSummaryCreateWithoutVideoInput, VideoAnalysisSummaryUncheckedCreateWithoutVideoInput>
  }

  export type VideoAnalysisSummaryUpdateWithWhereUniqueWithoutVideoInput = {
    where: VideoAnalysisSummaryWhereUniqueInput
    data: XOR<VideoAnalysisSummaryUpdateWithoutVideoInput, VideoAnalysisSummaryUncheckedUpdateWithoutVideoInput>
  }

  export type VideoAnalysisSummaryUpdateManyWithWhereWithoutVideoInput = {
    where: VideoAnalysisSummaryScalarWhereInput
    data: XOR<VideoAnalysisSummaryUpdateManyMutationInput, VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoInput>
  }

  export type VideoCreateWithoutCommentsInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    mcpConvos?: McpConversationCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutCommentsInput = {
    videoId: string
    userId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutCommentsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    commentId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutRepliesInput
    commentReplies?: CommentReplyCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    commentId: string
    videoId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentCommentInput = {
    commentId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentCommentInput = {
    commentId: string
    videoId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutCommentInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentCommentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentCommentInput, CommentUncheckedCreateWithoutParentCommentInput>
  }

  export type CommentCreateManyParentCommentInputEnvelope = {
    data: CommentCreateManyParentCommentInput | CommentCreateManyParentCommentInput[]
    skipDuplicates?: boolean
  }

  export type CommentReplyCreateWithoutCommentInput = {
    replyId?: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommentRepliesInput
  }

  export type CommentReplyUncheckedCreateWithoutCommentInput = {
    replyId?: string
    userId: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
  }

  export type CommentReplyCreateOrConnectWithoutCommentInput = {
    where: CommentReplyWhereUniqueInput
    create: XOR<CommentReplyCreateWithoutCommentInput, CommentReplyUncheckedCreateWithoutCommentInput>
  }

  export type CommentReplyCreateManyCommentInputEnvelope = {
    data: CommentReplyCreateManyCommentInput | CommentReplyCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type SentimentAnalysisCreateWithoutCommentInput = {
    analysisId?: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
    video: VideoCreateNestedOneWithoutSentimentAnalysisInput
    user: UserCreateNestedOneWithoutSentimentAnalysisInput
  }

  export type SentimentAnalysisUncheckedCreateWithoutCommentInput = {
    analysisId?: string
    userId: string
    videoId: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
  }

  export type SentimentAnalysisCreateOrConnectWithoutCommentInput = {
    where: SentimentAnalysisWhereUniqueInput
    create: XOR<SentimentAnalysisCreateWithoutCommentInput, SentimentAnalysisUncheckedCreateWithoutCommentInput>
  }

  export type SentimentAnalysisCreateManyCommentInputEnvelope = {
    data: SentimentAnalysisCreateManyCommentInput | SentimentAnalysisCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithoutCommentsInput = {
    update: XOR<VideoUpdateWithoutCommentsInput, VideoUncheckedUpdateWithoutCommentsInput>
    create: XOR<VideoCreateWithoutCommentsInput, VideoUncheckedCreateWithoutCommentsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutCommentsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutCommentsInput, VideoUncheckedUpdateWithoutCommentsInput>
  }

  export type VideoUpdateWithoutCommentsInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutCommentsInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoNestedInput
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
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutRepliesNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutCommentNestedInput
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

  export type CommentReplyUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentReplyWhereUniqueInput
    update: XOR<CommentReplyUpdateWithoutCommentInput, CommentReplyUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentReplyCreateWithoutCommentInput, CommentReplyUncheckedCreateWithoutCommentInput>
  }

  export type CommentReplyUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentReplyWhereUniqueInput
    data: XOR<CommentReplyUpdateWithoutCommentInput, CommentReplyUncheckedUpdateWithoutCommentInput>
  }

  export type CommentReplyUpdateManyWithWhereWithoutCommentInput = {
    where: CommentReplyScalarWhereInput
    data: XOR<CommentReplyUpdateManyMutationInput, CommentReplyUncheckedUpdateManyWithoutCommentInput>
  }

  export type SentimentAnalysisUpsertWithWhereUniqueWithoutCommentInput = {
    where: SentimentAnalysisWhereUniqueInput
    update: XOR<SentimentAnalysisUpdateWithoutCommentInput, SentimentAnalysisUncheckedUpdateWithoutCommentInput>
    create: XOR<SentimentAnalysisCreateWithoutCommentInput, SentimentAnalysisUncheckedCreateWithoutCommentInput>
  }

  export type SentimentAnalysisUpdateWithWhereUniqueWithoutCommentInput = {
    where: SentimentAnalysisWhereUniqueInput
    data: XOR<SentimentAnalysisUpdateWithoutCommentInput, SentimentAnalysisUncheckedUpdateWithoutCommentInput>
  }

  export type SentimentAnalysisUpdateManyWithWhereWithoutCommentInput = {
    where: SentimentAnalysisScalarWhereInput
    data: XOR<SentimentAnalysisUpdateManyMutationInput, SentimentAnalysisUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutMcpConvosInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMcpConvosInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMcpConvosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMcpConvosInput, UserUncheckedCreateWithoutMcpConvosInput>
  }

  export type VideoCreateWithoutMcpConvosInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutMcpConvosInput = {
    videoId: string
    userId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutMcpConvosInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutMcpConvosInput, VideoUncheckedCreateWithoutMcpConvosInput>
  }

  export type UserUpsertWithoutMcpConvosInput = {
    update: XOR<UserUpdateWithoutMcpConvosInput, UserUncheckedUpdateWithoutMcpConvosInput>
    create: XOR<UserCreateWithoutMcpConvosInput, UserUncheckedCreateWithoutMcpConvosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMcpConvosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMcpConvosInput, UserUncheckedUpdateWithoutMcpConvosInput>
  }

  export type UserUpdateWithoutMcpConvosInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMcpConvosInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoUpsertWithoutMcpConvosInput = {
    update: XOR<VideoUpdateWithoutMcpConvosInput, VideoUncheckedUpdateWithoutMcpConvosInput>
    create: XOR<VideoCreateWithoutMcpConvosInput, VideoUncheckedCreateWithoutMcpConvosInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutMcpConvosInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutMcpConvosInput, VideoUncheckedUpdateWithoutMcpConvosInput>
  }

  export type VideoUpdateWithoutMcpConvosInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutMcpConvosInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserCreateWithoutCommentRepliesInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentRepliesInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentRepliesInput, UserUncheckedCreateWithoutCommentRepliesInput>
  }

  export type CommentCreateWithoutCommentRepliesInput = {
    commentId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentCommentInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutCommentRepliesInput = {
    commentId: string
    videoId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutCommentRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentRepliesInput, CommentUncheckedCreateWithoutCommentRepliesInput>
  }

  export type UserUpsertWithoutCommentRepliesInput = {
    update: XOR<UserUpdateWithoutCommentRepliesInput, UserUncheckedUpdateWithoutCommentRepliesInput>
    create: XOR<UserCreateWithoutCommentRepliesInput, UserUncheckedCreateWithoutCommentRepliesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentRepliesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentRepliesInput, UserUncheckedUpdateWithoutCommentRepliesInput>
  }

  export type UserUpdateWithoutCommentRepliesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentRepliesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutCommentRepliesInput = {
    update: XOR<CommentUpdateWithoutCommentRepliesInput, CommentUncheckedUpdateWithoutCommentRepliesInput>
    create: XOR<CommentCreateWithoutCommentRepliesInput, CommentUncheckedCreateWithoutCommentRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutCommentRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutCommentRepliesInput, CommentUncheckedUpdateWithoutCommentRepliesInput>
  }

  export type CommentUpdateWithoutCommentRepliesInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutCommentRepliesInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type VideoCreateWithoutAnalysisJobsInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutAnalysisJobsInput = {
    videoId: string
    userId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutAnalysisJobsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutAnalysisJobsInput, VideoUncheckedCreateWithoutAnalysisJobsInput>
  }

  export type UserCreateWithoutAnalysisJobsInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalysisJobsInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalysisJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalysisJobsInput, UserUncheckedCreateWithoutAnalysisJobsInput>
  }

  export type VideoUpsertWithoutAnalysisJobsInput = {
    update: XOR<VideoUpdateWithoutAnalysisJobsInput, VideoUncheckedUpdateWithoutAnalysisJobsInput>
    create: XOR<VideoCreateWithoutAnalysisJobsInput, VideoUncheckedCreateWithoutAnalysisJobsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutAnalysisJobsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutAnalysisJobsInput, VideoUncheckedUpdateWithoutAnalysisJobsInput>
  }

  export type VideoUpdateWithoutAnalysisJobsInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutAnalysisJobsInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserUpsertWithoutAnalysisJobsInput = {
    update: XOR<UserUpdateWithoutAnalysisJobsInput, UserUncheckedUpdateWithoutAnalysisJobsInput>
    create: XOR<UserCreateWithoutAnalysisJobsInput, UserUncheckedCreateWithoutAnalysisJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalysisJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalysisJobsInput, UserUncheckedUpdateWithoutAnalysisJobsInput>
  }

  export type UserUpdateWithoutAnalysisJobsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalysisJobsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentCreateWithoutSentimentAnalysisInput = {
    commentId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parentComment?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutSentimentAnalysisInput = {
    commentId: string
    videoId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentCommentInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutSentimentAnalysisInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutSentimentAnalysisInput, CommentUncheckedCreateWithoutSentimentAnalysisInput>
  }

  export type VideoCreateWithoutSentimentAnalysisInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutSentimentAnalysisInput = {
    videoId: string
    userId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutVideoInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutSentimentAnalysisInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutSentimentAnalysisInput, VideoUncheckedCreateWithoutSentimentAnalysisInput>
  }

  export type UserCreateWithoutSentimentAnalysisInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentimentAnalysisInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutUserInput
    videoSummaries?: VideoAnalysisSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentimentAnalysisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentimentAnalysisInput, UserUncheckedCreateWithoutSentimentAnalysisInput>
  }

  export type CommentUpsertWithoutSentimentAnalysisInput = {
    update: XOR<CommentUpdateWithoutSentimentAnalysisInput, CommentUncheckedUpdateWithoutSentimentAnalysisInput>
    create: XOR<CommentCreateWithoutSentimentAnalysisInput, CommentUncheckedCreateWithoutSentimentAnalysisInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutSentimentAnalysisInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutSentimentAnalysisInput, CommentUncheckedUpdateWithoutSentimentAnalysisInput>
  }

  export type CommentUpdateWithoutSentimentAnalysisInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutSentimentAnalysisInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type VideoUpsertWithoutSentimentAnalysisInput = {
    update: XOR<VideoUpdateWithoutSentimentAnalysisInput, VideoUncheckedUpdateWithoutSentimentAnalysisInput>
    create: XOR<VideoCreateWithoutSentimentAnalysisInput, VideoUncheckedCreateWithoutSentimentAnalysisInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutSentimentAnalysisInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutSentimentAnalysisInput, VideoUncheckedUpdateWithoutSentimentAnalysisInput>
  }

  export type VideoUpdateWithoutSentimentAnalysisInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutSentimentAnalysisInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserUpsertWithoutSentimentAnalysisInput = {
    update: XOR<UserUpdateWithoutSentimentAnalysisInput, UserUncheckedUpdateWithoutSentimentAnalysisInput>
    create: XOR<UserCreateWithoutSentimentAnalysisInput, UserUncheckedCreateWithoutSentimentAnalysisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentimentAnalysisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentimentAnalysisInput, UserUncheckedUpdateWithoutSentimentAnalysisInput>
  }

  export type UserUpdateWithoutSentimentAnalysisInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentimentAnalysisInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutUserNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoCreateWithoutVideoSummariesInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    comments?: CommentCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutVideoSummariesInput = {
    videoId: string
    userId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutVideoInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutVideoInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutVideoSummariesInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutVideoSummariesInput, VideoUncheckedCreateWithoutVideoSummariesInput>
  }

  export type UserCreateWithoutVideoSummariesInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideoSummariesInput = {
    userId?: string
    username: string
    email: string
    channelId?: string | null
    channelName?: string | null
    channelThumbnailUrl?: string | null
    subscriberCount?: number
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    commentReplies?: CommentReplyUncheckedCreateNestedManyWithoutUserInput
    mcpConvos?: McpConversationUncheckedCreateNestedManyWithoutUserInput
    analysisJobs?: AnalysisJobUncheckedCreateNestedManyWithoutUserInput
    sentimentAnalysis?: SentimentAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideoSummariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideoSummariesInput, UserUncheckedCreateWithoutVideoSummariesInput>
  }

  export type VideoUpsertWithoutVideoSummariesInput = {
    update: XOR<VideoUpdateWithoutVideoSummariesInput, VideoUncheckedUpdateWithoutVideoSummariesInput>
    create: XOR<VideoCreateWithoutVideoSummariesInput, VideoUncheckedCreateWithoutVideoSummariesInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutVideoSummariesInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutVideoSummariesInput, VideoUncheckedUpdateWithoutVideoSummariesInput>
  }

  export type VideoUpdateWithoutVideoSummariesInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutVideoSummariesInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type UserUpsertWithoutVideoSummariesInput = {
    update: XOR<UserUpdateWithoutVideoSummariesInput, UserUncheckedUpdateWithoutVideoSummariesInput>
    create: XOR<UserCreateWithoutVideoSummariesInput, UserUncheckedCreateWithoutVideoSummariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideoSummariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideoSummariesInput, UserUncheckedUpdateWithoutVideoSummariesInput>
  }

  export type UserUpdateWithoutVideoSummariesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideoSummariesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    channelId?: NullableStringFieldUpdateOperationsInput | string | null
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    channelThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subscriberCount?: IntFieldUpdateOperationsInput | number
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutUserNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutUserNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutUserNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VideoCreateManyUserInput = {
    videoId: string
    title: string
    description?: string | null
    thumbnailUrl?: string | null
    publishedAt?: Date | string | null
    analysisStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    commentId: string
    videoId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
  }

  export type CommentReplyCreateManyUserInput = {
    replyId?: string
    commentId: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
  }

  export type McpConversationCreateManyUserInput = {
    conversationId?: string
    videoId: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
  }

  export type AnalysisJobCreateManyUserInput = {
    jobId?: string
    videoId: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SentimentAnalysisCreateManyUserInput = {
    analysisId?: string
    commentId: string
    videoId: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
  }

  export type VideoAnalysisSummaryCreateManyUserInput = {
    summaryId?: string
    videoId: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
  }

  export type VideoUpdateWithoutUserInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutUserInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
    mcpConvos?: McpConversationUncheckedUpdateManyWithoutVideoNestedInput
    analysisJobs?: AnalysisJobUncheckedUpdateManyWithoutVideoNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutVideoNestedInput
    videoSummaries?: VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutUserInput = {
    videoId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysisStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReplyUpdateWithoutUserInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comment?: CommentUpdateOneRequiredWithoutCommentRepliesNestedInput
  }

  export type CommentReplyUncheckedUpdateWithoutUserInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentReplyUncheckedUpdateManyWithoutUserInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type McpConversationUpdateWithoutUserInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutMcpConvosNestedInput
  }

  export type McpConversationUncheckedUpdateWithoutUserInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McpConversationUncheckedUpdateManyWithoutUserInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobUpdateWithoutUserInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutAnalysisJobsNestedInput
  }

  export type AnalysisJobUncheckedUpdateWithoutUserInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobUncheckedUpdateManyWithoutUserInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentAnalysisUpdateWithoutUserInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    comment?: CommentUpdateOneRequiredWithoutSentimentAnalysisNestedInput
    video?: VideoUpdateOneRequiredWithoutSentimentAnalysisNestedInput
  }

  export type SentimentAnalysisUncheckedUpdateWithoutUserInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentAnalysisUncheckedUpdateManyWithoutUserInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type VideoAnalysisSummaryUpdateWithoutUserInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutVideoSummariesNestedInput
  }

  export type VideoAnalysisSummaryUncheckedUpdateWithoutUserInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoAnalysisSummaryUncheckedUpdateManyWithoutUserInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyVideoInput = {
    commentId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    parentCommentId?: string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
  }

  export type McpConversationCreateManyVideoInput = {
    conversationId?: string
    userId: string
    userQuery: string
    aiResponse: string
    createdAt?: Date | string
  }

  export type AnalysisJobCreateManyVideoInput = {
    jobId?: string
    userId: string
    jobStatus?: string
    commentsFetched?: number
    commentsAnalyzed?: number
    currentBatch?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SentimentAnalysisCreateManyVideoInput = {
    analysisId?: string
    commentId: string
    userId: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
  }

  export type VideoAnalysisSummaryCreateManyVideoInput = {
    summaryId?: string
    userId: string
    totalComments?: number
    positiveCount?: number
    negativeCount?: number
    neutralCount?: number
    controversialCount?: number
    hilariousCount?: number
    questionCount?: number
    answerCount?: number
    suggestionCount?: number
    summaryText?: string | null
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutVideoInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutVideoInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutVideoInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McpConversationUpdateWithoutVideoInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMcpConvosNestedInput
  }

  export type McpConversationUncheckedUpdateWithoutVideoInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type McpConversationUncheckedUpdateManyWithoutVideoInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobUpdateWithoutVideoInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnalysisJobsNestedInput
  }

  export type AnalysisJobUncheckedUpdateWithoutVideoInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisJobUncheckedUpdateManyWithoutVideoInput = {
    jobId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobStatus?: StringFieldUpdateOperationsInput | string
    commentsFetched?: IntFieldUpdateOperationsInput | number
    commentsAnalyzed?: IntFieldUpdateOperationsInput | number
    currentBatch?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentimentAnalysisUpdateWithoutVideoInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    comment?: CommentUpdateOneRequiredWithoutSentimentAnalysisNestedInput
    user?: UserUpdateOneRequiredWithoutSentimentAnalysisNestedInput
  }

  export type SentimentAnalysisUncheckedUpdateWithoutVideoInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentAnalysisUncheckedUpdateManyWithoutVideoInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type VideoAnalysisSummaryUpdateWithoutVideoInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideoSummariesNestedInput
  }

  export type VideoAnalysisSummaryUncheckedUpdateWithoutVideoInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoAnalysisSummaryUncheckedUpdateManyWithoutVideoInput = {
    summaryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    totalComments?: IntFieldUpdateOperationsInput | number
    positiveCount?: IntFieldUpdateOperationsInput | number
    negativeCount?: IntFieldUpdateOperationsInput | number
    neutralCount?: IntFieldUpdateOperationsInput | number
    controversialCount?: IntFieldUpdateOperationsInput | number
    hilariousCount?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    answerCount?: IntFieldUpdateOperationsInput | number
    suggestionCount?: IntFieldUpdateOperationsInput | number
    summaryText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentCommentInput = {
    commentId: string
    videoId: string
    userId: string
    authorName?: string | null
    authorChannelId?: string | null
    commentText: string
    publishedAt?: Date | string | null
    isReply?: boolean
    replyCount?: number
    likeCount?: number
    createdAt?: Date | string
  }

  export type CommentReplyCreateManyCommentInput = {
    replyId?: string
    userId: string
    replyText: string
    replyStatus?: string
    youtubeReplyId?: string | null
    createdAt?: Date | string
    postedAt?: Date | string | null
  }

  export type SentimentAnalysisCreateManyCommentInput = {
    analysisId?: string
    userId: string
    videoId: string
    sentiment: string
    sentimentScore?: number | null
    isControversial?: boolean
    isHilarious?: boolean
    isQuestion?: boolean
    isAnswer?: boolean
    isSuggestion?: boolean
    analyzedAt?: Date | string
    replyCount?: number
    likeCount?: number
  }

  export type CommentUpdateWithoutParentCommentInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentCommentInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentCommentNestedInput
    commentReplies?: CommentReplyUncheckedUpdateManyWithoutCommentNestedInput
    sentimentAnalysis?: SentimentAnalysisUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentCommentInput = {
    commentId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    authorChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    commentText?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReplyUpdateWithoutCommentInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommentRepliesNestedInput
  }

  export type CommentReplyUncheckedUpdateWithoutCommentInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentReplyUncheckedUpdateManyWithoutCommentInput = {
    replyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replyText?: StringFieldUpdateOperationsInput | string
    replyStatus?: StringFieldUpdateOperationsInput | string
    youtubeReplyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SentimentAnalysisUpdateWithoutCommentInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    video?: VideoUpdateOneRequiredWithoutSentimentAnalysisNestedInput
    user?: UserUpdateOneRequiredWithoutSentimentAnalysisNestedInput
  }

  export type SentimentAnalysisUncheckedUpdateWithoutCommentInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type SentimentAnalysisUncheckedUpdateManyWithoutCommentInput = {
    analysisId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    sentiment?: StringFieldUpdateOperationsInput | string
    sentimentScore?: NullableFloatFieldUpdateOperationsInput | number | null
    isControversial?: BoolFieldUpdateOperationsInput | boolean
    isHilarious?: BoolFieldUpdateOperationsInput | boolean
    isQuestion?: BoolFieldUpdateOperationsInput | boolean
    isAnswer?: BoolFieldUpdateOperationsInput | boolean
    isSuggestion?: BoolFieldUpdateOperationsInput | boolean
    analyzedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
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