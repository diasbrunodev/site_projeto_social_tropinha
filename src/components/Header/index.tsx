import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaTiktok
} from 'react-icons/fa'

import { TiThMenuOutline } from 'react-icons/ti'

import { IoCloseCircle } from 'react-icons/io5'

import {
  BackgroundIconContainers,
  Border,
  DivMenuResponsive,
  H1,
  Hamburger,
  HeaderBar,
  IconContainers,
  IconMenu,
  LinkItem,
  Links,
  LogoDiv,
  NavMobile
} from './styles'

import logo from '../../images/logo_tropinha_oficial_site.png'
// import titleLogo from '../../images/titulo_tropinha_topo.png'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClose, setIsMenuClose] = useState(false)

  return (
    <>
      <DivMenuResponsive>
        <div className="header-logo-hamburguer">
          <LogoDiv>
            <Link to="/">
              <div className="divLogo">
                <img src={logo} alt="Logo Projeto Tropinha" />
              </div>
            </Link>
            <div className="divTitleLogo">
              {/* <img src={titleLogo} alt="Logo Projeto Tropinha" /> */}
              <H1>PROJETO TROPINHA</H1>
            </div>
          </LogoDiv>

          <Hamburger
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              setIsMenuClose(!isMenuClose)
            }}
          >
            <IconMenu className={isMenuOpen ? '' : 'is-open'}>
              <TiThMenuOutline size={34} />
            </IconMenu>

            <IconMenu className={isMenuOpen ? 'is-open' : ''}>
              <IoCloseCircle size={34} />
            </IconMenu>
          </Hamburger>
        </div>

        <NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <Links>
            <LinkItem>
              <Link to="/sobre-nos">Quem Somos</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/diretrizes">Diretrizes</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/parceiros">Parceiros</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/atividades">Atividades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/contato">Fale Conosco</Link>
            </LinkItem>
          </Links>
        </NavMobile>
      </DivMenuResponsive>

      <HeaderBar>
        <LogoDiv>
          <Link to="/">
            <div className="divLogo">
              <img src={logo} alt="Logo Projeto Tropinha" />
            </div>
          </Link>
          <div className="divTitleLogo">
            {/* <img src={titleLogo} alt="Logo Projeto Tropinha" /> */}
            <H1>PROJETO TROPINHA</H1>
          </div>
        </LogoDiv>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/sobre-nos">Quem Somos</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/diretrizes">Diretrizes</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/parceiros">Parceiros</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/atividades">Atividades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/contato">Fale Conosco</Link>
            </LinkItem>
          </Links>
        </nav>
      </HeaderBar>

      <Border></Border>

      <BackgroundIconContainers>
        <IconContainers>
          <a
            href="https://www.instagram.com/projetotropinha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare size={34} className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/projeto-tropinha-068051257/?originalSubdomain=br"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={34} className="social-icon" />
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=5521972365359&text=Gostaria de informações sobre o Projeto Tropinha.`}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsappSquare size={34} className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@projetosocialtropinha?_t=8eBSeBbcgq6&_r=1"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok size={34} className="social-icon" />
          </a>
        </IconContainers>
      </BackgroundIconContainers>
    </>
  )
}
