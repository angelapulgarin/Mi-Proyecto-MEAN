import mongoose from "mongoose"

const connectToDataBase = async ()=>{
    
    await mongoose.connect(process.env.MONGODB_URI)

    try{
        console.log("Conectado exitosamente")
    } catch(err){
        console.log("No conectado"+err)
    }

};

export default connectToDataBase;