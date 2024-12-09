import assign from 'object-assign'

export const merge = (a, b) => {
  let result = assign({}, a, b)
  for (const key in a) {
    if (!a[key] || typeof b[key] !== 'object') continue
    assign(result, {
      [key]: assign(a[key], b[key]),
    })
  }
  return result
}
