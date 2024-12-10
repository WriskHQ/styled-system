import {
  color,
  width,
  layout,
  fontSize,
  size,
  gridGap,
  gridRowGap,
  gridColumnGap,
  border,
  shadow,
  compose,
} from '../src'

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

describe('styles', () => {
  it('returns color values from theme', () => {
    const a = color({ theme, color: 'blue', bg: 'black' })
    expect(a).toEqual({ color: '#07c', backgroundColor: '#111' })
  })

  it('returns raw color values', () => {
    const a = color({
      theme,
      color: 'inherit',
      bg: 'tomato',
    })
    expect(a).toEqual({ color: 'inherit', backgroundColor: 'tomato' })
  })

  it.skip('backgroundColor prop overrides bg prop', () => {
    const a = color({
      backgroundColor: 'tomato',
      bg: 'blue',
    })
    expect(a).toEqual({ backgroundColor: 'tomato' })
  })

  it('returns a pixel font-size', () => {
    const a = fontSize({ fontSize: 48 })
    expect(a).toEqual({ fontSize: 48 })
  })

  it('uses a default font-size scale', () => {
    const a = fontSize({ fontSize: 2 })
    expect(a).toEqual({ fontSize: 16 })
  })

  it('returns a string font-size', () => {
    const a = fontSize({ fontSize: '2em' })
    expect(a).toEqual({ fontSize: '2em' })
  })

  it('returns a percentage based width', () => {
    const a = width({ width: 1 / 2 })
    expect(a).toEqual({ width: '50%' })
  })

  it('returns a pixel based width', () => {
    const a = width({ width: 256 })
    expect(a).toEqual({ width: 256 })
  })

  it('returns a string width', () => {
    const a = width({ width: 'auto' })
    expect(a).toEqual({ width: 'auto' })
  })

  it('returns a width based on theme.sizes', () => {
    const a = width({
      theme: {
        sizes: [24, 48],
      },
      width: 1,
    })
    expect(a).toEqual({ width: 48 })
  })

  it('returns fractional responsive widths', () => {
    const a = width({
      width: [1, 1 / 2, 1 / 4],
    })
    expect(a).toEqual({
      width: '100%',
      '@media screen and (min-width: 40em)': {
        width: '50%',
      },
      '@media screen and (min-width: 52em)': {
        width: '25%',
      },
    })
  })

  it('size returns width and height', () => {
    const styles = size({
      size: 4,
    })
    expect(styles).toEqual({ width: 4, height: 4 })
  })

  // grid
  it('gridGap returns a scalar style', () => {
    const a = gridGap({
      theme: {
        space: [0, 2, 4, 8],
      },
      gridGap: 3,
    })
    expect(a).toEqual({ gridGap: 8 })
  })

  it('gridGap uses the default scale', () => {
    const a = gridGap({
      theme: {},
      gridGap: 2,
    })
    expect(a).toEqual({ gridGap: 8 })
  })

  it('gridRowGap returns a scalar style', () => {
    const a = gridRowGap({
      theme: {
        space: [0, 2, 4, 8],
      },
      gridRowGap: 3,
    })
    expect(a).toEqual({ gridRowGap: 8 })
  })

  it('gridRowGap uses the default scale', () => {
    const a = gridRowGap({
      theme: {},
      gridRowGap: 2,
    })
    expect(a).toEqual({ gridRowGap: 8 })
  })

  it('gridColumnGap returns a scalar style', () => {
    const a = gridColumnGap({
      theme: {
        space: [0, 2, 4, 8],
      },
      gridColumnGap: 3,
    })
    expect(a).toEqual({ gridColumnGap: 8 })
  })

  it('gridColumnGap uses the default scale', () => {
    const a = gridColumnGap({
      theme: {},
      gridColumnGap: 2,
    })
    expect(a).toEqual({ gridColumnGap: 8 })
  })

  it('border prop returns correct sequence', () => {
    const a = border({
      borderBottom: '1px solid',
      borderWidth: '2px',
      borderStyle: 'dashed',
      borderColor: 'red',
    })
    expect(a).toEqual({
      borderBottom: '1px solid',
      borderWidth: '2px',
      borderStyle: 'dashed',
      borderColor: 'red',
    })
  })

  it('shadow handles boxShadow and textShadow props', () => {
    const a = shadow({
      textShadow: '0 -1px rgba(255, 255, 255, .25)',
      boxShadow: 'none',
    })
    expect(a).toEqual({
      textShadow: '0 -1px rgba(255, 255, 255, .25)',
      boxShadow: 'none',
    })
  })

  it('compose maintains media query order', () => {
    const parser = compose(color, layout)
    const a = parser({
      bg: ['tomato', null, 'black'],
      width: ['100%', '50%', '25%'],
    })
    expect(Object.keys(a)).toEqual([
      'backgroundColor',
      '@media screen and (min-width: 40em)',
      '@media screen and (min-width: 52em)',
      'width',
    ])
  })
})
