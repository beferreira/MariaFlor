import { validarUser } from "../../repository/userRepository.js";

export default async function validarUserService(user){

    let registros = await validarUser(user);

    return registros;

}