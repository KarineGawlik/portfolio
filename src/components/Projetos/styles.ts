import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-radius: 4px;
  padding: 16px;
  margin: 10px;
  box-sizing: border-box;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  border-radius: 4px;
  padding: 8px;
  display: inline-block;
`

export const ImagemProjeto = styled.img`
  width: 230px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
