export  function validarCamposObrigatoriosLogin(login){

    if(!login.usuario){
        throw new Error('Nome de usuário obrigatório !')

    }
    if(!login.senha){
        throw new Error('Senha obrigatório !')

    }
   
}