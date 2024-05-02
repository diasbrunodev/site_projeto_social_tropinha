import styled from 'styled-components'
import { H2, H3 } from '../../components/Project/styles'
import { H4 } from '../../components/HelpUs/styles'
import { breakpoints } from '../../styles'

export const PartnerSection = styled.section`
  ${H2} {
    margin-bottom: 30px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: 10px;
    }
  }
`

export const DivImages = styled.div`
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`

export const DivInfoPartners = styled.div`
  ${H3} {
    text-align: center;
    margin: 40px 0 30px;
  }

  ${H4} {
    font-size: 24px;
    margin-bottom: -10px;
  }

  .lastParagraph {
    margin: 25px auto;
  }
`

export const DivTalkWithUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;
`
