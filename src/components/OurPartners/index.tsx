import { ContainerHelp, ContainerPartner, DivImage } from './styles'

import partner1 from '../../images/parceiros/logo_cbpmrj3.jpg'
import partner2 from '../../images/parceiros/logo_csscb_rj2.jpg'
import partner3 from '../../images/parceiros/propaganda.jpg'
import { H3, P } from '../Project/styles'
import { ButtonLink } from '../../pages/AboutUs/styles'
import { Link } from 'react-router-dom'

export const Partners = () => {
  return (
    <>
      <ContainerHelp>
        <H3>Nossos Parceiros</H3>
        <ContainerPartner>
          <DivImage>
            <img src={partner1} alt="foto sobre ajuda" />
          </DivImage>
          <DivImage>
            <img src={partner2} alt="foto sobre ajuda" />
          </DivImage>
          <DivImage>
            <img src={partner3} alt="foto sobre ajuda" />
          </DivImage>
        </ContainerPartner>
        <P>Seja um dos nossos parceiros!</P>
        <ButtonLink>
          <Link className="link" to="/parceiros">
            SAIBA MAIS
          </Link>
        </ButtonLink>
      </ContainerHelp>
    </>
  )
}
