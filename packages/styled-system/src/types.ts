import * as CSS from 'csstype'

type TransformType = (
  scale: Scale | undefined,
  path: string | number,
  fallback?: string | number | ObjectOrArray<string | number> | null,
  props?: Record<string, string | number | boolean>
) => ObjectOrArray<string | number> | string | number

export type ObjectOrArray<T, K extends keyof any = keyof any> =
  | T[]
  | Record<K, T | Record<K, T> | T[]>

export type Scale = ObjectOrArray<number | string>

export interface ConfigFunction {
  (value: any, scale: Scale | undefined, props: any): any

  /** A string referencing a key in the `theme` object. */
  scale?: string
  /** A fallback scale object for when there isn't one defined in the `theme` object. */
  defaults?: Scale
}

export interface ConfigStyle {
  /** The CSS property to use in the returned style object (overridden by `properties` if present). */
  property?: keyof CSS.Properties | undefined
  /**
   * An array of multiple properties (e.g. `['marginLeft', 'marginRight']`) to which this style's value will be
   * assigned (overrides `property` when present).
   */
  properties?: Array<keyof CSS.Properties> | undefined
  /** A string referencing a key in the `theme` object. */
  scale?: string | undefined
  /** A fallback scale object for when there isn't one defined in the `theme` object. */
  defaultScale?: Scale | undefined
  /** A function to transform the raw value based on the scale. */
  transform?: TransformType | undefined
}

export type Config = Partial<
  Record<keyof CSS.Properties, ConfigStyle | ConfigFunction | boolean>
>

export interface StyleFunction {
  (...args: any[]): any

  config?: object | undefined
  propNames?: string[] | undefined
  cache?: object | undefined
}
