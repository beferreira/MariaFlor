import './adicionar-produto.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Aviso from '../../components/aviso/aviso.jsx';
import { useNavigate } from 'react-router-dom';

function AddProduto() {
  
  const navigate = useNavigate();

  const [nomeproduto, setNomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [zeroacucar, setZeroacucar] = useState(false);
  const [diet, setDiet] = useState(false);
  const [categoria, setCategoria] = useState('');
  const [precoKg, setPrecoKg] = useState(0);

  const [mensagemAviso, setmensagemAviso] = useState('');
  const [AvisoTipo, setAvisoTipo] = useState('');
  const inputFileRef = useRef(null);
  const pictureImageRef = useRef(null);
  const pictureImageTxt = "Buscar imagem no dispositivo";

  const FecharAviso = () => {
    setmensagemAviso('');
  };

  async function salvar() {
    if (!inputFileRef.current || !inputFileRef.current.files.length) {
      setmensagemAviso('Por favor, selecione uma imagem.');
      setAvisoTipo('error');
      return; 
    }
    
    const formData = new FormData();
    formData.append('foto', inputFileRef.current.files[0]);
    formData.append('nomproduto', nomeproduto);
    formData.append('descricao', descricao);
    formData.append('zeroacucar', zeroacucar);
    formData.append('diet', diet);
    formData.append('categoria', categoria);
    formData.append('precoKg', precoKg);

    const url = 'http://localhost:7000/produto';

    try {
      await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setmensagemAviso('Produto adicionado com sucesso!');
      setAvisoTipo('success');
      setTimeout(() => navigate("/produtos"), 3000);
    } catch (error) {
      setmensagemAviso('Erro ao adicionar produto');
      setAvisoTipo('error');
    }
  }

  useEffect(() => {
    pictureImageRef.current.innerHTML = pictureImageTxt;

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imgElement = document.createElement("img");
          imgElement.src = event.target.result;
          imgElement.classList.add("picture__img");

          pictureImageRef.current.innerHTML = "";
          pictureImageRef.current.appendChild(imgElement);
        };
        reader.readAsDataURL(file);
      } else {
        pictureImageRef.current.innerHTML = pictureImageTxt;
      }
    };

    const inputFile = inputFileRef.current;
    inputFile.addEventListener("change", handleFileChange);

    return () => {
      inputFile.removeEventListener("change", handleFileChange);
    };
  }, []);

  return (
    <div className="add-prod">
        <Aviso
          message={mensagemAviso}
          onClose={FecharAviso}
          duration={3000}
          type={AvisoTipo}
        />

      <header className="cabecalho">
        <Cabecalho/>
      </header>

      <div className='conteudo'>
        <div className="barra">
          <h1>Adicionar Produtos</h1>
        </div>

        <div className="adicionar">
        <div className='imagem'>
            <label className="picture" htmlFor="picture__input" tabIndex="0">
              <span className="picture__image" ref={pictureImageRef}></span>
            </label>
            <input
              id="picture__input"  
              type="file"
              ref={inputFileRef}  
              style={{ display: 'none' }}
              accept="image/*"  
            />
          </div>

          <div className="interativo">
            <div className="inputs">
              <input className='titulo-produto' type="text" placeholder="Título do Produto" value={nomeproduto} onChange={e => setNomeProduto(e.target.value)}/>

              <select name="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="salgado">Salgado</option>
                <option value="doce">Doce</option>
              </select>

              <textarea type="text" placeholder='Adicione uma descrição ao produto' value={descricao} onChange={e => setDescricao(e.target.value)}/>
              
              <div className='baixo'>
                <div className='inputs-check'>
                  <div className='zero'>
                    <label>É Zero Açúcar?</label>
                    <input type="checkbox" checked={zeroacucar} onChange={e => setZeroacucar(e.target.checked)}/>
                  </div>

                  <div className='diet'>
                    <label>É Diet?</label>
                    <input type="checkbox" checked={diet} onChange={e => setDiet(e.target.checked)}/>
                  </div>
                </div>
                
                <input className="preco" type="number" placeholder='Preço/Kg' value={precoKg} onChange={e => setPrecoKg(e.target.value)} />

                <button onClick={salvar}>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="rodape">
        <Rodape/>
      </div>
    </div>
  );
}

export default AddProduto;
