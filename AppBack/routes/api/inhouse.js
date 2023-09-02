import express from "express"
import inhouseSchema from "../../models/inhouse.model.js"


const router = express.Router()

//traer todos

router.get ('/inhouse', (require, response) => {
    inhouseSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))

});


//crear uno solo

router.post('/inhouse',(require, response) => {
    const servInhouse = inhouseSchema(require.body);
    servInhouse
    .save()
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});

// Crear arreglo

router.post('/inhouseMany',(require, response) => {
    const inhouseData = require.body;
    inhouseSchema.insertMany(inhouseData)
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});


//traer por id

router.get('/inhouse/:id', (require, response) => {
    const { id } = require.params;
    inhouseSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});



// Actualizar por id

router.put('/inhouse/:id',(require, response) =>{
    const {id} = require.params;
    const {nombre, descripcion, modalidad} = require.body;
    inhouseSchema.updateOne({_id: id}, {$set:{nombre, descripcion, modalidad}})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});


//Eliminar usuario
router.delete('/inhouse/:id',(require, response) =>{
    const {id} = require.params;
    inhouseSchema.deleteOne({_id: id})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});




export default router;