import './cardProduto.scss';

import {Buffer} from "buffer"

function CardProduto({id_produto,fotoProduto,nomeproduto,descricao,categoria,precoKg}) {
  

  return (
    <div  className="card-produto">
      <span className="card-numero">#{id_produto}</span>
      <div className="card-imagem">

       <img className="imagem" src={Buffer.from(fotoProduto.data).toString()} alt="" width={200} height={200}/> 

      </div>
      <div className="card-container">
        <h3 className="card-titulo"> {nomeproduto} </h3>
      </div>
    </div>
  );
}

export default CardProduto
