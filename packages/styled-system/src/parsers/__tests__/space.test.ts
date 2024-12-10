import { space } from '../space'

describe('space', () => {
  it('returns style objects', () => {
    const styles = space({
      m: '4px',
    })
    expect(styles).toEqual({ margin: '4px' })
  })

  it('returns 0 values', () => {
    const styles = space({ m: 0 })
    expect(styles).toEqual({ margin: 0 })
  })

  it('returns negative pixel values', () => {
    const styles = space({ m: -2 })
    expect(styles).toEqual({ margin: -8 })
  })

  it('returns negative em values', () => {
    const styles = space({ m: '-16em' })
    expect(styles).toEqual({ margin: '-16em' })
  })

  it('returns negative theme values', () => {
    const styles = space({
      theme: {
        space: [0, 4, 8],
      },
      m: -2,
    })
    expect(styles).toEqual({ margin: -8 })
  })

  it('returns positive theme values', () => {
    const styles = space({
      theme: {
        space: [0, '1em', '2em'],
      },
      m: 2,
    })
    expect(styles).toEqual({ margin: '2em' })
  })

  it('returns responsive values', () => {
    const styles = space({
      m: [0, 2, 3],
    })
    expect(styles).toEqual({
      margin: 0,
      '@media screen and (min-width: 40em)': { margin: 8 },
      '@media screen and (min-width: 52em)': { margin: 16 },
    })
  })

  it('returns aliased values', () => {
    const styles = space({
      px: 2,
    })
    expect(styles).toEqual({ paddingLeft: 8, paddingRight: 8 })
  })

  it('returns string values from theme', () => {
    const styles = space({
      theme: {
        space: [0, '1em'],
      },
      padding: 1,
    })
    expect(styles).toEqual({ padding: '1em' })
  })

  it('returns negative string values from theme', () => {
    const styles = space({
      theme: {
        space: [0, '1em'],
      },
      margin: -1,
    })
    expect(styles).toEqual({ margin: '-1em' })
  })

  it('returns values from theme object', () => {
    const styles = space({
      theme: {
        space: { sm: 1 },
      },
      margin: 'sm',
    })
    expect(styles).toEqual({ margin: 1 })
  })

  it('pl prop sets paddingLeft', () => {
    const styles = space({ pl: 2 })
    expect(styles).toEqual({ paddingLeft: 8 })
  })

  it('pl prop sets paddingLeft 0', () => {
    const styles = space({ pl: 0 })
    expect(styles).toEqual({ paddingLeft: 0 })
  })

  it('px prop overrides pl prop', () => {
    const styles = space({
      pl: 1,
      px: 2,
    })
    expect(styles).toEqual({ paddingLeft: 8, paddingRight: 8 })
  })

  it('py prop overrides pb prop', () => {
    const styles = space({
      pb: 1,
      py: 2,
    })
    expect(styles).toEqual({ paddingTop: 8, paddingBottom: 8 })
  })

  it('mx prop overrides mr prop', () => {
    const styles = space({
      mr: 1,
      mx: 2,
    })
    expect(styles).toEqual({ marginLeft: 8, marginRight: 8 })
  })

  it('my prop overrides mt prop', () => {
    const styles = space({
      mt: 1,
      my: 2,
    })
    expect(styles).toEqual({ marginTop: 8, marginBottom: 8 })
  })

  it('margin overrides m prop', () => {
    const styles = space({
      m: 1,
      margin: 2,
    })
    expect(styles).toEqual({ margin: 8 })
  })

  it('handles margin with no theme', () => {
    const styles = space({
      mt: 12,
    })
    expect(styles).toEqual({
      marginTop: 12,
    })
  })

  it('handles overriding margin/padding shortcut props', () => {
    const styles = space({
      m: 4,
      mx: 3,
      mr: 2,
      p: 4,
      py: 3,
      pt: 2,
    })
    expect(styles).toEqual({
      margin: 32,
      marginLeft: 16,
      marginRight: 8,
      padding: 32,
      paddingBottom: 16,
      paddingTop: 8,
    })
  })

  it('single directions override axes', () => {
    const styles = space({
      mx: 3,
      ml: 1,
      mr: 2,
      px: 3,
      pl: 1,
      pr: 2,
    })
    expect(styles).toEqual({
      marginLeft: 4,
      marginRight: 8,
      paddingLeft: 4,
      paddingRight: 8,
    })
  })

  it('supports object values', () => {
    const styles = space({
      m: {
        _: 0,
        0: 1,
        1: 2,
      },
    })
    expect(styles).toEqual({
      margin: 0,
      '@media screen and (min-width: 40em)': {
        margin: 4,
      },
      '@media screen and (min-width: 52em)': {
        margin: 8,
      },
    })
  })

  it('supports non-array breakpoints', () => {
    const theme = {
      disableStyledSystemCache: true,
      breakpoints: {
        small: '40em',
        medium: '52em',
      },
    }
    const styles = space({
      theme,
      p: {
        small: 2,
      },
      m: {
        _: 0,
        small: 1,
        medium: 2,
      },
    })
    expect(styles).toEqual({
      margin: 0,
      '@media screen and (min-width: 40em)': {
        margin: 4,
        padding: 8,
      },
      '@media screen and (min-width: 52em)': {
        margin: 8,
      },
    })
  })
})
