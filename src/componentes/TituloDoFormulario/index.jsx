// no react, componentes são FUNÇÕES

//props é um OBJETO
//props.children - é usado para pegar o filho de TituloDoFormulario dinamicamente usando parametros
export function TituloDoFormulario(props) {
  return (
    <h2>
      {props.children}
    </h2>
  )
}