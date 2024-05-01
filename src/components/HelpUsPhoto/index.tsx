import { ContainerHelp } from './styles'

import fotoHelp from '../../images/foto_donate.jpg'

export const HelpUsPhoto = () => {
  return (
    <>
      <ContainerHelp>
        <div>
          <img src={fotoHelp} alt="foto sobre ajuda" />
        </div>
      </ContainerHelp>
    </>
  )
}
