import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import Accordion from '../../components/accordion'

const Sobre = () => (
  <section>
    <br />
    <br />
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Olá! Sou a Karine! <br />
      <br /> Atualmente estudante de Análise e Desenvolvimento de Sistemas com
      foco em Full Stack. Apaixonada por encontrar soluções criativas para
      problemas reais, estou sempre em busca de novas maneiras de melhorar a
      vida das pessoas através da tecnologia. ❤️ <br />
    </Paragrafo>
    <Accordion title="Clique aqui para saber mais sobre a minha formação e experiência">
      <Paragrafo tipo="secundario">
        Formação Acadêmica e Cursos <br /> <br />
        Curso Tecnólogo em Análise e Desenvolvimento de Sistemas <br />{' '}
        Instituição: Uninter <br />
        Período: 2022 - 2025 (Cursando 2º semestre) <br /> <br />
        Curso Livre Desenvolvedor Full Stack Java <br /> Instituição: EBAC -
        Escola Britânica de Artes Criativas e Tecnologia <br /> Período: 2023 -
        2025 (Cursando) <br /> <br /> Graduação em Administração de Empresas{' '}
        <br /> Instituição: Faculdades Santa Cruz de Curitiba <br /> Período:
        2011 - 2013 (Matrícula trancada após 6 semestres) <br /> <br />
        Curso de inglês (nível intermediário) <br />
        Instituição: Westminster College em Londres <br />
        Período: 2016 (2 meses)
      </Paragrafo>
    </Accordion>{' '}
    <br />
  </section>
)

export default Sobre
