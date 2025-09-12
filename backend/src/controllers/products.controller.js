// 1. importar dependencias y modulos necesarios
import {productModel} from "../models/products.model.js";


//definir las acciones que van a realizar=> CRUD


//1. metodo para crear un producto =>
export const postProduct = async (request, response) => {
   try {
       // Validacion de que si existe archivo enviado por el cliente
        if(!request.file){
            return response.status(400).json({
                "mensaje": "Debe subir un archivo de imagen"
            });
        }
        // Organiza primero el producto que se va ha crear
        const newProduct =  {
            ...request.body,
         image:` /uploads/${request.file.filename}` //modificando la imagen
        }   

    await productModel.create(newProduct);
    return response.status(201).json({
        "mensaje": "Producto creado correctamente"
    });
   } catch (error) {
    return response.status(400).json({
        "mensaje": "Ocurrio un error al crear el producto",
        "error": error.message || error // alt 124 o alt 
    })
   }
}


//2. metodo para mostrar todos los productos  GET=>
export const getAllProducts = async (request, response) => {
    try {
        const AllProducts = await productModel.find()
        
        
        return response.status(200).json({
            "mensaje":"Estos son los datos que hay en la base de datos",
            "datos": AllProducts
        });
            
            
    } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrio un error al mostrar los productos",
        "error": error.message || error
        })
         
    }
}   

//3. metodo para actualizar un producto=>
export const putProductById = async (request, response) => {
    try {
         const idForUpdate = request.params.id;
         const dataForUpdate = request.body
        await productModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return response.status(200).json({
         "mensaje": "producto actualizado exitosamente"
        });
            
    } catch (error) {
       
        return response.status(500).json({
            "mensaje": "Ocurrio un error al actualizar el producto",
        "error": error.message || error
    })

    }
}
export const deleteProductById = async (request, response) => {
    try {
         const idForDelete = request.params.id;  
        await productModel.findByIdAndDelete(idForDelete);
        return response.status(200).json({
            "mensaje": "Producto eliminado corectamente"
        })
         
        
            
    } catch (error) {
       
        return response.status(500).json({
            "mensaje": "Ocurrio un error al eliminar el producto",
        "error": error
        })
    }
}