import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloDoFormulario } from "../TituloDoFormulario";

export function FormularioDeEventos() {
  
  return (
    <form className='form-evento'>
      <TituloDoFormulario>
        Preencha para criar um evento:
      </TituloDoFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada 
        type="text"
        id='nome'
        placeholder='Summer dev hits'
        name='nomeEvento'
      />
      </CampoDeFormulario>
    </form>
  )
}