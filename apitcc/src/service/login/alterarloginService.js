import { alterarlogin } from "../../repository/loginRepository.js";
import { validarCamposObrigatoriosLogin } from "../../validation/login/loginValidation.js";

export default async function alterarLoginService(login, idlogin){

    validarCamposObrigatoriosLogin(login, idlogin)

    let LinhasAfetadas = await alterarlogin(login, idlogin)

    if(LinhasAfetadas == 0){
        throw new Error('nenhum login alterado');
    }

}