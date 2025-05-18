import basketModel from "../models/basketModel.js"

const getBasket = async (req, res) => {
    const basket = await basketModel.find()
    res.json(basket)
}

const postBasket = async (req, res) => {
    const { image, name,price } = req.body
    const basket = { image, name, price }
    await basketModel.create(basket)
    res.json(basket)
}

const deleteBasket = async (req, res) => {
    const {id} = req.params
    await basketModel.findByIdAndDelete(id)
    res.json({message: 'Product deleted'})
    console.log('Product deleted with', id)
}

export {getBasket,postBasket,deleteBasket}