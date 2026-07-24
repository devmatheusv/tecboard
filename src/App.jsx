import './App.css'
import { FormularioDeEventos } from './componentes/FormularioDeEventos'
// no react, componentes são FUNÇÕES

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEventos  />
    </main>
  )
}

export default App
