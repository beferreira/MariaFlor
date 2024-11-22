import './unidades.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardUnidade from '../../components/card-unidade/cardUnidade.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from "buffer"


function Unidades() {
  
  const [ListaUnidade, setListaUnidade] = useState([])
  


  const cardsUnidades = async () => {
    
    const url = 'http://4.172.207.208:5025/unidade';
    const response = await axios.get(url);
    console.log(response.data);
    setListaUnidade(response.data);
  };

  

  useEffect(() => {

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
            id={u.id_unidade}
            foto={u.foto}
            endereco={u.endereco}
            abre={u.abre}
            fecha={u.fecha}
            url={u.url_maps}
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
