//props é um OBJETO
//props.children - é usado para pegar o filho de TituloDoFormulario dinamicamente usando parametros

import './titulo-do-formulario.estilos.css'

export function TituloDoFormulario(props) {
  return (
    <h2 className='titulo-form'>
      {props.children}
    </h2>
  )
}