import { getProducts,getProduct,postProduct,updateProduct,deleteProduct } from '../Controllers/Products.js'
import express from 'express'
const router=express.Router();

router.get( '/',getProducts )
router.get( '/:id',getProduct )
router.delete( '/:id',deleteProduct )
router.post('/',postProduct)
router.put('/:id',updateProduct)

export default router
