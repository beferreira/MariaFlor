import con from './connection.js';

export async function inserirLogin(login){
    const comando = `
    insert into tb_login (usuario, senha)
    values (?,?);
    `
    let resposta = await con.query(comando, [login.usuario, login.senha ])

    let info = resposta[0]
    let id = info.insertId

    return id
}

export async function consultarlogin(){
    const comando = `
    select      id_login,
    usuario       usuario,
    senha       senha
    from tb_login;

    `

    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function alterarlogin(login, idlogin){
    const comando = `
    update tb_login
    set usuario = ?,
    senha = ?
    where id_login = ?;
    `
    let resposta = await con.query(comando, [login.usuario, login.senha, idlogin ])
    let info = resposta[0]

    return info.affectedRows
}

export async function deletarLogin(id) {
    const comando = `
    delete from tb_login
    where id_login = ?;
    `
    let resposta = await con.query (comando, [id])
     let info = resposta[0]

     return info.affectedRows
    
}

