import { color } from '../color'

describe('color', () => {
  it('returns colors styles', () => {
    const style = color({
      color: 'gold',
      bg: 'tomato',
    })
    expect(style).toEqual({
      color: 'gold',
      backgroundColor: 'tomato',
    })
  })
})
