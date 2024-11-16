import { deletarLogin } from "../../repository/loginRepository.js";

export default async function deletarLoginService(idlogin){

    let LinhasAfetadas = await deletarLogin(idlogin)

    if(LinhasAfetadas == 0){

        throw new Error('nenhum login encontrado !')
    }


}