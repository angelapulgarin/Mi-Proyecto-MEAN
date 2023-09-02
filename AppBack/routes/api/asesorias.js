import express from "express"
import asesoriasSchema from "../../models/asesorias.model.js"


const router = express.Router()

//traer todos

router.get ('/asesorias', (require, response) => {
    asesoriasSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))

});


//crear uno solo

// router.post('/asesorias',(require, response) => {
//     const asesoria = asesoriasSchema(require.body);
//     asesoria
//     .save()
//     .then((data) => response.json(data))
//     .catch((error)=>response.json({ message: error}))
// });

// Crear arreglo

router.post('/asesoriasMany',(require, response) => {
    const asesoriaData = require.body;
   asesoriasSchema.insertMany(asesoriaData)
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});


//traer por id

router.get('/asesorias/:id', (require, response) => {
    const { id } = require.params;
    asesoriasSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});



// Actualizar por id

router.put('/asesorias/:id',(require, response) =>{
    const {id} = require.params;
    const {nombre, descripcion} = require.body;
    asesoriasSchema.updateOne({_id: id}, {$set:{nombre, descripcion}})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});


//Eliminar usuario
router.delete('/asesorias/:id',(require, response) =>{
    const {id} = require.params;
    asesoriasSchema.deleteOne({_id: id})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});




export default router;