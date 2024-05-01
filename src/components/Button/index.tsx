import { ButtonContainer } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  children: string
}

export const Button = ({ children }: Props) => {
  return (
    <>
      <ButtonContainer>{children}</ButtonContainer>
    </>
  )
}
