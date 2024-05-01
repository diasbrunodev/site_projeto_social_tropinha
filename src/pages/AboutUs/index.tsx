import { Link } from 'react-router-dom'
import { H2, P } from '../../components/Project/styles'
import { BackgroundAboutUs, ButtonLink, ContainerAboutUs } from './styles'

export const AboutUs = () => {
  return (
    <BackgroundAboutUs>
      <ContainerAboutUs>
        <div>
          <H2>Quem somos</H2>

          <P>
            O Projeto Tropinha nasceu de uma ideia simples onde seus
            idealizadores no início queriam tirar as crianças de sua região
            (Madureira e Oswaldo Cruz) da ociosidade e das ruas do seu bairro.
            Assim os mesmos andavam pelas ruas convidando as crianças para
            jogarem futebol.
          </P>
          <P>
            Foi então que no dia 26 de junho de 2021 na quadra do Clube dos
            Carteiros em Osvaldo Cruz, em um dado momento nosso Presidente,
            Jardel Pereira da Silva teve a ideia de criar o projeto. No incio o
            projeto se chamou Tropa da DC, uma referência as crianças da Rua
            Dona Clara, onde moravam a maioria delas naquele momento. Porem,
            após alguns dias o nome Tropinha se tornou definitivo para dar
            ênfase as criancas e tirar qualquer conotação de favorecimento a uma
            rua ou algum bairro.
          </P>
          <P>
            Quem diria que de uma simples brincadeira surgiria um projeto
            sólido, que esta em constate evolução e crescimento.
          </P>
          <P>
            Hoje o projeto tem apoio psicológico, educacional, físico e
            jurídico. Temos nosso próprio estatuto. Nosso projeto é totalmente
            legalizado com CNPJ e alvará, para que as empresas possam nos ajudar
            e terem benefícios através de incentivos fiscais.
          </P>
          <P>
            O intuito de nosso projeto é ser o divisor de águas em nossa região
            com apoio incondicional para as nossas crianças, com foco na
            inclusão, no desenvolvimento e crescimento pessoal e na
            responsabilidade socioambiental.
          </P>
          <P>1, 2, 3 Tropinha!</P>
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
