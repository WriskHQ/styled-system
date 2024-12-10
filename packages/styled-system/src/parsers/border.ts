import { system, SystemConfig } from '../core'
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue, TLengthStyledSystem } from '../types'
import { Property } from 'csstype'

export interface BorderRadiusProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'radii', ThemeType>> {
  borderRadius?: ResponsiveValue<TVal, ThemeType>
  borderTopLeftRadius?: ResponsiveValue<TVal, ThemeType>
  borderTopRightRadius?: ResponsiveValue<TVal, ThemeType>
  borderBottomLeftRadius?: ResponsiveValue<TVal, ThemeType>
  borderBottomRightRadius?: ResponsiveValue<TVal, ThemeType>
}

export interface BorderLeftProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.BorderLeft<TLengthStyledSystem>,
> {
  borderLeft?: ResponsiveValue<TVal, ThemeType>
}

export interface BorderColorProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'colors', ThemeType>> {
  borderColor?: ResponsiveValue<TVal, ThemeType>
  borderTopColor?: ResponsiveValue<TVal, ThemeType>
  borderBottomColor?: ResponsiveValue<TVal, ThemeType>
  borderLeftColor?: ResponsiveValue<TVal, ThemeType>
  borderRightColor?: ResponsiveValue<TVal, ThemeType>
}

export interface BorderBottomProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.BorderBottom<TLengthStyledSystem>,
> {
  borderBottom?: ResponsiveValue<TVal, ThemeType>
}

export interface BorderRightProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.BorderRight<TLengthStyledSystem>,
> {
  borderRight?: ResponsiveValue<TVal, ThemeType>
}

export interface BorderTopProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = Property.BorderTop<TLengthStyledSystem>,
> {
  borderTop?: ResponsiveValue<TVal, ThemeType>
}

export interface BorderWidthProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'borderWidths', ThemeType>,
> {
  borderWidth?: ResponsiveValue<TVal, ThemeType>
  borderTopWidth?: ResponsiveValue<TVal, ThemeType>
  borderBottomWidth?: ResponsiveValue<TVal, ThemeType>
  borderLeftWidth?: ResponsiveValue<TVal, ThemeType>
  borderRightWidth?: ResponsiveValue<TVal, ThemeType>
}

export interface BorderStyleProps<ThemeType extends Theme = RequiredTheme> {
  borderStyle?: ResponsiveValue<Property.BorderStyle, ThemeType>
  borderTopStyle?: ResponsiveValue<Property.BorderTopStyle, ThemeType>
  borderBottomStyle?: ResponsiveValue<Property.BorderBottomStyle, ThemeType>
  borderLeftStyle?: ResponsiveValue<Property.BorderLeftStyle, ThemeType>
  borderRightStyle?: ResponsiveValue<Property.BorderRightStyle, ThemeType>
}

export interface BorderProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Border<TLengthStyledSystem>>
  extends BorderWidthProps<ThemeType>,
    BorderStyleProps<ThemeType>,
    BorderColorProps<ThemeType>,
    BorderRadiusProps<ThemeType>,
    BorderTopProps<ThemeType>,
    BorderRightProps<ThemeType>,
    BorderBottomProps<ThemeType>,
    BorderLeftProps<ThemeType> {
  border?: ResponsiveValue<TVal, ThemeType>
  borderX?: ResponsiveValue<TVal, ThemeType>
  borderY?: ResponsiveValue<TVal, ThemeType>
}

const config: SystemConfig<'borderX' | 'borderY'> = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
}

config.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths',
}

config.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors',
}
config.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles',
}
config.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii',
}
config.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii',
}
config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths',
}
config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors',
}
config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles',
}
config.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii',
}
config.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii',
}
config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths',
}
config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors',
}
config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles',
}
config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths',
}
config.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors',
}
config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles',
}

export const border = system(config)
