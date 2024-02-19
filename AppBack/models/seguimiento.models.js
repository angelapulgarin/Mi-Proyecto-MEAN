
import mongoose from "mongoose";


const seguimientoSchema = mongoose.Schema(
    {
        usuario:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'usuarios',
            required: true
        },
        avance:{
            type: Number,
            require: true
        },
        planear:{
            type: Number,
            require: true
        },
        hacer:{
            type: Number,
            require: true
        },
        verificar:{
            type: Number,
            require: true
        },
        actuar:{
            type: Number,
            require: true
        },


    }

);



export default mongoose.model('seguimientos', seguimientoSchema);
















// servicio_contratado:{
//     type:[mongoose.Schema.Types.ObjectId],
//     ref:'servicios',
//     require: true
// },