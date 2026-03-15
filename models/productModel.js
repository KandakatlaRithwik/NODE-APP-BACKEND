import mongoose from 'mongoose'
const productSchema=mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    desc:{type:String},
    imageUrl:{type:String}
})

const productModel=mongoose.model("products",productSchema)
export default productModel