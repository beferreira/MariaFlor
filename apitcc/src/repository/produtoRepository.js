import con from './connection.js'

export async function inserirProduto(produto) {
    const comando = `
    insert into tb_produtos(fotoProduto, nomeproduto, categoria, descricao, zeroAcucar, diet, precoKg)
	values (?, ?, ?, ?, ?, ?, ?);
   `
   let resposta = await con.query(comando, [produto.fotoProduto, produto.nomeproduto, produto.categoria, produto.descricao, produto.zeroAcucar, produto.diet, produto.precoKg ]);

   let info = resposta[0]
   let id = info.insertId

   return id
}

export async function consultarProduto(){
    const comando = `
    
    select * from tb_produtos; 
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function alterarProduto(produto, idProduto) {
   const comando = `
        update tb_produtos
        set fotoProduto = ?,
        nomeproduto = ?,
        categoria = ?,
        descricao = ?,
        zeroAcucar = ?,
        diet = ?,
        precoKg = ?
        where id_produto = ?;
    ` 

    let resposta = await con.query(comando, [produto.fotoProduto, produto.nomeproduto, produto.categoria, produto.descricao, produto.zeroAcucar, produto.diet, produto.precoKg, idProduto]);

    let info = resposta[0]

    return info.affectedRows

}

export async function deletarProduto(id) {
    const comando = `
      delete from tb_produtos
    where id_produto = ?;

    `
    let resposta = await con.query (comando, [id])
    let info = resposta[0]

    return info.affectedRows
}




// FILTROS DOS PRODUTOS


export async function filtrarProdutoOrdemAlfabetica(){
    const comando = `
    SELECT *
    FROM tb_produtos
    ORDER BY nomeproduto ASC;
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}


export async function filtrarProdutoPorId(id) {
    const comando = `
    SELECT id_produto
    FROM tb_produtos
    ORDER BY id_produto ASC;
    `
    let info = await con.query(comando, [id]);
    
    let resposta = info[0]

    return resposta
}

export async function filtrarProdutoDoce(categoria) {
    const comando = `
    SELECT *
    FROM tb_produtos
    WHERE categoria like '%doce';
    `
    let info = await con.query(comando, [categoria]);

    let resposta = info[0]

    return resposta;

}

export async function filtrarProdutoSalgados() {
    const comando = `
    SELECT *
    FROM tb_produtos
    WHERE categoria like '%salgado';
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function filtrarProdutoDiet() {
    const comando = `
    SELECT diet
    FROM tb_produtos 
    where diet;
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}

export async function filtrarProdutoZeroAcucar() {
    const comando = `
    SELECT zeroAcucar
    FROM tb_produtos
    where zeroAcucar;
    `
    let info = await con.query(comando)
    let resposta = info[0]

    return resposta
}
