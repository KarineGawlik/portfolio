import React from 'react';

import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Karine Gawlik</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        <a
          href="https://github.com/KarineGawlik"
          target="_blank"
          rel="noopener noreferrer"
        >
          @karinegawlik
        </a>
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedora FrontEnd
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
