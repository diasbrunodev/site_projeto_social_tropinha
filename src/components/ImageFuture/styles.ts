import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerHelp = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 600px;
    object-fit: fill;

    @media (max-width: ${breakpoints.desktop}) {
      height: 400px;
    }
  }
`
