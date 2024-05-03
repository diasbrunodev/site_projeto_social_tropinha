import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  green1: '#2ecc71',
  green2: '#006400', //#20bf6b #006600
  green3: 'rgb(82,212, 82)',
  green4: '#25D366',
  black: '#111',
  black2: '#1e272e',
  black3: '#050a1f',
  black4: '#000000',
  gray: '#95a5a6',
  gray2: '#f1f2f6',
  white: '#ffffff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '800px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${Colors.white};
    color: ${Colors.white};
  }
`

export const Container = styled.div`
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;

  background-color: ${Colors.white};
`
