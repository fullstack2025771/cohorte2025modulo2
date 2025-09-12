// 1. importamos
import mongoose from "mongoose";



// 2. construir la plantilla del modelo
const productSchema = new mongoose.Schema({
    image: {
        type:String,
        required: true
    },
    title: {
        type:String,
        required:true
    },
    description: {
        type:String
    },
    price: {
        type: Number,
        required: true
    },
    categories: {
        type: String,
        enum: ["helado", "galleta", "torta"]
    },
    isAvailable:{
        type: Boolean,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const productModel =mongoose.model("products", productSchema);