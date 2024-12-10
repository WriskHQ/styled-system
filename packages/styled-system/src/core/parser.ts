import assign from 'object-assign'
import { merge } from './merge'
import { get } from './get'
import { ConfigStyle, Scale, StyleFunction } from '../types'

const createMediaQuery = (n: string) => `@media screen and (min-width: ${n})`

const defaults = {
  breakpoints: [40, 52, 64].map((n) => n + 'em'),
}

// sort object-value responsive styles
const sort = (obj: Record<string, unknown>) => {
  const next = {}
  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      }),
    )
    .forEach((key) => {
      next[key] = obj[key]
    })
  return next
}

const parseResponsiveStyle = (
  mediaQueries: Array<string | null>,
  sx: StyleFunction,
  scale: Scale,
  raw: Array<string | number>,
  _props: unknown,
) => {
  let styles = {}
  raw.slice(0, mediaQueries.length).forEach((value, i) => {
    const media = mediaQueries[i]
    const style = sx(value, scale, _props)
    if (!media) {
      assign(styles, style)
    } else {
      assign(styles, {
        [media]: assign({}, styles[media], style),
      })
    }
  })
  return styles
}

const parseResponsiveObject = (
  breakpoints: Array<string>,
  sx: StyleFunction,
  scale: Scale,
  raw: Array<string | number>,
  _props: unknown,
) => {
  let styles = {}
  for (let key in raw) {
    const breakpoint = breakpoints[key]
    const value = raw[key]
    const style = sx(value, scale, _props)
    if (!breakpoint) {
      assign(styles, style)
    } else {
      const media = createMediaQuery(breakpoint)
      assign(styles, {
        [media]: assign({}, styles[media], style),
      })
    }
  }
  return styles
}

export type ParserCache = Partial<{
  breakpoints: Array<string>
  media: Array<null | string>
}>

export const createParser = (config: ConfigStyle): StyleFunction => {
  const cache: ParserCache = {}

  //TODO (MK): Find the real type for this
  const parse = (props: any) => {
    let styles = {}
    let shouldSort = false
    const isCacheDisabled = props.theme && props.theme.disableStyledSystemCache

    for (const key in props) {
      if (!config[key]) continue
      const sx = config[key]
      const raw = props[key]
      const scale = get(props.theme, sx.scale, sx.defaults)

      if (typeof raw === 'object') {
        cache.breakpoints =
          (!isCacheDisabled && cache.breakpoints) || get(props.theme, 'breakpoints', defaults.breakpoints)
        if (Array.isArray(raw)) {
          cache.media = (!isCacheDisabled && cache.media) || [null, ...cache.breakpoints.map(createMediaQuery)]
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props))
          continue
        }
        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props))
          shouldSort = true
        }
        continue
      }

      assign(styles, sx(raw, scale, props))
    }

    // sort object-based responsive styles
    if (shouldSort) {
      styles = sort(styles)
    }

    return styles
  }

  parse.config = config
  parse.propNames = Object.keys(config)
  parse.cache = cache

  const keys = Object.keys(config).filter((k) => k !== 'config')
  if (keys.length > 1) {
    keys.forEach((key) => {
      parse[key] = createParser({ [key]: config[key] })
    })
  }

  return parse
}
