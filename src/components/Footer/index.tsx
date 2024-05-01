import { FooterContainer } from './style'

const currentYear = new Date().getFullYear()

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        {' '}
        <p>
          {currentYear} - &copy; PROJETO TROPINHA Todos os direitos reservados
        </p>
        <p>Desenvolvido por Bruno Dias e Geraldof</p>
      </FooterContainer>
    </>
  )
}
