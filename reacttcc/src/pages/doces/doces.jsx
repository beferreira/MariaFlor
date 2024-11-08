import './doces.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardProduto from '../../components/card-produto/cardProduto.jsx';
import { useState } from 'react';
import PaginaProduto from '../../components/pagina-produto/paginaProduto.jsx';


function Doces() {

  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [produtos, setProdutos] = useState([]);

  function abrir(id, titulo, descricao, valor, img) {
    setProdutoSelecionado({id, titulo, descricao, valor , img})
  }

  return (
    <div className="doces">
      <header className="principal">
        <Cabecalho/>
      </header> 

    <div className='conteudo'>
      <div className='faixa'>
        <img src="./images/docebanner.png" alt="" />
      </div>

      <div className='faixa-dois'>
        <p>Ordernar por</p>

        <select name="ordenar">
          <option value="todas">Todas as categorias</option>
          <option value="zeroacucar">Zero Açucar</option>
          <option value="diet">Diet</option>
          <option value="ordemalfabetica">Ordem Alfabética A-Z</option>
          <option value="ordemid">ID</option>
        </select>
      </div>

      {produtoSelecionado && <PaginaProduto
          id={produtoSelecionado.id}
          titulo={produtoSelecionado.titulo}
          descricao={produtoSelecionado.descricao}
          img={produtoSelecionado.img}
          valor={produtoSelecionado.valor}
        />}

      <div className='cards'>
        <div className='add-card'>
          <a href="/addproduto"> <img src="./images/add.png" alt="" width={90}/> <h2>Adicionar Produto</h2></a>
        </div>
        
        {produtos.map(p => <CardProduto
            id={p.id}
            titulo={p.titulo}
            descricao={p.descricao}
            img={p.img}
            valor={p.valor}
            abrir={abrir} />)}

      </div>

      </div>
        <Rodape/>
      </div>
  );
}

export default Doces;
