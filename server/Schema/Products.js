import mongoose, { Schema } from 'mongoose'

const ProductSchema=new Schema (
{
    name:{type:String},
    price:{type:String},
    image:{type:String}
},{ timestamps: true });
export default mongoose.model("productlar",ProductSchema)