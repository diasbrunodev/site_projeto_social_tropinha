import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { ButtonLink } from '../../pages/AboutUs/styles'

export const BannerDiv = styled.div`
  background-color: ${Colors.green2};

  > div {
    width: 50%;
    margin: auto;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }

  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 50%;
    height: 20em;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      height: 200px;
    }
  }
`

export const DivButtons = styled.div`
  background-color: ${Colors.green2};
  padding: 20px 150px;

  display: flex;
  justify-content: space-around;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;

    padding: 20px 0;
    margin-top: -1px;
  }

  ${ButtonLink} {
    background-color: ${Colors.green4};

    transition: color 0.3s ease; /* Adiciona uma transição suave para a mudança de cor */

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: 20px;
    }

    .link {
      color: ${Colors.black3};
    }

    &:hover {
      background-color: ${Colors.black4};
      .link {
        color: ${Colors.green4};
      }
    }
  }
`
