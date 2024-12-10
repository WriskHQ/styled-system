import { system, SystemConfig } from '../core'
import { Property } from 'csstype'
import { RequiredTheme, ResponsiveValue, Theme, ThemeValue } from '../types'

export interface OpacityProps<ThemeType extends Theme = RequiredTheme> {
  opacity?: ResponsiveValue<Property.Opacity, ThemeType>
}

export interface BackgroundColorProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'colors', ThemeType>> {
  bg?: ResponsiveValue<TVal, ThemeType>
  backgroundColor?: ResponsiveValue<TVal, ThemeType>
}

export interface TextColorProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'colors', ThemeType>> {
  color?: ResponsiveValue<TVal, ThemeType>
}

export interface ColorProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'colors', ThemeType>>
  extends TextColorProps<ThemeType, TVal>,
    BackgroundColorProps<ThemeType, TVal>,
    OpacityProps {}

const config: SystemConfig<'bg'> = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
}

config.bg = config.backgroundColor

export const color = system(config)
