import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const BackgroundAboutUs = styled.div`
  background-color: ${Colors.green2};
  padding: 20px;
  width: 75%;
  margin: 0 auto;
  border-radius: 5px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    padding: 10px;
    margin: 0;
    border-radius: 0;
  }
`

export const ContainerAboutUs = styled.section`
  background-color: ${Colors.gray2};
  color: ${Colors.black};
  width: 60%;
  margin: auto;
  border-radius: 5px;
  padding: 20px;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
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

  &:hover {
    background-color: ${Colors.black4};
    .link {
      color: ${Colors.green4};
    }
  }
`
