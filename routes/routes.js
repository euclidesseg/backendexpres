import express from 'express'
import { ControloadorMessage } from '../controllers/ControladorMessage.js'

let controladorMessage = new ControloadorMessage()

export let rutas=express.Router()


rutas.post('/message', controladorMessage.sendMessage);
rutas.get('/message', controladorMessage.getMessages);
