import { get, createParser } from '../core'
import { ConfigFunction, RequiredTheme, ResponsiveValue, Scale, Theme } from '../types'
import { css } from '../css'

export interface VariantArgs<TStyle = object, K extends string = string, TPropName = string> {
  prop?: TPropName | undefined
  scale?: string | undefined
  variants?:
    | {
        [key in K]: TStyle
      }
    | undefined
}

export const variant = ({ scale, prop = 'variant', variants = {} }: VariantArgs) => {
  let sx: ConfigFunction

  if (Object.keys(variants).length) {
    sx = (value, scale, props) => css(get(scale, value, null))(props.theme)
  } else {
    sx = (value, scale) => get(scale, value, null)
  }

  sx.scale = scale
  sx.defaults = variants as Scale

  const config = {
    [prop]: sx,
  }

  return createParser(config)
}

export interface ButtonStyleProps<ThemeType extends Theme = RequiredTheme> {
  variant?: ResponsiveValue<string, ThemeType> | undefined
}

export interface TextStyleProps<ThemeType extends Theme = RequiredTheme> {
  textStyle?: ResponsiveValue<string, ThemeType> | undefined
}

export interface ColorStyleProps<ThemeType extends Theme = RequiredTheme> {
  colors?: ResponsiveValue<string, ThemeType> | undefined
}

export const buttonStyle = variant({ scale: 'buttons' })
export const textStyle = variant({ scale: 'textStyles', prop: 'textStyle' })
export const colorStyle = variant({ scale: 'colorStyles', prop: 'colors' })
