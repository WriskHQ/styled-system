export const merge = (a: Record<string, string | number | object>, b: Record<string, string | number | object>) => {
  let result = Object.assign({}, a, b)
  for (const key in a) {
    if (!a[key] || typeof b[key] !== 'object') continue
    result = {
      ...result,
      ...{
        [key]: Object.assign(a[key], b[key]),
      },
    }
  }
  return result
}
