import { ConfigStyle, Scale, StyleFunction } from '../types'
import { get } from './get'

const getValue = (n: string | number, scale: Scale | undefined) => get(scale, n, n)

export const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = getValue,
  defaultScale,
}: ConfigStyle): StyleFunction => {
  properties = properties || [property]

  const sx = (value: any, scale: Scale, _props: any) => {
    const result = {}
    const n = transform(value, scale, _props)
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
