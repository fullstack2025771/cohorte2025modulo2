import express from "express";
import { postUser, getAllUsers, putUserById, deleteUserById } from "../controllers/users.controller.js";
 
//2.  Configurar las rutas.
export const userRouter = express.Router();




// Ruta para el POST
userRouter.post("/crear", postUser);

// Ruta para el GET
userRouter.get("/mostrar", getAllUsers);

//Ruta para el PUT
userRouter.put("/actualizar/:id", putUserById);

userRouter.delete("/eliminar/:id", deleteUserById);