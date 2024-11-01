import { inserirUnidade } from "../../repository/unidadeRepository.js";
import { validarCamposObrigatoriosUnidade } from "../../validation/unidade/unidadeValidation.js";

export default async function inserirUnidadeService(unidade){

    validarCamposObrigatoriosUnidade(unidade)

    let id = await inserirUnidade(unidade);

    return id;

}