
export  function validarCamposObrigatoriosUnidade(unidade){

    if(!unidade.endereco ){
        throw new Error('Unidade do endereço obrigatório')

    }
    if(!unidade.abre){
        throw new Error('Horario de funcionamento obrigatório')

    }
    if(!unidade.fecha){
        throw new Error('Horario de funcionamento obrigatório')

    }
    if(!unidade.url_maps){
        throw new Error('Url maps obrigatório')
        
    }
}
 