import { system, SystemConfig } from '../core'
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from '../types'
import { Property } from 'csstype'

const defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}

export interface FontFamilyProps<ThemeType extends Theme = RequiredTheme> {
  fontFamily?: ResponsiveValue<Property.FontFamily, ThemeType> | undefined
}

export interface FontSizeProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'fontSizes', ThemeType>> {
  fontSize?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface FontWeightProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'fontWeights', ThemeType>> {
  fontWeight?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface LineHeightProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'lineHeights', ThemeType>> {
  lineHeight?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface LetterSpacingProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'letterSpacings', ThemeType>,
> {
  letterSpacing?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface FontStyleProps<ThemeType extends Theme = RequiredTheme> {
  fontStyle?: ResponsiveValue<Property.FontStyle, ThemeType> | undefined
}

export interface TextAlignProps<ThemeType extends Theme = RequiredTheme> {
  textAlign?: ResponsiveValue<Property.TextAlign, ThemeType> | undefined
}

export interface TypographyProps<ThemeType extends Theme = RequiredTheme>
  extends FontFamilyProps<ThemeType>,
    FontSizeProps<ThemeType>,
    FontWeightProps<ThemeType>,
    LineHeightProps<ThemeType>,
    LetterSpacingProps<ThemeType>,
    FontStyleProps<ThemeType>,
    TextAlignProps<ThemeType> {}

const config: SystemConfig = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes,
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  textAlign: true,
  fontStyle: true,
}

export const typography = system(config)
