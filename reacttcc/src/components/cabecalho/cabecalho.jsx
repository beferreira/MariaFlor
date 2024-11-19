import React, { useState } from 'react';
import './cabecalho.scss';

function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const name = localStorage.getItem("NOME")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="cabecalho">
      <header className="principal" id='principal'>
        <img className='logo' src="./images/mariaflor_c_logo.png" alt="logo" width={220}/>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={isMenuOpen ? 'active' : ''}>
          <a href="/">Inicio</a>
          <a href="/produtos">Produtos</a>
          <a href="/encomendas">Encomendas</a>
          <a href="/unidades">Unidades</a>
          <a href="/contato">Contato</a>
        </nav>
        <a className='botao-adm'><img src="./images/user.png" alt="ADM" width={34.5}/> {name}</a>
      </header>
    </div>
  );
}

export default Cabecalho;