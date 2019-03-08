import React, { useState, useEffect } from 'react'
import Readme from '@styled-system/typography/README.md'

import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { space, color } from 'styled-system'
import lincoln from 'typography-theme-lincoln'
import merge from 'lodash.merge'
import Typography from '@styled-system/typography'
import transform from '@styled-system/typography/dist/transform-typography-theme'
import Modern from '@styled-system/typography/modern'
import Future from '@styled-system/typography/future'
import Baskerville from '@styled-system/typography/baskerville'
import RRoboto from '@styled-system/typography/roboto'
import PPoppins from '@styled-system/typography/poppins'

export default props =>
  <Readme />

const getFontHREF = fonts => '//fonts.googleapis.com/css?family=' +
  fonts.map(font => {
    let str = ''
    str += font.name.split(' ').join('+')
    str += ':'
    str += font.styles.join(',')
    return str
  }).join('|')

export const GoogleFont = props => {
  useEffect(() => {
    if (!props.theme.googleFonts) return
    const link = document.head.appendChild(
      document.createElement('link')
    )
    link.href = getFontHREF(props.theme.googleFonts)
    link.setAttribute('rel', 'stylesheet')

    return () => {
      link.remove()
    }
  })

  return false
}

const Roboto = props =>
  <>
    <GoogleFont
      theme={{
        googleFonts: [
          { name: 'Roboto', styles: [400,700] },
          { name: 'Roboto Mono', styles: [400] },
        ]
      }}
    />
    <RRoboto
      {...props}
      maxWidth={1024}
      mx='auto'
    />
  </>

const Poppins = props =>
  <>
    <GoogleFont
      theme={{
        googleFonts: [
          { name: 'Poppins', styles: [400, 700, 900] },
          { name: 'Roboto Mono', styles: [400] },
        ]
      }}
    />
    <PPoppins {...props} />
  </>

const Lincoln = props =>
  <>
    <GoogleFont theme={lincoln} />
    <Typography
      {...merge(defaultProps, configs.lincoln, props)}
    />
  </>

const themes = {
  Modern,
  Future,
  Baskerville,
  Roboto,
  Poppins,

  // typography.js themes
  Lincoln,
}

