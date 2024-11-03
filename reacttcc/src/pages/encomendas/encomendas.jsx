import './encomendas.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardEncomenda from '../../components/card-encomenda/cardEncomenda.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Encomendas() {
  const [listaEncomendas, setListaEncomendas] = useState([]); 
  const [status, setStatus] = useState('todos');
  const [Filtrados, setFiltrados] = useState([]);  




  useEffect(() => {
    const cardsEncomendas = async () => {
      
      const url = 'http://localhost:5025/encomendas';
      const response = await axios.get(url);
      setListaEncomendas(response.data);};

    const intervalId = setInterval(cardsEncomendas, 10); 
    return () => clearInterval(intervalId); 
  }, []);

  useEffect(() => {
    const cardsEncomendas = async () => {
      
      const url = `http://localhost:5025/encomendas-filtro/${status}`;
      const response = await axios.get(url);
      setFiltrados(response.data);};

    const intervalId = setInterval(cardsEncomendas, 10); 
    return () => clearInterval(intervalId); 
  }, [status]);

 


  return (
    <div className="encomendas">
      <header className="principal">
        <Cabecalho />
      </header>

      <div className='conteudo'>
        <a className='add' href="/addencomenda"> 
          <img src="./images/add.png" alt="" width={30}/> 
          Adicionar nova encomenda 
          <img src="./images/encomenda.png" alt="" width={30}/>
        </a>

        <div className='faixa'>
          <h2>Encomendas</h2>
          <select name="status" onChange={e => setStatus(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="Concluida">Concluídos</option>
            <option value="Pendente">Pendentes</option>
            <option value="Cancelado">Cancelados</option>
          </select>
        </div>

        <div className='cards-encomendas'>
          {status == 'todos'?
          listaEncomendas.map(e => (
            <CardEncomenda
              key={e.id_encomenda}
              id={e.id_encomenda}
              status={e.status}
              nome={e.nome}
              contato={e.contato}
              data_entrega={new Date(e.data_entrega) .toLocaleDateString()}
              hora_entrega={e.hora_entrega.slice(0, 5)}
              forma_pagamento={e.forma_pagamento}
              descricao={e.descricao}
              valor={e.valor}
            />
          )):

          Filtrados.map(e => (
            <CardEncomenda
              key={e.id_encomenda}
              id={e.id_encomenda}
              status={e.status}
              nome={e.nome}
              contato={e.contato}
              data_entrega={new Date(e.data_entrega) .toLocaleDateString()}
              hora_entrega={e.hora_entrega}
              forma_pagamento={e.forma_pagamento}
              descricao={e.descricao}
              valor={e.valor}
            />
          ))
        }
        </div>
      </div>

      <footer>
        <Rodape />
      </footer>
    </div>
  );
}

export default Encomendas;
