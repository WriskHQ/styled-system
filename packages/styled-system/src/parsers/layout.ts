import { get, system, SystemConfig } from '../core'
import { Property } from 'csstype'
import { RequiredTheme, ResponsiveValue, Scale, Theme, TLengthStyledSystem } from '../types'

const isNumber = (n: unknown) => typeof n === 'number' && !isNaN(n)
const getWidth = (scale?: Scale, n?: number) => get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%')

export interface WidthProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Width<TLengthStyledSystem>> {
  width?: ResponsiveValue<TVal, ThemeType>
}

export interface HeightProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Height<TLengthStyledSystem>> {
  height?: ResponsiveValue<TVal, ThemeType>
}

export interface MinWidthProps<ThemeType extends Theme = RequiredTheme, TVal = Property.MinWidth<TLengthStyledSystem>> {
  minWidth?: ResponsiveValue<TVal, ThemeType>
}

export interface MinHeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.MinHeight<TLengthStyledSystem>,
> {
  minHeight?: ResponsiveValue<TVal, ThemeType>
}

export interface MaxWidthProps<ThemeType extends Theme = RequiredTheme, TVal = Property.MaxWidth<TLengthStyledSystem>> {
  maxWidth?: ResponsiveValue<TVal, ThemeType>
}

export interface MaxHeightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.MaxHeight<TLengthStyledSystem>,
> {
  maxHeight?: ResponsiveValue<TVal, ThemeType>
}

export interface DisplayProps<ThemeType extends Theme = RequiredTheme> {
  display?: ResponsiveValue<Property.Display, ThemeType>
}

export interface VerticalAlignProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.VerticalAlign<TLengthStyledSystem>,
> {
  verticalAlign?: ResponsiveValue<TVal, ThemeType>
}

export interface SizeProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Height<TLengthStyledSystem>> {
  size?: ResponsiveValue<TVal, ThemeType>
}

export interface OverflowProps<ThemeType extends Theme = RequiredTheme> {
  overflow?: ResponsiveValue<Property.Overflow, ThemeType>
  overflowX?: ResponsiveValue<Property.OverflowX, ThemeType>
  overflowY?: ResponsiveValue<Property.OverflowY, ThemeType>
}

export interface LayoutProps<ThemeType extends Theme = RequiredTheme>
  extends WidthProps<ThemeType>,
    HeightProps<ThemeType>,
    MinWidthProps<ThemeType>,
    MinHeightProps<ThemeType>,
    MaxWidthProps<ThemeType>,
    MaxHeightProps<ThemeType>,
    DisplayProps<ThemeType>,
    VerticalAlignProps<ThemeType>,
    SizeProps<ThemeType>,
    OverflowProps<ThemeType> {}

const config: SystemConfig<'size'> = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
}

export const layout = system(config)
