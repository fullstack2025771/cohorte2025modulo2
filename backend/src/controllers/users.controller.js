import {userModel} from "../models/users.model.js";


import bcryptjs from "bcryptjs"
 

 export const postUser = async (request, response) => {
    try {
        const {name,username,email, age,password,role}= request.body;
        const codePassword =await bcryptjs.hash(password, 10)
        await userModel.create({
                name,
                username,
                email,
                age,
                password:codePassword,
                role
        });

        return response.status(201).json({
            "mensaje": "Usuario creado correctamente"
        });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "Ocurrio un error al crear un usuario",
            "error":message || error
        })
    }
 }





//2. metodo para mostrar todos los productos  GET=>
export const getAllUsers = (request, response) => {
    return response.json({"mensaje": "Funciona peticion GET"});
}   
//3. metodo para actualizar un producto=>
export const putUserById = (request, response) => {
    return response.json({"mensaje": "Funciona peticion PUT"});
}
//4. metodo para eliminar un producto=>
export const deleteUserById = (request, response) => {
    return response.json({"mensaje": "Funciona peticion DELETE"});
}