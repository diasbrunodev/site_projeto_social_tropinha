import styled from 'styled-components'
import { Colors } from '../../styles'

export const DivContainer = styled.div``

export const TextDiv = styled.div`
  color: ${Colors.black};

  .divContent {
    padding: 20px;
  }
`

export const H2 = styled.h2`
  text-align: center;
  padding: 24px;
  font-size: 36px;
`

export const H3 = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`

export const P = styled.p`
  margin-bottom: 10px;
`

export const SliderDiv = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`

export const SliderTall = styled.div`
  img {
    height: 600px;
    width: 100%;
    object-fit: cover;
  }
`
