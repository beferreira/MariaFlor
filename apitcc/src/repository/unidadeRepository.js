import con from './connection.js';

export async function inserirUnidade(unidade) {
    const comando = `
    insert into tb_unidade (foto, endereco, abre, fecha, url_maps)
    values (?, ?, ?, ?, ?);
    `
    let info = await con.query(comando, [unidade.foto, unidade.endereco, unidade.abre, unidade.fecha, unidade.url_maps])
    
    let respostas = info[0]
    console.log(respostas);
    
    
    return respostas.insertId

    //teste para suvbir
}

export async function consultarUnidade() {
    const comando = `
        
    select * from tb_unidade;    
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta

}

export async function alterarUnidade( idunidade, unidade) {
    const comando = `
        update tb_unidade
        set foto = ? 
        endereco = ?, 
        abre = ?,
        fecha=?,
        url_maps = ?
        where id_unidade = ?;
    `  
    let resposta = await con.query(comando, [unidade.foto, unidade.endereco, unidade.abre, unidade.fecha, unidade.url_maps])
    let info = resposta[0]

    return info.affectedRows
}

export async function deletarUnidade(id) {
    const comando = `
    delete from tb_unidade
    where id_unidade = ?;
    `
    let resposta = await con.query (comando, [id])
    let info = resposta[0]

    return info.affectedRows
}