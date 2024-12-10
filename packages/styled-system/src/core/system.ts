import { createParser } from './parser'
import { createStyleFunction } from './index'
import { StyleFunction, ConfigStyle, ConfigFunction } from '../types'
import * as CSS from 'csstype'

export type SystemConfig<T extends string = never> = Partial<
  Record<keyof CSS.Properties | T, ConfigStyle | ConfigFunction | true>
>

export const system = (args: SystemConfig<string> = {}): StyleFunction => {
  const config: Record<string, StyleFunction> = Object.entries(args).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]:
        typeof value === 'function'
          ? value
          : value === true
            ? createStyleFunction({
                property: key as keyof CSS.Properties,
                scale: key,
              })
            : createStyleFunction(value),
    }
  }, {})

  return createParser(config)
}
