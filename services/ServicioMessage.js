import { ModeloMessage } from "../models/messageModel.js";

export class ServicioMessage{
    constructor(){}

    async sendMessage(datosmessage){
        let messageNuevo = new ModeloMessage(datosmessage)
        return await messageNuevo.save(messageNuevo)
    }
     
    async getAll(){
        let reservas = await ModeloMessage.find()
        return reservas
    }

}