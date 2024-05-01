import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsappSquare } from 'react-icons/fa'

import { H2, H3, P } from '../../components/Project/styles'

import logoCaixaBeneficente from '../../images/parceiros/logo_cbpmrj3.jpg'
import propaganda from '../../images/parceiros/propaganda.jpg'
import bombeiros from '../../images/parceiros/logo_csscb_rj2.jpg'

import {
  BackgroundAboutUs,
  ButtonLink,
  ContainerAboutUs
} from '../AboutUs/styles'

import {
  DivImages,
  DivInfoPartners,
  DivTalkWithUs,
  PartnerSection
} from './styles'
import { H4 } from '../../components/HelpUs/styles'
// import { Mail } from '../../components/Email'

// interface Props {
//   email: string
//   subject: string
//   body: string
// }

// export const EmailLink: React.FC<Props> = ({ email, subject, body }) => {
//   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

//   return (
//     <a href={mailtoLink} target="_blank" rel="noreferrer">
//       <FaEnvelope size={34} color="#000" />
//     </a>
//   )
// }

export const PartnersPage = () => {
  return (
    <BackgroundAboutUs>
      <ContainerAboutUs>
        <PartnerSection>
          <H2>Nossos Parceiros</H2>

          <DivImages>
            <div>
              <a
                href="https://www.cbpmrj.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logoCaixaBeneficente} alt="logo caixa beneficente" />
              </a>
            </div>
            <div>
              <img src={propaganda} alt="logo propaganda" />
            </div>
            <div>
              <a
                href="https://www.facebook.com/Clube-Dos-Subtenentes-e-Sargentos-Bombeiros-RJ-389696884388710/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={bombeiros} alt="logo Clube dos Bombeiros" />
              </a>
            </div>
          </DivImages>
        </PartnerSection>

        <DivInfoPartners>
          <H3>Seja um de nossos parceiros também!</H3>
          <P>
            Tanto pessoa jurídica quanto pessoa física podem ser parceiros do
            Projeto Tropinha!
          </P>
          <H4>Pessoa Jurídica:</H4>
          <P>
            Nosso projeto já está constituído e com CNPJ. Saiba como ajudar e
            ter benefícios fiscais através dos meios de contato informados
            abaixo. É muito simples!
          </P>
          <P>Entre em contato conosco através dos seguintes meios:</P>
          <H4>Fale Conosco:</H4>

          <DivTalkWithUs>
            <div>
              {' '}
              <a
                href={`https://api.whatsapp.com/send?phone=5521972365359&text=Gostaria de informações sobre o Projeto Tropinha.`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare size={34} color="#000" />
              </a>
            </div>

            {/* TESTES PARA LINKAR AO EMAIL */}
            {/* <div>
            {' '}
            <a
              href="mailto:contato@projetotropinha.org"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope size={34} color="#000" />
            </a>
          </div> */}

            {/* <div>
            <EmailLink
              email="contato@projetotropinha.org"
              subject="Assunto do Email"
              body="Corpo do Email"
            />
          </div> */}

            {/* <div>
            <Mail
              label="Escreva um email"
              mailto="contato@projetotropinha.org"
            />
          </div> */}
            {/* TESTES PARA LINKAR AO EMAIL */}

            <div>
              <P>OU</P>
            </div>

            <div>
              <P>Email: contato@projetotropinha.org</P>
            </div>
          </DivTalkWithUs>

          <div>
            <ButtonLink>
              <Link className="link" to="/contato">
                CONTATO
              </Link>
            </ButtonLink>
          </div>

          <P className="lastParagraph">
            Entraremos em contato com você o mais breve possível para tirar
            todas as suas dúvidas e mostrar como sua empresa pode ser nossa
            parceira.
          </P>

          <ButtonLink>
            <Link className="link" to="/">
              HOME
            </Link>
          </ButtonLink>
        </DivInfoPartners>
      </ContainerAboutUs>
    </BackgroundAboutUs>
  )
}
