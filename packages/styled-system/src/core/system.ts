import { createParser } from './parser'
import { createStyleFunction } from './index'
import { StyleFunction, ConfigStyle, ConfigFunction } from '../types'
import * as CSS from 'csstype'

export type SystemConfig<T extends string = never> = Partial<
  Record<keyof CSS.Properties | T, ConfigStyle | ConfigFunction | true>
>

export const system = (args: SystemConfig<string> = {}): StyleFunction => {
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
