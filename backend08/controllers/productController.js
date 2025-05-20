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


const deleteProducts = async (req, res) => {
    const {id} = req.params
    await productModel.findByIdAndDelete(id)
    res.json({message: 'Product deleted'})
    console.log('Product deleted with', id)
}

export {getProducts,postProducts,deleteProducts}