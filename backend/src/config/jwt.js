// Importar dependencias y modulos necesarios
import dotenv from "dotenv";
import  jsonwebtoken  from "jsonwebtoken";
// Configurar la variable de entorno
dotenv.config();
const key = process.env.SECRET_KEY;
// 3. configurarn el uso de jsonwebtoken
//metodo para generar jwt
//payload
export const generateToken = (payload)=>{
 return new Promise((resolve, reject)=>{
     jsonwebtoken.sign(payload, key, {expiresIn:"1h"}, (error, token)=>{
        if(error){
            reject(new Error("Hubo un error al generar el jwt", error.message))
        }else {
            resolve(token);

        }
        })
 });
 
}


// 3.2 metodo para verificar un jwt
export const verifyToken = (token)=>{
    return new Promise((resolve, reject)=>{
        jsonwebtoken.verify(token, key, (error, decoded)=>{
            if(error){
                reject(new Error("Hubo un error al verificar el JWT ", error.message));
            }else {
                resolve(decoded);
            }
        })
    });
}