import styled from 'styled-components'
import { Colors } from '../../styles'

export const BackgroundAboutUs = styled.div`
  background-color: ${Colors.green2};
  padding: 20px;
  width: 75%;
  margin: 0 auto 20px;
  border-radius: 5px;
`

export const ContainerAboutUs = styled.section`
  background-color: ${Colors.gray2};
  color: ${Colors.black};
  width: 60%;
  margin: auto;
  border-radius: 5px;
  padding: 20px;
`

export const ButtonLink = styled.div`
  background: ${Colors.green2};

  margin: auto;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 12px;
  font-weight: 900;
  width: 160px;

  .link {
    color: ${Colors.white};

    display: flex;
    justify-content: center;

    font-weight: bold;
  }
`
