import { createParser } from './parser'
import { createStyleFunction } from './index'

export const system = (args = {}) => {
  const config = {}
  Object.keys(args).forEach((key) => {
    const conf = args[key]
    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key,
      })
      return
    }
    if (typeof conf === 'function') {
      config[key] = conf
      return
    }
    config[key] = createStyleFunction(conf)
  })

  return createParser(config)
}
