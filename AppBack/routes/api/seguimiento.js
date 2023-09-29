import express from "express"
import seguimientoSchema from "../../models/seguimiento.models.js"
import checkToken from "../../utils/middlewares.js"


const router = express.Router()

//traer todos

// router.get('/seguimiento', (require, response) => {
//     seguimientoSchema
//         .find()
//         .then((data) => response.json(data))
//         .catch((error) => response.json({ message: error }))

// });


//crear uno solo

// router.post('/seguimiento', (require, response) => {
//     const seguimiento = seguimientoSchema(require.body);
//     seguimiento
//         .save()
//         .then((data) => response.json(data))
//         .catch((error) => response.json({ message: error }))
// });





// Ruta para crear un nuevo registro de Seguimiento
router.post('/seguimiento', (req, res) => {
    const { usuario, avance, planear, hacer, verificar, actuar } = req.body;
  
    // Crea una instancia del modelo seguimiento con los datos proporcionados
    const newSeguimiento = new seguimientoSchema({
      usuario,
      avance,
      planear,
      hacer,
      verificar,
      actuar
      
    });
  
    // Guarda el nuevo registro en la base de datos
    newSeguimiento
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });









// Crear arreglo

router.post('/seguimientoMany', (require, response) => {
    const seguimientoData = require.body;
    seguimientoSchema.insertMany(seguimientoData)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});


//traer por id

router.get('/seguimiento/:id', (require, response) => {
    const { id } = require.params;
    seguimientoSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});



// Actualizar por id

router.put('/seguimiento/:id', (require, response) => {
    const { id } = require.params;
    const { usuario, servicio_contratado, avance, planear, hacer, verificar, actuar } = require.body;
    seguimientoSchema.updateOne({ _id: id }, { $set: { usuario, servicio_contratado, avance, planear, hacer, verificar, actuar } })
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});


//Eliminar 
router.delete('/seguimiento/:id', (require, response) => {
    const { id } = require.params;
    seguimientoSchema.deleteOne({ _id: id })
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});



router.use(checkToken);

router.get('/seguimiento', async (req, res) => {
    try {
        const userId = req.user.user_id

        if (req.user.user_role == "regular") {
            let userSeguimiento = await seguimientoSchema.find({ usuario: userId });
            res.json(userSeguimiento);
        } else {
            res.statusCode = 401
            res.json({ "message": "No tienes permisos suficientes" })
        }



    } catch (error) {
        res.json({ error: error.message });
    }

    console.log(req.user);



});






export default router;