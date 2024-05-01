import styled from 'styled-components'
import { H3 } from '../Project/styles'
import { Colors, breakpoints } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const SectionsSecondary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: -5px;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`

export const DivContainerSections = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  color: black;

  ${H3} {
    text-align: center;
  }

  ${ButtonContainer} {
    background-color: ${Colors.green2};
    color: ${Colors.white};
  }
`

export const DivImage = styled.div`
  width: 300px;

  img {
    width: 100%;
  }
`
