import { BrowserRouter, Route, Routes } from "react-router-dom";
import './global.scss'

import Rodape from './components/rodape/rodape.jsx';
import Cabecalho from './components/cabecalho/cabecalho.jsx';
import CardProduto from './components/card-produto/cardProduto.jsx';
import Inicio from "./pages/inicio/inicio.jsx";
import Contato from "./pages/contato/contato.jsx";
import Login from "./pages/login/login.jsx";
import AddUnidade from "./pages/adicionar-unidade/adicionar-unidade.jsx";
import Unidades from "./pages/unidades/unidades.jsx";
import CardEncomenda from "./components/card-encomenda/cardEncomenda.jsx";
import Encomendas from "./pages/encomendas/encomendas.jsx"; 
import Salgados from "./pages/salgados/salgados.jsx";
import Doces from "./pages/doces/doces.jsx";
import AddProduto from "./pages/adicionar-produto/adicionar-produto.jsx";
import Produtos from "./pages/produtos/produtos.jsx";
import AddEncomenda from "./pages/adicionar-encomenda/adicionar-encomenda.jsx";
import PaginaProduto from "./components/pagina-produto/paginaProduto.jsx";
import CardUnidade from "./components/card-unidade/cardUnidade.jsx";



export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/rodape' element={<Rodape/>} />
              <Route path='/cabecalho' element={<Cabecalho />} />
              <Route path='/cardProduto' element={<CardProduto/>} />
              <Route path='/cardEncomenda' element={<CardEncomenda/>} />
              <Route path='/paginaProduto' element={<PaginaProduto/>} />
              <Route path='/inicio' element={<Inicio/>} />
              <Route path='/contato' element={<Contato/>} />
              <Route path='/' element={<Login  />} />
              <Route path='/unidades' element={<Unidades/>} />
              <Route path='/addunidade' element={<AddUnidade  />} />
              <Route path='/encomendas' element={<Encomendas/>} />
              <Route path='/addencomenda' element={<AddEncomenda/>} />
              <Route path='/addproduto' element={<AddProduto/>} />
              <Route path='/produtos' element={<Produtos/>} />
              <Route path='/doces' element={<Doces/>} />
              <Route path='/salgados' element={<Salgados/>} />
              <Route path='/cardUnidade' element={<CardUnidade/>} />

         </Routes>
      </BrowserRouter>

    )

}