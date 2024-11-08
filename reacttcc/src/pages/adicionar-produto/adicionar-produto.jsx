import "./adicionar-produto.scss";
import Cabecalho from "../../components/cabecalho/cabecalho.jsx";
import Rodape from "../../components/rodape/rodape.jsx";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Aviso from "../../components/aviso/aviso.jsx";
import { useNavigate } from "react-router-dom";

function AddProduto() {
  const navigate = useNavigate();

  const [nomeproduto, setNomeProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [zeroacucar, setZeroacucar] = useState(false);
  const [diet, setDiet] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [precoKg, setPrecoKg] = useState(0);

  const [mensagemAviso, setmensagemAviso] = useState("");
  const [AvisoTipo, setAvisoTipo] = useState("");
  const [foto, setFoto] = useState();

  // const inputFileRef = useRef(null);
  // const pictureImageRef = useRef(null);
  const pictureImageTxt = "Buscar imagem no dispositivo";

  const FecharAviso = () => {
    setmensagemAviso("");
  };

  async function salvar() {
    const formData = {
      foto: foto,
      nomeproduto: nomeproduto,
      descricao: descricao,
      zeroacucar: zeroacucar,
      diet: diet,
      categoria: categoria,
      precoKg: precoKg,
    };

    const url = "http://localhost:5025/produto/postarproduto";

    try {
      await axios.post(url, formData);

      setmensagemAviso("Produto adicionado com sucesso!");
      setAvisoTipo("success");
      setTimeout(() => navigate("/produtos"), 3000);
    } catch (error) {
      setmensagemAviso("Erro ao adicionar produto");
      setAvisoTipo("error");
    }
  }

  function alterarImagem(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="add-prod">
      <Aviso
        message={mensagemAviso}
        onClose={FecharAviso}
        duration={3000}
        type={AvisoTipo}
      />

      <header className="cabecalho">
        <Cabecalho />
      </header>

      <div className="conteudo">
        <div className="barra">
          <h1>Adicionar Produtos</h1>
        </div>

        <div className="adicionar">
        
           {/* <div className="imagem">
            <label className="picture" htmlFor="input-imagem" tabIndex="0">
              {pictureImageTxt}
            </label>
            <input
              id="input-imagem"
              type="file"
              onChange={alterarImagem}
              style={{ display: "none" }}
              accept="image/*"
            />
            </div>  */}

              <div className="imagem">
            <label className="picture" htmlFor="input-imagem" tabIndex="0">
              {/* <span className="picture__image" ref={pictureImageRef}></span> */}
              {foto ? <img src={foto} alt="Pré-visualização da imagem" /> : pictureImageTxt}
             </label>
            <input
              id="input-imagem"
              type="file"
              onChange={alterarImagem}
              style={{ display: "none", }}
              accept="image/*"
            />
          </div>  


          <div className="interativo">
            <div className="inputs">
              <input
                className="titulo-produto"
                type="text"
                placeholder="Título do Produto"
                value={nomeproduto}
                onChange={(e) => setNomeProduto(e.target.value)}
              />

              <select
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="salgado">Salgado</option>
                <option value="doce">Doce</option>
              </select>

              <textarea
                type="text"
                placeholder="Adicione uma descrição ao produto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />

              <div className="baixo">
                <div className="inputs-check">
                  <div className="zero">
                    <label>É Zero Açúcar?</label>
                    <input
                      type="checkbox"
                      checked={zeroacucar}
                      onChange={(e) => setZeroacucar(e.target.checked)}
                    />
                  </div>

                  <div className="diet">
                    <label>É Diet?</label>
                    <input
                      type="checkbox"
                      checked={diet}
                      onChange={(e) => setDiet(e.target.checked)}
                    />
                  </div>
                </div>

                <input
                  className="preco"
                  type="number"
                  placeholder="Preço/Kg"
                  value={precoKg}
                  onChange={(e) => setPrecoKg(e.target.value)}
                />

                <button onClick={salvar}>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rodape">
        <Rodape />
      </div>
    </div>
  );
}

export default AddProduto;
