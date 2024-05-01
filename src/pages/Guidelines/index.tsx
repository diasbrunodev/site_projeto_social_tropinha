import { Link } from 'react-router-dom'
import { H2, H3, P } from '../../components/Project/styles'

import logoDiretrizes from '../../images/logo-diretrizes/logo_mvv2.png'
import logoMissao from '../../images/logo-diretrizes/logo_missao.png'
import logoVisao from '../../images/logo-diretrizes/logo_visao.png'
import logoValores from '../../images/logo-diretrizes/logo_valores.png'
import {
  BackgroundAboutUs,
  ButtonLink,
  ContainerAboutUs
} from '../AboutUs/styles'
import { GuidelineSection, LogoMainDiv } from './styles'

export const Guidelines = () => {
  return (
    <BackgroundAboutUs>
      <ContainerAboutUs>
        <div>
          <LogoMainDiv>
            <img src={logoDiretrizes} alt="logo diretrizes" />
          </LogoMainDiv>

          <H2>Nossas Diretrizes</H2>

          <div>
            <GuidelineSection>
              <img src={logoMissao} alt="logo diretrizes" />
              <div>
                <H3>Missão</H3>
                <P>
                  Fazer com que nossas crianças tenham apoio social, incentivo e
                  se desenvolvam através do Esporte, da Cultura, das Artes, do
                  Lazer e outras atividades de relevância pública, para que
                  possamos de alguma forma mudar e agregar na vida dessas
                  crianças o desenvolvimento necessário para se estruturar como
                  pessoa e cidadão.
                </P>
              </div>
            </GuidelineSection>

            <GuidelineSection>
              <img src={logoVisao} alt="logo diretrizes" />
              <div>
                <H3>Visão</H3>
                <P>
                  Ser um dos Projetos Sociais mais importantes do nosso Estado,
                  ser o divisor de águas em nossa região com apoio incondicional
                  para as nossa crianças, com foco no crescimento pessoal e na
                  responsabilidade socioambiental.
                </P>
              </div>
            </GuidelineSection>

            <GuidelineSection>
              <img src={logoValores} alt="logo diretrizes" />
              <div>
                <H3>Valores</H3>
                <P>
                  Fazer a inclusão total de nossas crianças sem discriminação,
                  com criatividade, equilíbrio e inovação nas atividades
                  educacionais, ter sustentabilidade com ética e transparência,
                  responsabilidade social, amor ao próximo e respeito as Leis de
                  Deus, dos homens e da natureza.
                </P>
              </div>
            </GuidelineSection>
          </div>
        </div>

        <ButtonLink>
          <Link className="link" to="/">
            HOME
          </Link>
        </ButtonLink>
      </ContainerAboutUs>
    </BackgroundAboutUs>
  )
}
