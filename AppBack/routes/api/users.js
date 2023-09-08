import express from "express";
import userSchema from "../../models/users.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router()



router.get('', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

});

router.get('/users/:id', (require, response) => {
    const { id } = require.params;
    userSchema.findById(id)
        .then((data) => response.json(data))
        .catch((error) => response.json({ message: error }))
});

// crear mi usuario

router.post('/users',(require, response) => {
    const user = userSchema(require.body);
    user
    .save()
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});

// Crear mi arreglo de usuarios

router.post('/usersMany',(require, response) => {
    const usersData = require.body;
    userSchema.insertMany(usersData)
    .then((data) => response.json(data))
    .catch((error)=>response.json({ message: error}))
});



//Traer todos los usuarios
router.get('/users', (require, response) => {
    userSchema
    .find()
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
     
 });


// Actualizar usuario

router.put('/users/:id',(require, response) =>{
    const {id} = require.params;
    const {name, lastname, age, email} = require.body;
    userSchema.updateOne({_id: id}, {$set:{name, lastname, age, email}})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});



//Eliminar usuario
router.delete('/users/:id',(require, response) =>{
    const {id} = require.params;
    userSchema.deleteOne({_id: id})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});


//Actualizar varios usuarios

router.put('/usersMany',(require, response) =>{
    const {age} = require.body;
    userSchema.updateMany({age:24}, {$set:{age}})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});



//Eliminar un campo de un documento

router.put('/users/:id',(require, response) =>{
    const {id} = require.params;
    const {age} = require.body;
    userSchema.updateOne({_id: id}, {$unset: {age}})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

//consultar un documento trayendolo por el email y que este campo sea unico

router.get('/users/:email',(require, response) =>{
    const {email} = require.params;
    userSchema.find({email:email})
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});


//POST REGISTRO
router.post('/register', async (require, response)=>{
    try {
        require.body.password = bcrypt.hashSync(require.body.password, 12);
        const userCreate = await userSchema.create(require.body);
        response.json(userCreate);
    } catch (error) {
        response.json({error: error.message})
    }
});


// POST LOGIN

router.post('/login', async (require, response)=>{
    //Comprobar existencia del email
    const user = await userSchema.findOne({ email: require.body.email });
    if(!user){
        return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    const validar = bcrypt.compareSync(require.body.password, user.password)
    if(!validar){
        return response.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    response.json({ success: 'Has ingresado con éxito', token: createToken(userSchema) });
    //response.json({ success: 'Has ingresado con éxito' });
});



//TOKEN
function createToken(userSchema) {
    const payload = {
        user_id: userSchema._id,
        user_role: userSchema.user_role
    }
    return jwt.sign(payload,'Mi primer Token');
    
}



export default router;