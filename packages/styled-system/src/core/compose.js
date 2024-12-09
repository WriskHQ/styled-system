import assign from 'object-assign'
import { createParser } from './parser'

export const compose = (...parsers) => {
  let config = {}
  parsers.forEach((parser) => {
    if (!parser || !parser.config) return
    assign(config, parser.config)
  })

  return createParser(config)
}
