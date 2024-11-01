import { consultarUnidade } from "../../repository/unidadeRepository.js"

export default async function consultarUnidadeService(){

    let registros = await consultarUnidade()


    return registros


}