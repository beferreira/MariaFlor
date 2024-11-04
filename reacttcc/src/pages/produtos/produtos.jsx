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

  function abrir(id, foto, nomeproduto, descricao, precoKg) {
    setProdutoSelecionado({ id, foto, nomeproduto, descricao, precoKg });
  }

  async function filtrarTodos(){

    const url = `http://localhost:5025/produto`;
    let resp = await axios.get(url);

    let dados = resp.data;

    setProdutos(dados);

   
  }

  async function Excluir() {
    const url = `http://localhost:7000/produto/${id}`;
    let resp = await axios.delete(url);
    alert(`Id: ${id} deletado da lista de produtos.`);
  }

  async function filtrar() {}

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
            <option value="todas">Todas as categorias</option>
            <option value="doces">Doces</option>
            <option value="salgados">Salgados</option>
            <option value="zeroacucar">Zero Açucar</option>
            <option value="diet">Diet</option>
            <option value="ordemalfabetica">Ordem Alfabética A-Z</option>
            <option value="ordemid">Número do ID</option>
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
