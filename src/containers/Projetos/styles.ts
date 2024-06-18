import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
