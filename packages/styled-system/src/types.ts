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
  property?: keyof CSS.Properties | undefined
  properties?: Array<keyof CSS.Properties> | undefined
  scale?: string | undefined
  defaultScale?: Scale | undefined
  transform?: TransformType | undefined
}

export interface StyleFunction {
  (...args: any[]): any

  config?: object | undefined
  propNames?: string[] | undefined
  cache?: object | undefined
}

export type TLengthStyledSystem = string | 0 | number

export interface Theme<TLength = TLengthStyledSystem> {
  breakpoints?: ObjectOrArray<number | string | symbol>
  mediaQueries?: { [size: string]: string }
  space?: ObjectOrArray<CSS.Property.Margin<number | string>>
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<number>>
  colors?: ObjectOrArray<CSS.Property.Color>
  fonts?: ObjectOrArray<CSS.Property.FontFamily>
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight>
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<TLength>>
  letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<TLength>>
  sizes?: ObjectOrArray<CSS.Property.Height<{}> | CSS.Property.Width<{}>>
  borders?: ObjectOrArray<CSS.Property.Border<{}>>
  borderStyles?: ObjectOrArray<CSS.Property.Border<{}>>
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<TLength>>
  radii?: ObjectOrArray<CSS.Property.BorderRadius<TLength>>
  shadows?: ObjectOrArray<CSS.Property.BoxShadow>
  zIndices?: ObjectOrArray<CSS.Property.ZIndex>
  buttons?: ObjectOrArray<CSS.StandardProperties>
  colorStyles?: ObjectOrArray<CSS.StandardProperties>
  textStyles?: ObjectOrArray<CSS.StandardProperties>
}

export type RequiredTheme = Required<Theme>

export type ThemeValue<
  K extends keyof ThemeType,
  ThemeType,
  TVal = any,
> = ThemeType[K] extends TVal[]
  ? number
  : ThemeType[K] extends Record<infer E, TVal>
    ? E
    : ThemeType[K] extends ObjectOrArray<infer F>
      ? F
      : never

export type ResponsiveValue<T, ThemeType extends Theme = RequiredTheme> =
  | T
  | null
  | Array<T | null>
  | { [key in (ThemeValue<'breakpoints', ThemeType> & string) | number]?: T }
