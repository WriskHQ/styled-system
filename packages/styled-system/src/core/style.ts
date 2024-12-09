import { ConfigStyle, Scale, StyleFunction } from '../types'
import { get } from './get'

export const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = get,
  defaultScale,
}: ConfigStyle): StyleFunction => {
  properties = properties || [property]

  const sx = (value: any, scale: Scale, _props: any) => {
    const result = {}
    const n = transform(scale, value, _props)
    if (n === null) return

    properties.forEach((prop) => {
      result[prop] = n
    })

    return result
  }

  sx.scale = scale
  sx.defaults = defaultScale

  return sx
}
