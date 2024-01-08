import ProductSchema from '../Schema/Products.js'

export const getProducts=async (req,res)=>{
const data=await ProductSchema.find({});
res.send(data)
}
export const getProduct=async (req,res)=>{
    const id=req.params.id
    const data=await ProductSchema.findById(id);
    res.send(data)
}
export const postProduct=async (req,res)=>{
    
    const data=new ProductSchema (
        {
name:req.body.name,
image:req.body.image,
price:req.body.price
        }
    );
   data.save()
   res.send({ message: "User Created" })
}
export const updateProduct=async (req,res)=>{
    const id=req.params.id
    const data=await ProductSchema.findByIdAndUpdate(id, req.body);
    res.send(data)
}
export const deleteProduct=async (req,res)=>{
    const id=req.params.id
    const data=await ProductSchema.findByIdAndDelete(id);
    res.send(data)
}
