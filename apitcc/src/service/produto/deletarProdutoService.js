import { deletarProduto} from "../../repository/produtoRepository.js";


export default async function deletarProduto(id){

    let LinhasAfetadas = await deletarProduto(id)

    if(LinhasAfetadas == 0){

        throw new Error('nenhum produto encontrado !')
    }


}