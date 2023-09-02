
import mongoose from "mongoose";


const asesoriasSchema = mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true
        },
        descripcion:{
            type: String,
            require: true
        }

    }

);



export default mongoose.model('asesoriasst', asesoriasSchema);