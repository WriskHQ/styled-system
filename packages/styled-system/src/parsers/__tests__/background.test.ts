import { background } from '../background'

describe('background', () => {
  it('returns background styles', () => {
    const style = background({ backgroundImage: 'url(kitten.gif)' })
    expect(style).toEqual({ backgroundImage: 'url(kitten.gif)' })
  })
})
