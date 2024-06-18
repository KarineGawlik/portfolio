import Projeto from '../../components/Projetos'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Meus Projetos</Titulo>
    <Lista>
      <Projeto />
    </Lista>
  </section>
)

export default Projetos
