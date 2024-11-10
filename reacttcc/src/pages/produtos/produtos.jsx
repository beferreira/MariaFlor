import "./produtos.scss";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import Rodape from "../../components/rodape/rodape.jsx";
import CardProduto from "../../components/card-produto/cardProduto.jsx";
import PaginaProduto from "../../components/pagina-produto/paginaProduto.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Produtos() {
  const [listaProdutos, setProdutos] = useState([]);
  const [ordenar, setOrdernar] = useState("todas");
  const [Filtrados, setFiltrados] = useState([]);

  // useEffect(() => {
  //   const cardsProduto = async () => {
  //     const url = `http://localhost:5025/produto-filtro/${ordenar}`;
  //     const response = await axios.get(url);
  //     setFiltrados(response.data);
  //   };

  //   const intervalId = setInterval(cardsProduto, 10);
  //   return () => clearInterval(intervalId);
  // }, [ordenar]);

  const [id, setId] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [listaFiltros, setListaFiltros] = useState([]);
  
  function abrir(id, foto, nomeproduto, descricao, precoKg) {
    setProdutoSelecionado({ id, foto, nomeproduto, descricao, precoKg });
  }
  
  async function Excluir() {
    const url = `http://localhost:5025/produto/${id}`;
    let resp = await axios.delete(url);
    alert(`Id: ${id} deletado da lista de produtos.`);
  }
  
  // async function filtrarTodasCategoria(){
  //   const url = `http//localhost:5025/produto`;
  //   let resp = await axios.get(url);
  //   setListaFiltros(resp.data)
  // }

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

    const [ListaProduto, setListaProduto] = useState([])
    
    useEffect(() => {
      const cardsProdutos = async () => {
        
        const url = 'http://localhost:5025/produto';
        const response = await axios.get(url);
        console.log(response.data);
        setListaProduto(response.data);
      };
  
      cardsProdutos();
      
    }, []);


  return (
    <div className="produtos">
      <header className="principal">
        <Cabecalho />
      </header>

      <div className="conteudo">
        <div className="prod">
          <h1>Produtos</h1>
        </div>
        <div className="delete">
          <input type="number" placeholder="ID que deseja deletar" />
          <img
            className="lixeira"
            src="./images/lixeira.png"
            alt=""
            width={20}
            height={20}
            onClick={Excluir}
          />
        </div>

        <div className="faixa-prod">
          <p>Ordernar por</p>

          <select name="ordenar">
            <option value="todas" /*onClick={filtrarTodasCategoria}*/>Todas as categorias</option>
            <option value="doces" onClick={filtrarDoces}>Doces</option>
            <option value="salgados" onClick={filtrarSalgados}>Salgados</option>
            <option value="zeroacucar" onClick={filtrarZeroAcucar}>Zero Açucar</option>
            <option value="diet" onClick={filtrarDiet}>Diet</option>
            <option value="ordemalfabetica" onClick={filtrarOrdemAlfabetica}>Ordem Alfabética A-Z</option>
            <option value="ordemid" onClick={filtrarId}>Número do ID</option>
          </select>
        </div>

        {produtoSelecionado && (
          <PaginaProduto
            id={produtoSelecionado.id}
            nomeproduto={produtoSelecionado.nomeproduto}
            descricao={produtoSelecionado.descricao}
            foto={produtoSelecionado.foto}
            precoKg={produtoSelecionado.precoKg}
          />
        )}

        <div className="cards">
          <div className="add-card">
            <a href="/addproduto">
              {" "}
              <img src="./images/add.png" alt="" width={90} />{" "}
              <h2>Adicionar Produto</h2>
            </a>
          </div>

          {listaProdutos.map((p) => (
            <CardProduto
              key={p.id_produto}
              id={p.id}
              foto={p.foto}
              nomeproduto={p.nomeproduto}
              descricao={p.descricao}
              precoKg={p.precoKg}
              abrir={abrir}
            />
          ))}
        </div>
      </div>
      <Rodape />
    </div>
  );
}

export default Produtos;
