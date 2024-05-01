import styled from 'styled-components'
import { Colors } from '../../styles'

export const DivContactSection = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`

export const DivWhatsAppEmail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: 15px 0;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  select {
    display: block;
    margin: 10px 0;
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    margin: 10px 0;
  }

  textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    height: 100px;
  }
`

export const DivButtonForm = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 20px 0 30px;

  input {
    border: none;
    height: 20px;
    background-color: ${Colors.green2};
    color: ${Colors.white};
    cursor: pointer;
  }
`

export const ButtonForm = styled.button`
  width: 150px;
  border-radius: 5px;
  border: none;
  background-color: ${Colors.green2};
  cursor: pointer;
`

export const DivLocation = styled.div`
  margin-bottom: 20px;
`
