import { Router } from "express"
const endpoints = Router();

import salvarUserService from "../service/user/salvarUserService.js";
import validarUserService from "../service/user/validarUserService.js";

import { gerarToken } from "../utils/jwts.js";


endpoints.post('/cadastrar', async (req, resp) => {

    try {
    
        let user = req.body;

        let id = await salvarUserService(user);

        resp.send({

            idUser: id

        })

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })


    }

})


endpoints.post('/login', async (req, resp) => {

    try {

        let user = req.body;

        let login = await validarUserService(user);

        if (login == null) {

            resp.send({ error: 'Usuário ou senha incorreto(s).' });

        }
        else {

            let token = gerarToken(login);

            resp.send({

                "token": token

            })

        }

    }
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})

export default endpoints;