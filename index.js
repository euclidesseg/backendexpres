import {API} from './API.js'
import * as dotenv from 'dotenv' 
dotenv.config()


let servidorMessage=new API()
servidorMessage.levantarServidor()