import express from "express"
import seguimientoSchema from "../../models/seguimiento.models.js"


const router = express.Router()

//traer todos

router.get ('/seguimiento', (require, response) => {
    seguimientoSchema
        .find()
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))

});


//crear uno solo

router.post('/seguimiento',(require, response) => {
    const seguimiento = seguimientoSchema(require.body);
    seguimiento
    .save()
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});

// Crear arreglo

router.post('/seguimientoMany',(require, response) => {
    const seguimientoData = require.body;
   seguimientoSchema.insertMany(seguimientoData)
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});


//traer por id

router.get('/seguimiento/:id', (require, response) => {
    const { id } = require.params;
    seguimientoSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});



// Actualizar por id

router.put('/seguimiento/:id',(require, response) =>{
    const {id} = require.params;
    const {usuario, servicio_contratado, avance, planear, hacer, verificar, actuar} = require.body;
    seguimientoSchema.updateOne({_id: id}, {$set:{usuario, servicio_contratado, avance, planear, hacer, verificar, actuar}})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});


//Eliminar 
router.delete('/seguimiento/:id',(require, response) =>{
    const {id} = require.params;
    seguimientoSchema.deleteOne({_id: id})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});




export default router;