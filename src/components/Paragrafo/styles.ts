import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  line-heigth: 22px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: ${(props) =>
      props.tipo === 'principal'
        ? props.theme.corPrincipal
        : props.theme.corSecundaria};
  }
`
