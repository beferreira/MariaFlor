import { escape } from 'mysql2';
import con from './connection.js';

export async function inserirEncomendas(encomendas){
    const comando =`
        insert into tb_encomenda(nome, contato, descricao, data_entrega, hora_entrega,forma_pagamento, valor)
values (?, ?, ?, ?);
    `

    let info = await con.query(encomendas, [encomendas.nome, encomendas.contato, encomendas.descricao, encomendas.data_entrega, encomendas.forma_de_pagamento, encomendas.valor])
    let respostas = info[0]

    return respostas.inserirId
}

export async function BuscarEncomendas(encomendas) {
    const comando = `
    
    select id_encomenda  id_encomenda, 
    nome                  nome,
    contato                contato,
    descricao               descricao,
    data_entrega            data_entrega,
    hora_entrega            hora_entrega,
    forma_pagamento          forma_pagamento, 
    valor                     valor 
    from tb_encomendas;
    `
    let info = await con.query(encomendas)
    let respostas = info[0]
    return respostas
}

export async function alterarEncomendas(encomendas, idEncomendas) {
    const comando = `
        update tb_encomendas
        set nome = ?, 
            contato = ?, 
            descricao = ?, 
            data_entrega = ?, 
            hora_entrega = ?, 
            forma_pagamento = ?, 
            valor = ?
        where id_encomenda = ?;
    `
    let respostas = await con.query(encomendas, [encomendas.nome, encomendas.contato, encomendas.descricao, encomendas.data_entrega, encomendas.forma_de_pagamento, encomendas.valor, idEncomendas] ) 
    let info = respostas[0]

    return info.affectedRows
}



export async function deletarEncomendas(id){
    const comando = `
   delete from tb_encomendas
    where id_encomenda = ?;
    `
    let respostas = await con.query (encomendas, [id])
    let info = respostas[0]
    return info.affectedRows
}