import express from "express"
import serviciosSchema from "../../models/servicios.model.js"


const router = express.Router()

//traer todos

router.get ('/servicios', (require, response) => {
    serviciosSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))

});


//crear uno solo

router.post('/servicios',(require, response) => {
    const servicio = serviciosSchema(require.body);
    servicio
    .save()
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});

// Crear arreglo

router.post('/serviciosMany',(require, response) => {
    const serviciosData = require.body;
   serviciosSchema.insertMany(serviciosData)
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});


//traer por id

router.get('/servicios/:id', (require, response) => {
    const { id } = require.params;
    serviciosSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});



// Actualizar por id

router.put('/servicios/:id',(require, response) =>{
    const {id} = require.params;
    const {nombre, descripcion} = require.body;
    serviciosSchema.updateOne({_id: id}, {$set:{nombre, descripcion}})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});


//Eliminar 
router.delete('/servicios/:id',(require, response) =>{
    const {id} = require.params;
    serviciosSchema.deleteOne({_id: id})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});




export default router;