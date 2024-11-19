import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function entrar() {
    const user = {
      nome: nome,
      senha: senha,
    };

    const url = "http://localhost:5025/login";
    let resp = await axios.post(url, user);

    if (resp.data.error != undefined) {
      alert(resp.data.error);
    } else {
      localStorage.setItem("ADM", resp.data.token);
      localStorage.setItem("NOME", nome)
      navigate("/inicio");
    }
  }

  return (
    <div className="login">
      <div className="logos">
        <img src="./images/mariaflor_logo.png" alt="" width={120} />
        <img src="./images/mariaflor_escrita.png" alt="" width={150} />
      </div>
      <div className="interativo">
        <h1>BEM-VINDO (A) Á CONFEITARIA MARIA FLOR</h1>

        <div className="inputs">
          <div className="usuario">
            <label>Insira seu usuário</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="senha">
            <label>Insira sua senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        <button onClick={entrar}>Entrar</button>
        <a href="/contato">Algum problema? Entre em contato conosco</a>
      </div>
    </div>
  );
}

export default Login;
