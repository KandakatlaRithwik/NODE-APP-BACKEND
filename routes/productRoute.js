import express from 'express'
import {showProducts,addProductForm,addProduct,deleteProduct,editProductForm,saveProduct} from '../controllers/productController.js'
const productRouter = express.Router()
productRouter.get("/",showProducts)
productRouter.get("/add",addProductForm)
productRouter.post("/add",addProduct)
productRouter.get("/delete/:id",deleteProduct)
productRouter.get("/edit/:id",editProductForm)
productRouter.post("/edit/:id",saveProduct)
export default productRouter
