import styled from 'styled-components'

type AccordionContentProps = {
  isOpen: boolean
}

export const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  margin: 16px 0;
  font-size: 14px;
`

export const AccordionHeader = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
`

export const AccordionContent = styled.div<AccordionContentProps>`
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  border-top: 1px solid #ccc;
`
