import './salgados.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardProduto from '../../components/card-produto/cardProduto.jsx';
import PaginaProduto from '../../components/pagina-produto/paginaProduto.jsx';
import { useState } from 'react';
import axios from "axios";

function Salgados() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [produtos, setProdutos] = useState([]);
  const [listaFiltros, setListaFiltros] = useState([]);

  function abrir(id, titulo, descricao, valor, img) {
    setProdutoSelecionado({id, titulo, descricao, valor , img})
  }

  async function filtrarOrdemAlfabetica(){
    const url  = `http//4.172.297.208:5025/produto/ordemAlfabetica`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)
  }

  async function filtrarId(){
    const url = `http//4.172.297.208:5025/produto/id`
    let resp  = await axios.get(url)

    setListaFiltros(resp.data)
  } 

  async function filtrarDiet(){
    const url = `http//4.172.297.208:5025/produto/diet`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)
  }

  return (
    <div className="salgados">
      <header className="principal">
        <Cabecalho/>
      </header> 

    <div className='conteudo'>
      <div className='faixa'>
        <img src="./images/salgadobanner.png" alt="" />
      </div>

      <div className='faixa-dois'>
        <p>Ordernar por</p>

        <select name="ordenar">
          <option value="todas">Todas as categorias</option>
          <option value="ordemalfabetica" onClick={filtrarOrdemAlfabetica}>Ordem Alfabética A-Z</option>
          <option value="ordemid" onClick={filtrarId}>ID</option>
          <option value="diet" onClick={filtrarDiet}>Diet</option>
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

export default Salgados;
