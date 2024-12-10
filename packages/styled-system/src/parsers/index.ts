import { background, BackgroundProps } from './background'
import { border, BorderProps } from './border'
import { color, ColorProps } from './color'
import { flexbox, FlexboxProps } from './flexbox'
import { grid, GridProps } from './grid'
import { layout, LayoutProps } from './layout'
import { position, PositionProps } from './position'
import { space, SpaceProps } from './space'
import { shadow, ShadowProps } from './shadow'
import { typography, TypographyProps } from './typography'
import { compose } from '../core'
import { buttonStyle, ButtonStyleProps, colorStyle, ColorStyleProps, textStyle, TextStyleProps } from '../variant'

// Parsers
export * from './background'
export * from './border'
export * from './color'
export * from './flexbox'
export * from './grid'
export * from './layout'
export * from './position'
export * from './space'
export * from './shadow'
export * from './typography'

export type AllProps =
  | BackgroundProps
  | BorderProps
  | ColorProps
  | FlexboxProps
  | GridProps
  | LayoutProps
  | PositionProps
  | SpaceProps
  | ShadowProps
  | TypographyProps
  | ButtonStyleProps
  | TextStyleProps
  | ColorStyleProps

export const all = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  space,
  shadow,
  typography,
  buttonStyle,
  textStyle,
  colorStyle,
)

export const regex = new RegExp(`^(${all.propNames.join('|')})$`)
