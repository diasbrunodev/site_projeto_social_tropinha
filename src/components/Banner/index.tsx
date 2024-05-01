import { BannerDiv, DivButtons } from './styles'

import foto1 from '../../images/capa_n.jpg'
import foto2 from '../../images/capa2_n.jpg'

import { ButtonLink } from '../../pages/AboutUs/styles'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <>
      <BannerDiv>
        <div>
          <img src={foto1} alt="foto do projeto" />
          <img src={foto2} alt="foto do projeto" />
        </div>
      </BannerDiv>

      <DivButtons>
        <ButtonLink>
          <Link
            className="link"
            to="https://bazar-online-tropinha.vercel.app/"
            target="_blank"
          >
            BAZAR BENEFICIENTE
          </Link>
        </ButtonLink>
        <ButtonLink>
          <Link
            className="link"
            to="https://forms.gle/FmnjQ7pVYjBZzPzK6"
            target="_blank"
          >
            SEJA UM PADRINHO
          </Link>
        </ButtonLink>
        <ButtonLink>
          <Link className="link" to="/sobre-nos" target="_blank">
            SEJA UM VOLUNTÁRIO
          </Link>
        </ButtonLink>
        <ButtonLink>
          <Link className="link" to="/sobre-nos" target="_blank">
            AJUDE COMO PUDER
          </Link>
        </ButtonLink>
        <ButtonLink>
          <Link className="link" to="/sobre-nos" target="_blank">
            DOE COM I.R.
          </Link>
        </ButtonLink>
      </DivButtons>
    </>
  )
}
