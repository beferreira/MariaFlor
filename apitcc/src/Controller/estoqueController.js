import * as db from '../repository/estoqueRepository.js'

import { Router } from "express"
const endpoints = Router();

endpoints.post('/estoque/', async (req, resp) =>{
    try{
        let estoque = req.body
        let id = await db.inserirEstoque(estoque)

        resp.send({
            idEstoque: id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/estoque', async (req, resp) =>{
    try{
        let estoque = await db.buscarEstoque();
        resp.send(estoque);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})

endpoints.put('/estoque/:id', async (req, resp)=> {
    try{
        let id = req.params.id;
        let estoque = req.body;

        let LinhasAfetadas = await db.alterarEstoque(id, estoque);
        if (LinhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send ({error: 'Nenhum registro encontrado'})
        }
    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
})


endpoints.delete('/estoque/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarEstoque(id);
        if(LinhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send({error: 'Nenhum registro encontrado'})
        }
    
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }
})


export default endpoints;