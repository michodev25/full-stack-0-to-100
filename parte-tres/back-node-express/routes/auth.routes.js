import express from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';
const authRouter = express.Router();


// Ruta para login
authRouter.post('/login', loginUser);   
// Ruta para registro
authRouter.post('/register', registerUser); 
export default authRouter;
