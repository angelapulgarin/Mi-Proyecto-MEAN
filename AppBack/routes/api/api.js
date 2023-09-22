import express  from "express";
import userRoutes from "./users.js";
import asesoriasRoutes from "./asesorias.js";
import inhouseRoutes from "./inhouse.js";
// import inicio-panelRoutes from
import checkToken from "../../utils/middlewares.js";


const router = express.Router()

router.use('',userRoutes);
router.use('',checkToken, asesoriasRoutes);
router.use('',inhouseRoutes);
// router.use('',inicio-panelRoutes);








export default router;