import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({
            error: 'Falta cabecera y token'
        });
    }

    let token = ""
    let authToken = req.headers['authorization']
    if (authToken.includes("Bearer")) {
        token = req.headers['authorization'].split(' ')[1];
    } else {
        token = req.headers['authorization']
    }

    try {
        const decoded = jwt.verify(token, 'Hola mundo mi primer token');
        req.user = decoded;
        next();
    } catch (error) {
        return res.json({ error: 'Token inválido' });
    }
};



export default checkToken;

























// import jwt from "jsonwebtoken";

// const checkToken = (require, response, next) => {

//     console.log("Estas en el middleware");
//     if (!require.headers['autorizado']) {
//         return response.json({ error: 'Incluye la cabecera y el token' })
//     }

//     const token = require.headers['autorizado']

//     try {
//         const decoded = jwt.verify(token, 'Mi primer Token');
//         require.user = decoded;
//         next();
//         console.log(decoded);
//     } catch (error) {
//         return response.json({ error: 'Token inválido' });
//     }

    

// }


// export default checkToken;