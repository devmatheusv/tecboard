import './App.css'

// no react, componentes são FUNÇÕES

//props é um OBJETO
//props.children
function TituloDoFormulario(props) {
  return (
    <h2>texto</h2>
  )
}

function FormularioDeEventos() {
  
  return (
    <form className='form-evento'>
      <TituloDoFormulario>
        Preencha para criar um evento:
      </TituloDoFormulario>
      <fieldset>
        <label htmlFor="nome">
          Qual o nome do evento?
          <input type="text" id='nome'/>
        </label>
      </fieldset>
    </form>
  )
}

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
