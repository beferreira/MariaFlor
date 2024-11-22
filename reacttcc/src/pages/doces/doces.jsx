import './doces.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardProduto from '../../components/card-produto/cardProduto.jsx';
import PaginaProduto from '../../components/pagina-produto/paginaProduto.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

function Doces() {

  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [listaFiltros, setListaFiltros] = useState([]);


  async function filtrarOrdemAlfabetica(){
    const url  = `http//4.172.207.208:5025/produto/ordemAlfabetica`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)
  }
  async function filtrarId(){
    const url = `http//4.172.207.208:5025/produto/id`
    let resp  = await axios.get(url)

    setListaFiltros(resp.data)
  }
  async function filtrarDiet(){
    const url = `http//4.172.207.208:5025/produto/diet`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)
  }
  async function filtrarZeroAcucar(){
    const url = `http//4.172.207.208:5025/produto/zeroAcucar`
    let resp = await axios.get(url)

    setListaFiltros(resp.data)
  }

  const [listaProdutosDoce, setListaProdutosDoce] = useState([]);

  useEffect(() => {
    
    const cardsProdutosDoce = async () => {
      
      const url = 'http://4.172.207.208:5025/produto/doce';
      const response = await axios.get(url);
      console.log(response.data);
      setListaProdutosDoce(response.data);
    };

  cardsProdutosDoce();
  
}, [])



  return (
    <div className="doces">
      <header className="principal">
        <Cabecalho/>
      </header> 

    <div className='conteudo'>
      <div className='faixa'>
        <img src="./images/docebanner.png" alt="" />
      </div>

      {/* <div className='faixa-dois'>
        <p>Ordernar por</p>

        <select name="ordenar">
          <option value="todas">Todas as categorias</option>
          <option value="ordemalfabetica" onClick={filtrarOrdemAlfabetica}>Ordem Alfabética A-Z</option>
          <option value="ordemid" onClick={filtrarId}>ID</option>
          <option value="zeroacucar" onClick={filtrarZeroAcucar}>Zero Açucar</option>
          <option value="diet" onClick={filtrarDiet}>Diet</option>
        </select>
      </div> */}

      {/* {produtoSelecionado && <PaginaProduto
          id={produtoSelecionado.id}
          titulo={produtoSelecionado.titulo}
          descricao={produtoSelecionado.descricao}
          img={produtoSelecionado.img}
          valor={produtoSelecionado.valor}
        />} */}

      <div className='cards'>
        <div className='add-card'>
          <a href="/addproduto"> <img src="./images/add.png" alt="" width={90}/> <h2>Adicionar Produto</h2></a>
        </div>
        
        {listaProdutosDoce.map(p => <CardProduto
            key={p.id_produto}
            id={p.id_produto}
            nomeproduto={p.nomeproduto}
            categoria={p.categoria}
            descricao={p.descricao}
            diet={p.diet}
            zeroAcucar={p.zeroAcucar}
            
           />
           )}

      </div>

      </div>
        <Rodape/>
      </div>
  );
}

export default Doces;
