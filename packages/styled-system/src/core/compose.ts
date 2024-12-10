import { createParser } from './parser'
import { StyleFunction } from '../types'

export const compose = (...parsers: StyleFunction[]): StyleFunction => {
  let config = {}
  parsers.forEach((parser) => {
    if (!parser || !parser.config) return
    Object.assign(config, parser.config)
  })

  return createParser(config)
}
