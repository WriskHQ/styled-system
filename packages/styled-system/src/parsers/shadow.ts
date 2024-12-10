import { system, SystemConfig } from '../core'
import { RequiredTheme, ResponsiveValue, Theme } from '../types'
import { Property } from 'csstype'

export interface BoxShadowProps<ThemeType extends Theme = RequiredTheme> {
  boxShadow?: ResponsiveValue<Property.BoxShadow | number, ThemeType> | undefined
}

export interface TextShadowProps<ThemeType extends Theme = RequiredTheme> {
  textShadow?: ResponsiveValue<Property.TextShadow | number, ThemeType> | undefined
}

export interface ShadowProps<ThemeType extends Theme = RequiredTheme>
  extends BoxShadowProps<ThemeType>,
    TextShadowProps<ThemeType> {}

const config: SystemConfig = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows',
  },
}

export const shadow = system(config)
