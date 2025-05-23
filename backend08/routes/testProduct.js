import express from "express"
import { deleteProducts, getProducts, postProducts } from "../controllers/productController.js"
import { deleteBasket, getBasket, postBasket } from "../controllers/basketController.js"
import { deleteWishlist, getWishlist, postWishlist } from "../controllers/wishlistController.js"

const router=express.Router()

router
.get('/pro',getProducts)
.post('/pro',postProducts)
.delete('/pro/:id',deleteProducts)


.get('/basket', getBasket)
    .post('/basket', postBasket)
    .delete('/basket/:id', deleteBasket)

    .get('/wishlist', getWishlist)
    .post('/wishlist', postWishlist)
    .delete('/wishlist/:id', deleteWishlist)


export default router