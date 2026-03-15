import productModel from "../models/productModel.js";

const displayProducts = async (req,res) => {
    const products = await productModel.find()
    res.json(products)
}

export {displayProducts}