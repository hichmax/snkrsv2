
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model ProductModel
 * 
 */
export type ProductModel = $Result.DefaultSelection<Prisma.$ProductModelPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductSize
 * 
 */
export type ProductSize = $Result.DefaultSelection<Prisma.$ProductSizePayload>
/**
 * Model OrderRequest
 * 
 */
export type OrderRequest = $Result.DefaultSelection<Prisma.$OrderRequestPayload>
/**
 * Model OrderRequestItem
 * 
 */
export type OrderRequestItem = $Result.DefaultSelection<Prisma.$OrderRequestItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  HIDDEN: 'HIDDEN'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const StorageProvider: {
  CLOUDINARY: 'CLOUDINARY',
  CLOUDFLARE_R2: 'CLOUDFLARE_R2',
  SUPABASE: 'SUPABASE',
  EXTERNAL: 'EXTERNAL'
};

export type StorageProvider = (typeof StorageProvider)[keyof typeof StorageProvider]


export const OrderStatus: {
  NEW: 'NEW',
  REVIEWING: 'REVIEWING',
  CONTACTED: 'CONTACTED',
  CLOSED: 'CLOSED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type StorageProvider = $Enums.StorageProvider

export const StorageProvider: typeof $Enums.StorageProvider

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productModel`: Exposes CRUD operations for the **ProductModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductModels
    * const productModels = await prisma.productModel.findMany()
    * ```
    */
  get productModel(): Prisma.ProductModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSize`: Exposes CRUD operations for the **ProductSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSizes
    * const productSizes = await prisma.productSize.findMany()
    * ```
    */
  get productSize(): Prisma.ProductSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderRequest`: Exposes CRUD operations for the **OrderRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderRequests
    * const orderRequests = await prisma.orderRequest.findMany()
    * ```
    */
  get orderRequest(): Prisma.OrderRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderRequestItem`: Exposes CRUD operations for the **OrderRequestItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderRequestItems
    * const orderRequestItems = await prisma.orderRequestItem.findMany()
    * ```
    */
  get orderRequestItem(): Prisma.OrderRequestItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Category: 'Category',
    Brand: 'Brand',
    ProductModel: 'ProductModel',
    Product: 'Product',
    ProductSize: 'ProductSize',
    OrderRequest: 'OrderRequest',
    OrderRequestItem: 'OrderRequestItem'
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
      modelProps: "category" | "brand" | "productModel" | "product" | "productSize" | "orderRequest" | "orderRequestItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      ProductModel: {
        payload: Prisma.$ProductModelPayload<ExtArgs>
        fields: Prisma.ProductModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>
          }
          findFirst: {
            args: Prisma.ProductModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>
          }
          findMany: {
            args: Prisma.ProductModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>[]
          }
          create: {
            args: Prisma.ProductModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>
          }
          createMany: {
            args: Prisma.ProductModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>[]
          }
          delete: {
            args: Prisma.ProductModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>
          }
          update: {
            args: Prisma.ProductModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>
          }
          deleteMany: {
            args: Prisma.ProductModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>[]
          }
          upsert: {
            args: Prisma.ProductModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductModelPayload>
          }
          aggregate: {
            args: Prisma.ProductModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductModel>
          }
          groupBy: {
            args: Prisma.ProductModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductModelCountArgs<ExtArgs>
            result: $Utils.Optional<ProductModelCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductSize: {
        payload: Prisma.$ProductSizePayload<ExtArgs>
        fields: Prisma.ProductSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findFirst: {
            args: Prisma.ProductSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findMany: {
            args: Prisma.ProductSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          create: {
            args: Prisma.ProductSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          createMany: {
            args: Prisma.ProductSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          delete: {
            args: Prisma.ProductSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          update: {
            args: Prisma.ProductSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          deleteMany: {
            args: Prisma.ProductSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          upsert: {
            args: Prisma.ProductSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          aggregate: {
            args: Prisma.ProductSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSize>
          }
          groupBy: {
            args: Prisma.ProductSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSizeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeCountAggregateOutputType> | number
          }
        }
      }
      OrderRequest: {
        payload: Prisma.$OrderRequestPayload<ExtArgs>
        fields: Prisma.OrderRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>
          }
          findFirst: {
            args: Prisma.OrderRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>
          }
          findMany: {
            args: Prisma.OrderRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>[]
          }
          create: {
            args: Prisma.OrderRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>
          }
          createMany: {
            args: Prisma.OrderRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>[]
          }
          delete: {
            args: Prisma.OrderRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>
          }
          update: {
            args: Prisma.OrderRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>
          }
          deleteMany: {
            args: Prisma.OrderRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>[]
          }
          upsert: {
            args: Prisma.OrderRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestPayload>
          }
          aggregate: {
            args: Prisma.OrderRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderRequest>
          }
          groupBy: {
            args: Prisma.OrderRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderRequestCountArgs<ExtArgs>
            result: $Utils.Optional<OrderRequestCountAggregateOutputType> | number
          }
        }
      }
      OrderRequestItem: {
        payload: Prisma.$OrderRequestItemPayload<ExtArgs>
        fields: Prisma.OrderRequestItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderRequestItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderRequestItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>
          }
          findFirst: {
            args: Prisma.OrderRequestItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderRequestItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>
          }
          findMany: {
            args: Prisma.OrderRequestItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>[]
          }
          create: {
            args: Prisma.OrderRequestItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>
          }
          createMany: {
            args: Prisma.OrderRequestItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderRequestItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>[]
          }
          delete: {
            args: Prisma.OrderRequestItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>
          }
          update: {
            args: Prisma.OrderRequestItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderRequestItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderRequestItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderRequestItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderRequestItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderRequestItemPayload>
          }
          aggregate: {
            args: Prisma.OrderRequestItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderRequestItem>
          }
          groupBy: {
            args: Prisma.OrderRequestItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderRequestItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderRequestItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderRequestItemCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    category?: CategoryOmit
    brand?: BrandOmit
    productModel?: ProductModelOmit
    product?: ProductOmit
    productSize?: ProductSizeOmit
    orderRequest?: OrderRequestOmit
    orderRequestItem?: OrderRequestItemOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    brands: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | CategoryCountOutputTypeCountBrandsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBrandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    models: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | BrandCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductModelWhereInput
  }


  /**
   * Count Type ProductModelCountOutputType
   */

  export type ProductModelCountOutputType = {
    products: number
  }

  export type ProductModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductModelCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProductModelCountOutputType without action
   */
  export type ProductModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModelCountOutputType
     */
    select?: ProductModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductModelCountOutputType without action
   */
  export type ProductModelCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    sizes: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | ProductCountOutputTypeCountSizesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
  }


  /**
   * Count Type OrderRequestCountOutputType
   */

  export type OrderRequestCountOutputType = {
    items: number
  }

  export type OrderRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderRequestCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderRequestCountOutputType without action
   */
  export type OrderRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestCountOutputType
     */
    select?: OrderRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderRequestCountOutputType without action
   */
  export type OrderRequestCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderRequestItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    heroImage: string | null
    accent: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    heroImage: string | null
    accent: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    heroImage: number
    accent: number
    sortOrder: number
    isVisible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    heroImage?: true
    accent?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    heroImage?: true
    accent?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    heroImage?: true
    accent?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    heroImage: string | null
    accent: string | null
    sortOrder: number
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    heroImage?: boolean
    accent?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brands?: boolean | Category$brandsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    heroImage?: boolean
    accent?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    heroImage?: boolean
    accent?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    heroImage?: boolean
    accent?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "heroImage" | "accent" | "sortOrder" | "isVisible" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | Category$brandsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      brands: Prisma.$BrandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      heroImage: string | null
      accent: string | null
      sortOrder: number
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brands<T extends Category$brandsArgs<ExtArgs> = {}>(args?: Subset<T, Category$brandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly heroImage: FieldRef<"Category", 'String'>
    readonly accent: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
    readonly isVisible: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.brands
   */
  export type Category$brandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    cursor?: BrandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type BrandSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    slug: number
    description: number
    imageUrl: number
    sortOrder: number
    isVisible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    sortOrder?: true
  }

  export type BrandSumAggregateInputType = {
    sortOrder?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    categoryId: string
    name: string
    slug: string
    description: string | null
    imageUrl: string | null
    sortOrder: number
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    models?: boolean | Brand$modelsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "slug" | "description" | "imageUrl" | "sortOrder" | "isVisible" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    models?: boolean | Brand$modelsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      models: Prisma.$ProductModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      name: string
      slug: string
      description: string | null
      imageUrl: string | null
      sortOrder: number
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    models<T extends Brand$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly categoryId: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
    readonly slug: FieldRef<"Brand", 'String'>
    readonly description: FieldRef<"Brand", 'String'>
    readonly imageUrl: FieldRef<"Brand", 'String'>
    readonly sortOrder: FieldRef<"Brand", 'Int'>
    readonly isVisible: FieldRef<"Brand", 'Boolean'>
    readonly createdAt: FieldRef<"Brand", 'DateTime'>
    readonly updatedAt: FieldRef<"Brand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.models
   */
  export type Brand$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    where?: ProductModelWhereInput
    orderBy?: ProductModelOrderByWithRelationInput | ProductModelOrderByWithRelationInput[]
    cursor?: ProductModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductModelScalarFieldEnum | ProductModelScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model ProductModel
   */

  export type AggregateProductModel = {
    _count: ProductModelCountAggregateOutputType | null
    _avg: ProductModelAvgAggregateOutputType | null
    _sum: ProductModelSumAggregateOutputType | null
    _min: ProductModelMinAggregateOutputType | null
    _max: ProductModelMaxAggregateOutputType | null
  }

  export type ProductModelAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProductModelSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProductModelMinAggregateOutputType = {
    id: string | null
    brandId: string | null
    name: string | null
    slug: string | null
    story: string | null
    heroImage: string | null
    priceHint: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductModelMaxAggregateOutputType = {
    id: string | null
    brandId: string | null
    name: string | null
    slug: string | null
    story: string | null
    heroImage: string | null
    priceHint: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductModelCountAggregateOutputType = {
    id: number
    brandId: number
    name: number
    slug: number
    story: number
    heroImage: number
    priceHint: number
    sortOrder: number
    isVisible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductModelAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ProductModelSumAggregateInputType = {
    sortOrder?: true
  }

  export type ProductModelMinAggregateInputType = {
    id?: true
    brandId?: true
    name?: true
    slug?: true
    story?: true
    heroImage?: true
    priceHint?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductModelMaxAggregateInputType = {
    id?: true
    brandId?: true
    name?: true
    slug?: true
    story?: true
    heroImage?: true
    priceHint?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductModelCountAggregateInputType = {
    id?: true
    brandId?: true
    name?: true
    slug?: true
    story?: true
    heroImage?: true
    priceHint?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductModel to aggregate.
     */
    where?: ProductModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductModels to fetch.
     */
    orderBy?: ProductModelOrderByWithRelationInput | ProductModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductModels
    **/
    _count?: true | ProductModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductModelMaxAggregateInputType
  }

  export type GetProductModelAggregateType<T extends ProductModelAggregateArgs> = {
        [P in keyof T & keyof AggregateProductModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductModel[P]>
      : GetScalarType<T[P], AggregateProductModel[P]>
  }




  export type ProductModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductModelWhereInput
    orderBy?: ProductModelOrderByWithAggregationInput | ProductModelOrderByWithAggregationInput[]
    by: ProductModelScalarFieldEnum[] | ProductModelScalarFieldEnum
    having?: ProductModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductModelCountAggregateInputType | true
    _avg?: ProductModelAvgAggregateInputType
    _sum?: ProductModelSumAggregateInputType
    _min?: ProductModelMinAggregateInputType
    _max?: ProductModelMaxAggregateInputType
  }

  export type ProductModelGroupByOutputType = {
    id: string
    brandId: string
    name: string
    slug: string
    story: string | null
    heroImage: string | null
    priceHint: string | null
    sortOrder: number
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductModelCountAggregateOutputType | null
    _avg: ProductModelAvgAggregateOutputType | null
    _sum: ProductModelSumAggregateOutputType | null
    _min: ProductModelMinAggregateOutputType | null
    _max: ProductModelMaxAggregateOutputType | null
  }

  type GetProductModelGroupByPayload<T extends ProductModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductModelGroupByOutputType[P]>
            : GetScalarType<T[P], ProductModelGroupByOutputType[P]>
        }
      >
    >


  export type ProductModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    name?: boolean
    slug?: boolean
    story?: boolean
    heroImage?: boolean
    priceHint?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    products?: boolean | ProductModel$productsArgs<ExtArgs>
    _count?: boolean | ProductModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productModel"]>

  export type ProductModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    name?: boolean
    slug?: boolean
    story?: boolean
    heroImage?: boolean
    priceHint?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productModel"]>

  export type ProductModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandId?: boolean
    name?: boolean
    slug?: boolean
    story?: boolean
    heroImage?: boolean
    priceHint?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productModel"]>

  export type ProductModelSelectScalar = {
    id?: boolean
    brandId?: boolean
    name?: boolean
    slug?: boolean
    story?: boolean
    heroImage?: boolean
    priceHint?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandId" | "name" | "slug" | "story" | "heroImage" | "priceHint" | "sortOrder" | "isVisible" | "createdAt" | "updatedAt", ExtArgs["result"]["productModel"]>
  export type ProductModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    products?: boolean | ProductModel$productsArgs<ExtArgs>
    _count?: boolean | ProductModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type ProductModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $ProductModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductModel"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandId: string
      name: string
      slug: string
      story: string | null
      heroImage: string | null
      priceHint: string | null
      sortOrder: number
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productModel"]>
    composites: {}
  }

  type ProductModelGetPayload<S extends boolean | null | undefined | ProductModelDefaultArgs> = $Result.GetResult<Prisma.$ProductModelPayload, S>

  type ProductModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductModelCountAggregateInputType | true
    }

  export interface ProductModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductModel'], meta: { name: 'ProductModel' } }
    /**
     * Find zero or one ProductModel that matches the filter.
     * @param {ProductModelFindUniqueArgs} args - Arguments to find a ProductModel
     * @example
     * // Get one ProductModel
     * const productModel = await prisma.productModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductModelFindUniqueArgs>(args: SelectSubset<T, ProductModelFindUniqueArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductModelFindUniqueOrThrowArgs} args - Arguments to find a ProductModel
     * @example
     * // Get one ProductModel
     * const productModel = await prisma.productModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductModelFindFirstArgs} args - Arguments to find a ProductModel
     * @example
     * // Get one ProductModel
     * const productModel = await prisma.productModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductModelFindFirstArgs>(args?: SelectSubset<T, ProductModelFindFirstArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductModelFindFirstOrThrowArgs} args - Arguments to find a ProductModel
     * @example
     * // Get one ProductModel
     * const productModel = await prisma.productModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductModels
     * const productModels = await prisma.productModel.findMany()
     * 
     * // Get first 10 ProductModels
     * const productModels = await prisma.productModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productModelWithIdOnly = await prisma.productModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductModelFindManyArgs>(args?: SelectSubset<T, ProductModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductModel.
     * @param {ProductModelCreateArgs} args - Arguments to create a ProductModel.
     * @example
     * // Create one ProductModel
     * const ProductModel = await prisma.productModel.create({
     *   data: {
     *     // ... data to create a ProductModel
     *   }
     * })
     * 
     */
    create<T extends ProductModelCreateArgs>(args: SelectSubset<T, ProductModelCreateArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductModels.
     * @param {ProductModelCreateManyArgs} args - Arguments to create many ProductModels.
     * @example
     * // Create many ProductModels
     * const productModel = await prisma.productModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductModelCreateManyArgs>(args?: SelectSubset<T, ProductModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductModels and returns the data saved in the database.
     * @param {ProductModelCreateManyAndReturnArgs} args - Arguments to create many ProductModels.
     * @example
     * // Create many ProductModels
     * const productModel = await prisma.productModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductModels and only return the `id`
     * const productModelWithIdOnly = await prisma.productModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductModel.
     * @param {ProductModelDeleteArgs} args - Arguments to delete one ProductModel.
     * @example
     * // Delete one ProductModel
     * const ProductModel = await prisma.productModel.delete({
     *   where: {
     *     // ... filter to delete one ProductModel
     *   }
     * })
     * 
     */
    delete<T extends ProductModelDeleteArgs>(args: SelectSubset<T, ProductModelDeleteArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductModel.
     * @param {ProductModelUpdateArgs} args - Arguments to update one ProductModel.
     * @example
     * // Update one ProductModel
     * const productModel = await prisma.productModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductModelUpdateArgs>(args: SelectSubset<T, ProductModelUpdateArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductModels.
     * @param {ProductModelDeleteManyArgs} args - Arguments to filter ProductModels to delete.
     * @example
     * // Delete a few ProductModels
     * const { count } = await prisma.productModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductModelDeleteManyArgs>(args?: SelectSubset<T, ProductModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductModels
     * const productModel = await prisma.productModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductModelUpdateManyArgs>(args: SelectSubset<T, ProductModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductModels and returns the data updated in the database.
     * @param {ProductModelUpdateManyAndReturnArgs} args - Arguments to update many ProductModels.
     * @example
     * // Update many ProductModels
     * const productModel = await prisma.productModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductModels and only return the `id`
     * const productModelWithIdOnly = await prisma.productModel.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProductModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductModel.
     * @param {ProductModelUpsertArgs} args - Arguments to update or create a ProductModel.
     * @example
     * // Update or create a ProductModel
     * const productModel = await prisma.productModel.upsert({
     *   create: {
     *     // ... data to create a ProductModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductModel we want to update
     *   }
     * })
     */
    upsert<T extends ProductModelUpsertArgs>(args: SelectSubset<T, ProductModelUpsertArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductModelCountArgs} args - Arguments to filter ProductModels to count.
     * @example
     * // Count the number of ProductModels
     * const count = await prisma.productModel.count({
     *   where: {
     *     // ... the filter for the ProductModels we want to count
     *   }
     * })
    **/
    count<T extends ProductModelCountArgs>(
      args?: Subset<T, ProductModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductModelAggregateArgs>(args: Subset<T, ProductModelAggregateArgs>): Prisma.PrismaPromise<GetProductModelAggregateType<T>>

    /**
     * Group by ProductModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductModelGroupByArgs} args - Group by arguments.
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
      T extends ProductModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductModelGroupByArgs['orderBy'] }
        : { orderBy?: ProductModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductModel model
   */
  readonly fields: ProductModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends ProductModel$productsArgs<ExtArgs> = {}>(args?: Subset<T, ProductModel$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductModel model
   */
  interface ProductModelFieldRefs {
    readonly id: FieldRef<"ProductModel", 'String'>
    readonly brandId: FieldRef<"ProductModel", 'String'>
    readonly name: FieldRef<"ProductModel", 'String'>
    readonly slug: FieldRef<"ProductModel", 'String'>
    readonly story: FieldRef<"ProductModel", 'String'>
    readonly heroImage: FieldRef<"ProductModel", 'String'>
    readonly priceHint: FieldRef<"ProductModel", 'String'>
    readonly sortOrder: FieldRef<"ProductModel", 'Int'>
    readonly isVisible: FieldRef<"ProductModel", 'Boolean'>
    readonly createdAt: FieldRef<"ProductModel", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductModel findUnique
   */
  export type ProductModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * Filter, which ProductModel to fetch.
     */
    where: ProductModelWhereUniqueInput
  }

  /**
   * ProductModel findUniqueOrThrow
   */
  export type ProductModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * Filter, which ProductModel to fetch.
     */
    where: ProductModelWhereUniqueInput
  }

  /**
   * ProductModel findFirst
   */
  export type ProductModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * Filter, which ProductModel to fetch.
     */
    where?: ProductModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductModels to fetch.
     */
    orderBy?: ProductModelOrderByWithRelationInput | ProductModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductModels.
     */
    cursor?: ProductModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductModels.
     */
    distinct?: ProductModelScalarFieldEnum | ProductModelScalarFieldEnum[]
  }

  /**
   * ProductModel findFirstOrThrow
   */
  export type ProductModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * Filter, which ProductModel to fetch.
     */
    where?: ProductModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductModels to fetch.
     */
    orderBy?: ProductModelOrderByWithRelationInput | ProductModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductModels.
     */
    cursor?: ProductModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductModels.
     */
    distinct?: ProductModelScalarFieldEnum | ProductModelScalarFieldEnum[]
  }

  /**
   * ProductModel findMany
   */
  export type ProductModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * Filter, which ProductModels to fetch.
     */
    where?: ProductModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductModels to fetch.
     */
    orderBy?: ProductModelOrderByWithRelationInput | ProductModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductModels.
     */
    cursor?: ProductModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductModels.
     */
    skip?: number
    distinct?: ProductModelScalarFieldEnum | ProductModelScalarFieldEnum[]
  }

  /**
   * ProductModel create
   */
  export type ProductModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductModel.
     */
    data: XOR<ProductModelCreateInput, ProductModelUncheckedCreateInput>
  }

  /**
   * ProductModel createMany
   */
  export type ProductModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductModels.
     */
    data: ProductModelCreateManyInput | ProductModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductModel createManyAndReturn
   */
  export type ProductModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * The data used to create many ProductModels.
     */
    data: ProductModelCreateManyInput | ProductModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductModel update
   */
  export type ProductModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductModel.
     */
    data: XOR<ProductModelUpdateInput, ProductModelUncheckedUpdateInput>
    /**
     * Choose, which ProductModel to update.
     */
    where: ProductModelWhereUniqueInput
  }

  /**
   * ProductModel updateMany
   */
  export type ProductModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductModels.
     */
    data: XOR<ProductModelUpdateManyMutationInput, ProductModelUncheckedUpdateManyInput>
    /**
     * Filter which ProductModels to update
     */
    where?: ProductModelWhereInput
    /**
     * Limit how many ProductModels to update.
     */
    limit?: number
  }

  /**
   * ProductModel updateManyAndReturn
   */
  export type ProductModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * The data used to update ProductModels.
     */
    data: XOR<ProductModelUpdateManyMutationInput, ProductModelUncheckedUpdateManyInput>
    /**
     * Filter which ProductModels to update
     */
    where?: ProductModelWhereInput
    /**
     * Limit how many ProductModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductModel upsert
   */
  export type ProductModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductModel to update in case it exists.
     */
    where: ProductModelWhereUniqueInput
    /**
     * In case the ProductModel found by the `where` argument doesn't exist, create a new ProductModel with this data.
     */
    create: XOR<ProductModelCreateInput, ProductModelUncheckedCreateInput>
    /**
     * In case the ProductModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductModelUpdateInput, ProductModelUncheckedUpdateInput>
  }

  /**
   * ProductModel delete
   */
  export type ProductModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
    /**
     * Filter which ProductModel to delete.
     */
    where: ProductModelWhereUniqueInput
  }

  /**
   * ProductModel deleteMany
   */
  export type ProductModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductModels to delete
     */
    where?: ProductModelWhereInput
    /**
     * Limit how many ProductModels to delete.
     */
    limit?: number
  }

  /**
   * ProductModel.products
   */
  export type ProductModel$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * ProductModel without action
   */
  export type ProductModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductModel
     */
    select?: ProductModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductModel
     */
    omit?: ProductModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductModelInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    mediaBytes: number | null
    sortOrder: number | null
  }

  export type ProductSumAggregateOutputType = {
    mediaBytes: bigint | null
    sortOrder: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    modelId: string | null
    name: string | null
    color: string | null
    priceText: string | null
    imageUrl: string | null
    imageAlt: string | null
    storageProvider: $Enums.StorageProvider | null
    storageKey: string | null
    mediaBytes: bigint | null
    mediaMimeType: string | null
    cloudinaryPublicId: string | null
    status: $Enums.ProductStatus | null
    isFeatured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    modelId: string | null
    name: string | null
    color: string | null
    priceText: string | null
    imageUrl: string | null
    imageAlt: string | null
    storageProvider: $Enums.StorageProvider | null
    storageKey: string | null
    mediaBytes: bigint | null
    mediaMimeType: string | null
    cloudinaryPublicId: string | null
    status: $Enums.ProductStatus | null
    isFeatured: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    modelId: number
    name: number
    color: number
    priceText: number
    imageUrl: number
    imageAlt: number
    storageProvider: number
    storageKey: number
    mediaBytes: number
    mediaMimeType: number
    cloudinaryPublicId: number
    status: number
    isFeatured: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    mediaBytes?: true
    sortOrder?: true
  }

  export type ProductSumAggregateInputType = {
    mediaBytes?: true
    sortOrder?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    modelId?: true
    name?: true
    color?: true
    priceText?: true
    imageUrl?: true
    imageAlt?: true
    storageProvider?: true
    storageKey?: true
    mediaBytes?: true
    mediaMimeType?: true
    cloudinaryPublicId?: true
    status?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    modelId?: true
    name?: true
    color?: true
    priceText?: true
    imageUrl?: true
    imageAlt?: true
    storageProvider?: true
    storageKey?: true
    mediaBytes?: true
    mediaMimeType?: true
    cloudinaryPublicId?: true
    status?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    modelId?: true
    name?: true
    color?: true
    priceText?: true
    imageUrl?: true
    imageAlt?: true
    storageProvider?: true
    storageKey?: true
    mediaBytes?: true
    mediaMimeType?: true
    cloudinaryPublicId?: true
    status?: true
    isFeatured?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    modelId: string
    name: string
    color: string | null
    priceText: string | null
    imageUrl: string
    imageAlt: string | null
    storageProvider: $Enums.StorageProvider
    storageKey: string | null
    mediaBytes: bigint | null
    mediaMimeType: string | null
    cloudinaryPublicId: string | null
    status: $Enums.ProductStatus
    isFeatured: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    name?: boolean
    color?: boolean
    priceText?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    storageProvider?: boolean
    storageKey?: boolean
    mediaBytes?: boolean
    mediaMimeType?: boolean
    cloudinaryPublicId?: boolean
    status?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | ProductModelDefaultArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    name?: boolean
    color?: boolean
    priceText?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    storageProvider?: boolean
    storageKey?: boolean
    mediaBytes?: boolean
    mediaMimeType?: boolean
    cloudinaryPublicId?: boolean
    status?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | ProductModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    name?: boolean
    color?: boolean
    priceText?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    storageProvider?: boolean
    storageKey?: boolean
    mediaBytes?: boolean
    mediaMimeType?: boolean
    cloudinaryPublicId?: boolean
    status?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | ProductModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    modelId?: boolean
    name?: boolean
    color?: boolean
    priceText?: boolean
    imageUrl?: boolean
    imageAlt?: boolean
    storageProvider?: boolean
    storageKey?: boolean
    mediaBytes?: boolean
    mediaMimeType?: boolean
    cloudinaryPublicId?: boolean
    status?: boolean
    isFeatured?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelId" | "name" | "color" | "priceText" | "imageUrl" | "imageAlt" | "storageProvider" | "storageKey" | "mediaBytes" | "mediaMimeType" | "cloudinaryPublicId" | "status" | "isFeatured" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ProductModelDefaultArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ProductModelDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ProductModelDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      model: Prisma.$ProductModelPayload<ExtArgs>
      sizes: Prisma.$ProductSizePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelId: string
      name: string
      color: string | null
      priceText: string | null
      imageUrl: string
      imageAlt: string | null
      storageProvider: $Enums.StorageProvider
      storageKey: string | null
      mediaBytes: bigint | null
      mediaMimeType: string | null
      cloudinaryPublicId: string | null
      status: $Enums.ProductStatus
      isFeatured: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ProductModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductModelDefaultArgs<ExtArgs>>): Prisma__ProductModelClient<$Result.GetResult<Prisma.$ProductModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sizes<T extends Product$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Product$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly modelId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly color: FieldRef<"Product", 'String'>
    readonly priceText: FieldRef<"Product", 'String'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly imageAlt: FieldRef<"Product", 'String'>
    readonly storageProvider: FieldRef<"Product", 'StorageProvider'>
    readonly storageKey: FieldRef<"Product", 'String'>
    readonly mediaBytes: FieldRef<"Product", 'BigInt'>
    readonly mediaMimeType: FieldRef<"Product", 'String'>
    readonly cloudinaryPublicId: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly isFeatured: FieldRef<"Product", 'Boolean'>
    readonly sortOrder: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.sizes
   */
  export type Product$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    cursor?: ProductSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductSize
   */

  export type AggregateProductSize = {
    _count: ProductSizeCountAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  export type ProductSizeMinAggregateOutputType = {
    id: string | null
    productId: string | null
    sizeLabel: string | null
    isAvailable: boolean | null
  }

  export type ProductSizeMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    sizeLabel: string | null
    isAvailable: boolean | null
  }

  export type ProductSizeCountAggregateOutputType = {
    id: number
    productId: number
    sizeLabel: number
    isAvailable: number
    _all: number
  }


  export type ProductSizeMinAggregateInputType = {
    id?: true
    productId?: true
    sizeLabel?: true
    isAvailable?: true
  }

  export type ProductSizeMaxAggregateInputType = {
    id?: true
    productId?: true
    sizeLabel?: true
    isAvailable?: true
  }

  export type ProductSizeCountAggregateInputType = {
    id?: true
    productId?: true
    sizeLabel?: true
    isAvailable?: true
    _all?: true
  }

  export type ProductSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSize to aggregate.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSizes
    **/
    _count?: true | ProductSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSizeMaxAggregateInputType
  }

  export type GetProductSizeAggregateType<T extends ProductSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSize[P]>
      : GetScalarType<T[P], AggregateProductSize[P]>
  }




  export type ProductSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithAggregationInput | ProductSizeOrderByWithAggregationInput[]
    by: ProductSizeScalarFieldEnum[] | ProductSizeScalarFieldEnum
    having?: ProductSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSizeCountAggregateInputType | true
    _min?: ProductSizeMinAggregateInputType
    _max?: ProductSizeMaxAggregateInputType
  }

  export type ProductSizeGroupByOutputType = {
    id: string
    productId: string
    sizeLabel: string
    isAvailable: boolean
    _count: ProductSizeCountAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  type GetProductSizeGroupByPayload<T extends ProductSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
        }
      >
    >


  export type ProductSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sizeLabel?: boolean
    isAvailable?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>

  export type ProductSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sizeLabel?: boolean
    isAvailable?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>

  export type ProductSizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    sizeLabel?: boolean
    isAvailable?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>

  export type ProductSizeSelectScalar = {
    id?: boolean
    productId?: boolean
    sizeLabel?: boolean
    isAvailable?: boolean
  }

  export type ProductSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "sizeLabel" | "isAvailable", ExtArgs["result"]["productSize"]>
  export type ProductSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductSizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSize"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      sizeLabel: string
      isAvailable: boolean
    }, ExtArgs["result"]["productSize"]>
    composites: {}
  }

  type ProductSizeGetPayload<S extends boolean | null | undefined | ProductSizeDefaultArgs> = $Result.GetResult<Prisma.$ProductSizePayload, S>

  type ProductSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSizeCountAggregateInputType | true
    }

  export interface ProductSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSize'], meta: { name: 'ProductSize' } }
    /**
     * Find zero or one ProductSize that matches the filter.
     * @param {ProductSizeFindUniqueArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSizeFindUniqueArgs>(args: SelectSubset<T, ProductSizeFindUniqueArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSizeFindUniqueOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSizeFindFirstArgs>(args?: SelectSubset<T, ProductSizeFindFirstArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSizes
     * const productSizes = await prisma.productSize.findMany()
     * 
     * // Get first 10 ProductSizes
     * const productSizes = await prisma.productSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSizeWithIdOnly = await prisma.productSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSizeFindManyArgs>(args?: SelectSubset<T, ProductSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSize.
     * @param {ProductSizeCreateArgs} args - Arguments to create a ProductSize.
     * @example
     * // Create one ProductSize
     * const ProductSize = await prisma.productSize.create({
     *   data: {
     *     // ... data to create a ProductSize
     *   }
     * })
     * 
     */
    create<T extends ProductSizeCreateArgs>(args: SelectSubset<T, ProductSizeCreateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSizes.
     * @param {ProductSizeCreateManyArgs} args - Arguments to create many ProductSizes.
     * @example
     * // Create many ProductSizes
     * const productSize = await prisma.productSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSizeCreateManyArgs>(args?: SelectSubset<T, ProductSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSizes and returns the data saved in the database.
     * @param {ProductSizeCreateManyAndReturnArgs} args - Arguments to create many ProductSizes.
     * @example
     * // Create many ProductSizes
     * const productSize = await prisma.productSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSizes and only return the `id`
     * const productSizeWithIdOnly = await prisma.productSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSize.
     * @param {ProductSizeDeleteArgs} args - Arguments to delete one ProductSize.
     * @example
     * // Delete one ProductSize
     * const ProductSize = await prisma.productSize.delete({
     *   where: {
     *     // ... filter to delete one ProductSize
     *   }
     * })
     * 
     */
    delete<T extends ProductSizeDeleteArgs>(args: SelectSubset<T, ProductSizeDeleteArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSize.
     * @param {ProductSizeUpdateArgs} args - Arguments to update one ProductSize.
     * @example
     * // Update one ProductSize
     * const productSize = await prisma.productSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSizeUpdateArgs>(args: SelectSubset<T, ProductSizeUpdateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSizes.
     * @param {ProductSizeDeleteManyArgs} args - Arguments to filter ProductSizes to delete.
     * @example
     * // Delete a few ProductSizes
     * const { count } = await prisma.productSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSizeDeleteManyArgs>(args?: SelectSubset<T, ProductSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSizes
     * const productSize = await prisma.productSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSizeUpdateManyArgs>(args: SelectSubset<T, ProductSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSizes and returns the data updated in the database.
     * @param {ProductSizeUpdateManyAndReturnArgs} args - Arguments to update many ProductSizes.
     * @example
     * // Update many ProductSizes
     * const productSize = await prisma.productSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSizes and only return the `id`
     * const productSizeWithIdOnly = await prisma.productSize.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProductSizeUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSize.
     * @param {ProductSizeUpsertArgs} args - Arguments to update or create a ProductSize.
     * @example
     * // Update or create a ProductSize
     * const productSize = await prisma.productSize.upsert({
     *   create: {
     *     // ... data to create a ProductSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSize we want to update
     *   }
     * })
     */
    upsert<T extends ProductSizeUpsertArgs>(args: SelectSubset<T, ProductSizeUpsertArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeCountArgs} args - Arguments to filter ProductSizes to count.
     * @example
     * // Count the number of ProductSizes
     * const count = await prisma.productSize.count({
     *   where: {
     *     // ... the filter for the ProductSizes we want to count
     *   }
     * })
    **/
    count<T extends ProductSizeCountArgs>(
      args?: Subset<T, ProductSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSizeAggregateArgs>(args: Subset<T, ProductSizeAggregateArgs>): Prisma.PrismaPromise<GetProductSizeAggregateType<T>>

    /**
     * Group by ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeGroupByArgs} args - Group by arguments.
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
      T extends ProductSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSizeGroupByArgs['orderBy'] }
        : { orderBy?: ProductSizeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSize model
   */
  readonly fields: ProductSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductSize model
   */
  interface ProductSizeFieldRefs {
    readonly id: FieldRef<"ProductSize", 'String'>
    readonly productId: FieldRef<"ProductSize", 'String'>
    readonly sizeLabel: FieldRef<"ProductSize", 'String'>
    readonly isAvailable: FieldRef<"ProductSize", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductSize findUnique
   */
  export type ProductSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findUniqueOrThrow
   */
  export type ProductSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findFirst
   */
  export type ProductSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findFirstOrThrow
   */
  export type ProductSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findMany
   */
  export type ProductSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSizes to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize create
   */
  export type ProductSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSize.
     */
    data: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
  }

  /**
   * ProductSize createMany
   */
  export type ProductSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSizes.
     */
    data: ProductSizeCreateManyInput | ProductSizeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSize createManyAndReturn
   */
  export type ProductSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSizes.
     */
    data: ProductSizeCreateManyInput | ProductSizeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSize update
   */
  export type ProductSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSize.
     */
    data: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
    /**
     * Choose, which ProductSize to update.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize updateMany
   */
  export type ProductSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSizes.
     */
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyInput>
    /**
     * Filter which ProductSizes to update
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to update.
     */
    limit?: number
  }

  /**
   * ProductSize updateManyAndReturn
   */
  export type ProductSizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * The data used to update ProductSizes.
     */
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyInput>
    /**
     * Filter which ProductSizes to update
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSize upsert
   */
  export type ProductSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSize to update in case it exists.
     */
    where: ProductSizeWhereUniqueInput
    /**
     * In case the ProductSize found by the `where` argument doesn't exist, create a new ProductSize with this data.
     */
    create: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
    /**
     * In case the ProductSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
  }

  /**
   * ProductSize delete
   */
  export type ProductSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter which ProductSize to delete.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize deleteMany
   */
  export type ProductSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSizes to delete
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to delete.
     */
    limit?: number
  }

  /**
   * ProductSize without action
   */
  export type ProductSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
  }


  /**
   * Model OrderRequest
   */

  export type AggregateOrderRequest = {
    _count: OrderRequestCountAggregateOutputType | null
    _min: OrderRequestMinAggregateOutputType | null
    _max: OrderRequestMaxAggregateOutputType | null
  }

  export type OrderRequestMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    phone: string | null
    snapchat: string | null
    city: string | null
    note: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderRequestMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    phone: string | null
    snapchat: string | null
    city: string | null
    note: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderRequestCountAggregateOutputType = {
    id: number
    customerName: number
    phone: number
    snapchat: number
    city: number
    note: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderRequestMinAggregateInputType = {
    id?: true
    customerName?: true
    phone?: true
    snapchat?: true
    city?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderRequestMaxAggregateInputType = {
    id?: true
    customerName?: true
    phone?: true
    snapchat?: true
    city?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderRequestCountAggregateInputType = {
    id?: true
    customerName?: true
    phone?: true
    snapchat?: true
    city?: true
    note?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderRequest to aggregate.
     */
    where?: OrderRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRequests to fetch.
     */
    orderBy?: OrderRequestOrderByWithRelationInput | OrderRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderRequests
    **/
    _count?: true | OrderRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderRequestMaxAggregateInputType
  }

  export type GetOrderRequestAggregateType<T extends OrderRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderRequest[P]>
      : GetScalarType<T[P], AggregateOrderRequest[P]>
  }




  export type OrderRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderRequestWhereInput
    orderBy?: OrderRequestOrderByWithAggregationInput | OrderRequestOrderByWithAggregationInput[]
    by: OrderRequestScalarFieldEnum[] | OrderRequestScalarFieldEnum
    having?: OrderRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderRequestCountAggregateInputType | true
    _min?: OrderRequestMinAggregateInputType
    _max?: OrderRequestMaxAggregateInputType
  }

  export type OrderRequestGroupByOutputType = {
    id: string
    customerName: string
    phone: string | null
    snapchat: string | null
    city: string | null
    note: string | null
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    _count: OrderRequestCountAggregateOutputType | null
    _min: OrderRequestMinAggregateOutputType | null
    _max: OrderRequestMaxAggregateOutputType | null
  }

  type GetOrderRequestGroupByPayload<T extends OrderRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderRequestGroupByOutputType[P]>
            : GetScalarType<T[P], OrderRequestGroupByOutputType[P]>
        }
      >
    >


  export type OrderRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    phone?: boolean
    snapchat?: boolean
    city?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | OrderRequest$itemsArgs<ExtArgs>
    _count?: boolean | OrderRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderRequest"]>

  export type OrderRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    phone?: boolean
    snapchat?: boolean
    city?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["orderRequest"]>

  export type OrderRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    phone?: boolean
    snapchat?: boolean
    city?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["orderRequest"]>

  export type OrderRequestSelectScalar = {
    id?: boolean
    customerName?: boolean
    phone?: boolean
    snapchat?: boolean
    city?: boolean
    note?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "phone" | "snapchat" | "city" | "note" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["orderRequest"]>
  export type OrderRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderRequest$itemsArgs<ExtArgs>
    _count?: boolean | OrderRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderRequest"
    objects: {
      items: Prisma.$OrderRequestItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      phone: string | null
      snapchat: string | null
      city: string | null
      note: string | null
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderRequest"]>
    composites: {}
  }

  type OrderRequestGetPayload<S extends boolean | null | undefined | OrderRequestDefaultArgs> = $Result.GetResult<Prisma.$OrderRequestPayload, S>

  type OrderRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderRequestCountAggregateInputType | true
    }

  export interface OrderRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderRequest'], meta: { name: 'OrderRequest' } }
    /**
     * Find zero or one OrderRequest that matches the filter.
     * @param {OrderRequestFindUniqueArgs} args - Arguments to find a OrderRequest
     * @example
     * // Get one OrderRequest
     * const orderRequest = await prisma.orderRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderRequestFindUniqueArgs>(args: SelectSubset<T, OrderRequestFindUniqueArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderRequestFindUniqueOrThrowArgs} args - Arguments to find a OrderRequest
     * @example
     * // Get one OrderRequest
     * const orderRequest = await prisma.orderRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestFindFirstArgs} args - Arguments to find a OrderRequest
     * @example
     * // Get one OrderRequest
     * const orderRequest = await prisma.orderRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderRequestFindFirstArgs>(args?: SelectSubset<T, OrderRequestFindFirstArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestFindFirstOrThrowArgs} args - Arguments to find a OrderRequest
     * @example
     * // Get one OrderRequest
     * const orderRequest = await prisma.orderRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderRequests
     * const orderRequests = await prisma.orderRequest.findMany()
     * 
     * // Get first 10 OrderRequests
     * const orderRequests = await prisma.orderRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderRequestWithIdOnly = await prisma.orderRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderRequestFindManyArgs>(args?: SelectSubset<T, OrderRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderRequest.
     * @param {OrderRequestCreateArgs} args - Arguments to create a OrderRequest.
     * @example
     * // Create one OrderRequest
     * const OrderRequest = await prisma.orderRequest.create({
     *   data: {
     *     // ... data to create a OrderRequest
     *   }
     * })
     * 
     */
    create<T extends OrderRequestCreateArgs>(args: SelectSubset<T, OrderRequestCreateArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderRequests.
     * @param {OrderRequestCreateManyArgs} args - Arguments to create many OrderRequests.
     * @example
     * // Create many OrderRequests
     * const orderRequest = await prisma.orderRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderRequestCreateManyArgs>(args?: SelectSubset<T, OrderRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderRequests and returns the data saved in the database.
     * @param {OrderRequestCreateManyAndReturnArgs} args - Arguments to create many OrderRequests.
     * @example
     * // Create many OrderRequests
     * const orderRequest = await prisma.orderRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderRequests and only return the `id`
     * const orderRequestWithIdOnly = await prisma.orderRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderRequest.
     * @param {OrderRequestDeleteArgs} args - Arguments to delete one OrderRequest.
     * @example
     * // Delete one OrderRequest
     * const OrderRequest = await prisma.orderRequest.delete({
     *   where: {
     *     // ... filter to delete one OrderRequest
     *   }
     * })
     * 
     */
    delete<T extends OrderRequestDeleteArgs>(args: SelectSubset<T, OrderRequestDeleteArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderRequest.
     * @param {OrderRequestUpdateArgs} args - Arguments to update one OrderRequest.
     * @example
     * // Update one OrderRequest
     * const orderRequest = await prisma.orderRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderRequestUpdateArgs>(args: SelectSubset<T, OrderRequestUpdateArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderRequests.
     * @param {OrderRequestDeleteManyArgs} args - Arguments to filter OrderRequests to delete.
     * @example
     * // Delete a few OrderRequests
     * const { count } = await prisma.orderRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderRequestDeleteManyArgs>(args?: SelectSubset<T, OrderRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderRequests
     * const orderRequest = await prisma.orderRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderRequestUpdateManyArgs>(args: SelectSubset<T, OrderRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderRequests and returns the data updated in the database.
     * @param {OrderRequestUpdateManyAndReturnArgs} args - Arguments to update many OrderRequests.
     * @example
     * // Update many OrderRequests
     * const orderRequest = await prisma.orderRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderRequests and only return the `id`
     * const orderRequestWithIdOnly = await prisma.orderRequest.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends OrderRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderRequest.
     * @param {OrderRequestUpsertArgs} args - Arguments to update or create a OrderRequest.
     * @example
     * // Update or create a OrderRequest
     * const orderRequest = await prisma.orderRequest.upsert({
     *   create: {
     *     // ... data to create a OrderRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderRequest we want to update
     *   }
     * })
     */
    upsert<T extends OrderRequestUpsertArgs>(args: SelectSubset<T, OrderRequestUpsertArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestCountArgs} args - Arguments to filter OrderRequests to count.
     * @example
     * // Count the number of OrderRequests
     * const count = await prisma.orderRequest.count({
     *   where: {
     *     // ... the filter for the OrderRequests we want to count
     *   }
     * })
    **/
    count<T extends OrderRequestCountArgs>(
      args?: Subset<T, OrderRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderRequestAggregateArgs>(args: Subset<T, OrderRequestAggregateArgs>): Prisma.PrismaPromise<GetOrderRequestAggregateType<T>>

    /**
     * Group by OrderRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestGroupByArgs} args - Group by arguments.
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
      T extends OrderRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderRequestGroupByArgs['orderBy'] }
        : { orderBy?: OrderRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderRequest model
   */
  readonly fields: OrderRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends OrderRequest$itemsArgs<ExtArgs> = {}>(args?: Subset<T, OrderRequest$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrderRequest model
   */
  interface OrderRequestFieldRefs {
    readonly id: FieldRef<"OrderRequest", 'String'>
    readonly customerName: FieldRef<"OrderRequest", 'String'>
    readonly phone: FieldRef<"OrderRequest", 'String'>
    readonly snapchat: FieldRef<"OrderRequest", 'String'>
    readonly city: FieldRef<"OrderRequest", 'String'>
    readonly note: FieldRef<"OrderRequest", 'String'>
    readonly status: FieldRef<"OrderRequest", 'OrderStatus'>
    readonly createdAt: FieldRef<"OrderRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderRequest findUnique
   */
  export type OrderRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequest to fetch.
     */
    where: OrderRequestWhereUniqueInput
  }

  /**
   * OrderRequest findUniqueOrThrow
   */
  export type OrderRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequest to fetch.
     */
    where: OrderRequestWhereUniqueInput
  }

  /**
   * OrderRequest findFirst
   */
  export type OrderRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequest to fetch.
     */
    where?: OrderRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRequests to fetch.
     */
    orderBy?: OrderRequestOrderByWithRelationInput | OrderRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderRequests.
     */
    cursor?: OrderRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderRequests.
     */
    distinct?: OrderRequestScalarFieldEnum | OrderRequestScalarFieldEnum[]
  }

  /**
   * OrderRequest findFirstOrThrow
   */
  export type OrderRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequest to fetch.
     */
    where?: OrderRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRequests to fetch.
     */
    orderBy?: OrderRequestOrderByWithRelationInput | OrderRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderRequests.
     */
    cursor?: OrderRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderRequests.
     */
    distinct?: OrderRequestScalarFieldEnum | OrderRequestScalarFieldEnum[]
  }

  /**
   * OrderRequest findMany
   */
  export type OrderRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequests to fetch.
     */
    where?: OrderRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRequests to fetch.
     */
    orderBy?: OrderRequestOrderByWithRelationInput | OrderRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderRequests.
     */
    cursor?: OrderRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRequests.
     */
    skip?: number
    distinct?: OrderRequestScalarFieldEnum | OrderRequestScalarFieldEnum[]
  }

  /**
   * OrderRequest create
   */
  export type OrderRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderRequest.
     */
    data: XOR<OrderRequestCreateInput, OrderRequestUncheckedCreateInput>
  }

  /**
   * OrderRequest createMany
   */
  export type OrderRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderRequests.
     */
    data: OrderRequestCreateManyInput | OrderRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderRequest createManyAndReturn
   */
  export type OrderRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * The data used to create many OrderRequests.
     */
    data: OrderRequestCreateManyInput | OrderRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderRequest update
   */
  export type OrderRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderRequest.
     */
    data: XOR<OrderRequestUpdateInput, OrderRequestUncheckedUpdateInput>
    /**
     * Choose, which OrderRequest to update.
     */
    where: OrderRequestWhereUniqueInput
  }

  /**
   * OrderRequest updateMany
   */
  export type OrderRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderRequests.
     */
    data: XOR<OrderRequestUpdateManyMutationInput, OrderRequestUncheckedUpdateManyInput>
    /**
     * Filter which OrderRequests to update
     */
    where?: OrderRequestWhereInput
    /**
     * Limit how many OrderRequests to update.
     */
    limit?: number
  }

  /**
   * OrderRequest updateManyAndReturn
   */
  export type OrderRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * The data used to update OrderRequests.
     */
    data: XOR<OrderRequestUpdateManyMutationInput, OrderRequestUncheckedUpdateManyInput>
    /**
     * Filter which OrderRequests to update
     */
    where?: OrderRequestWhereInput
    /**
     * Limit how many OrderRequests to update.
     */
    limit?: number
  }

  /**
   * OrderRequest upsert
   */
  export type OrderRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderRequest to update in case it exists.
     */
    where: OrderRequestWhereUniqueInput
    /**
     * In case the OrderRequest found by the `where` argument doesn't exist, create a new OrderRequest with this data.
     */
    create: XOR<OrderRequestCreateInput, OrderRequestUncheckedCreateInput>
    /**
     * In case the OrderRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderRequestUpdateInput, OrderRequestUncheckedUpdateInput>
  }

  /**
   * OrderRequest delete
   */
  export type OrderRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
    /**
     * Filter which OrderRequest to delete.
     */
    where: OrderRequestWhereUniqueInput
  }

  /**
   * OrderRequest deleteMany
   */
  export type OrderRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderRequests to delete
     */
    where?: OrderRequestWhereInput
    /**
     * Limit how many OrderRequests to delete.
     */
    limit?: number
  }

  /**
   * OrderRequest.items
   */
  export type OrderRequest$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    where?: OrderRequestItemWhereInput
    orderBy?: OrderRequestItemOrderByWithRelationInput | OrderRequestItemOrderByWithRelationInput[]
    cursor?: OrderRequestItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderRequestItemScalarFieldEnum | OrderRequestItemScalarFieldEnum[]
  }

  /**
   * OrderRequest without action
   */
  export type OrderRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequest
     */
    select?: OrderRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequest
     */
    omit?: OrderRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestInclude<ExtArgs> | null
  }


  /**
   * Model OrderRequestItem
   */

  export type AggregateOrderRequestItem = {
    _count: OrderRequestItemCountAggregateOutputType | null
    _avg: OrderRequestItemAvgAggregateOutputType | null
    _sum: OrderRequestItemSumAggregateOutputType | null
    _min: OrderRequestItemMinAggregateOutputType | null
    _max: OrderRequestItemMaxAggregateOutputType | null
  }

  export type OrderRequestItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type OrderRequestItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type OrderRequestItemMinAggregateOutputType = {
    id: string | null
    orderRequestId: string | null
    productId: string | null
    modelName: string | null
    productName: string | null
    sizeLabel: string | null
    quantity: number | null
    imageUrl: string | null
  }

  export type OrderRequestItemMaxAggregateOutputType = {
    id: string | null
    orderRequestId: string | null
    productId: string | null
    modelName: string | null
    productName: string | null
    sizeLabel: string | null
    quantity: number | null
    imageUrl: string | null
  }

  export type OrderRequestItemCountAggregateOutputType = {
    id: number
    orderRequestId: number
    productId: number
    modelName: number
    productName: number
    sizeLabel: number
    quantity: number
    imageUrl: number
    _all: number
  }


  export type OrderRequestItemAvgAggregateInputType = {
    quantity?: true
  }

  export type OrderRequestItemSumAggregateInputType = {
    quantity?: true
  }

  export type OrderRequestItemMinAggregateInputType = {
    id?: true
    orderRequestId?: true
    productId?: true
    modelName?: true
    productName?: true
    sizeLabel?: true
    quantity?: true
    imageUrl?: true
  }

  export type OrderRequestItemMaxAggregateInputType = {
    id?: true
    orderRequestId?: true
    productId?: true
    modelName?: true
    productName?: true
    sizeLabel?: true
    quantity?: true
    imageUrl?: true
  }

  export type OrderRequestItemCountAggregateInputType = {
    id?: true
    orderRequestId?: true
    productId?: true
    modelName?: true
    productName?: true
    sizeLabel?: true
    quantity?: true
    imageUrl?: true
    _all?: true
  }

  export type OrderRequestItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderRequestItem to aggregate.
     */
    where?: OrderRequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRequestItems to fetch.
     */
    orderBy?: OrderRequestItemOrderByWithRelationInput | OrderRequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderRequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderRequestItems
    **/
    _count?: true | OrderRequestItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderRequestItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderRequestItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderRequestItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderRequestItemMaxAggregateInputType
  }

  export type GetOrderRequestItemAggregateType<T extends OrderRequestItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderRequestItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderRequestItem[P]>
      : GetScalarType<T[P], AggregateOrderRequestItem[P]>
  }




  export type OrderRequestItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderRequestItemWhereInput
    orderBy?: OrderRequestItemOrderByWithAggregationInput | OrderRequestItemOrderByWithAggregationInput[]
    by: OrderRequestItemScalarFieldEnum[] | OrderRequestItemScalarFieldEnum
    having?: OrderRequestItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderRequestItemCountAggregateInputType | true
    _avg?: OrderRequestItemAvgAggregateInputType
    _sum?: OrderRequestItemSumAggregateInputType
    _min?: OrderRequestItemMinAggregateInputType
    _max?: OrderRequestItemMaxAggregateInputType
  }

  export type OrderRequestItemGroupByOutputType = {
    id: string
    orderRequestId: string
    productId: string | null
    modelName: string
    productName: string
    sizeLabel: string | null
    quantity: number
    imageUrl: string | null
    _count: OrderRequestItemCountAggregateOutputType | null
    _avg: OrderRequestItemAvgAggregateOutputType | null
    _sum: OrderRequestItemSumAggregateOutputType | null
    _min: OrderRequestItemMinAggregateOutputType | null
    _max: OrderRequestItemMaxAggregateOutputType | null
  }

  type GetOrderRequestItemGroupByPayload<T extends OrderRequestItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderRequestItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderRequestItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderRequestItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderRequestItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderRequestItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderRequestId?: boolean
    productId?: boolean
    modelName?: boolean
    productName?: boolean
    sizeLabel?: boolean
    quantity?: boolean
    imageUrl?: boolean
    orderRequest?: boolean | OrderRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderRequestItem"]>

  export type OrderRequestItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderRequestId?: boolean
    productId?: boolean
    modelName?: boolean
    productName?: boolean
    sizeLabel?: boolean
    quantity?: boolean
    imageUrl?: boolean
    orderRequest?: boolean | OrderRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderRequestItem"]>

  export type OrderRequestItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderRequestId?: boolean
    productId?: boolean
    modelName?: boolean
    productName?: boolean
    sizeLabel?: boolean
    quantity?: boolean
    imageUrl?: boolean
    orderRequest?: boolean | OrderRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderRequestItem"]>

  export type OrderRequestItemSelectScalar = {
    id?: boolean
    orderRequestId?: boolean
    productId?: boolean
    modelName?: boolean
    productName?: boolean
    sizeLabel?: boolean
    quantity?: boolean
    imageUrl?: boolean
  }

  export type OrderRequestItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderRequestId" | "productId" | "modelName" | "productName" | "sizeLabel" | "quantity" | "imageUrl", ExtArgs["result"]["orderRequestItem"]>
  export type OrderRequestItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderRequest?: boolean | OrderRequestDefaultArgs<ExtArgs>
  }
  export type OrderRequestItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderRequest?: boolean | OrderRequestDefaultArgs<ExtArgs>
  }
  export type OrderRequestItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderRequest?: boolean | OrderRequestDefaultArgs<ExtArgs>
  }

  export type $OrderRequestItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderRequestItem"
    objects: {
      orderRequest: Prisma.$OrderRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderRequestId: string
      productId: string | null
      modelName: string
      productName: string
      sizeLabel: string | null
      quantity: number
      imageUrl: string | null
    }, ExtArgs["result"]["orderRequestItem"]>
    composites: {}
  }

  type OrderRequestItemGetPayload<S extends boolean | null | undefined | OrderRequestItemDefaultArgs> = $Result.GetResult<Prisma.$OrderRequestItemPayload, S>

  type OrderRequestItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderRequestItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderRequestItemCountAggregateInputType | true
    }

  export interface OrderRequestItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderRequestItem'], meta: { name: 'OrderRequestItem' } }
    /**
     * Find zero or one OrderRequestItem that matches the filter.
     * @param {OrderRequestItemFindUniqueArgs} args - Arguments to find a OrderRequestItem
     * @example
     * // Get one OrderRequestItem
     * const orderRequestItem = await prisma.orderRequestItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderRequestItemFindUniqueArgs>(args: SelectSubset<T, OrderRequestItemFindUniqueArgs<ExtArgs>>): Prisma__OrderRequestItemClient<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderRequestItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderRequestItemFindUniqueOrThrowArgs} args - Arguments to find a OrderRequestItem
     * @example
     * // Get one OrderRequestItem
     * const orderRequestItem = await prisma.orderRequestItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderRequestItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderRequestItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderRequestItemClient<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderRequestItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestItemFindFirstArgs} args - Arguments to find a OrderRequestItem
     * @example
     * // Get one OrderRequestItem
     * const orderRequestItem = await prisma.orderRequestItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderRequestItemFindFirstArgs>(args?: SelectSubset<T, OrderRequestItemFindFirstArgs<ExtArgs>>): Prisma__OrderRequestItemClient<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderRequestItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestItemFindFirstOrThrowArgs} args - Arguments to find a OrderRequestItem
     * @example
     * // Get one OrderRequestItem
     * const orderRequestItem = await prisma.orderRequestItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderRequestItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderRequestItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderRequestItemClient<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderRequestItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderRequestItems
     * const orderRequestItems = await prisma.orderRequestItem.findMany()
     * 
     * // Get first 10 OrderRequestItems
     * const orderRequestItems = await prisma.orderRequestItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderRequestItemWithIdOnly = await prisma.orderRequestItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderRequestItemFindManyArgs>(args?: SelectSubset<T, OrderRequestItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderRequestItem.
     * @param {OrderRequestItemCreateArgs} args - Arguments to create a OrderRequestItem.
     * @example
     * // Create one OrderRequestItem
     * const OrderRequestItem = await prisma.orderRequestItem.create({
     *   data: {
     *     // ... data to create a OrderRequestItem
     *   }
     * })
     * 
     */
    create<T extends OrderRequestItemCreateArgs>(args: SelectSubset<T, OrderRequestItemCreateArgs<ExtArgs>>): Prisma__OrderRequestItemClient<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderRequestItems.
     * @param {OrderRequestItemCreateManyArgs} args - Arguments to create many OrderRequestItems.
     * @example
     * // Create many OrderRequestItems
     * const orderRequestItem = await prisma.orderRequestItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderRequestItemCreateManyArgs>(args?: SelectSubset<T, OrderRequestItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderRequestItems and returns the data saved in the database.
     * @param {OrderRequestItemCreateManyAndReturnArgs} args - Arguments to create many OrderRequestItems.
     * @example
     * // Create many OrderRequestItems
     * const orderRequestItem = await prisma.orderRequestItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderRequestItems and only return the `id`
     * const orderRequestItemWithIdOnly = await prisma.orderRequestItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderRequestItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderRequestItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderRequestItem.
     * @param {OrderRequestItemDeleteArgs} args - Arguments to delete one OrderRequestItem.
     * @example
     * // Delete one OrderRequestItem
     * const OrderRequestItem = await prisma.orderRequestItem.delete({
     *   where: {
     *     // ... filter to delete one OrderRequestItem
     *   }
     * })
     * 
     */
    delete<T extends OrderRequestItemDeleteArgs>(args: SelectSubset<T, OrderRequestItemDeleteArgs<ExtArgs>>): Prisma__OrderRequestItemClient<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderRequestItem.
     * @param {OrderRequestItemUpdateArgs} args - Arguments to update one OrderRequestItem.
     * @example
     * // Update one OrderRequestItem
     * const orderRequestItem = await prisma.orderRequestItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderRequestItemUpdateArgs>(args: SelectSubset<T, OrderRequestItemUpdateArgs<ExtArgs>>): Prisma__OrderRequestItemClient<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderRequestItems.
     * @param {OrderRequestItemDeleteManyArgs} args - Arguments to filter OrderRequestItems to delete.
     * @example
     * // Delete a few OrderRequestItems
     * const { count } = await prisma.orderRequestItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderRequestItemDeleteManyArgs>(args?: SelectSubset<T, OrderRequestItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderRequestItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderRequestItems
     * const orderRequestItem = await prisma.orderRequestItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderRequestItemUpdateManyArgs>(args: SelectSubset<T, OrderRequestItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderRequestItems and returns the data updated in the database.
     * @param {OrderRequestItemUpdateManyAndReturnArgs} args - Arguments to update many OrderRequestItems.
     * @example
     * // Update many OrderRequestItems
     * const orderRequestItem = await prisma.orderRequestItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderRequestItems and only return the `id`
     * const orderRequestItemWithIdOnly = await prisma.orderRequestItem.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends OrderRequestItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderRequestItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderRequestItem.
     * @param {OrderRequestItemUpsertArgs} args - Arguments to update or create a OrderRequestItem.
     * @example
     * // Update or create a OrderRequestItem
     * const orderRequestItem = await prisma.orderRequestItem.upsert({
     *   create: {
     *     // ... data to create a OrderRequestItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderRequestItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderRequestItemUpsertArgs>(args: SelectSubset<T, OrderRequestItemUpsertArgs<ExtArgs>>): Prisma__OrderRequestItemClient<$Result.GetResult<Prisma.$OrderRequestItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderRequestItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestItemCountArgs} args - Arguments to filter OrderRequestItems to count.
     * @example
     * // Count the number of OrderRequestItems
     * const count = await prisma.orderRequestItem.count({
     *   where: {
     *     // ... the filter for the OrderRequestItems we want to count
     *   }
     * })
    **/
    count<T extends OrderRequestItemCountArgs>(
      args?: Subset<T, OrderRequestItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderRequestItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderRequestItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderRequestItemAggregateArgs>(args: Subset<T, OrderRequestItemAggregateArgs>): Prisma.PrismaPromise<GetOrderRequestItemAggregateType<T>>

    /**
     * Group by OrderRequestItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderRequestItemGroupByArgs} args - Group by arguments.
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
      T extends OrderRequestItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderRequestItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderRequestItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderRequestItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderRequestItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderRequestItem model
   */
  readonly fields: OrderRequestItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderRequestItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderRequestItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderRequest<T extends OrderRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderRequestDefaultArgs<ExtArgs>>): Prisma__OrderRequestClient<$Result.GetResult<Prisma.$OrderRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderRequestItem model
   */
  interface OrderRequestItemFieldRefs {
    readonly id: FieldRef<"OrderRequestItem", 'String'>
    readonly orderRequestId: FieldRef<"OrderRequestItem", 'String'>
    readonly productId: FieldRef<"OrderRequestItem", 'String'>
    readonly modelName: FieldRef<"OrderRequestItem", 'String'>
    readonly productName: FieldRef<"OrderRequestItem", 'String'>
    readonly sizeLabel: FieldRef<"OrderRequestItem", 'String'>
    readonly quantity: FieldRef<"OrderRequestItem", 'Int'>
    readonly imageUrl: FieldRef<"OrderRequestItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderRequestItem findUnique
   */
  export type OrderRequestItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequestItem to fetch.
     */
    where: OrderRequestItemWhereUniqueInput
  }

  /**
   * OrderRequestItem findUniqueOrThrow
   */
  export type OrderRequestItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequestItem to fetch.
     */
    where: OrderRequestItemWhereUniqueInput
  }

  /**
   * OrderRequestItem findFirst
   */
  export type OrderRequestItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequestItem to fetch.
     */
    where?: OrderRequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRequestItems to fetch.
     */
    orderBy?: OrderRequestItemOrderByWithRelationInput | OrderRequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderRequestItems.
     */
    cursor?: OrderRequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderRequestItems.
     */
    distinct?: OrderRequestItemScalarFieldEnum | OrderRequestItemScalarFieldEnum[]
  }

  /**
   * OrderRequestItem findFirstOrThrow
   */
  export type OrderRequestItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequestItem to fetch.
     */
    where?: OrderRequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRequestItems to fetch.
     */
    orderBy?: OrderRequestItemOrderByWithRelationInput | OrderRequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderRequestItems.
     */
    cursor?: OrderRequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRequestItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderRequestItems.
     */
    distinct?: OrderRequestItemScalarFieldEnum | OrderRequestItemScalarFieldEnum[]
  }

  /**
   * OrderRequestItem findMany
   */
  export type OrderRequestItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderRequestItems to fetch.
     */
    where?: OrderRequestItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderRequestItems to fetch.
     */
    orderBy?: OrderRequestItemOrderByWithRelationInput | OrderRequestItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderRequestItems.
     */
    cursor?: OrderRequestItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderRequestItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderRequestItems.
     */
    skip?: number
    distinct?: OrderRequestItemScalarFieldEnum | OrderRequestItemScalarFieldEnum[]
  }

  /**
   * OrderRequestItem create
   */
  export type OrderRequestItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderRequestItem.
     */
    data: XOR<OrderRequestItemCreateInput, OrderRequestItemUncheckedCreateInput>
  }

  /**
   * OrderRequestItem createMany
   */
  export type OrderRequestItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderRequestItems.
     */
    data: OrderRequestItemCreateManyInput | OrderRequestItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderRequestItem createManyAndReturn
   */
  export type OrderRequestItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderRequestItems.
     */
    data: OrderRequestItemCreateManyInput | OrderRequestItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderRequestItem update
   */
  export type OrderRequestItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderRequestItem.
     */
    data: XOR<OrderRequestItemUpdateInput, OrderRequestItemUncheckedUpdateInput>
    /**
     * Choose, which OrderRequestItem to update.
     */
    where: OrderRequestItemWhereUniqueInput
  }

  /**
   * OrderRequestItem updateMany
   */
  export type OrderRequestItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderRequestItems.
     */
    data: XOR<OrderRequestItemUpdateManyMutationInput, OrderRequestItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderRequestItems to update
     */
    where?: OrderRequestItemWhereInput
    /**
     * Limit how many OrderRequestItems to update.
     */
    limit?: number
  }

  /**
   * OrderRequestItem updateManyAndReturn
   */
  export type OrderRequestItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderRequestItems.
     */
    data: XOR<OrderRequestItemUpdateManyMutationInput, OrderRequestItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderRequestItems to update
     */
    where?: OrderRequestItemWhereInput
    /**
     * Limit how many OrderRequestItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderRequestItem upsert
   */
  export type OrderRequestItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderRequestItem to update in case it exists.
     */
    where: OrderRequestItemWhereUniqueInput
    /**
     * In case the OrderRequestItem found by the `where` argument doesn't exist, create a new OrderRequestItem with this data.
     */
    create: XOR<OrderRequestItemCreateInput, OrderRequestItemUncheckedCreateInput>
    /**
     * In case the OrderRequestItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderRequestItemUpdateInput, OrderRequestItemUncheckedUpdateInput>
  }

  /**
   * OrderRequestItem delete
   */
  export type OrderRequestItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
    /**
     * Filter which OrderRequestItem to delete.
     */
    where: OrderRequestItemWhereUniqueInput
  }

  /**
   * OrderRequestItem deleteMany
   */
  export type OrderRequestItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderRequestItems to delete
     */
    where?: OrderRequestItemWhereInput
    /**
     * Limit how many OrderRequestItems to delete.
     */
    limit?: number
  }

  /**
   * OrderRequestItem without action
   */
  export type OrderRequestItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderRequestItem
     */
    select?: OrderRequestItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderRequestItem
     */
    omit?: OrderRequestItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderRequestItemInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    heroImage: 'heroImage',
    accent: 'accent',
    sortOrder: 'sortOrder',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    imageUrl: 'imageUrl',
    sortOrder: 'sortOrder',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const ProductModelScalarFieldEnum: {
    id: 'id',
    brandId: 'brandId',
    name: 'name',
    slug: 'slug',
    story: 'story',
    heroImage: 'heroImage',
    priceHint: 'priceHint',
    sortOrder: 'sortOrder',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductModelScalarFieldEnum = (typeof ProductModelScalarFieldEnum)[keyof typeof ProductModelScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    name: 'name',
    color: 'color',
    priceText: 'priceText',
    imageUrl: 'imageUrl',
    imageAlt: 'imageAlt',
    storageProvider: 'storageProvider',
    storageKey: 'storageKey',
    mediaBytes: 'mediaBytes',
    mediaMimeType: 'mediaMimeType',
    cloudinaryPublicId: 'cloudinaryPublicId',
    status: 'status',
    isFeatured: 'isFeatured',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductSizeScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    sizeLabel: 'sizeLabel',
    isAvailable: 'isAvailable'
  };

  export type ProductSizeScalarFieldEnum = (typeof ProductSizeScalarFieldEnum)[keyof typeof ProductSizeScalarFieldEnum]


  export const OrderRequestScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    phone: 'phone',
    snapchat: 'snapchat',
    city: 'city',
    note: 'note',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderRequestScalarFieldEnum = (typeof OrderRequestScalarFieldEnum)[keyof typeof OrderRequestScalarFieldEnum]


  export const OrderRequestItemScalarFieldEnum: {
    id: 'id',
    orderRequestId: 'orderRequestId',
    productId: 'productId',
    modelName: 'modelName',
    productName: 'productName',
    sizeLabel: 'sizeLabel',
    quantity: 'quantity',
    imageUrl: 'imageUrl'
  };

  export type OrderRequestItemScalarFieldEnum = (typeof OrderRequestItemScalarFieldEnum)[keyof typeof OrderRequestItemScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StorageProvider'
   */
  export type EnumStorageProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageProvider'>
    


  /**
   * Reference to a field of type 'StorageProvider[]'
   */
  export type ListEnumStorageProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageProvider[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    heroImage?: StringNullableFilter<"Category"> | string | null
    accent?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    isVisible?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    brands?: BrandListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    heroImage?: SortOrderInput | SortOrder
    accent?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brands?: BrandOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    heroImage?: StringNullableFilter<"Category"> | string | null
    accent?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    isVisible?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    brands?: BrandListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    heroImage?: SortOrderInput | SortOrder
    accent?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    heroImage?: StringNullableWithAggregatesFilter<"Category"> | string | null
    accent?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Category"> | number
    isVisible?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    categoryId?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    slug?: StringFilter<"Brand"> | string
    description?: StringNullableFilter<"Brand"> | string | null
    imageUrl?: StringNullableFilter<"Brand"> | string | null
    sortOrder?: IntFilter<"Brand"> | number
    isVisible?: BoolFilter<"Brand"> | boolean
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    models?: ProductModelListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    models?: ProductModelOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    categoryId?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    description?: StringNullableFilter<"Brand"> | string | null
    imageUrl?: StringNullableFilter<"Brand"> | string | null
    sortOrder?: IntFilter<"Brand"> | number
    isVisible?: BoolFilter<"Brand"> | boolean
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    models?: ProductModelListRelationFilter
  }, "id" | "slug">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    categoryId?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringWithAggregatesFilter<"Brand"> | string
    slug?: StringWithAggregatesFilter<"Brand"> | string
    description?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Brand"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Brand"> | number
    isVisible?: BoolWithAggregatesFilter<"Brand"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brand"> | Date | string
  }

  export type ProductModelWhereInput = {
    AND?: ProductModelWhereInput | ProductModelWhereInput[]
    OR?: ProductModelWhereInput[]
    NOT?: ProductModelWhereInput | ProductModelWhereInput[]
    id?: StringFilter<"ProductModel"> | string
    brandId?: StringFilter<"ProductModel"> | string
    name?: StringFilter<"ProductModel"> | string
    slug?: StringFilter<"ProductModel"> | string
    story?: StringNullableFilter<"ProductModel"> | string | null
    heroImage?: StringNullableFilter<"ProductModel"> | string | null
    priceHint?: StringNullableFilter<"ProductModel"> | string | null
    sortOrder?: IntFilter<"ProductModel"> | number
    isVisible?: BoolFilter<"ProductModel"> | boolean
    createdAt?: DateTimeFilter<"ProductModel"> | Date | string
    updatedAt?: DateTimeFilter<"ProductModel"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    products?: ProductListRelationFilter
  }

  export type ProductModelOrderByWithRelationInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    story?: SortOrderInput | SortOrder
    heroImage?: SortOrderInput | SortOrder
    priceHint?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type ProductModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductModelWhereInput | ProductModelWhereInput[]
    OR?: ProductModelWhereInput[]
    NOT?: ProductModelWhereInput | ProductModelWhereInput[]
    brandId?: StringFilter<"ProductModel"> | string
    name?: StringFilter<"ProductModel"> | string
    story?: StringNullableFilter<"ProductModel"> | string | null
    heroImage?: StringNullableFilter<"ProductModel"> | string | null
    priceHint?: StringNullableFilter<"ProductModel"> | string | null
    sortOrder?: IntFilter<"ProductModel"> | number
    isVisible?: BoolFilter<"ProductModel"> | boolean
    createdAt?: DateTimeFilter<"ProductModel"> | Date | string
    updatedAt?: DateTimeFilter<"ProductModel"> | Date | string
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    products?: ProductListRelationFilter
  }, "id" | "slug">

  export type ProductModelOrderByWithAggregationInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    story?: SortOrderInput | SortOrder
    heroImage?: SortOrderInput | SortOrder
    priceHint?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductModelCountOrderByAggregateInput
    _avg?: ProductModelAvgOrderByAggregateInput
    _max?: ProductModelMaxOrderByAggregateInput
    _min?: ProductModelMinOrderByAggregateInput
    _sum?: ProductModelSumOrderByAggregateInput
  }

  export type ProductModelScalarWhereWithAggregatesInput = {
    AND?: ProductModelScalarWhereWithAggregatesInput | ProductModelScalarWhereWithAggregatesInput[]
    OR?: ProductModelScalarWhereWithAggregatesInput[]
    NOT?: ProductModelScalarWhereWithAggregatesInput | ProductModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductModel"> | string
    brandId?: StringWithAggregatesFilter<"ProductModel"> | string
    name?: StringWithAggregatesFilter<"ProductModel"> | string
    slug?: StringWithAggregatesFilter<"ProductModel"> | string
    story?: StringNullableWithAggregatesFilter<"ProductModel"> | string | null
    heroImage?: StringNullableWithAggregatesFilter<"ProductModel"> | string | null
    priceHint?: StringNullableWithAggregatesFilter<"ProductModel"> | string | null
    sortOrder?: IntWithAggregatesFilter<"ProductModel"> | number
    isVisible?: BoolWithAggregatesFilter<"ProductModel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProductModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductModel"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    modelId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    color?: StringNullableFilter<"Product"> | string | null
    priceText?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringFilter<"Product"> | string
    imageAlt?: StringNullableFilter<"Product"> | string | null
    storageProvider?: EnumStorageProviderFilter<"Product"> | $Enums.StorageProvider
    storageKey?: StringNullableFilter<"Product"> | string | null
    mediaBytes?: BigIntNullableFilter<"Product"> | bigint | number | null
    mediaMimeType?: StringNullableFilter<"Product"> | string | null
    cloudinaryPublicId?: StringNullableFilter<"Product"> | string | null
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    isFeatured?: BoolFilter<"Product"> | boolean
    sortOrder?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    model?: XOR<ProductModelScalarRelationFilter, ProductModelWhereInput>
    sizes?: ProductSizeListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    priceText?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrderInput | SortOrder
    storageProvider?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    mediaBytes?: SortOrderInput | SortOrder
    mediaMimeType?: SortOrderInput | SortOrder
    cloudinaryPublicId?: SortOrderInput | SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    model?: ProductModelOrderByWithRelationInput
    sizes?: ProductSizeOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cloudinaryPublicId?: string
    storageProvider_storageKey?: ProductStorageProviderStorageKeyCompoundUniqueInput
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    modelId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    color?: StringNullableFilter<"Product"> | string | null
    priceText?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringFilter<"Product"> | string
    imageAlt?: StringNullableFilter<"Product"> | string | null
    storageProvider?: EnumStorageProviderFilter<"Product"> | $Enums.StorageProvider
    storageKey?: StringNullableFilter<"Product"> | string | null
    mediaBytes?: BigIntNullableFilter<"Product"> | bigint | number | null
    mediaMimeType?: StringNullableFilter<"Product"> | string | null
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    isFeatured?: BoolFilter<"Product"> | boolean
    sortOrder?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    model?: XOR<ProductModelScalarRelationFilter, ProductModelWhereInput>
    sizes?: ProductSizeListRelationFilter
  }, "id" | "cloudinaryPublicId" | "storageProvider_storageKey">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    priceText?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrderInput | SortOrder
    storageProvider?: SortOrder
    storageKey?: SortOrderInput | SortOrder
    mediaBytes?: SortOrderInput | SortOrder
    mediaMimeType?: SortOrderInput | SortOrder
    cloudinaryPublicId?: SortOrderInput | SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    modelId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    color?: StringNullableWithAggregatesFilter<"Product"> | string | null
    priceText?: StringNullableWithAggregatesFilter<"Product"> | string | null
    imageUrl?: StringWithAggregatesFilter<"Product"> | string
    imageAlt?: StringNullableWithAggregatesFilter<"Product"> | string | null
    storageProvider?: EnumStorageProviderWithAggregatesFilter<"Product"> | $Enums.StorageProvider
    storageKey?: StringNullableWithAggregatesFilter<"Product"> | string | null
    mediaBytes?: BigIntNullableWithAggregatesFilter<"Product"> | bigint | number | null
    mediaMimeType?: StringNullableWithAggregatesFilter<"Product"> | string | null
    cloudinaryPublicId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    isFeatured?: BoolWithAggregatesFilter<"Product"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductSizeWhereInput = {
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    id?: StringFilter<"ProductSize"> | string
    productId?: StringFilter<"ProductSize"> | string
    sizeLabel?: StringFilter<"ProductSize"> | string
    isAvailable?: BoolFilter<"ProductSize"> | boolean
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductSizeOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeLabel?: SortOrder
    isAvailable?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    productId?: StringFilter<"ProductSize"> | string
    sizeLabel?: StringFilter<"ProductSize"> | string
    isAvailable?: BoolFilter<"ProductSize"> | boolean
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductSizeOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeLabel?: SortOrder
    isAvailable?: SortOrder
    _count?: ProductSizeCountOrderByAggregateInput
    _max?: ProductSizeMaxOrderByAggregateInput
    _min?: ProductSizeMinOrderByAggregateInput
  }

  export type ProductSizeScalarWhereWithAggregatesInput = {
    AND?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    OR?: ProductSizeScalarWhereWithAggregatesInput[]
    NOT?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductSize"> | string
    productId?: StringWithAggregatesFilter<"ProductSize"> | string
    sizeLabel?: StringWithAggregatesFilter<"ProductSize"> | string
    isAvailable?: BoolWithAggregatesFilter<"ProductSize"> | boolean
  }

  export type OrderRequestWhereInput = {
    AND?: OrderRequestWhereInput | OrderRequestWhereInput[]
    OR?: OrderRequestWhereInput[]
    NOT?: OrderRequestWhereInput | OrderRequestWhereInput[]
    id?: StringFilter<"OrderRequest"> | string
    customerName?: StringFilter<"OrderRequest"> | string
    phone?: StringNullableFilter<"OrderRequest"> | string | null
    snapchat?: StringNullableFilter<"OrderRequest"> | string | null
    city?: StringNullableFilter<"OrderRequest"> | string | null
    note?: StringNullableFilter<"OrderRequest"> | string | null
    status?: EnumOrderStatusFilter<"OrderRequest"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"OrderRequest"> | Date | string
    updatedAt?: DateTimeFilter<"OrderRequest"> | Date | string
    items?: OrderRequestItemListRelationFilter
  }

  export type OrderRequestOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrderInput | SortOrder
    snapchat?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: OrderRequestItemOrderByRelationAggregateInput
  }

  export type OrderRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderRequestWhereInput | OrderRequestWhereInput[]
    OR?: OrderRequestWhereInput[]
    NOT?: OrderRequestWhereInput | OrderRequestWhereInput[]
    customerName?: StringFilter<"OrderRequest"> | string
    phone?: StringNullableFilter<"OrderRequest"> | string | null
    snapchat?: StringNullableFilter<"OrderRequest"> | string | null
    city?: StringNullableFilter<"OrderRequest"> | string | null
    note?: StringNullableFilter<"OrderRequest"> | string | null
    status?: EnumOrderStatusFilter<"OrderRequest"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"OrderRequest"> | Date | string
    updatedAt?: DateTimeFilter<"OrderRequest"> | Date | string
    items?: OrderRequestItemListRelationFilter
  }, "id">

  export type OrderRequestOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrderInput | SortOrder
    snapchat?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderRequestCountOrderByAggregateInput
    _max?: OrderRequestMaxOrderByAggregateInput
    _min?: OrderRequestMinOrderByAggregateInput
  }

  export type OrderRequestScalarWhereWithAggregatesInput = {
    AND?: OrderRequestScalarWhereWithAggregatesInput | OrderRequestScalarWhereWithAggregatesInput[]
    OR?: OrderRequestScalarWhereWithAggregatesInput[]
    NOT?: OrderRequestScalarWhereWithAggregatesInput | OrderRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderRequest"> | string
    customerName?: StringWithAggregatesFilter<"OrderRequest"> | string
    phone?: StringNullableWithAggregatesFilter<"OrderRequest"> | string | null
    snapchat?: StringNullableWithAggregatesFilter<"OrderRequest"> | string | null
    city?: StringNullableWithAggregatesFilter<"OrderRequest"> | string | null
    note?: StringNullableWithAggregatesFilter<"OrderRequest"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"OrderRequest"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"OrderRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderRequest"> | Date | string
  }

  export type OrderRequestItemWhereInput = {
    AND?: OrderRequestItemWhereInput | OrderRequestItemWhereInput[]
    OR?: OrderRequestItemWhereInput[]
    NOT?: OrderRequestItemWhereInput | OrderRequestItemWhereInput[]
    id?: StringFilter<"OrderRequestItem"> | string
    orderRequestId?: StringFilter<"OrderRequestItem"> | string
    productId?: StringNullableFilter<"OrderRequestItem"> | string | null
    modelName?: StringFilter<"OrderRequestItem"> | string
    productName?: StringFilter<"OrderRequestItem"> | string
    sizeLabel?: StringNullableFilter<"OrderRequestItem"> | string | null
    quantity?: IntFilter<"OrderRequestItem"> | number
    imageUrl?: StringNullableFilter<"OrderRequestItem"> | string | null
    orderRequest?: XOR<OrderRequestScalarRelationFilter, OrderRequestWhereInput>
  }

  export type OrderRequestItemOrderByWithRelationInput = {
    id?: SortOrder
    orderRequestId?: SortOrder
    productId?: SortOrderInput | SortOrder
    modelName?: SortOrder
    productName?: SortOrder
    sizeLabel?: SortOrderInput | SortOrder
    quantity?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    orderRequest?: OrderRequestOrderByWithRelationInput
  }

  export type OrderRequestItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderRequestItemWhereInput | OrderRequestItemWhereInput[]
    OR?: OrderRequestItemWhereInput[]
    NOT?: OrderRequestItemWhereInput | OrderRequestItemWhereInput[]
    orderRequestId?: StringFilter<"OrderRequestItem"> | string
    productId?: StringNullableFilter<"OrderRequestItem"> | string | null
    modelName?: StringFilter<"OrderRequestItem"> | string
    productName?: StringFilter<"OrderRequestItem"> | string
    sizeLabel?: StringNullableFilter<"OrderRequestItem"> | string | null
    quantity?: IntFilter<"OrderRequestItem"> | number
    imageUrl?: StringNullableFilter<"OrderRequestItem"> | string | null
    orderRequest?: XOR<OrderRequestScalarRelationFilter, OrderRequestWhereInput>
  }, "id">

  export type OrderRequestItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderRequestId?: SortOrder
    productId?: SortOrderInput | SortOrder
    modelName?: SortOrder
    productName?: SortOrder
    sizeLabel?: SortOrderInput | SortOrder
    quantity?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: OrderRequestItemCountOrderByAggregateInput
    _avg?: OrderRequestItemAvgOrderByAggregateInput
    _max?: OrderRequestItemMaxOrderByAggregateInput
    _min?: OrderRequestItemMinOrderByAggregateInput
    _sum?: OrderRequestItemSumOrderByAggregateInput
  }

  export type OrderRequestItemScalarWhereWithAggregatesInput = {
    AND?: OrderRequestItemScalarWhereWithAggregatesInput | OrderRequestItemScalarWhereWithAggregatesInput[]
    OR?: OrderRequestItemScalarWhereWithAggregatesInput[]
    NOT?: OrderRequestItemScalarWhereWithAggregatesInput | OrderRequestItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderRequestItem"> | string
    orderRequestId?: StringWithAggregatesFilter<"OrderRequestItem"> | string
    productId?: StringNullableWithAggregatesFilter<"OrderRequestItem"> | string | null
    modelName?: StringWithAggregatesFilter<"OrderRequestItem"> | string
    productName?: StringWithAggregatesFilter<"OrderRequestItem"> | string
    sizeLabel?: StringNullableWithAggregatesFilter<"OrderRequestItem"> | string | null
    quantity?: IntWithAggregatesFilter<"OrderRequestItem"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"OrderRequestItem"> | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    heroImage?: string | null
    accent?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brands?: BrandCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    heroImage?: string | null
    accent?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brands?: BrandUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brands?: BrandUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brands?: BrandUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    heroImage?: string | null
    accent?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutBrandsInput
    models?: ProductModelCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ProductModelUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutBrandsNestedInput
    models?: ProductModelUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ProductModelUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductModelCreateInput = {
    id?: string
    name: string
    slug: string
    story?: string | null
    heroImage?: string | null
    priceHint?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutModelsInput
    products?: ProductCreateNestedManyWithoutModelInput
  }

  export type ProductModelUncheckedCreateInput = {
    id?: string
    brandId: string
    name: string
    slug: string
    story?: string | null
    heroImage?: string | null
    priceHint?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutModelInput
  }

  export type ProductModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutModelsNestedInput
    products?: ProductUpdateManyWithoutModelNestedInput
  }

  export type ProductModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ProductModelCreateManyInput = {
    id?: string
    brandId: string
    name: string
    slug: string
    story?: string | null
    heroImage?: string | null
    priceHint?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    color?: string | null
    priceText?: string | null
    imageUrl: string
    imageAlt?: string | null
    storageProvider?: $Enums.StorageProvider
    storageKey?: string | null
    mediaBytes?: bigint | number | null
    mediaMimeType?: string | null
    cloudinaryPublicId?: string | null
    status?: $Enums.ProductStatus
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    model: ProductModelCreateNestedOneWithoutProductsInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    modelId: string
    name: string
    color?: string | null
    priceText?: string | null
    imageUrl: string
    imageAlt?: string | null
    storageProvider?: $Enums.StorageProvider
    storageKey?: string | null
    mediaBytes?: bigint | number | null
    mediaMimeType?: string | null
    cloudinaryPublicId?: string | null
    status?: $Enums.ProductStatus
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ProductModelUpdateOneRequiredWithoutProductsNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    modelId: string
    name: string
    color?: string | null
    priceText?: string | null
    imageUrl: string
    imageAlt?: string | null
    storageProvider?: $Enums.StorageProvider
    storageKey?: string | null
    mediaBytes?: bigint | number | null
    mediaMimeType?: string | null
    cloudinaryPublicId?: string | null
    status?: $Enums.ProductStatus
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSizeCreateInput = {
    id?: string
    sizeLabel: string
    isAvailable?: boolean
    product: ProductCreateNestedOneWithoutSizesInput
  }

  export type ProductSizeUncheckedCreateInput = {
    id?: string
    productId: string
    sizeLabel: string
    isAvailable?: boolean
  }

  export type ProductSizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sizeLabel?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
  }

  export type ProductSizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeLabel?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductSizeCreateManyInput = {
    id?: string
    productId: string
    sizeLabel: string
    isAvailable?: boolean
  }

  export type ProductSizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sizeLabel?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductSizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    sizeLabel?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderRequestCreateInput = {
    id?: string
    customerName: string
    phone?: string | null
    snapchat?: string | null
    city?: string | null
    note?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderRequestItemCreateNestedManyWithoutOrderRequestInput
  }

  export type OrderRequestUncheckedCreateInput = {
    id?: string
    customerName: string
    phone?: string | null
    snapchat?: string | null
    city?: string | null
    note?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderRequestItemUncheckedCreateNestedManyWithoutOrderRequestInput
  }

  export type OrderRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    snapchat?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderRequestItemUpdateManyWithoutOrderRequestNestedInput
  }

  export type OrderRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    snapchat?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderRequestItemUncheckedUpdateManyWithoutOrderRequestNestedInput
  }

  export type OrderRequestCreateManyInput = {
    id?: string
    customerName: string
    phone?: string | null
    snapchat?: string | null
    city?: string | null
    note?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    snapchat?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    snapchat?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderRequestItemCreateInput = {
    id?: string
    productId?: string | null
    modelName: string
    productName: string
    sizeLabel?: string | null
    quantity?: number
    imageUrl?: string | null
    orderRequest: OrderRequestCreateNestedOneWithoutItemsInput
  }

  export type OrderRequestItemUncheckedCreateInput = {
    id?: string
    orderRequestId: string
    productId?: string | null
    modelName: string
    productName: string
    sizeLabel?: string | null
    quantity?: number
    imageUrl?: string | null
  }

  export type OrderRequestItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    orderRequest?: OrderRequestUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderRequestItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRequestId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderRequestItemCreateManyInput = {
    id?: string
    orderRequestId: string
    productId?: string | null
    modelName: string
    productName: string
    sizeLabel?: string | null
    quantity?: number
    imageUrl?: string | null
  }

  export type OrderRequestItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderRequestItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderRequestId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BrandListRelationFilter = {
    every?: BrandWhereInput
    some?: BrandWhereInput
    none?: BrandWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BrandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    heroImage?: SortOrder
    accent?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    heroImage?: SortOrder
    accent?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    heroImage?: SortOrder
    accent?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ProductModelListRelationFilter = {
    every?: ProductModelWhereInput
    some?: ProductModelWhereInput
    none?: ProductModelWhereInput
  }

  export type ProductModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductModelCountOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    story?: SortOrder
    heroImage?: SortOrder
    priceHint?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductModelAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProductModelMaxOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    story?: SortOrder
    heroImage?: SortOrder
    priceHint?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductModelMinOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    story?: SortOrder
    heroImage?: SortOrder
    priceHint?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductModelSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumStorageProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageProvider | EnumStorageProviderFieldRefInput<$PrismaModel>
    in?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageProviderFilter<$PrismaModel> | $Enums.StorageProvider
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type ProductModelScalarRelationFilter = {
    is?: ProductModelWhereInput
    isNot?: ProductModelWhereInput
  }

  export type ProductSizeListRelationFilter = {
    every?: ProductSizeWhereInput
    some?: ProductSizeWhereInput
    none?: ProductSizeWhereInput
  }

  export type ProductSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductStorageProviderStorageKeyCompoundUniqueInput = {
    storageProvider: $Enums.StorageProvider
    storageKey: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    priceText?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    storageProvider?: SortOrder
    storageKey?: SortOrder
    mediaBytes?: SortOrder
    mediaMimeType?: SortOrder
    cloudinaryPublicId?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    mediaBytes?: SortOrder
    sortOrder?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    priceText?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    storageProvider?: SortOrder
    storageKey?: SortOrder
    mediaBytes?: SortOrder
    mediaMimeType?: SortOrder
    cloudinaryPublicId?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    priceText?: SortOrder
    imageUrl?: SortOrder
    imageAlt?: SortOrder
    storageProvider?: SortOrder
    storageKey?: SortOrder
    mediaBytes?: SortOrder
    mediaMimeType?: SortOrder
    cloudinaryPublicId?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    mediaBytes?: SortOrder
    sortOrder?: SortOrder
  }

  export type EnumStorageProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageProvider | EnumStorageProviderFieldRefInput<$PrismaModel>
    in?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageProviderWithAggregatesFilter<$PrismaModel> | $Enums.StorageProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageProviderFilter<$PrismaModel>
    _max?: NestedEnumStorageProviderFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductSizeCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeLabel?: SortOrder
    isAvailable?: SortOrder
  }

  export type ProductSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeLabel?: SortOrder
    isAvailable?: SortOrder
  }

  export type ProductSizeMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    sizeLabel?: SortOrder
    isAvailable?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderRequestItemListRelationFilter = {
    every?: OrderRequestItemWhereInput
    some?: OrderRequestItemWhereInput
    none?: OrderRequestItemWhereInput
  }

  export type OrderRequestItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderRequestCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    snapchat?: SortOrder
    city?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    snapchat?: SortOrder
    city?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderRequestMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phone?: SortOrder
    snapchat?: SortOrder
    city?: SortOrder
    note?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderRequestScalarRelationFilter = {
    is?: OrderRequestWhereInput
    isNot?: OrderRequestWhereInput
  }

  export type OrderRequestItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderRequestId?: SortOrder
    productId?: SortOrder
    modelName?: SortOrder
    productName?: SortOrder
    sizeLabel?: SortOrder
    quantity?: SortOrder
    imageUrl?: SortOrder
  }

  export type OrderRequestItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type OrderRequestItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderRequestId?: SortOrder
    productId?: SortOrder
    modelName?: SortOrder
    productName?: SortOrder
    sizeLabel?: SortOrder
    quantity?: SortOrder
    imageUrl?: SortOrder
  }

  export type OrderRequestItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderRequestId?: SortOrder
    productId?: SortOrder
    modelName?: SortOrder
    productName?: SortOrder
    sizeLabel?: SortOrder
    quantity?: SortOrder
    imageUrl?: SortOrder
  }

  export type OrderRequestItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BrandCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BrandCreateWithoutCategoryInput, BrandUncheckedCreateWithoutCategoryInput> | BrandCreateWithoutCategoryInput[] | BrandUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutCategoryInput | BrandCreateOrConnectWithoutCategoryInput[]
    createMany?: BrandCreateManyCategoryInputEnvelope
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
  }

  export type BrandUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BrandCreateWithoutCategoryInput, BrandUncheckedCreateWithoutCategoryInput> | BrandCreateWithoutCategoryInput[] | BrandUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutCategoryInput | BrandCreateOrConnectWithoutCategoryInput[]
    createMany?: BrandCreateManyCategoryInputEnvelope
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BrandUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BrandCreateWithoutCategoryInput, BrandUncheckedCreateWithoutCategoryInput> | BrandCreateWithoutCategoryInput[] | BrandUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutCategoryInput | BrandCreateOrConnectWithoutCategoryInput[]
    upsert?: BrandUpsertWithWhereUniqueWithoutCategoryInput | BrandUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BrandCreateManyCategoryInputEnvelope
    set?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    disconnect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    delete?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    update?: BrandUpdateWithWhereUniqueWithoutCategoryInput | BrandUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BrandUpdateManyWithWhereWithoutCategoryInput | BrandUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BrandScalarWhereInput | BrandScalarWhereInput[]
  }

  export type BrandUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BrandCreateWithoutCategoryInput, BrandUncheckedCreateWithoutCategoryInput> | BrandCreateWithoutCategoryInput[] | BrandUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BrandCreateOrConnectWithoutCategoryInput | BrandCreateOrConnectWithoutCategoryInput[]
    upsert?: BrandUpsertWithWhereUniqueWithoutCategoryInput | BrandUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BrandCreateManyCategoryInputEnvelope
    set?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    disconnect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    delete?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    connect?: BrandWhereUniqueInput | BrandWhereUniqueInput[]
    update?: BrandUpdateWithWhereUniqueWithoutCategoryInput | BrandUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BrandUpdateManyWithWhereWithoutCategoryInput | BrandUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BrandScalarWhereInput | BrandScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutBrandsInput = {
    create?: XOR<CategoryCreateWithoutBrandsInput, CategoryUncheckedCreateWithoutBrandsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBrandsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductModelCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductModelCreateWithoutBrandInput, ProductModelUncheckedCreateWithoutBrandInput> | ProductModelCreateWithoutBrandInput[] | ProductModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductModelCreateOrConnectWithoutBrandInput | ProductModelCreateOrConnectWithoutBrandInput[]
    createMany?: ProductModelCreateManyBrandInputEnvelope
    connect?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
  }

  export type ProductModelUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductModelCreateWithoutBrandInput, ProductModelUncheckedCreateWithoutBrandInput> | ProductModelCreateWithoutBrandInput[] | ProductModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductModelCreateOrConnectWithoutBrandInput | ProductModelCreateOrConnectWithoutBrandInput[]
    createMany?: ProductModelCreateManyBrandInputEnvelope
    connect?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutBrandsNestedInput = {
    create?: XOR<CategoryCreateWithoutBrandsInput, CategoryUncheckedCreateWithoutBrandsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBrandsInput
    upsert?: CategoryUpsertWithoutBrandsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBrandsInput, CategoryUpdateWithoutBrandsInput>, CategoryUncheckedUpdateWithoutBrandsInput>
  }

  export type ProductModelUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductModelCreateWithoutBrandInput, ProductModelUncheckedCreateWithoutBrandInput> | ProductModelCreateWithoutBrandInput[] | ProductModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductModelCreateOrConnectWithoutBrandInput | ProductModelCreateOrConnectWithoutBrandInput[]
    upsert?: ProductModelUpsertWithWhereUniqueWithoutBrandInput | ProductModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductModelCreateManyBrandInputEnvelope
    set?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
    disconnect?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
    delete?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
    connect?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
    update?: ProductModelUpdateWithWhereUniqueWithoutBrandInput | ProductModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductModelUpdateManyWithWhereWithoutBrandInput | ProductModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductModelScalarWhereInput | ProductModelScalarWhereInput[]
  }

  export type ProductModelUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductModelCreateWithoutBrandInput, ProductModelUncheckedCreateWithoutBrandInput> | ProductModelCreateWithoutBrandInput[] | ProductModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductModelCreateOrConnectWithoutBrandInput | ProductModelCreateOrConnectWithoutBrandInput[]
    upsert?: ProductModelUpsertWithWhereUniqueWithoutBrandInput | ProductModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductModelCreateManyBrandInputEnvelope
    set?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
    disconnect?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
    delete?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
    connect?: ProductModelWhereUniqueInput | ProductModelWhereUniqueInput[]
    update?: ProductModelUpdateWithWhereUniqueWithoutBrandInput | ProductModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductModelUpdateManyWithWhereWithoutBrandInput | ProductModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductModelScalarWhereInput | ProductModelScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutModelsInput = {
    create?: XOR<BrandCreateWithoutModelsInput, BrandUncheckedCreateWithoutModelsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutModelsInput
    connect?: BrandWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutModelInput = {
    create?: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput> | ProductCreateWithoutModelInput[] | ProductUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutModelInput | ProductCreateOrConnectWithoutModelInput[]
    createMany?: ProductCreateManyModelInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput> | ProductCreateWithoutModelInput[] | ProductUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutModelInput | ProductCreateOrConnectWithoutModelInput[]
    createMany?: ProductCreateManyModelInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type BrandUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<BrandCreateWithoutModelsInput, BrandUncheckedCreateWithoutModelsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutModelsInput
    upsert?: BrandUpsertWithoutModelsInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutModelsInput, BrandUpdateWithoutModelsInput>, BrandUncheckedUpdateWithoutModelsInput>
  }

  export type ProductUpdateManyWithoutModelNestedInput = {
    create?: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput> | ProductCreateWithoutModelInput[] | ProductUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutModelInput | ProductCreateOrConnectWithoutModelInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutModelInput | ProductUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ProductCreateManyModelInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutModelInput | ProductUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutModelInput | ProductUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput> | ProductCreateWithoutModelInput[] | ProductUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutModelInput | ProductCreateOrConnectWithoutModelInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutModelInput | ProductUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ProductCreateManyModelInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutModelInput | ProductUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutModelInput | ProductUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductModelCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProductModelCreateWithoutProductsInput, ProductModelUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductModelCreateOrConnectWithoutProductsInput
    connect?: ProductModelWhereUniqueInput
  }

  export type ProductSizeCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type ProductSizeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type EnumStorageProviderFieldUpdateOperationsInput = {
    set?: $Enums.StorageProvider
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type ProductModelUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProductModelCreateWithoutProductsInput, ProductModelUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProductModelCreateOrConnectWithoutProductsInput
    upsert?: ProductModelUpsertWithoutProductsInput
    connect?: ProductModelWhereUniqueInput
    update?: XOR<XOR<ProductModelUpdateToOneWithWhereWithoutProductsInput, ProductModelUpdateWithoutProductsInput>, ProductModelUncheckedUpdateWithoutProductsInput>
  }

  export type ProductSizeUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutProductInput | ProductSizeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutProductInput | ProductSizeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutProductInput | ProductSizeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductSizeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutProductInput | ProductSizeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutProductInput | ProductSizeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutProductInput | ProductSizeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSizesInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    upsert?: ProductUpsertWithoutSizesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSizesInput, ProductUpdateWithoutSizesInput>, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type OrderRequestItemCreateNestedManyWithoutOrderRequestInput = {
    create?: XOR<OrderRequestItemCreateWithoutOrderRequestInput, OrderRequestItemUncheckedCreateWithoutOrderRequestInput> | OrderRequestItemCreateWithoutOrderRequestInput[] | OrderRequestItemUncheckedCreateWithoutOrderRequestInput[]
    connectOrCreate?: OrderRequestItemCreateOrConnectWithoutOrderRequestInput | OrderRequestItemCreateOrConnectWithoutOrderRequestInput[]
    createMany?: OrderRequestItemCreateManyOrderRequestInputEnvelope
    connect?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
  }

  export type OrderRequestItemUncheckedCreateNestedManyWithoutOrderRequestInput = {
    create?: XOR<OrderRequestItemCreateWithoutOrderRequestInput, OrderRequestItemUncheckedCreateWithoutOrderRequestInput> | OrderRequestItemCreateWithoutOrderRequestInput[] | OrderRequestItemUncheckedCreateWithoutOrderRequestInput[]
    connectOrCreate?: OrderRequestItemCreateOrConnectWithoutOrderRequestInput | OrderRequestItemCreateOrConnectWithoutOrderRequestInput[]
    createMany?: OrderRequestItemCreateManyOrderRequestInputEnvelope
    connect?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type OrderRequestItemUpdateManyWithoutOrderRequestNestedInput = {
    create?: XOR<OrderRequestItemCreateWithoutOrderRequestInput, OrderRequestItemUncheckedCreateWithoutOrderRequestInput> | OrderRequestItemCreateWithoutOrderRequestInput[] | OrderRequestItemUncheckedCreateWithoutOrderRequestInput[]
    connectOrCreate?: OrderRequestItemCreateOrConnectWithoutOrderRequestInput | OrderRequestItemCreateOrConnectWithoutOrderRequestInput[]
    upsert?: OrderRequestItemUpsertWithWhereUniqueWithoutOrderRequestInput | OrderRequestItemUpsertWithWhereUniqueWithoutOrderRequestInput[]
    createMany?: OrderRequestItemCreateManyOrderRequestInputEnvelope
    set?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
    disconnect?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
    delete?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
    connect?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
    update?: OrderRequestItemUpdateWithWhereUniqueWithoutOrderRequestInput | OrderRequestItemUpdateWithWhereUniqueWithoutOrderRequestInput[]
    updateMany?: OrderRequestItemUpdateManyWithWhereWithoutOrderRequestInput | OrderRequestItemUpdateManyWithWhereWithoutOrderRequestInput[]
    deleteMany?: OrderRequestItemScalarWhereInput | OrderRequestItemScalarWhereInput[]
  }

  export type OrderRequestItemUncheckedUpdateManyWithoutOrderRequestNestedInput = {
    create?: XOR<OrderRequestItemCreateWithoutOrderRequestInput, OrderRequestItemUncheckedCreateWithoutOrderRequestInput> | OrderRequestItemCreateWithoutOrderRequestInput[] | OrderRequestItemUncheckedCreateWithoutOrderRequestInput[]
    connectOrCreate?: OrderRequestItemCreateOrConnectWithoutOrderRequestInput | OrderRequestItemCreateOrConnectWithoutOrderRequestInput[]
    upsert?: OrderRequestItemUpsertWithWhereUniqueWithoutOrderRequestInput | OrderRequestItemUpsertWithWhereUniqueWithoutOrderRequestInput[]
    createMany?: OrderRequestItemCreateManyOrderRequestInputEnvelope
    set?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
    disconnect?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
    delete?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
    connect?: OrderRequestItemWhereUniqueInput | OrderRequestItemWhereUniqueInput[]
    update?: OrderRequestItemUpdateWithWhereUniqueWithoutOrderRequestInput | OrderRequestItemUpdateWithWhereUniqueWithoutOrderRequestInput[]
    updateMany?: OrderRequestItemUpdateManyWithWhereWithoutOrderRequestInput | OrderRequestItemUpdateManyWithWhereWithoutOrderRequestInput[]
    deleteMany?: OrderRequestItemScalarWhereInput | OrderRequestItemScalarWhereInput[]
  }

  export type OrderRequestCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderRequestCreateWithoutItemsInput, OrderRequestUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderRequestCreateOrConnectWithoutItemsInput
    connect?: OrderRequestWhereUniqueInput
  }

  export type OrderRequestUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderRequestCreateWithoutItemsInput, OrderRequestUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderRequestCreateOrConnectWithoutItemsInput
    upsert?: OrderRequestUpsertWithoutItemsInput
    connect?: OrderRequestWhereUniqueInput
    update?: XOR<XOR<OrderRequestUpdateToOneWithWhereWithoutItemsInput, OrderRequestUpdateWithoutItemsInput>, OrderRequestUncheckedUpdateWithoutItemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumStorageProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageProvider | EnumStorageProviderFieldRefInput<$PrismaModel>
    in?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageProviderFilter<$PrismaModel> | $Enums.StorageProvider
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedEnumStorageProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageProvider | EnumStorageProviderFieldRefInput<$PrismaModel>
    in?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageProvider[] | ListEnumStorageProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageProviderWithAggregatesFilter<$PrismaModel> | $Enums.StorageProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageProviderFilter<$PrismaModel>
    _max?: NestedEnumStorageProviderFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type BrandCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ProductModelCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: ProductModelUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandCreateOrConnectWithoutCategoryInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutCategoryInput, BrandUncheckedCreateWithoutCategoryInput>
  }

  export type BrandCreateManyCategoryInputEnvelope = {
    data: BrandCreateManyCategoryInput | BrandCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BrandWhereUniqueInput
    update: XOR<BrandUpdateWithoutCategoryInput, BrandUncheckedUpdateWithoutCategoryInput>
    create: XOR<BrandCreateWithoutCategoryInput, BrandUncheckedCreateWithoutCategoryInput>
  }

  export type BrandUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BrandWhereUniqueInput
    data: XOR<BrandUpdateWithoutCategoryInput, BrandUncheckedUpdateWithoutCategoryInput>
  }

  export type BrandUpdateManyWithWhereWithoutCategoryInput = {
    where: BrandScalarWhereInput
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BrandScalarWhereInput = {
    AND?: BrandScalarWhereInput | BrandScalarWhereInput[]
    OR?: BrandScalarWhereInput[]
    NOT?: BrandScalarWhereInput | BrandScalarWhereInput[]
    id?: StringFilter<"Brand"> | string
    categoryId?: StringFilter<"Brand"> | string
    name?: StringFilter<"Brand"> | string
    slug?: StringFilter<"Brand"> | string
    description?: StringNullableFilter<"Brand"> | string | null
    imageUrl?: StringNullableFilter<"Brand"> | string | null
    sortOrder?: IntFilter<"Brand"> | number
    isVisible?: BoolFilter<"Brand"> | boolean
    createdAt?: DateTimeFilter<"Brand"> | Date | string
    updatedAt?: DateTimeFilter<"Brand"> | Date | string
  }

  export type CategoryCreateWithoutBrandsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    heroImage?: string | null
    accent?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutBrandsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    heroImage?: string | null
    accent?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutBrandsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBrandsInput, CategoryUncheckedCreateWithoutBrandsInput>
  }

  export type ProductModelCreateWithoutBrandInput = {
    id?: string
    name: string
    slug: string
    story?: string | null
    heroImage?: string | null
    priceHint?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutModelInput
  }

  export type ProductModelUncheckedCreateWithoutBrandInput = {
    id?: string
    name: string
    slug: string
    story?: string | null
    heroImage?: string | null
    priceHint?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutModelInput
  }

  export type ProductModelCreateOrConnectWithoutBrandInput = {
    where: ProductModelWhereUniqueInput
    create: XOR<ProductModelCreateWithoutBrandInput, ProductModelUncheckedCreateWithoutBrandInput>
  }

  export type ProductModelCreateManyBrandInputEnvelope = {
    data: ProductModelCreateManyBrandInput | ProductModelCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutBrandsInput = {
    update: XOR<CategoryUpdateWithoutBrandsInput, CategoryUncheckedUpdateWithoutBrandsInput>
    create: XOR<CategoryCreateWithoutBrandsInput, CategoryUncheckedCreateWithoutBrandsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBrandsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBrandsInput, CategoryUncheckedUpdateWithoutBrandsInput>
  }

  export type CategoryUpdateWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutBrandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductModelUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductModelWhereUniqueInput
    update: XOR<ProductModelUpdateWithoutBrandInput, ProductModelUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductModelCreateWithoutBrandInput, ProductModelUncheckedCreateWithoutBrandInput>
  }

  export type ProductModelUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductModelWhereUniqueInput
    data: XOR<ProductModelUpdateWithoutBrandInput, ProductModelUncheckedUpdateWithoutBrandInput>
  }

  export type ProductModelUpdateManyWithWhereWithoutBrandInput = {
    where: ProductModelScalarWhereInput
    data: XOR<ProductModelUpdateManyMutationInput, ProductModelUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductModelScalarWhereInput = {
    AND?: ProductModelScalarWhereInput | ProductModelScalarWhereInput[]
    OR?: ProductModelScalarWhereInput[]
    NOT?: ProductModelScalarWhereInput | ProductModelScalarWhereInput[]
    id?: StringFilter<"ProductModel"> | string
    brandId?: StringFilter<"ProductModel"> | string
    name?: StringFilter<"ProductModel"> | string
    slug?: StringFilter<"ProductModel"> | string
    story?: StringNullableFilter<"ProductModel"> | string | null
    heroImage?: StringNullableFilter<"ProductModel"> | string | null
    priceHint?: StringNullableFilter<"ProductModel"> | string | null
    sortOrder?: IntFilter<"ProductModel"> | number
    isVisible?: BoolFilter<"ProductModel"> | boolean
    createdAt?: DateTimeFilter<"ProductModel"> | Date | string
    updatedAt?: DateTimeFilter<"ProductModel"> | Date | string
  }

  export type BrandCreateWithoutModelsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutBrandsInput
  }

  export type BrandUncheckedCreateWithoutModelsInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandCreateOrConnectWithoutModelsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutModelsInput, BrandUncheckedCreateWithoutModelsInput>
  }

  export type ProductCreateWithoutModelInput = {
    id?: string
    name: string
    color?: string | null
    priceText?: string | null
    imageUrl: string
    imageAlt?: string | null
    storageProvider?: $Enums.StorageProvider
    storageKey?: string | null
    mediaBytes?: bigint | number | null
    mediaMimeType?: string | null
    cloudinaryPublicId?: string | null
    status?: $Enums.ProductStatus
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutModelInput = {
    id?: string
    name: string
    color?: string | null
    priceText?: string | null
    imageUrl: string
    imageAlt?: string | null
    storageProvider?: $Enums.StorageProvider
    storageKey?: string | null
    mediaBytes?: bigint | number | null
    mediaMimeType?: string | null
    cloudinaryPublicId?: string | null
    status?: $Enums.ProductStatus
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutModelInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput>
  }

  export type ProductCreateManyModelInputEnvelope = {
    data: ProductCreateManyModelInput | ProductCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutModelsInput = {
    update: XOR<BrandUpdateWithoutModelsInput, BrandUncheckedUpdateWithoutModelsInput>
    create: XOR<BrandCreateWithoutModelsInput, BrandUncheckedCreateWithoutModelsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutModelsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutModelsInput, BrandUncheckedUpdateWithoutModelsInput>
  }

  export type BrandUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutBrandsNestedInput
  }

  export type BrandUncheckedUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutModelInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutModelInput, ProductUncheckedUpdateWithoutModelInput>
    create: XOR<ProductCreateWithoutModelInput, ProductUncheckedCreateWithoutModelInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutModelInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutModelInput, ProductUncheckedUpdateWithoutModelInput>
  }

  export type ProductUpdateManyWithWhereWithoutModelInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutModelInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    modelId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    color?: StringNullableFilter<"Product"> | string | null
    priceText?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringFilter<"Product"> | string
    imageAlt?: StringNullableFilter<"Product"> | string | null
    storageProvider?: EnumStorageProviderFilter<"Product"> | $Enums.StorageProvider
    storageKey?: StringNullableFilter<"Product"> | string | null
    mediaBytes?: BigIntNullableFilter<"Product"> | bigint | number | null
    mediaMimeType?: StringNullableFilter<"Product"> | string | null
    cloudinaryPublicId?: StringNullableFilter<"Product"> | string | null
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    isFeatured?: BoolFilter<"Product"> | boolean
    sortOrder?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductModelCreateWithoutProductsInput = {
    id?: string
    name: string
    slug: string
    story?: string | null
    heroImage?: string | null
    priceHint?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandCreateNestedOneWithoutModelsInput
  }

  export type ProductModelUncheckedCreateWithoutProductsInput = {
    id?: string
    brandId: string
    name: string
    slug: string
    story?: string | null
    heroImage?: string | null
    priceHint?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductModelCreateOrConnectWithoutProductsInput = {
    where: ProductModelWhereUniqueInput
    create: XOR<ProductModelCreateWithoutProductsInput, ProductModelUncheckedCreateWithoutProductsInput>
  }

  export type ProductSizeCreateWithoutProductInput = {
    id?: string
    sizeLabel: string
    isAvailable?: boolean
  }

  export type ProductSizeUncheckedCreateWithoutProductInput = {
    id?: string
    sizeLabel: string
    isAvailable?: boolean
  }

  export type ProductSizeCreateOrConnectWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    create: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeCreateManyProductInputEnvelope = {
    data: ProductSizeCreateManyProductInput | ProductSizeCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductModelUpsertWithoutProductsInput = {
    update: XOR<ProductModelUpdateWithoutProductsInput, ProductModelUncheckedUpdateWithoutProductsInput>
    create: XOR<ProductModelCreateWithoutProductsInput, ProductModelUncheckedCreateWithoutProductsInput>
    where?: ProductModelWhereInput
  }

  export type ProductModelUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProductModelWhereInput
    data: XOR<ProductModelUpdateWithoutProductsInput, ProductModelUncheckedUpdateWithoutProductsInput>
  }

  export type ProductModelUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneRequiredWithoutModelsNestedInput
  }

  export type ProductModelUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSizeUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    update: XOR<ProductSizeUpdateWithoutProductInput, ProductSizeUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    data: XOR<ProductSizeUpdateWithoutProductInput, ProductSizeUncheckedUpdateWithoutProductInput>
  }

  export type ProductSizeUpdateManyWithWhereWithoutProductInput = {
    where: ProductSizeScalarWhereInput
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSizeScalarWhereInput = {
    AND?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    OR?: ProductSizeScalarWhereInput[]
    NOT?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    id?: StringFilter<"ProductSize"> | string
    productId?: StringFilter<"ProductSize"> | string
    sizeLabel?: StringFilter<"ProductSize"> | string
    isAvailable?: BoolFilter<"ProductSize"> | boolean
  }

  export type ProductCreateWithoutSizesInput = {
    id?: string
    name: string
    color?: string | null
    priceText?: string | null
    imageUrl: string
    imageAlt?: string | null
    storageProvider?: $Enums.StorageProvider
    storageKey?: string | null
    mediaBytes?: bigint | number | null
    mediaMimeType?: string | null
    cloudinaryPublicId?: string | null
    status?: $Enums.ProductStatus
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    model: ProductModelCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutSizesInput = {
    id?: string
    modelId: string
    name: string
    color?: string | null
    priceText?: string | null
    imageUrl: string
    imageAlt?: string | null
    storageProvider?: $Enums.StorageProvider
    storageKey?: string | null
    mediaBytes?: bigint | number | null
    mediaMimeType?: string | null
    cloudinaryPublicId?: string | null
    status?: $Enums.ProductStatus
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutSizesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
  }

  export type ProductUpsertWithoutSizesInput = {
    update: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSizesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type ProductUpdateWithoutSizesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ProductModelUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutSizesInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderRequestItemCreateWithoutOrderRequestInput = {
    id?: string
    productId?: string | null
    modelName: string
    productName: string
    sizeLabel?: string | null
    quantity?: number
    imageUrl?: string | null
  }

  export type OrderRequestItemUncheckedCreateWithoutOrderRequestInput = {
    id?: string
    productId?: string | null
    modelName: string
    productName: string
    sizeLabel?: string | null
    quantity?: number
    imageUrl?: string | null
  }

  export type OrderRequestItemCreateOrConnectWithoutOrderRequestInput = {
    where: OrderRequestItemWhereUniqueInput
    create: XOR<OrderRequestItemCreateWithoutOrderRequestInput, OrderRequestItemUncheckedCreateWithoutOrderRequestInput>
  }

  export type OrderRequestItemCreateManyOrderRequestInputEnvelope = {
    data: OrderRequestItemCreateManyOrderRequestInput | OrderRequestItemCreateManyOrderRequestInput[]
    skipDuplicates?: boolean
  }

  export type OrderRequestItemUpsertWithWhereUniqueWithoutOrderRequestInput = {
    where: OrderRequestItemWhereUniqueInput
    update: XOR<OrderRequestItemUpdateWithoutOrderRequestInput, OrderRequestItemUncheckedUpdateWithoutOrderRequestInput>
    create: XOR<OrderRequestItemCreateWithoutOrderRequestInput, OrderRequestItemUncheckedCreateWithoutOrderRequestInput>
  }

  export type OrderRequestItemUpdateWithWhereUniqueWithoutOrderRequestInput = {
    where: OrderRequestItemWhereUniqueInput
    data: XOR<OrderRequestItemUpdateWithoutOrderRequestInput, OrderRequestItemUncheckedUpdateWithoutOrderRequestInput>
  }

  export type OrderRequestItemUpdateManyWithWhereWithoutOrderRequestInput = {
    where: OrderRequestItemScalarWhereInput
    data: XOR<OrderRequestItemUpdateManyMutationInput, OrderRequestItemUncheckedUpdateManyWithoutOrderRequestInput>
  }

  export type OrderRequestItemScalarWhereInput = {
    AND?: OrderRequestItemScalarWhereInput | OrderRequestItemScalarWhereInput[]
    OR?: OrderRequestItemScalarWhereInput[]
    NOT?: OrderRequestItemScalarWhereInput | OrderRequestItemScalarWhereInput[]
    id?: StringFilter<"OrderRequestItem"> | string
    orderRequestId?: StringFilter<"OrderRequestItem"> | string
    productId?: StringNullableFilter<"OrderRequestItem"> | string | null
    modelName?: StringFilter<"OrderRequestItem"> | string
    productName?: StringFilter<"OrderRequestItem"> | string
    sizeLabel?: StringNullableFilter<"OrderRequestItem"> | string | null
    quantity?: IntFilter<"OrderRequestItem"> | number
    imageUrl?: StringNullableFilter<"OrderRequestItem"> | string | null
  }

  export type OrderRequestCreateWithoutItemsInput = {
    id?: string
    customerName: string
    phone?: string | null
    snapchat?: string | null
    city?: string | null
    note?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderRequestUncheckedCreateWithoutItemsInput = {
    id?: string
    customerName: string
    phone?: string | null
    snapchat?: string | null
    city?: string | null
    note?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderRequestCreateOrConnectWithoutItemsInput = {
    where: OrderRequestWhereUniqueInput
    create: XOR<OrderRequestCreateWithoutItemsInput, OrderRequestUncheckedCreateWithoutItemsInput>
  }

  export type OrderRequestUpsertWithoutItemsInput = {
    update: XOR<OrderRequestUpdateWithoutItemsInput, OrderRequestUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderRequestCreateWithoutItemsInput, OrderRequestUncheckedCreateWithoutItemsInput>
    where?: OrderRequestWhereInput
  }

  export type OrderRequestUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderRequestWhereInput
    data: XOR<OrderRequestUpdateWithoutItemsInput, OrderRequestUncheckedUpdateWithoutItemsInput>
  }

  export type OrderRequestUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    snapchat?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderRequestUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    snapchat?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrandUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ProductModelUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ProductModelUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductModelCreateManyBrandInput = {
    id?: string
    name: string
    slug: string
    story?: string | null
    heroImage?: string | null
    priceHint?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductModelUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutModelNestedInput
  }

  export type ProductModelUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ProductModelUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    heroImage?: NullableStringFieldUpdateOperationsInput | string | null
    priceHint?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyModelInput = {
    id?: string
    name: string
    color?: string | null
    priceText?: string | null
    imageUrl: string
    imageAlt?: string | null
    storageProvider?: $Enums.StorageProvider
    storageKey?: string | null
    mediaBytes?: bigint | number | null
    mediaMimeType?: string | null
    cloudinaryPublicId?: string | null
    status?: $Enums.ProductStatus
    isFeatured?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    priceText?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageAlt?: NullableStringFieldUpdateOperationsInput | string | null
    storageProvider?: EnumStorageProviderFieldUpdateOperationsInput | $Enums.StorageProvider
    storageKey?: NullableStringFieldUpdateOperationsInput | string | null
    mediaBytes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mediaMimeType?: NullableStringFieldUpdateOperationsInput | string | null
    cloudinaryPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSizeCreateManyProductInput = {
    id?: string
    sizeLabel: string
    isAvailable?: boolean
  }

  export type ProductSizeUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sizeLabel?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductSizeUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sizeLabel?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductSizeUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sizeLabel?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderRequestItemCreateManyOrderRequestInput = {
    id?: string
    productId?: string | null
    modelName: string
    productName: string
    sizeLabel?: string | null
    quantity?: number
    imageUrl?: string | null
  }

  export type OrderRequestItemUpdateWithoutOrderRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderRequestItemUncheckedUpdateWithoutOrderRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderRequestItemUncheckedUpdateManyWithoutOrderRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    modelName?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
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