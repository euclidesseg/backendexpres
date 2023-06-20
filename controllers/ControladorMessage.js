import { ServicioMessage } from "../services/ServicioMessage.js";

export class ControloadorMessage{
    constructor(){}

    async sendMessage(req, res){
        let messageService = new ServicioMessage();
        try{
            let datosmessage = req.body
            let savedData =    await messageService.sendMessage(datosmessage)

            res.status(200).json({
                savedData:savedData
            })
        }catch(err){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion"+err
            })
        }
    }
    async getMessages(req, res){
        let messageService = new ServicioMessage();
        try{
            res.status(200).json(
                await messageService.getAll()
            )

        }catch(err){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion"+err
            })
        }
    }
}