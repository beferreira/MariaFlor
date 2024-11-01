import { consultarProdutosFiltro } from "../../repository/produtoRepository.js"


export default async function consultarProdutosFiltroService(filtro){

    let registros = await consultarProdutosFiltro(filtro)

    return registros


}