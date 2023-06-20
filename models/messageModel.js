import mongoose from "mongoose";
import { Schema } from "mongoose";

// Schema indica que sera un modelo que se mapeara hasta la db mongouse
const Message = new Schema(
{
    nombreempresa:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
}
)
export const ModeloMessage = mongoose.model('Message', Message)
// indicamos que nuestro modelo ba a ser un modelo de mongouse