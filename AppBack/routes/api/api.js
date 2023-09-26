import express  from "express";
import userRoutes from "./users.js";
import serviciosRoutes from "./servicios.js"
import seguimientoRoutes from "./seguimiento.js"

import checkToken from "../../utils/middlewares.js";


const router = express.Router()

router.use('',userRoutes);
router.use('',serviciosRoutes);
router.use('',checkToken, seguimientoRoutes);










export default router;