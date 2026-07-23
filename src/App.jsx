import './App.css'

// no react, componentes são FUNÇÕES

//props é um OBJETO
//props.children - é usado para pegar o filho de TituloDoFormulario dinamicamente usando parametros
function TituloDoFormulario(props) {
  return (
    <h2>
      {props.children}
    </h2>
  )
}

function CampoDeFormulario({ children }) {
  // Você não precisa mais escrever props.children. 
  // O React já "descompactou" o objeto e te deu a variável children prontinha.
  
  return(
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({ children, htmlFor }) {
  
  return(
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}

function FormularioDeEventos() {
  
  return (
    <form className='form-evento'>
      <TituloDoFormulario>
        Preencha para criar um evento:
      </TituloDoFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
          <input type="text" id='nome' placeholder='Summer dev hits'/>
        </Label>
      </CampoDeFormulario>
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
