import React from 'react';

import Paragrafo from '../../components/Paragrafo';
import { Column, ContactContainer } from './styles';

import whats from '../../imagens/whats.jpg';
import linkedin from '../../imagens/linkedin.png';
import email from '../../imagens/email.png';
import github from '../../imagens/github.png';

const Sobre = () => (
  <section>
    <br />
    <br />
    <ContactContainer>
      <Column>
        <Paragrafo>
          <a href='mailto:gwl.karine@gmail.com'>
            <img src={email} alt="Email" />
            gwl.karine@gmail.com
          </a>
        </Paragrafo>
      </Column>
      <Column>
        <Paragrafo>
          <a href='https://wa.me/5541987205106'>
            <img src={whats} alt="WhatsApp" />
            (41) 98720-5106
          </a>
        </Paragrafo>
      </Column>
      <Column>
        <Paragrafo>
          <a href='https://www.linkedin.com/in/karine-gawlik-224939172/'>
            <img src={linkedin} alt="LinkedIn" />
            LinkedIn
          </a>
        </Paragrafo>
      </Column>
      <Column>
        <Paragrafo>
          <a href='https://github.com/KarineGawlik'>
            <img src={github} alt="GitHub" />
            GitHub: @KarineGawlik
          </a>
        </Paragrafo>
      </Column>
    </ContactContainer>
  </section>
);

export default Sobre;
