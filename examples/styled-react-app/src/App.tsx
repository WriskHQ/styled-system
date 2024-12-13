import styled, { ThemeProvider } from 'styled-components'
import { color, compose, css, space, Theme, typography } from '@wrisk/styled-system'
import { SpaceProps, TypographyProps, ColorProps } from '@wrisk/styled-system'

const theme: Theme = {
  colors: {
    primary: '#F9AB19',
  },
  space: ['0rem', '0.25rem', '0.5rem', '0.75rem', '1.0rem', '1.25rem', '1.5rem', '1.75rem', '2.0rem'],
}

const Box = styled.div<SpaceProps & TypographyProps & ColorProps>(
  css({
    pt: [4, 5, 6, 7],
  }),
  compose(space, typography, color),
)

function App() {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <Box p={4} color='primary'>
        Bob
      </Box>
    </ThemeProvider>
  )
}

export default App
