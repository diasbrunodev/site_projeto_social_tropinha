import { Link } from 'react-router-dom'
import { H2, H3, P } from '../../components/Project/styles'

import {
  BackgroundAboutUs,
  ButtonLink,
  ContainerAboutUs
} from '../AboutUs/styles'
import {
  ButtonForm,
  DivButtonForm,
  DivContactSection,
  DivLocation,
  DivWhatsAppEmail,
  Form
} from './styles'
import { FaWhatsappSquare } from 'react-icons/fa'

export const Contact = () => {
  return (
    <BackgroundAboutUs>
      <ContainerAboutUs>
        <DivContactSection>
          <H2>Fale Conosco</H2>
          <div>
            <P>
              Você pode entrar em contato conosco diretamente pelo nosso
              whatsapp, email, ou preenchendo nosso formulário abaixo.
            </P>
            <DivWhatsAppEmail>
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
              <div>
                <P>Email: contato@projetotropinha.org</P>
              </div>
            </DivWhatsAppEmail>
          </div>
        </DivContactSection>

        <Form>
          <form method="post" action="envia_fale_conosco.php" name="form">
            <label>Motivo do contato:</label>
            <select id="motivo" name="motivo">
              <option value="nao informou">Motivo</option>
              <option value="ser nosso parcerio" selected>
                Ser nosso parceiro
              </option>
              <option value="sobre o aluno">Sobre o aluno(a)</option>
              <option value="sobre as aulas">Sobre as aulas</option>
              <option value="outro motivo">Outro motivo</option>
            </select>

            <label>Outro motivo:</label>
            <input type="text" id="motoutros" name="motoutros" />

            <label>Nome:</label>
            <input type="text" id="nome" name="nome" />

            <label>Empresa:</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              placeholder="Preencher somente se for empresa."
            />

            <label>Endereço:</label>
            <input type="text" id="endereco" name="endereco" />

            <label>Cidade:</label>
            <input type="text" id="cidade" name="cidade" />

            <label>Estado:</label>
            <input type="text" id="estado" name="estado" />

            <label>País:</label>
            <input type="text" id="pais" name="pais" />

            <label>CEP:</label>
            <input type="text" id="cep" name="cep" />

            <label>Telefone:</label>
            <input type="text" id="dddtel" name="dddtel" placeholder="DDD" />

            <label>Celular:</label>
            <input type="text" id="dddcel" name="dddcel" placeholder="DDD" />

            <label>Celular:</label>
            <input type="text" id="cel" name="cel" />

            <label>E-mail:</label>
            <input type="text" id="email" name="email" />

            <label>Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Deixe aqui sua mensagem."
              style={{ resize: 'none' }}
            ></textarea>

            <label>Como conheceu nosso projeto:</label>
            <select id="como" name="como">
              <option value="nao informou">Escolha</option>
              <option value="site de busca" selected>
                Site de busca
              </option>
              <option value="indicacao de um amigo">
                Indicação de um amigo
              </option>
              <option value="propaganda na internet">
                Propaganda na internet
              </option>
              <option value="outros">Outros</option>
            </select>

            <label>Outros:</label>
            <input type="text" id="outros" name="outros" />

            <DivButtonForm>
              <ButtonForm>
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  value="Enviar formulario"
                  width="510px"
                  height="30px"
                />
              </ButtonForm>

              <ButtonForm>
                <input
                  type="reset"
                  name="reset"
                  id="reset"
                  value="Apagar tudo"
                />
              </ButtonForm>
            </DivButtonForm>
          </form>
        </Form>

        <DivLocation>
          <H3>Nossa Localização</H3>
          <P>Estamos na Travessa Carlos Xavier, nº 96</P>
          <P>Madureira, Rio de Janeiro - RJ</P>
          <P>CEP: 21310-010</P>
          <P>Clube dos Subtenentes e Sargentos dos Bombeiros</P>
        </DivLocation>

        <ButtonLink>
          <Link className="link" to="/">
            HOME
          </Link>
        </ButtonLink>
      </ContainerAboutUs>
    </BackgroundAboutUs>
  )
}
