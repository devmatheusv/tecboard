import { useState } from 'react'
import './App.css'
import { Banner } from './componentes/Banner'
import { CardEvento } from './componentes/CardEvento'
import { FormularioDeEventos } from './componentes/FormularioDeEventos'
import { Tema } from './componentes/Tema'

function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front',
    }
  ])

  function adicionarEvento(evento) {
    // eventos.push(evento)
    // console.log('eventos => ', eventos)
    setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEventos
        temas={temas}
        aoSubmeter={adicionarEvento}
      />
      <section className="container">
        {temas.map(function (item) {
          return (
            <section key={item.id}>
              <Tema tema={item} />
              <div className="eventos">
                {eventos.map(function (item, index) {

                  return <CardEvento evento={item} key={index} />
                })}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App