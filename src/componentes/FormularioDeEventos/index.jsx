import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloDoFormulario } from "../TituloDoFormulario";
import { Botao } from '../Botão';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEventos() {

  return (
    <form className='form-evento'>
      <TituloDoFormulario>
        Preencha para criar um evento:
      </TituloDoFormulario>
      <div className='campos'>
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
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do Evento:
          </Label>
          <CampoDeEntrada
            type="date"
            id='dataEvento'
            name='dataEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do Evento:
          </Label>
          <ListaSuspensa/>
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao>
          Criar evento
        </Botao>
      </div>
    </form>
  )
}