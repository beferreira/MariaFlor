import './login.scss';

function Login() {
  return (
    <div className="login">
        <div className='logos'>
            <img src="./images/mariaflor_logo.png" alt="" width={120}/>
            <img src="./images/mariaflor_escrita.png" alt="" width={150}/>
        </div>
            <div className='interativo'>
                <h1>BEM-VINDO (A)  Á CONFEITARIA MARIA FLOR</h1>

                <div className='inputs'>
                    <div className='usuario'>
                        <label>Insira seu usuário</label>  
                        <input type="text"/>
                    </div>
                    <div className='senha'>
                        <label>Insira sua senha</label>
                        <input type="password"/>
                    </div>
                </div>

                <button>Entrar</button>
                <a href="/contato">Algum problema? Entre em contato conosco</a>
            </div>

    </div>
  );

  
}

export default Login;