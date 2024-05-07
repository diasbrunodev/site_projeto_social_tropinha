import { Link } from 'react-router-dom'
import { H2, H3, P } from '../../components/Project/styles'

import {
  BackgroundAboutUs,
  ButtonLink,
  ContainerAboutUs
} from '../AboutUs/styles'
import {
  ContainerContact,
  DivContactSection,
  DivLocation,
  DivWhatsAppEmail
} from './styles'
import { FaWhatsappSquare } from 'react-icons/fa'

export const Contact = () => {
  return (
    <ContainerContact>
      <BackgroundAboutUs>
        <ContainerAboutUs>
          <DivContactSection>
            <H2>Fale Conosco</H2>
            <div>
              <DivWhatsAppEmail>
                <div className="div-whatsapp">
                  {' '}
                  <div></div>
                  <a
                    href={`https://api.whatsapp.com/send?phone=5521972365359&text=Gostaria de informações sobre o Projeto Tropinha.`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsappSquare size={34} color="#000" />{' '}
                  </a>
                  <div>(21) 972365359</div>
                </div>
                <div>
                  <P>Email: contato@projetotropinha.org</P>
                </div>
              </DivWhatsAppEmail>
            </div>
          </DivContactSection>

          <DivLocation>
            <H3>Nossa Localização</H3>
            <P>Estamos na Travessa Carlos Xavier, nº 96</P>
            <P>Madureira, Rio de Janeiro - RJ</P>
            <P>CEP: 21310-010</P>
            <P>Clube dos Subtenentes e Sargentos dos Bombeiros</P>
          </DivLocation>

          <ButtonLink>
            <Link className="link" to="/">
              HOME
            </Link>
          </ButtonLink>
        </ContainerAboutUs>
      </BackgroundAboutUs>
    </ContainerContact>
  )
}
