import './inicio.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardProduto from '../../components/card-produto/cardProduto.jsx';
import PaginaProduto from '../../components/pagina-produto/paginaProduto.jsx';
import { useState } from 'react';


import axios from 'axios';


function Inicio() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [listaFiltros, setListaFiltros] = useState([]);


  function abrir(id, titulo, descricao, valor, img) {
    setProdutoSelecionado({id, titulo, descricao, valor , img})
  }


  async function filtrarTodasCategoria(){

    const url = `http//localhost:5025/produto`;
    let resp = await axios.get(url);
    
    setListaFiltros(resp.data)
  }

  async function filtrarOrdemAlfabetica(){
    const url  = `http//localhost:5025/produto/ordemAlfabetica`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)

  }

  async function filtrarId(){
    const url = `http//localhost:5025/produto/id`
    let resp  = await axios.get(url)

    setListaFiltros(resp.data)

  } 

  async function filtrarDoces(){

    const url = `http//localhost:5025/produto/doce`;
    let resp = await axios.get(url);

    setListaFiltros(resp.data)
  }

  async function filtrarSalgados(){

    const url = `http//localhost:5025/produto/salgado`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)
  }

  async function filtrarDiet(){
    const url = `http//localhost:5025/produto/diet`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)
  }

  async function filtrarZeroAcucar(){
    const url = `http//localhost:5025/produto/zeroAcucar`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)

  }




  return (
    <div className="inicio">
      <header className="principal">
        <Cabecalho />
      </header>

      <div className='conteudo'>
        <div className='faixa'>
          <a href="/salgados"> <img src="./images/salgado.png" alt="" /></a>
          <a href="/doces"> <img src="./images/doce.png" alt="" /></a>
        </div>

        <h2 className='slogan'>"Maria Flor, o sabor está no amor"</h2>

        <div className='faixa-dois'>
          <p>Ordernar por</p>

          <select name="ordenar">
            <option value="todas" onClick={filtrarTodasCategoria}>Todas as categorias</option>
            <option value="doces" onClick={filtrarDoces}>Doces</option>
            <option value="salgados" onClick={filtrarSalgados}>Salgados</option>
            <option value="zeroacucar" onClick={filtrarZeroAcucar}>Zero Açucar</option>
            <option value="diet" onClick={filtrarDiet}>Diet</option>
            <option value="ordemalfabetica" onClick={filtrarOrdemAlfabetica}>Ordem Alfabética A-Z</option>
            <option value="ordemid" onClick={filtrarId}>Número do ID</option>
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
            <a href="/addproduto"> <img src="./images/add.png" alt="" width={90} /> <h2>Adicionar Produto</h2></a>
          </div>

          {listaFiltros.map(p => <CardProduto
            id={p.id}
            titulo={p.titulo}
            descricao={p.descricao}
            img={p.img}
            valor={p.valor}
            abrir={abrir} />)}
        </div>

      </div>
      <Rodape />
    </div>
  );
}

export default Inicio;
