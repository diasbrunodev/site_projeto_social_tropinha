import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { H3, P } from '../Project/styles'
import { ButtonContainer } from '../Button/styles'

export const ContainerHelp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px;
  height: 600px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 20px;
    height: 400px;
  }

  ${H3} {
    text-align: center;
    color: ${Colors.black};
    margin-bottom: 40px;
  }

  ${P} {
    text-align: center;
    color: ${Colors.black};
    margin: 40px auto;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 40px auto 0;
    }
  }

  ${ButtonContainer} {
    background-color: ${Colors.green2};
    color: ${Colors.white};
    margin: 40px auto;
  }
`

export const ContainerPartner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    gap: 15px;
    padding: 0;
  }
`

export const DivImage = styled.div`
  width: 20%;

  @media (max-width: ${breakpoints.desktop}) {
    width: 30%;
  }

  img {
    width: 100%;
    object-fit: fill;
  }
`
