
import inserirloginService from "../service/login/inserirloginService.js";
import consultarloginService from "../service/login/consultarloginService.js";
import alterarloginService from "../service/login/alterarloginService.js";
import deletarloginService from "../service/login/deletarloginService.js";
import { autenticar, gerarToken } from "../utils/jwts.js";

import { Router } from "express"
const endpoints = Router();








endpoints.post('/login/',autenticar ,  async (req, resp) =>{
    try{
        let login = req.body
        let id = await inserirloginService(login)
    

            if (id == null){
                resp.send({ erro: "Usuario ou senha incorreta"})
            } else {
                let token = gerarToken(id)
                resp.send({
                    "token": token
                })
            }
       
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})







endpoints.get('/login', autenticar, async (req, resp) =>{
    try{
        let login = await consultarloginService();
        resp.send(login);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})







endpoints.put('/login/:id', autenticar, async (req, resp)=> {
    try{
        let idlogin = req.params.id;
        let login= req.body;

        await alterarloginService(login, idlogin);
        resp.send()
        
    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
})






endpoints.delete('/login/:id', autenticar, async (req, resp) => {
    try{
        let id = req.params.id;
        await deletarloginService(id);

        resp.send()
    
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }
})







export default endpoints;