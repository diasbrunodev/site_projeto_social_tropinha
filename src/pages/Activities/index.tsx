import { Link } from 'react-router-dom'
import { H2, P } from '../../components/Project/styles'

import {
  BackgroundAboutUs,
  ButtonLink,
  ContainerAboutUs
} from '../AboutUs/styles'
import { DivDivisionSection } from './styles'
import { FaWhatsappSquare } from 'react-icons/fa'

export const ActivitiesPage = () => {
  return (
    <BackgroundAboutUs>
      <ContainerAboutUs>
        <div>
          <H2>Nossas Atividades</H2>

          <P>📍Aula de Violão:</P>
          <P>Segundas-feiras - 20:00</P>
          <DivDivisionSection></DivDivisionSection>

          <P>📍Aula de Percussão:</P>
          <P>Terças-feiras - 19:00</P>
          <DivDivisionSection></DivDivisionSection>

          <P>📍Oficina de Teatro:</P>
          <P>Temos 2 turmas:</P>
          <P>Segundas feiras</P>
          <P>8 a 12 anos: 18:30 a 19:30</P>
          <P>5 a 7 anos: 19:30 a 20:30</P>
          <DivDivisionSection></DivDivisionSection>

          <P>📍Taekwondo:</P>
          <P>Sábado - 14:00</P>
          <DivDivisionSection></DivDivisionSection>

          <P>📍Futsal Masculino:</P>
          <P>Temos 2 turmas:</P>
          <P>Sábado</P>
          <P>Equipe 1 - 14:50</P>
          <P>Equipe 2 - 15:40</P>
          <DivDivisionSection></DivDivisionSection>

          <P>📍Futsal Feminino:</P>
          <P>Sábado - 16:30</P>
          <DivDivisionSection></DivDivisionSection>

          <P>📍Reforço Escolar:</P>
          <P>Manhã:</P>
          <P>Segundas e Quartas - 9:00 às 10:00</P>
          <P>Tarde:</P>
          <P>De Segunda a quinta - 15:00 às 16:30</P>
          <DivDivisionSection></DivDivisionSection>

          <P>*Sujeito a alterações</P>
          <P>*Nos consulte para mais informações</P>
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
          <DivDivisionSection></DivDivisionSection>
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
