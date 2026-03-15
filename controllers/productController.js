import productModel from "../models/productModel.js";
const showProducts=async(req,res)=>{
    const products=await productModel.find()
    res.render("products/index",{products})
}

const addProductForm = (req,res)=>{
    res.render("products/add")
}

const addProduct = async(req,res)=>{
    await productModel.create(req.body)
    res.redirect("/admin/products")
}

const deleteProduct = async(req,res)=>{
    const id=req.params.id
    await productModel.findByIdAndDelete(id)
    res.redirect("/admin/products")
}

const editProductForm = async(req,res)=>{
    const id=req.params.id
    const product=await productModel.findOne({_id:id})
    res.render("products/edit",{product})
}

const saveProduct = async(req,res)=>{
    const id=req.params.id
    await productModel.findByIdAndUpdate(id,req.body)
    res.redirect("/admin/products")
}

export {showProducts,addProductForm,addProduct,deleteProduct,editProductForm,saveProduct}