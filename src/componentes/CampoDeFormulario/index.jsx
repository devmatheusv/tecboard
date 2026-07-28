import './campo-de-formulario.estilos.css'
export function CampoDeFormulario({ children }) {

  // Você não precisa mais escrever props.children. 
  // O React já "descompactou" o objeto e te deu a variável children prontinha.

  return (
    <fieldset className="campo-form">
      {children}
    </fieldset>
  )
}