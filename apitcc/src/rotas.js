import clienteController from './controller/clienteController.js'
import userController from './Controller/userController.js';
import produtoController from './controller/produtoController.js'
import unidadeController from './Controller/unidadeController.js'
import encomendasController from './Controller/encomendasController.js'

export default function adicionarRotas(servidor){
    
   servidor.use(clienteController);
   servidor.use(userController);
   servidor.use(produtoController);
   servidor.use(unidadeController);
   servidor.use(encomendasController);
 
 
}