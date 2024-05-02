import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const DivMenuResponsive = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;

    padding: 0 20px 10px 10px;

    .header-logo-hamburguer {
      display: flex;
      justify-content: space-between;
      align-items: end;

      @media (max-width: ${breakpoints.desktop}) {
        justify-content: space-between;
        align-items: end;
        padding: 5px 0 0 0;
      }
    }
  }
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  .divLogo {
    width: 9em;

    @media (max-width: ${breakpoints.desktop}) {
      width: 5em;
    }

    img {
      width: 100%;
    }
  }

  .divTitleLogo {
    width: 24em;

    @media (max-width: ${breakpoints.desktop}) {
      width: 13em;
    }

    img {
      width: 100%;
    }
  }
`

export const H1 = styled.h1`
  color: ${Colors.green4};

  font-family: 'Bungee', sans-serif;
  font-weight: 400;
  font-style: normal;

  margin: -16px;
  padding-left: 20px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 0.9em;
    margin: 0;
    letter-spacing: 1px;
  }
`

export const Links = styled.ul`
  display: flex;
  padding: 10px;
  gap: 10px;

  a {
    color: ${Colors.green4};
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  text-transform: uppercase;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 10px;
  }
`

export const Border = styled.div`
  border: 1px solid black;
  width: 100%;
  margin: auto;
`

export const BackgroundIconContainers = styled.div`
  background-color: ${Colors.black3};
`

export const IconContainers = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 200px;
  padding: 10px 0;

  img {
    width: 30px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    margin: 0;
    padding: 5px 20px;
    border-bottom: 1px solid black;
  }
`

export const Hamburger = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
    text-align: right;
  }
`

export const IconMenu = styled.div`
  display: none;

  &.is-open {
    display: block;
    background-color: ${Colors.black3};
    color: ${Colors.green4};
    padding: 5px;
    border-radius: 5px;
  }
`
