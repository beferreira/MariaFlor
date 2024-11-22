import './cardUnidade.scss';
import Aviso from "../../components/aviso/aviso.jsx";
import axios from 'axios'
import { useState } from "react";
import {Buffer} from "buffer"
import { useEffect } from 'react';


function CardUnidade({foto,endereco,abre,fecha,url, id}) {

  const [mensagemAviso, setmensagemAviso] = useState("");
  const [AvisoTipo, setAvisoTipo] = useState("");

  const FecharAviso = () => {
    setmensagemAviso("");
  };

    async function apagar(){
       
      try {
        const url = `http://4.172.207.208:5025/unidade/${id}`;
        await axios.delete(url);
        


      } catch (error) {
        alert("nao foi");
      }

    };

  return (
    <div className="card-unidade">

      <Aviso
        message={mensagemAviso}
        onClose={FecharAviso}
        duration={3000}
        type={AvisoTipo}
      />
        
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
