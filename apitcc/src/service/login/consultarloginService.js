import { consultarlogin } from "../../repository/loginRepository.js";

export default async function consultarLoginService(){

    let registros = await consultarlogin();

    return registros;
    

}