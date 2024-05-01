import { H3, P } from '../Project/styles'
import { DivContainerSections, DivImage } from '../ProjectSection/styles'
import imgDiretrizes from '../../images/diretrizes/logo_mvv2.jpg'
import { ButtonLink } from '../../pages/AboutUs/styles'
import { Link } from 'react-router-dom'

export const OurGuidelines = () => {
  return (
    <>
      <DivContainerSections>
        <H3>Nossas Diretrizes</H3>
        <DivImage>
          <img src={imgDiretrizes} alt="imagem diretrizes" />
        </DivImage>
        <P>Conheça nossas diretrizes.</P>
        <P>Missão, Visão e Valores.</P>

        <ButtonLink>
          <Link className="link" to="/diretrizes">
            SAIBA MAIS
          </Link>
        </ButtonLink>
      </DivContainerSections>
    </>
  )
}
