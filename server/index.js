import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import dotenv from "dotenv"
import ProductRoute from './Route/Products.js'
const app=express()
dotenv.config()
app.use(express.json())
app.use(cors())


app.use('/products',ProductRoute)



const PORT = process.env.PORT;
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net');
app.listen(PORT,()=>{
    console.log("Welcome dabe");
})