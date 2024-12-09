import { createParser } from './parser'
import { createStyleFunction } from './index'
import { Config, StyleFunction } from '../types'
import * as CSS from 'csstype'

export const system = (args: Config = {}): StyleFunction => {
  const config = {}

  Object.keys(args).forEach((key) => {
    const conf = args[key]
    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key as keyof CSS.Properties,
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
