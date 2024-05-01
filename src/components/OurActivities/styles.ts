import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { H3 } from '../Project/styles'
import { ButtonLink } from '../../pages/AboutUs/styles'

export const DivActivities = styled.div`
  background-color: ${Colors.green2};
  width: 100%;

  ${H3} {
    color: ${Colors.white};
  }
`

export const DivButtonOurActivities = styled.div`
  ${ButtonLink} {
    background-color: ${Colors.white};
    margin-top: 42px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-top: 0;
    }

    .link {
      color: ${Colors.green2};
    }
  }
`

export const ContainerActivities = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    color: ${Colors.white};
    padding-bottom: 30px;
    margin: auto;
  }

  .text-exception {
    @media (max-width: ${breakpoints.desktop}) {
      text-align: center;
    }
  }
`
