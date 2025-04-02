import React from 'react';

import Titulo from '../Titulo'
import { Card, LinkBotao, ImagemProjeto } from './styles'
import disneyPlus from '../../imagens/disneyPlus.png'
import labImpressoes from '../../imagens/labImpressoes.png'
import lucilleAquitetura from '../../imagens/lucilleAquitetura.png'
import tech from '../../imagens/tech.png'
import aniversario from '../../imagens/aniversario.png'
import filmandoAVida from '../../imagens/filmandoAVida.png'
import croche from '../../imagens/croche.png'
import calculadora from '../../imagens/calculadoraMedias.png'
import sorteador from '../../imagens/sorteador.png'
import lista from '../../imagens/toDo.png'
import motors from '../../imagens/motors.png'
import patas from '../../imagens/patas&cia.png'
import editor from '../../imagens/landing-page-maycon-oliveira.png'


import { Lista } from '../../containers/Projetos/styles'
import { Container } from '../../styles'

interface ProjetoProps {
  imagem: string
  titulo: string
  link: string
  githubLink: string
}

const Projetos = () => (
  <Container>
    <Lista>
    <Projeto
        imagem={editor}
        titulo="Maycon Oliveira - Edição de Vídeos"
        link="https://impulso-digital-ye1v.vercel.app/"
        githubLink="https://github.com/KarineGawlik/impulsoDigital"
      />
      <Projeto
        imagem={disneyPlus}
        titulo="Projeto de Estudo Clone Disney"
        link="https://clone-disneyplus-karine.vercel.app/"
        githubLink="https://github.com/KarineGawlik/clone_disneyplus"
      />
      <Projeto
        imagem={filmandoAVida}
        titulo="Website Empresa FilmandoAVida"
        link="https://filmandoavida.vercel.app/"
        githubLink="https://github.com/KarineGawlik/filmandoavida"
      />
      <Projeto
        imagem={patas}
        titulo="Patas & CIA"
        link="https://patas-cia.vercel.app/"
        githubLink="https://github.com/KarineGawlik/Patas-Cia"
      />
      <Projeto
        imagem={labImpressoes}
        titulo="LabImpressoes"
        link="https://lab-impressoes.vercel.app/"
        githubLink="https://github.com/KarineGawlik/LabImpressoes"
      />
      <Projeto
        imagem={lucilleAquitetura}
        titulo="Lucille Arquitetura"
        link="https://lucille-arquitetura.vercel.app/"
        githubLink="https://github.com/KarineGawlik/lucille-arquitetura"
      />
      <Projeto
        imagem={croche}
        titulo="Crochê Shop"
        link="https://site-croche-shop.vercel.app/"
        githubLink="https://github.com/KarineGawlik/site_croche_shop"
      />
      <Projeto
        imagem={tech}
        titulo="Evento Tech"
        link="https://ebac-tech-talks-six-hazel.vercel.app/"
        githubLink="https://github.com/KarineGawlik/ebac_tech_talks"
      />
      <Projeto
        imagem={aniversario}
        titulo="Landing Page Evento Aniversário"
        link="https://landing-page-aniversario-c18b.vercel.app/"
        githubLink="https://github.com/KarineGawlik/landing_page_aniversario"
      />
      <Projeto
        imagem={calculadora}
        titulo="Calculadora de médias"
        link="https://avaliador-de-notas.vercel.app/"
        githubLink="https://github.com/KarineGawlik/avaliadorDeNotas"
      />
      <Projeto
        imagem={sorteador}
        titulo="Sorteador"
        link="https://sorteadorgruntkarine.vercel.app/"
        githubLink="https://github.com/KarineGawlik/sorteador_grunt"
      />
      <Projeto
        imagem={lista}
        titulo="Lista de Tarefas"
        link="https://todo-vue-chi-cyan.vercel.app/"
        githubLink="https://github.com/KarineGawlik/minhas-tarefas"
      />
      <Projeto
        imagem={motors}
        titulo="EBAC Motors"
        link="https://ebac-motors-psi.vercel.app/"
        githubLink="https://github.com/KarineGawlik/EbacMotors"
      />
    </Lista>
  </Container>
)

const Projeto = ({ imagem, titulo, link, githubLink }: ProjetoProps) => (
  <Card>
    <ImagemProjeto src={imagem} alt={titulo} />
    <Titulo>{titulo}</Titulo>
    <LinkBotao href={link}>Página</LinkBotao>
    <LinkBotao href={githubLink} target="_blank">Código</LinkBotao>
  </Card>
)

export default Projetos
