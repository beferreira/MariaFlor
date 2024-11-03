import './unidades.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardUnidade from '../../components/card-unidade/cardUnidade.jsx';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {Buffer} from "buffer"


function Unidades() {
  
  const [ListaUnidade, setListaUnidade] = useState([])
  
  useEffect(() => {
    const cardsUnidades = async () => {
      
      const url = 'http://localhost:5025/unidade';
      const response = await axios.get(url);
      console.log(response.data);
      setListaUnidade(response.data);
    };

    cardsUnidades();
    
  }, []);


  return (
    <div className="unidades">
      <header className="principal">
        <Cabecalho/>
      </header>
        
    <div className='conteudo'>
         
        <div className='adicionar'>
            <a href="/addunidade">
                <img src="./images/add.png" alt="" width={30}/>
                <p>Adicionar nova unidade</p>
                <img src="./images/empresa.png" alt="" width={30}/>
            </a>
        </div>

        <div className='cards'>
        {ListaUnidade.map(u => <CardUnidade
            key={u.id_unidade}
            foto={u.foto}
            endereco={u.endereco}
            abre={u.abre}
            fecha={u.fecha}
            url={u.url_maps}
            id={u.id_unidade}
            />)}
        </div>
    </div>

      <footer>
        <Rodape/>
      </footer> 
    </div>
  );
}

export default Unidades;
