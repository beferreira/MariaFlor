import { filtrarProdutoDoce } from "../../repository/produtoRepository.js";

export default async function consultarProdutoDoceService() {
    
    let registros = await filtrarProdutoDoce()
    
    return registros;
    
}