import { system, SystemConfig } from '../core'
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from '../types'
import { Property } from 'csstype'

export interface BackgroundProps<ThemeType extends Theme = RequiredTheme> {
  background?: ResponsiveValue<Property.Background<TLengthStyledSystem>, ThemeType>
  backgroundImage?: ResponsiveValue<Property.BackgroundImage, ThemeType>
  bgImage?: ResponsiveValue<Property.BackgroundImage, ThemeType>
  backgroundClip?: ResponsiveValue<Property.BackgroundClip, ThemeType>
  bgClip?: ResponsiveValue<Property.BackgroundClip, ThemeType>
  backgroundSize?: ResponsiveValue<Property.BackgroundSize<TLengthStyledSystem>, ThemeType>
  bgSize?: ResponsiveValue<Property.BackgroundSize<TLengthStyledSystem>, ThemeType>
  backgroundPosition?: ResponsiveValue<Property.BackgroundPosition<TLengthStyledSystem>, ThemeType>
  bgPosition?: ResponsiveValue<Property.BackgroundPosition<TLengthStyledSystem>, ThemeType>
  backgroundRepeat?: ResponsiveValue<Property.BackgroundRepeat, ThemeType>
  bgRepeat?: ResponsiveValue<Property.BackgroundRepeat, ThemeType>
  backgroundAttachment?: ResponsiveValue<Property.BackgroundAttachment, ThemeType>
  bgAttachment?: ResponsiveValue<Property.BackgroundAttachment, ThemeType>
}

const config: SystemConfig<'bgImage' | 'bgClip' | 'bgSize' | 'bgPosition' | 'bgRepeat' | 'bgAttachment'> = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundClip: true,
  backgroundAttachment: true,
}

config.bgImage = config.backgroundImage
config.bgClip = config.backgroundClip
config.bgSize = config.backgroundSize
config.bgPosition = config.backgroundPosition
config.bgRepeat = config.backgroundRepeat
config.bgAttachment = config.backgroundAttachment

export const background = system(config)
