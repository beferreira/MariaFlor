import con from './connection.js';

export default async function salvarUser(user){

    const comando = ` 
    
        insert into tb_user (nome, senha)
        values (?, ?)

    `;

    let resposta = await con.query(comando, [user.nome, user.senha]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}

export async function validarUser(user) {

    const comando = `
    
        select 
        id_user  idUser,
        nome,
        senha
        from tb_user
        where 
        nome = ? and senha = ?

    `;

    let registros = await con.query(comando, [user.nome, user.senha]);

    return registros[0][0];

}