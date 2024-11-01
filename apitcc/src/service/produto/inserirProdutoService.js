import { inserirProduto } from "../../repository/produtoRepository.js";
import { validarCamposObrigatoriosProdutos } from "../../validation/produtos/produtosvalidation.js";

export default async function inserirProdutoService(produto){

    validarCamposObrigatoriosProdutos(produto)

    let id = await inserirProduto(produto);

    return id;

}
