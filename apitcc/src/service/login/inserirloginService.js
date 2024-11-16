import { inserirLogin } from "../../repository/loginRepository.js";
import { validarCamposObrigatoriosLogin } from "../../validation/login/loginValidation.js";

export default async function inserirLoginService(login){

    validarCamposObrigatoriosLogin(login)

    let id = await inserirLogin(login);

    return id;

}