import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const ContainerHelp = styled.div`
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    border: 1px solid ${Colors.green2};
  }

  img {
    width: 100%;
    height: 600px;
    object-fit: fill;

    @media (max-width: ${breakpoints.desktop}) {
      height: 400px;
    }
  }
`
