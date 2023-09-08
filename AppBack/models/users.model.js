import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        nombreEmpresa:{
            type: String,
            required: true
        },
        nit:{
            type: String,
            require: true
        },
        numeroEmpleados:{
            type: Number,
            require: true
        },
        representanteLegal:{
            type: String,
            require: true,
           
        },
        actividadEconomica:{
            type: String,
            require: true,
            
        },
        email:{
            type: String,
            require: true,
            unique: true
        },
        password:{
            type: String,
            require:true
        },
        role:{
            type :String,
            default:"regular"
        }

    }
);

export default mongoose.model('usuarios', userSchema);