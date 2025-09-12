
// 1. importar las dependencias necesarias
import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/users.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
// 2. configurar las dependencias que necesitamos

const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo();
// 3. funcionalidades que necesite agregar
const _filename = fileURLToPath(import.meta.url);//_filename= backend/src/config/multer.js cual esla ruta
const _dirname =path.dirname(_filename);//_dirname=backend/src/configcual es la carpeta



// 3. funcionalidades que necesite agregar
app.get("/",(req,res)=>{
 res.send('Server works!')
});
app.use(cors());
app.use(express.json());
app.use("/products",productRouter);
app.use("/users", userRouter)
app.use( "/uploads", express.static(path.join(_dirname,"src/uploads")));



app.listen(port, ()=>{
    console.log(`El servidor esta ejecutandose en https://localhost:${port}`)
});