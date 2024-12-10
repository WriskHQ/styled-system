export function get<T = string | number>(obj: object, path: string | number, fallback?: string | number | T): T {
  const key = typeof path === 'string' ? path.split('.') : [path]

  let result: object = obj

  for (let i = 0; i < key.length; i += 1) {
    if (!result) {
      break
    }

    result = result[key[i]]
  }

  return (result === undefined ? fallback : result) as unknown as T
}
