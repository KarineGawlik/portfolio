import React from 'react';

import Titulo from '../Titulo'
import { Card, LinkBotao, ImagemProjeto } from './styles'
import disneyPlus from '../../imagens/disneyPlus.png'
import labImpressoes from '../../imagens/labImpressoes.png'
import lucilleAquitetura from '../../imagens/lucilleAquitetura.png'
import tech from '../../imagens/tech.png'
import aniversario from '../../imagens/aniversario.png'
import filmandoAVida from '../../imagens/filmandoAVida.png'
import games from '../../imagens/games.png'
import calculadora from '../../imagens/calculadoraMedias.png'
import sorteador from '../../imagens/sorteador.png'
import lista from '../../imagens/toDo.png'
import contatos from '../../imagens/contatos.png'
import motors from '../../imagens/motors.png'
import restaurante from '../../imagens/restaurante.png'

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
        imagem={restaurante}
        titulo="Restaurante"
        link="https://restaurante-red.vercel.app/"
        githubLink="https://github.com/KarineGawlik/Restaurante/tree/main"
      />
      <Projeto
        imagem={labImpressoes}
        titulo="LabImpressoes"
        link="https://site-grafica.vercel.app/"
        githubLink="https://github.com/KarineGawlik/site_grafica/tree/main"
      />
      <Projeto
        imagem={lucilleAquitetura}
        titulo="Lucille Arquitetura"
        link="https://lucille-arquitetura.vercel.app/"
        githubLink="https://github.com/KarineGawlik/lucille-arquitetura"
      />
      <Projeto
        imagem={games}
        titulo="GamesShop"
        link="https://site-gamesshop-seven-cyan.vercel.app/"
        githubLink="https://github.com/KarineGawlik/site_gamesshop"
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
        link="https://karine-projeto-calculadora-medias.vercel.app/"
        githubLink="https://github.com/KarineGawlik/calculadora-com-vue"
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
        imagem={contatos}
        titulo="Lista de Contatos"
        link="https://lista-de-contatos-one.vercel.app/"
        githubLink="https://github.com/KarineGawlik/lista-de-contatos"
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
