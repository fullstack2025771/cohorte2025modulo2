//1. importaciones necesarias
import multer from "multer";
import path from "path";
import fs from "fs";//modulo de name
import { fileURLToPath } from "url";// modulo de node



const _filename = fileURLToPath(import.meta.url);//_filename= backend/src/config/multer.js cual esla ruta
const _dirname =path.dirname(_filename);//_dirname=backend/src/configcual es la carpeta


//1. crear una carpeta donde se guarden todos los achivos subidos

const UPLOADS_FOLDER = path.join(_dirname, "../uploads");

// SI NO EXISTE MI CARPETA UPLOADS
if (!fs.existsSync(UPLOADS_FOLDER)){
    fs.mkdirSync(UPLOADS_FOLDER)
}

//2. Especificar como vamos a guardar las archivos

 const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        // donde vamos a guardar el archivo
       cb(null, UPLOADS_FOLDER) ;
    },
    

    filename:(req, file, cb)=>{
         const ext = path.extname(file.originalname);//extenciones -->jpg, .pdf
    const base = path.basename(file.originalname, ext).replace(/\s+/g, "_"); // nombre
    cb(null, `${base}-${Date.now()}${ext}`);//nombre del archivo
    }
});

// 3. Que tipo de archivos vamos a recibir
const fileFilter =(req, file, cb)=> {
const allowed =["image/gif", "image (JPEG)", "image/png", "image/svg+xml" ,"image/webp"  ];


if (allowed.includes(file.mimetype)){
      cb(null, true) //--> si el archivo es permitido que lo gguarde en la csrpeta UPLOAD
}else {
    cb(new Error("Archivo no permitido"), false);//no puede guardar el archivo
}
}

//4. definir limites , tamaño de archivos
// Ej:5MB
const limits = {
    fileSize: 5*1024*1024 // 5MB
}
//5. Exportar esas caracteristicas
// El unico obligatorio es storage
export const upload = multer({storage, fileFilter, limits});


