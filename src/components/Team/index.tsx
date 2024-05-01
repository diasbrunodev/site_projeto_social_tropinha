import { H3, P } from '../Project/styles'
import { ContainerTeam, DivImage } from './styles'

import teamFoto from '../../images/equipe.png'

export const Team = () => {
  return (
    <>
      <ContainerTeam>
        <H3>Equipe</H3>
        <P>
          Nossa equipe é formada por profissionais de diversas áreas. Oferecemos
          apoio psicológico, educacional, cultural, físico e jurídico. Contamos
          com um grupo de voluntários bastante atuante.
        </P>
        {/* <DivVideo>
          <video controls poster="../../videos/capaVideo.jpg" muted>
            <source src="../../../public/video_equipe.mp4" type="video/mp4" />
          </video>
        </DivVideo> */}

        <DivImage>
          <img src={teamFoto} alt="foto da equipe" />
        </DivImage>
      </ContainerTeam>
    </>
  )
}
