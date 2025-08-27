
// 1. importar las dependencias necesarias
import express from "express";
import dotenv from "dotenv";

// 2. configurar las dependencias que necesitamos

const app = express();
dotenv.config();
const port = 3000
// 3. funcionalidades que necesite agregar




app.get("/",(req,res)=>{
 res.send('Server works!')
});





app.listen(port, ()=>{
    console.log(`El servidor esta ejecutandose en https://localhost:${port}`)
});