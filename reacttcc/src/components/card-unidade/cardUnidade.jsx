import './cardUnidade.scss';
import axios from 'axios'

import {Buffer} from "buffer"


function CardUnidade({foto,endereco,abre,fecha,url, id}) {

  async function apagar(){
      
      const url = `http://localhost:7000/unidade/${id}`;
      const response = await axios.delete(url);
  };

  return (
    <div className="card-unidade">
        
          <img className="imagem" src={Buffer.from(foto.data).toString()} alt="" width={200} height={200}/>

        <div className='resto-unidade'>
          <div className='cima'>
            <div className='loc'>
              <img src="./images/localizacao.png" alt="" width={20} height={20}/>
              <p>{endereco}</p>
            </div>
            <div className='hour'>
              <img src="./images/relogio.png" alt="" width={17} height={17}/>
              <p> Horário de Funcionamento: {abre} ás {fecha} </p>
            </div>
          </div>
          <div className='baixo'>
            <div className='maps'>
              <img src="./images/maps.png" alt="" width={20}/>
              <a href={url} target="_blank">Buscar Endereço em Google Maps</a>
            </div>

            <img className='lixeira' src="./images/lixeira.png" alt="" width={25} height={25} onClick={apagar}/>
          </div>
        </div>  
    </div>
  );
}

export default CardUnidade
