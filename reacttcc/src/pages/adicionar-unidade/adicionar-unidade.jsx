import './adicionar-unidade.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Aviso from '../../components/aviso/aviso.jsx';
import { useNavigate } from 'react-router-dom';

function AddUnidade() {
  const navigate = useNavigate();

  const [endereco, setEndereco] = useState('');
  const [abre, setAbre] = useState('');
  const [fecha, setFecha] = useState('');
  const [url_maps, setUrl_maps] = useState('');
  const [mensagemAviso, setmensagemAviso] = useState('');
  const [AvisoTipo, setAvisoTipo] = useState('');
  const [foto, setFoto] = useState();

  // const inputFileRef = useRef(null);
  //const pictureImageRef = useRef(null);
  const pictureImageTxt = "Buscar imagem no dispositivo";

  const FecharAviso = () => {
    setmensagemAviso('');
  };

  async function salvar() {
    // if (!inputFileRef.current || !inputFileRef.current.files.length) {
    //   setmensagemAviso('Por favor, selecione uma imagem.');
    //   setAvisoTipo('error');
    //   return; 
    // }
    
    const formData = {
      'foto': foto,
      'endereco': endereco,
      'abre': abre,
      'fecha': fecha,
      'url_maps': url_maps
    }


    const url = 'http://4.172.207.208:5025/unidade/';


    try {
      await axios.post(url, formData);
      
      setmensagemAviso('Unidade adicionada com sucesso!');
      setAvisoTipo('success');
      setTimeout(() => navigate("/unidades"), 3000);
    } catch (error) {
      setmensagemAviso('Erro ao adicionar unidade');
      setAvisoTipo('error');
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
    <div className="add-uni">
      <Aviso
        message={mensagemAviso}
        onClose={FecharAviso}
        duration={3000}
        type={AvisoTipo}
      />
      <header className="cabecalho">
        <Cabecalho />
      </header>

      <div className='resto'>
        <div className="barra">
          <h1>Adicionar Unidades Maria Flor</h1>
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
              accept="image/*"
              onChange={alterarImagem}
              style={{ display: "none"}}
            />
          </div>


          <div className="interativo">
            <div className="inputs">
              <div className="endereco">
                <img src="./images/localizacao.png" alt="" width={20} />
                <input
                  type="text"
                  placeholder="Insira o endereço do estabelecimento"
                  value={endereco}
                  onChange={e => setEndereco(e.target.value)}
                />
              </div>

              <div className="funcionamento">
                <img src="./images/relogio.png" alt="" width={17} />
                <p>Horário de Funcionamento:</p>
                <input
                  type="time"
                  value={abre}
                  onChange={e => setAbre(e.target.value)}
                />
                <p>ás</p>
                <input
                  type="time"
                  value={fecha}
                  onChange={e => setFecha(e.target.value)}
                />
              </div>
            </div>

            <div className="baixo">
              <div className="maps">
                <img src="./images/maps.png" alt="" width={20} />
                <input
                  type="url"
                  placeholder='URL da Localização da Empresa no Google Maps'
                  value={url_maps}
                  onChange={e => setUrl_maps(e.target.value)}
                />
              </div>

              <button onClick={salvar}>Adicionar</button>
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

export default AddUnidade;