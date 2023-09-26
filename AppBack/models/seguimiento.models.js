
import mongoose from "mongoose";


const seguimientoSchema = mongoose.Schema(
    {
        usuario:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'usuarios',
            required: true
        },
        servicio_contratado:{
            type:[mongoose.Schema.Types.ObjectId],
            ref:'servicios',
            require: true
        },
        avance:{
            type: String,
            require: true
        },
        planear:{
            type: String,
            require: true
        },
        hacer:{
            type: String,
            require: true
        },
        verificar:{
            type: String,
            require: true
        },
        actuar:{
            type: String,
            require: true
        },


    }

);



export default mongoose.model('seguimientos', seguimientoSchema);
