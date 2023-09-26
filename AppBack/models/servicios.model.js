
import mongoose from "mongoose";


const serviciosSchema = mongoose.Schema(
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



export default mongoose.model('servicios', serviciosSchema);