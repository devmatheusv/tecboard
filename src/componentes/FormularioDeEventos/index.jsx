import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloDoFormulario } from "../TituloDoFormulario";
import { Botao } from '../Botão';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEventos({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    console.log('opa, ta na hora de criar um novo evento', formData)
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento)
  }

  return (
    <form className='form-evento' action={aoFormSubmetido}>
      <TituloDoFormulario>
        Preencha para criar um evento:
      </TituloDoFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id='nomeEvento'
            placeholder='Summer dev hits'
            name='nomeEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">
            Qual o endereço da capa?
          </Label>
          <CampoDeEntrada
            type="text"
            id='capa'
            placeholder='http://...'
            name='capa'
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
            Tema do evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
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