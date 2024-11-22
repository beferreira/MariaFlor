import { useState } from 'react';
import './cardEncomenda.scss';
import axios from 'axios';

function CardEncomenda({ id, status, nome, contato, data_entrega, hora_entrega, forma_pagamento, descricao, valor }) {

  const [status2, setStatus] = useState(status)

  const MudarStatus = async (status, id) => {
    const url = `http://4.172.207.208:5025/editar-status/${id}`;
    const info = {
        "status": status
    };

    const response = await axios.put(url, info);
    return response.data;
};
  

  async function Concluir() {

    const cond = "Concluida"
    
    let alterar = await MudarStatus(cond, id)
    console.log(alterar)
  }

  async function Cancelar() {

        const cond = "Cancelado"
    let alterar = await MudarStatus(cond, id)
    console.log("AQ2")
  }


   async function Pendente() {
     const cond = "Pendente"
    
    let alterar = await MudarStatus(cond, id)
    console.log(alterar)
  }

  const estilo = {
    Pendende: {
      backgroundColor: 'yellow',
      color: 'yellow'
    },
    Concluida: {
      
      backgroundColor: 'green',
      color: 'green'

    },
    Cancelado: {
      backgroundColor: 'red',
      color: 'red'
    }
  }

  const estiloLetra = {
    Pendende: {
      color: 'yellow'
    },
    Concluida: {
      color: 'green'

    },
    Cancelado: {
      color: 'red'
    }
  }

  const estiloBolinha = estilo[status]
  const estiloPalavra = estiloLetra[status]

  return (
    <div className="card-encomenda">
      <header>
        <p className='id'>#{id}</p>
        <div className='status-class' >
          <p style={estiloPalavra} >{status}</p>
          <div className='bolinha' style={estiloBolinha}></div>
        </div>
      </header>

      <div className='conteudo-encomenda'>
        <div className='informacoes'>
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>Contato:</strong> {contato}</p>
          <p><strong>Data da Entrega:</strong> {data_entrega}</p>
          <p><strong>Hora da Entrega:</strong> {hora_entrega}</p>
          <p><strong>Forma de Pagamento:</strong> {forma_pagamento}</p>
        </div>

        <div className='descricao'>
          <div className='campo'>
            <h2>Descrição</h2>
            <div className='mensagem'>{descricao}</div>
          </div>

          <div className='baixo'>
            <div className='preco'>
              <h2>Valor:</h2> <div className='valor'> R${valor} </div>
            </div>

            {status == 'Pendente' ?
              <div className='botoes'>

                <button onClick={Concluir} className='concluir'>Concluir</button>
                <button onClick={Cancelar} className='cancelar'>Cancelar</button>
              </div>
              :
              <div className='botoes'>

                <button onClick={Pendente} className='pendente'>Pendente</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEncomenda