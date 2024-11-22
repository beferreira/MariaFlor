import "./produtos.scss";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import Rodape from "../../components/rodape/rodape.jsx";
import CardProduto from "../../components/card-produto/cardProduto.jsx";
import PaginaProduto from "../../components/pagina-produto/paginaProduto.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

function Produtos() {
  const [ordenar, setOrdernar] = useState("todas");

  // ao clicar no card ele expadi na tela e mostra as informações
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const [id, setId] = useState("");

  // useEffect(() => {
  //   const cardsProduto = async () => {
  //     const url = `http://4.172.207.208:5025/produto-filtro/${ordenar}`;
  //     const response = await axios.get(url);
  //     setFiltr(response.data);
  //   };

  //   const intervalId = setInterval(cardsProduto, 10);
  //   return () => clearInterval(intervalId);
  // }, [ordenar]);

  async function Excluir() {
    try {
      const url = `http://4.172.207.208:5025/produto/${id}`;
      await axios.delete(url);
      setId("");
      alert('Deletado com sucesso')
      cardsProdutos();
    } catch (error) {
      alert("nao foi");
    }
  }

  // este mapea na pagina
  const [ListaProdutos, setListaProdutos] = useState([]);

  const cardsProdutos = async () => {
    const url = "http://4.172.207.208:5025/produto";
    const response = await axios.get(url);

    setListaProdutos(response.data);
  };

  useEffect(() => {
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
          <input
            value={id}
            type="number"
            placeholder="ID que deseja deletar"
            onChange={(e) => setId(e.target.value)}
          />
          <img
            className="lixeira"
            src="./images/lixeira.png"
            alt=""
            width={20}
            height={20}
            onClick={Excluir}
          />
        </div>

        {/* {produtoSelecionado && (
          <PaginaProduto
            id={produtoSelecionado.id_produto}
            nomeproduto={produtoSelecionado.nomeproduto}
            descricao={produtoSelecionado.descricao}
            foto={produtoSelecionado.foto}
            precoKg={produtoSelecionado.precoKg}
          />
        )} */}

        <div className="cards">
          <div className="add-card">
            <a href="/addproduto">
              {" "}
              <img src="./images/add.png" alt="" width={90} />{" "}
              <h2>Adicionar Produto</h2>
            </a>
          </div>

          {ListaProdutos.map((p) => (
            <CardProduto
              key={p.id_produto}
              id={p.id_produto}
              foto={p.fotoPro}
              categoria={p.categoria}
              nomeproduto={p.nomeproduto}
              descricao={p.descricao}
              precoKg={p.precoKg}
              diet={p.diet}
              zeroAcucar={p.zeroAcucar}
            />
          ))}
        </div>
      </div>

      <Rodape />
    </div>
  );
}

export default Produtos;
