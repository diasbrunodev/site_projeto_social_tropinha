import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const LogoMainDiv = styled.div`
  text-align: center;
`

export const GuidelineSection = styled.section`
  margin: 20px 0 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    border-top: 1px solid ${Colors.green2};
    padding-top: 20px;
  }

  div {
    margin-left: 20px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-left: 0;
    }
  }

  img {
    height: 100%;

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: 20px;
    }
  }
`

export const ContainerGuidelineSection = styled.div`
  @media (max-width: ${breakpoints.desktop}) {
    border-bottom: 1px solid ${Colors.green2};
    margin-bottom: 30px;
  }
`
