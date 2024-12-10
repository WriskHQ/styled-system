import { grid } from '../grid'

describe('grid', () => {
  it('returns grid styles', () => {
    const style = grid({
      gridGap: 32,
    })
    expect(style).toEqual({
      gridGap: 32,
    })
  })
})
