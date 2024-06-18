import React, { useState, ReactNode } from 'react'
import { AccordionContainer, AccordionHeader, AccordionContent } from './styles'

type AccordionProps = {
  title: string
  children: ReactNode
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>{title}</AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  )
}

export default Accordion
