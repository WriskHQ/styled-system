import { get } from './get'

const getValue = (n, scale) => get(scale, n, n)

export const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = getValue,
  defaultScale,
}) => {
  properties = properties || [property]
  const sx = (value, scale, _props) => {
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
