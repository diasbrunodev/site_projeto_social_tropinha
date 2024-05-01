import { Link } from 'react-router-dom'
import { H3 } from '../Project/styles'
import { DivContainerSections } from '../ProjectSection/styles'
import { ButtonLink } from '../../pages/AboutUs/styles'
import {
  ContainerActivities,
  DivActivities,
  DivButtonOurActivities
} from './styles'

export const OurActivities = () => {
  return (
    <>
      <DivActivities>
        <DivContainerSections>
          <H3>Nossas Atividades:</H3>

          <ContainerActivities>
            <div>📍Reforço Escolar</div>
            <div>📍Aula de Violão</div>
            <div>📍Aula de Percussão</div>
            <div>📍Oficina de Teatro</div>
            <div>📍Taekwondo</div>
            <div>📍Futsal Masculino</div>
            <div>📍Futsal Feminino</div>
            <div>📍Aula de Xadrez</div>
            <div>📍Aula de Inglês</div>
            <div className="text-exception">📍Atendimento Psicológico</div>
          </ContainerActivities>

          <DivButtonOurActivities>
            <ButtonLink>
              <Link className="link" to="/atividades">
                SAIBA MAIS
              </Link>
            </ButtonLink>
          </DivButtonOurActivities>
        </DivContainerSections>
      </DivActivities>
    </>
  )
}
