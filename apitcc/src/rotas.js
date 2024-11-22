import cliente from './controller/clienteController.js'
import usuario from './Controller/userController.js';
import produto from './controller/produtoController.js'
import unidade from './Controller/unidadeController.js'
import encomendas from './Controller/encomendasController.js'

export default function adicionarRotas(servidor){
    
   servidor.use(cliente);
   servidor.use(usuario);
   servidor.use(produto);
   servidor.use(unidade);
   servidor.use(encomendas);
 
 
}