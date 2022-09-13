//ANTERIOR FUNCIONAL 
/*import { regUser } from "../controllers/usuario.controller.js";
import express from 'express'; 
const router= express.Router();

router.post('/', regUser)

export default router*/


import express from "express";
import { getUsers, Register,Login,Logout } from "../controllers/usuario.controller.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router(); 

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
export default router;