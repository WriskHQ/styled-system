import { get, system, compose, SystemConfig } from '../core'
import { RequiredTheme, ResponsiveValue, Scale, Theme, ThemeValue } from '../types'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

const isNumber = (n: unknown): n is number => typeof n === 'number' && !isNaN(n)

const getMargin = (n: string | number, scale: Scale | undefined) => {
  if (!isNumber(n)) {
    return get(scale, n, n)
  }

  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = get(scale, absolute, absolute)
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value
  }
  return value * (isNegative ? -1 : 1)
}

export interface SpaceProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'space', ThemeType>> {
  m?: ResponsiveValue<TVal, ThemeType> | undefined
  margin?: ResponsiveValue<TVal, ThemeType> | undefined
  mt?: ResponsiveValue<TVal, ThemeType> | undefined
  marginTop?: ResponsiveValue<TVal, ThemeType> | undefined
  mr?: ResponsiveValue<TVal, ThemeType> | undefined
  marginRight?: ResponsiveValue<TVal, ThemeType> | undefined
  mb?: ResponsiveValue<TVal, ThemeType> | undefined
  marginBottom?: ResponsiveValue<TVal, ThemeType> | undefined
  ml?: ResponsiveValue<TVal, ThemeType> | undefined
  marginLeft?: ResponsiveValue<TVal, ThemeType> | undefined
  mx?: ResponsiveValue<TVal, ThemeType> | undefined
  marginX?: ResponsiveValue<TVal, ThemeType> | undefined
  my?: ResponsiveValue<TVal, ThemeType> | undefined
  marginY?: ResponsiveValue<TVal, ThemeType> | undefined
  p?: ResponsiveValue<TVal, ThemeType> | undefined
  padding?: ResponsiveValue<TVal, ThemeType> | undefined
  pt?: ResponsiveValue<TVal, ThemeType> | undefined
  paddingTop?: ResponsiveValue<TVal, ThemeType> | undefined
  pr?: ResponsiveValue<TVal, ThemeType> | undefined
  paddingRight?: ResponsiveValue<TVal, ThemeType> | undefined
  pb?: ResponsiveValue<TVal, ThemeType> | undefined
  paddingBottom?: ResponsiveValue<TVal, ThemeType> | undefined
  pl?: ResponsiveValue<TVal, ThemeType> | undefined
  paddingLeft?: ResponsiveValue<TVal, ThemeType> | undefined
  px?: ResponsiveValue<TVal, ThemeType> | undefined
  paddingX?: ResponsiveValue<TVal, ThemeType> | undefined
  py?: ResponsiveValue<TVal, ThemeType> | undefined
  paddingY?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface MarginProps<ThemeType extends Theme = RequiredTheme>
  extends Pick<
    SpaceProps<ThemeType>,
    | 'm'
    | 'margin'
    | 'mt'
    | 'marginTop'
    | 'mb'
    | 'marginBottom'
    | 'ml'
    | 'marginLeft'
    | 'mr'
    | 'marginRight'
    | 'my'
    | 'marginY'
    | 'mx'
    | 'marginX'
  > {}

export interface PaddingProps<ThemeType extends Theme = RequiredTheme>
  extends Pick<
    SpaceProps<ThemeType>,
    | 'p'
    | 'padding'
    | 'pt'
    | 'paddingTop'
    | 'pb'
    | 'paddingBottom'
    | 'pl'
    | 'paddingLeft'
    | 'pr'
    | 'paddingRight'
    | 'py'
    | 'paddingY'
    | 'px'
    | 'paddingX'
  > {}

const marginConfig: SystemConfig<'m' | 'mt' | 'mr' | 'mb' | 'ml' | 'mx' | 'my' | 'marginX' | 'marginY'> = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
}

marginConfig.m = marginConfig.margin
marginConfig.mt = marginConfig.marginTop
marginConfig.mr = marginConfig.marginRight
marginConfig.mb = marginConfig.marginBottom
marginConfig.ml = marginConfig.marginLeft
marginConfig.mx = marginConfig.marginX
marginConfig.my = marginConfig.marginY

const paddingConfig: SystemConfig<'p' | 'pt' | 'pr' | 'pb' | 'pl' | 'px' | 'py' | 'paddingX' | 'paddingY'> = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults.space,
  },
}

paddingConfig.p = paddingConfig.padding
paddingConfig.pt = paddingConfig.paddingTop
paddingConfig.pr = paddingConfig.paddingRight
paddingConfig.pb = paddingConfig.paddingBottom
paddingConfig.pl = paddingConfig.paddingLeft
paddingConfig.px = paddingConfig.paddingX
paddingConfig.py = paddingConfig.paddingY

export const margin = system(marginConfig)
export const padding = system(paddingConfig)
export const space = compose(margin, padding)
