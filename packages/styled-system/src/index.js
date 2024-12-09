import { createStyleFunction, createParser } from './core'
// v4 api shims
import {
  layout,
  color,
  typography,
  flexbox,
  grid,
  border,
  background,
  position
} from './parsers'

export {
  get,
  createParser,
  createStyleFunction,
  compose,
  system,
} from '@styled-system/core'

export { margin, padding, space } from './parsers'
export { color } from './parsers'
export { layout } from './parsers'
export { typography } from './parsers'
export { flexbox } from './parsers'
export { border } from './parsers'
export { background } from './parsers'
export { position } from './parsers'
export { grid } from './parsers'
export { shadow } from './parsers'
export { default as boxShadow, default as textShadow } from '@styled-system/shadow'

export {
  variant,
  buttonStyle,
  textStyle,
  colorStyle,
} from '@styled-system/variant'

const {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
} = layout
const { opacity } = color
const {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
} = typography

const {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} = flexbox
const {
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
} = grid
const {
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
} = border
const {
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} = background
const {
  zIndex,
  top,
  right,
  bottom,
  left,
} = position

export { default as borders } from '@styled-system/border'
export {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
  // color
  opacity,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  // flexbox
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  // background
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  zIndex,
  top,
  right,
  bottom,
  left,
}

// v4 style API shim
export const style = ({
                        prop,
                        cssProperty,
                        alias,
                        key,
                        transformValue,
                        scale,
                        // new api
                        properties,
                      }) => {
  const config = {}
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  const parse = createParser(config)

  return parse
}
