import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'
import adicionarRotas from './rotas.js'

const servidor = express();
servidor.use(express.json({limit:"10mb"}));
servidor.use(cors());
const PORTA = process.env.PORTA;

adicionarRotas(servidor);

servidor.listen(PORTA, () => console.log (`Api subiu na porta ${PORTA}`));