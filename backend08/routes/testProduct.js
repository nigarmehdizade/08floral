import express from "express"
import { getProducts, postProducts } from "../controllers/productController.js"

const router=express.Router()

router
.get('/pro',getProducts)
.post('/pro',postProducts)
export default router