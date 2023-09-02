
import mongoose from "mongoose";


const inhouseSchema = mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true
        },
        descripcion:{
            type: String,
            require: true
        },
        modalidad:{
            type: String,
            require: true
        }

    }

);



export default mongoose.model('inhouseSST', inhouseSchema);