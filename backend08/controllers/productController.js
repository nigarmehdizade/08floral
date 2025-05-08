import productModel from "../models/productModel.js"

const getProducts = async (req, res) => {
    const product = await productModel.find()
    res.json(product)
}

const postProducts = async (req, res) => {
    const { image, name,price } = req.body
    const product = { image, name, price }
    await productModel.create(product)
    res.json(product)
}

export {getProducts,postProducts}