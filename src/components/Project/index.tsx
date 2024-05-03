import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import img1 from '../../images/new_images/img1.jpg'
import img4 from '../../images/new_images/img4.jpg'
import img5 from '../../images/new_images/img5.jpg'
import img6 from '../../images/new_images/img6.jpg'
import img7 from '../../images/new_images/img7.jpg'
import img91 from '../../images/new_images/img91.jpg'

import foto2 from '../../images/new_images/foto2.jpg'
import img2 from '../../images/new_images/img2.jpg'
import img3 from '../../images/new_images/img3.jpg'
import img8 from '../../images/new_images/img8.jpg'
import img9 from '../../images/new_images/img9.jpg'
import img92 from '../../images/new_images/img92.jpg'
import img93 from '../../images/new_images/img93.jpg'
import img94 from '../../images/new_images/img94.jpg'
import inclusao from '../../images/new_images/inclusao.jpg'

import {
  DivContainer,
  H2,
  H3,
  P,
  SliderDiv,
  SliderTall,
  TextDiv
} from './styles'

export const Project = () => {
  const [sliderPerView, setSliderPerView] = useState<number>(2)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSliderPerView(1)
      } else {
        setSliderPerView(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <DivContainer>
      <TextDiv>
        <H2>NOSSO PROJETO</H2>
        <div className="divContent">
          <H3>Nosso Objetivo</H3>
          <P>
            Quando o projeto foi criado, nosso objetivo principal era de tirar
            as crianças da rua e colocá-las para fazerem uma atividade física
            através do futsal. Com o passar do tempo, vimos que existia uma
            necessidade de se ter profissionais em diversas áreas para
            conseguirmos atender um maior número de crianças e dar apoio em
            casos delicados que chegavam até nós.
          </P>
          <P>
            Devido a isso, juntamos professores de educação física, psicólogos,
            advogados e outros profissionais que completam nosso time de{' '}
            {`"anjos"`} que nos ajudam a fazer com que o projeto a cada dia que
            passa se torne melhor.
          </P>
        </div>
      </TextDiv>

      <SliderDiv>
        <Swiper
          slidesPerView={sliderPerView}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          loop
        >
          <SwiperSlide>
            <img src={img1} alt="imagem do projeto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="imagem do projeto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="imagem do projeto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="imagem do projeto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="imagem do projeto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img91} alt="imagem do projeto" />
          </SwiperSlide>
        </Swiper>
      </SliderDiv>

      <TextDiv>
        <div className="divContent">
          <H3>No Que Acreditamos</H3>
          <P>
            Em pessoas melhores, mais humanas, mais pró-ativas, mais solidárias,
            mais caridosas, mais educadas, mais entededoras de suas capacidades,
            de suas reponsabilidades e mais felizes.
          </P>
          <P>
            Num bairro melhor, num estado melhor, num país melhor, mas para que
            isso aconteça, temos que começar a educar e preparar nossas crianças
            desde cedo para o que a vida lhes reserva. Desafios, aventuras,
            vitórias, derrotas, conquistas e frustrações.
          </P>
        </div>
      </TextDiv>

      <SliderTall>
        <SliderDiv>
          <Swiper
            slidesPerView={sliderPerView}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000 }}
            loop
          >
            <SwiperSlide>
              <img src={foto2} alt="imagem do projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="imagem do projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="imagem do projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="imagem do projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="imagem do projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img92} alt="imagem do projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img93} alt="imagem do projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img94} alt="imagem do projeto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={inclusao} alt="imagem do projeto" />
            </SwiperSlide>
          </Swiper>
        </SliderDiv>
      </SliderTall>
    </DivContainer>
  )
}
