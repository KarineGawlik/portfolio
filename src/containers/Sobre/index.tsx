import React from 'react';

import Titulo from '../../components/Titulo';
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
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Olá! Sou a Karine!
      <br /> <br />
      Uma estudante que adora tecnologia e inovação. Moro em Curitiba e
      atualmente estou cursando Análise e Desenvolvimento de Sistemas na
      Uninter, onde estou no terceiro semestre da minha graduação e em paralelo estou me especializando como Desenvolvedora Front-End.
      <br /><br />
      Em 2016, tive a oportunidade de aprimorar meu inglês em um curso de nível
      intermediário no Westminster College, em Londres.
      <br /><br />
      Meu objetivo é encontrar soluções criativas para problemas reais, buscando
      sempre melhorar a vida das pessoas através da tecnologia.
    </Paragrafo>
    <br />
    <br />
    <Titulo fontSize={16}>Um pouco sobre minha experiência profissional</Titulo>
    <Paragrafo tipo="secundario">
      🚀 Estou estagiando na Renault do Brasil, onde minha principal função é
      trabalhar com dados da área. <br />
      <br />
      📍  Desenvolvo dashboards para a gestão, proporcionando uma base sólida e
      confiável para a tomada de decisões. <br />
      <br />
      💻  Minhas responsabilidades incluem a gestão de incidentes e chamados do time
      operacional. Através dos dashboards, a gestão tem uma visão abrangente da
      quantidade de incidentes abertos e encerrados diariamente, semanalmente e
      mensalmente. Esta abordagem oferece uma visão estratégica da gestão
      operacional, permitindo a contínua melhoria dos processos e tornando-os
      mais eficientes. Caso ocorra algum bloqueio, nossa visão proativa
      possibilita a resolução rápida, evitando atrasos no processo operacional.
      <br />
      <br />
      📊  Além disso, também sou responsável por outros controles na área, como
      medir e selecionar dados das demandas diárias. Estamos implementando um
      novo programa para o desenvolvimento de novos veículos. Minha função
      envolve a criação de relatórios e dashboards para a comunidade que
      utilizará o novo software em 2025, monitorando a eficácia da comunidade e
      garantindo que tudo esteja conforme o esperado (incluindo métricas de
      integrantes, engajamento, quantidade de participantes ativos, entre
      outros).
    </Paragrafo>
    <br />
    <br />
    <Titulo fontSize={16}>Entre em contato</Titulo>
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
