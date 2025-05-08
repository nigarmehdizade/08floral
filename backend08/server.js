import express from "express"
import { connectDB } from "./config/Config.js"
import cors from 'cors'
import testProduct from './routes/testProduct.js'
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: "*" }))

connectDB()

app.use('/', testProduct)

app.listen(5000, () => {
    console.log('backend qalxdi');
})
