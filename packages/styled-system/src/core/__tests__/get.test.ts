import { get } from '../get'

describe('get', () => {
  it('should returns a deeply nested value', () => {
    const a = get(
      {
        colors: {
          blue: ['#0cf', '#0be', '#09d', '#07c'],
        },
      },
      'colors.blue.3',
    )
    expect(a).toBe('#07c')
  })

  it('should supports fallback values', () => {
    const a = get({}, 'hi', 'nope')
    expect(a).toBe('nope')
  })

  it('should handles number values', () => {
    const a = get([1, 2, 3], 0)
    expect(a).toBe(1)
  })

  it('should handle undefined values', () => {
    const a = get({}, undefined)
    expect(a).toBe(undefined)
  })

  it('should handle null values', () => {
    const a = get({}, null)
    expect(a).toBe(undefined)
  })

  it('should returns 0 index items', () => {
    const a = get(['a', 'b', 'c'], 0)
    expect(a).toBe('a')
  })
})
