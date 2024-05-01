import { ContainerHelp } from './styles'

import fotoPresent from '../../images/presenteTrop.jpg'

export const ImageFuture = () => {
  return (
    <>
      <ContainerHelp>
        <div>
          <img src={fotoPresent} alt="foto sobre ajuda" />
        </div>
      </ContainerHelp>
    </>
  )
}
