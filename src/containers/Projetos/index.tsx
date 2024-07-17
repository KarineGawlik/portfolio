import React from 'react';

import Projeto from '../../components/Projetos'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Conheça meus trabalhos</Titulo>
    <Lista>
      <Projeto />
    </Lista>
  </section>
)

export default Projetos
