import './cardProduto.scss';

import {Buffer} from "buffer"

function CardProduto({id,fotoProduto,nomeproduto,descricao,categoria,diet,zeroAcucar,precoKg}) {
  

  return (
    <div  className="card-produto">
      <span className="card-numero">#{id}</span>
      <div className="card-imagem">

       {/* {<img classNamer="imagem" sc={Buffer.from(fotoProduto.data).toString()} alt="" width={200} height={200}/>}  */}

      </div>
      <div className="card-container">
        <h3 className="card-titulo"> {nomeproduto} </h3>

        <h4>Categoria:</h4>
        <p>{categoria}</p>

    <br />

        <h4>Descrição produto :</h4>
        <p>{descricao}</p>

    <br />

        <h4>Especificações:</h4>
        <p>Diet : {diet  ? "nao" : "sim" }</p>
        <p>Zero Açucar : {zeroAcucar ? "nao" : "sim" }</p>


      </div>
    </div>
  );
}

export default CardProduto
