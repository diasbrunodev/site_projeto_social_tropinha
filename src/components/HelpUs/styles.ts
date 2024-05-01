import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { H3, P } from '../Project/styles'

export const ContainerHelp = styled.div`
  background-color: ${Colors.green2};

  @media (max-width: ${breakpoints.desktop}) {
    background-color: ${Colors.white};
  }

  ${H3} {
    text-align: center;
    font-size: 48px;
    padding: 60px 0 30px;

    @media (max-width: ${breakpoints.desktop}) {
      color: ${Colors.green2};
      padding: 50px 0 0;
    }
  }

  ${P} {
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;

    @media (max-width: ${breakpoints.desktop}) {
      color: ${Colors.green2};
    }
  }
`

export const H4 = styled.h4`
  font-size: 36px;
  font-weight: 300;
  text-align: center;
  padding: 30px 0;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    color: ${Colors.green2};
    padding: 20px 0;
    margin-bottom: 10px;
  }
`
