import { system, SystemConfig } from '../core'
import { Property } from 'csstype'
import { RequiredTheme, ResponsiveValue, Theme, TLengthStyledSystem } from '../types'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

export interface TopProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Top<TLengthStyledSystem>> {
  top?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface RightProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Right<TLengthStyledSystem>> {
  right?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface BottomProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Bottom<TLengthStyledSystem>> {
  bottom?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface LeftProps<ThemeType extends Theme = RequiredTheme, TVal = Property.Left<TLengthStyledSystem>> {
  left?: ResponsiveValue<TVal, ThemeType> | undefined
}

export interface ZIndexProps<ThemeType extends Theme = RequiredTheme> {
  zIndex?: ResponsiveValue<Property.ZIndex, ThemeType> | undefined
}

export interface PositionProps<ThemeType extends Theme = RequiredTheme>
  extends ZIndexProps<ThemeType>,
    TopProps<ThemeType>,
    RightProps<ThemeType>,
    BottomProps<ThemeType>,
    LeftProps<ThemeType> {
  position?: ResponsiveValue<Property.Position, ThemeType> | undefined
}

const config: SystemConfig = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space,
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space,
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space,
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space,
  },
}

export const position = system(config)
