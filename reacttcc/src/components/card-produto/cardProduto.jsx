import './cardProduto.scss';

import {Buffer} from "buffer"

function CardProduto({id,foto,nomeproduto,categoria,descricao,precoKg,abrir}) {
  

  return (
    <div onClick={()=>abrir(id,foto,nomeproduto,categoria,descricao,precoKg, abrir)} href="" className="card-produto">
      <span className="card-numero">#{id}</span>
      <div className="card-imagem">
        <img className="imagem" src={Buffer.from(foto.data).toString()}/>
      </div>
      <div className="card-container">
        <h3 className="card-titulo"> {nomeproduto} </h3>
      </div>
    </div>
  );
}

export default CardProduto
